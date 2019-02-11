import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';

function HeaderTitle() {
    return (
        <div className='headerTitle'>
            <h1 >Lambda School</h1>
            <h4>@LambdaSchool</h4>
            <h4>26 jan</h4> 
            <HeaderContent />          
        </div>        
    );
}

export default HeaderTitle;