import React from 'react';
import style from './index.css';

export default ({children}) => (
    <div className={ style.main }>
        { children }
    </div>
);
