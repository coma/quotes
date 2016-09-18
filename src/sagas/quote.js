import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { QUOTE_FETCH, QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from 'src/actions/quote';
import fetch from 'src/fetch';

export function* onQuoteFetch () {

    yield call(takeEvery, QUOTE_FETCH, fetchQuote);
}

export function* fetchQuote () {

    try {

        yield put({type: QUOTE_FETCHING});

        const body = yield call(fetch.quote);

        yield put({type: QUOTE_FETCHED, payload: body});

    } catch (error) {

        yield put({type: QUOTE_ERROR, payload: error});
    }
}