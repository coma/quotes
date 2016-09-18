import test from 'tape';
import faker from 'faker';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { QUOTE_FETCH, QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from 'src/actions/quote';
import { onQuoteFetch, fetchQuote } from './quote';
import fetch from 'src/fetch';

test('The onQuoteFetch generator', t => {

    t.plan(1);
    t.deepEqual(onQuoteFetch().next().value, call(takeEvery, QUOTE_FETCH, fetchQuote), 'should call the redux-saga call method');
});

test('The fetchQuote generator on success', t => {

    const generator = fetchQuote(),
          payload   = {random: faker.random.word()};

    t.plan(3);
    t.deepEqual(generator.next().value, put({type: QUOTE_FETCHING}), `should send the ${ QUOTE_FETCHING } action`);
    t.deepEqual(generator.next().value, call(fetch.quote), 'should fetch the quote');
    t.deepEqual(generator.next(payload).value, put({type: QUOTE_FETCHED, payload}), `should send the ${ QUOTE_FETCHED } action along with the fetched body`);
});

test('The fetchQuote generator on error', t => {

    const generator = fetchQuote(),
          payload   = {random: faker.random.word()};

    generator.next();

    t.plan(1);
    t.deepEqual(generator.throw(payload).value, put({type: QUOTE_ERROR, payload}), `should send the ${ QUOTE_ERROR } action`);
});