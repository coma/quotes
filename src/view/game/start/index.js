import React from 'react';
import style from './index.css';

export default ({fetch}) => (
    <div>
        <div className={ style.top }>
            <p>This is just a toy to show a bit of React/Redux/Webpack/ES6/...</p>
            <p>Hit <a onClick={ fetch }>start</a> and try to complete the quote fast as you can.</p>
        </div>
        <label className={ style.box }>
            <input type="text"/>
            <p>Remember to click inside the yellow zone to keep the focus on it.</p>
        </label>
    </div>
);
