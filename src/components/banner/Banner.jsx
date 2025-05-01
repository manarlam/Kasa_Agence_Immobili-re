import React from 'react';


function Banner({image, title}) {
   return (
    <div className="banner">
        <img className="banner_img" src={image} alt="bannière" />
        <h1 className="banner_title">{title}</h1>
    </div>
   )
}

export default Banner;