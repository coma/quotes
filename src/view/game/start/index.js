import React from 'react';
import style from './index.css';

export default ({fetch}) => (
    <div>
        <div className={ style.top }>
            <p>This is just a toy to show a bit of React/Redux/Webpack/ES6/...</p>
            <p>Hit <a onClick={ fetch }>start</a> and try to complete the quote fast as you can.</p>
        </div>
        <p className={ style.box }>Remember to click inside the yellow zone to keep the focus on it.</p>
    </div>
);
