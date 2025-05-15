import React from 'react';
import '../../styles/components/banner.scss';


function Banner({image, title}) {
   return (
    <div className="banner">
        <img className="banner_img" src={image} alt="bannière" />
        <div className="banner_content">
            <h1 className="banner_title">{title}</h1>
        </div>
    </div>
   )
}

export default Banner;