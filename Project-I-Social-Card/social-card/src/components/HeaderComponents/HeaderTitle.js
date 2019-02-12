import React from 'react';
import './Header.css';

import HeaderContent from './HeaderContent';

function HeaderTitle() {
    return (
        <div className='headerTitle'>
            <h2 >Lambda School</h2>
            <h4>@LambdaSchool</h4>
            <h4>26 jan</h4> 
            <HeaderContent />          
        </div>        
    );
}

export default HeaderTitle;