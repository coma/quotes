import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote } from 'src/actions/quote';
import { INIT, FETCHING, FETCHED, ERROR } from 'src/status';
import Start from './start';
import Wait from './wait';
import Game from './game';
import Error from './error';

export const View = ({status, fetch, quote, position}) => {

    switch (status) {

    case INIT:
        return Start({fetch});

    case FETCHING:
        return Wait();

    case FETCHED:
        return Game({quote, position});

    case ERROR:
        return Error();
    }
};

const mapState = ({quote}) => quote;

const mapActions = dispatch => ({
    fetch: bindActionCreators(fetchQuote, dispatch)
});

export default connect(mapState, mapActions)(View);
