import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { QUOTE_FETCH, QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from 'src/actions/quote';

export function* onQuoteFetch () {

    yield* takeEvery(QUOTE_FETCH, fetchQuote)
}

export function* fetchQuote () {

    try {

        yield put({type: QUOTE_FETCHING});

        const body = yield call(() => fetch('/quote').then(response => response.json()));

        yield put({type: QUOTE_FETCHED, payload: body});

    } catch (error) {

        yield put({type: QUOTE_ERROR, payload: {error}});
    }
}