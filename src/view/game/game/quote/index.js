import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keyPress } from 'src/actions/keystroke';
import Letter from './letter';
import style from './index.css';

const View = ({quote, position, keyPress}) => (
    <div className={ style.main } tabIndex="1" onKeyPress={ keyPress }>
        { quote.split('').map((letter, index) => <Letter key={ index } done={ index < position }>{ letter }</Letter>) }
    </div>
);

const mapActions = dispatch => ({
    keyPress: bindActionCreators(keyPress, dispatch)
});

export default connect(null, mapActions)(View);
