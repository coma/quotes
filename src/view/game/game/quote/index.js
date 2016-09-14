import React from 'react';
import Letter from './letter';
import style from './index.css';

export default ({quote, position}) => (
    <div className={ style.main }>
        { quote.split('').map((letter, index) => <Letter key={ index } done={ index < position }>{ letter }</Letter>) }
    </div>
);
