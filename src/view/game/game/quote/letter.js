import React from 'react';
import classNames from 'classnames';
import style from './index.css';

export default ({children, done}) => <b className={ classNames(style.letter, {done}) }>{ children }</b>;
