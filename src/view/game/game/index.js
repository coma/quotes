import React, { PropTypes } from 'react';
import Quote from './quote';
import Stats from './stats';
import style from './index.css';

const Game = ({quote, positions}) => (
    <div className={ style.main }>
        <Quote { ...{quote, position: positions.length} }/>
        <Stats { ...{positions, length: quote.length} }/>
    </div>
);

Game.propTypes = {
    quote    : PropTypes.string.isRequired,
    positions: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default Game;