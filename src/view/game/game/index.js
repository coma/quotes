import React from 'react';
import Quote from './quote';
import Stats from './stats';
import style from './index.css';

export default ({quote, position, length}) => (
    <div className={ style.main }>
        <Quote { ...{quote, position} }/>
        <Stats { ...{position, length} }/>
    </div>
);
