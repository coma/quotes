import React, { PropTypes } from 'react';
import classNames from 'classnames';
import style from './index.css';

const Letter = ({children, done}) => <b className={ classNames(style.letter, {done}) }>{ children }</b>;

Letter.propTypes = {
    children: PropTypes.string.isRequired,
    done    : PropTypes.bool.isRequired
};

export default Letter;
