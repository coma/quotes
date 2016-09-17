import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keyPress } from 'src/actions/keystroke';
import Letter from './letter';
import style from './index.css';

export const Quote = ({quote, position, keyPress}) => (
    <label className={ style.main }>
        <input type="text" onKeyPress={ keyPress }/>
        <p>
            { quote.split('').map((letter, index) => <Letter key={ index } done={ index < position }>{ letter }</Letter>) }
        </p>
    </label>
);

Quote.propTypes = {
    quote   : PropTypes.string.isRequired,
    position: PropTypes.number.isRequired,
    keyPress: PropTypes.func.isRequired
};

const mapActions = dispatch => ({
    keyPress: bindActionCreators(keyPress, dispatch)
});

export default connect(null, mapActions)(Quote);
