import React from 'react';
import Quote from './quote';
import Stats from './stats';
import style from './index.css';

export default props => (
    <div className={ style.main }>
        <Quote { ...props }/>
        <Stats/>
    </div>
);
