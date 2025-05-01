import React from 'react';
import logements from '../../data/logement.json';
import { Link } from 'react-router-dom';
import Card from '../card/card';

function Gallery() {
    return (
        <div className="home_gallery">
            {logements.map((logement) => {
            return (
                <article key={logement.id}>
                    <Link to ={`/logement/${logement.id}`} key={logement.id}>
                        <Card image={logement.cover} title={logement.title} />
                    </Link>
                </article>
                    );
            }
            )}
        </div>
    );
}

export default Gallery;




