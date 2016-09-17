import React, { PropTypes } from 'react';
import classNames from 'classnames';
import style from './index.css';

const Box = ({children, className, onKeyPress}) => (
    <p className={ classNames(style.box, className) } tabIndex="1" onKeyPress={ onKeyPress }>
        { children }
    </p>
);

Box.propTypes = {
    onKeyPress: PropTypes.func,
    className : PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ])
};

export default Box;