import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logement.json';
import Slideshow from '../slideshow/slideshow';
import Collapse from '../collapse/Collapse';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <>
            <div className="logement-slideshow">
                <Slideshow images={logement.pictures}/>
            </div>
            <div className="logement-infos">
                <div className="logement-infos-host">
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt={logement.host.name} className="host_picture" />
                </div>
                <div className="logement-infos-tags">
                    {logement.tags.map((tag, index) => (
                        <span key={index} className="logement-infos-tag">{tag}</span>
                    ))}
                </div>
                <div className="logement-infos-rating">
                    <div className="stars">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={index < logement.rating ? 'filled' : 'empty'}><FontAwesomeIcon icon={faStar}/></span>
                        ))}
                    </div>
                </div>
                <h1>{logement.title}</h1>
                <p>{logement.location}</p>
            </div>
            <div className="logement-details">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements"> 
                <p>{logement.equipments.map((equipments, index) => <li key={index}>{equipments}</li>)}</p>
                </Collapse>
            </div>
        </>
    );
}

export default Logement;