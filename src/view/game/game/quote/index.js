import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keyPress } from 'src/actions/keystroke';
import Box from 'src/component/box';
import Letter from './letter';
import style from './index.css';

export const Quote = ({quote, position, keyPress}) => (
    <Box className={ style.main } onKeyPress={ keyPress }>
        { quote.split('').map((letter, index) => <Letter key={ index } done={ index < position }>{ letter }</Letter>) }
    </Box>
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
