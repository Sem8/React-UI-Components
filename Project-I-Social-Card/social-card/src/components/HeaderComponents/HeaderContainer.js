import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';


function HeaderContainer() {
    return(
        <div className='headerContainer'>
        <ImageThumbnail />
        <HeaderTitle />
        
    </div>
    )
    
}

export default HeaderContainer;
