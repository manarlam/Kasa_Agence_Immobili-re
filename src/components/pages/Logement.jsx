import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logement.json';
import Slideshow from '../slideshow/slideshow';
import Collapse from '../collapse/Collapse';
import "../../styles/components/logement.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <Navigate to="/404" replace/>;
    }

    return (
        <>
        <secion className="logement">
            <div className="logement-slideshow">
                <Slideshow images={logement.pictures}/>
            </div>
            <div className="logement-infos">
                <div className="logement-infos-left">
                    <div className="logement-header">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    </div>

                    <div className="logement-infos-tags">
                    {logement.tags.map((tag, index) => (
                        <span key={index} className="logement-infos-tag">{tag}</span>
                    ))}
                    </div>
                </div>

                <div className="logement-infos-right">
                    <div className="logement-infos-host">
                    <p className="host-name">
                        {logement.host.name.split(' ').map((part, index) => (
                        <span key={index}>{part}<br /></span>
                        ))}
                    </p>
                    <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    </div>

                    <div className="logement-infos-rating">
                    <div className="stars">
                        {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={index < logement.rating ? 'filled' : 'empty'}>
                            <FontAwesomeIcon icon={faStar} />
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            <div className="logement-details">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements"> 
                    <ul>
                        {logement.equipments.map((equipement, index) => (
                        <li key={index}>{equipement}</li>
                    ))}
                    </ul>
                </Collapse>
            </div>
        </secion>
        </>
    );
}

export default Logement;