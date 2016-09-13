import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuote } from 'src/actions/quote';
import { INIT, FETCHING, FETCHED, ERROR } from 'src/status';
import Start from './start';
import Wait from './wait';
import Quote from './quote';
import Error from './error';
import style from './index.css';

const show = ({status, fetch, quote, position}) => {

    switch (status) {

    case INIT:
        return Start(fetch);

    case FETCHING:
        return Wait();

    case FETCHED:
        return Quote(quote, position);

    case ERROR:
        return Error();
    }
};

export const View = props => (
    <div className={ style.main }>
        { show(props) }
    </div>
);

const mapState = ({quote}) => quote;

const mapActions = dispatch => ({
    fetch: bindActionCreators(fetchQuote, dispatch)
});

export default connect(mapState, mapActions)(View);
