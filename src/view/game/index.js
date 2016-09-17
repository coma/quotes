import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote } from 'src/actions/quote';
import { INIT, FETCHING, FETCHED, ERROR } from 'src/status';
import Start from './start';
import Wait from './wait';
import Game from './game';
import Error from './error';

export const View = ({status, fetch, quote, positions}) => {

    switch (status) {

    case INIT:
        return <Start { ...{fetch} }/>;

    case FETCHING:
        return <Wait/>;

    case FETCHED:
        return <Game { ...{quote, positions} }/>;

    case ERROR:
        return <Error/>;
    }
};

View.propTypes = {
    status   : PropTypes.oneOf([INIT, FETCHING, FETCHED, ERROR]).isRequired,
    fetch    : PropTypes.func.isRequired,
    quote    : PropTypes.string,
    positions: PropTypes.arrayOf(PropTypes.number.isRequired)
};

const mapState = ({quote}) => quote;

const mapActions = dispatch => ({
    fetch: bindActionCreators(fetchQuote, dispatch)
});

export default connect(mapState, mapActions)(View);
