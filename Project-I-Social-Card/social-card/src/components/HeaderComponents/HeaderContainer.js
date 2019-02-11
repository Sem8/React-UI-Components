import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';




function ImageThumbnail() {
    return (        
            <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png"></img>   
    );    
}

function HeaderContainer() {
    return(
        <div className='headerContainer'>
        <ImageThumbnail />
        <HeaderTitle />
        
    </div>
    )
    
}

export default HeaderContainer;
