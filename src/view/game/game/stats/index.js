import React from 'react';
import style from './index.css';

export default ({position, length}) => (
    <svg className={ style.main } viewBox={ `0 0 100 ${ length }` } preserveAspectRatio="none">
        <path d="M0 0 H10 V10"/>
    </svg>
);
