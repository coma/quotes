import React from 'react';
import Letter from './letter';

export default (quote, position) => (
    <p>{ quote.split('').map((letter, index) => <Letter key={ index } done={ index < position }>{ letter }</Letter>) }</p>
);
