import test from 'tape';
import faker from 'faker';
import { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from 'src/actions/quote';
import { KEYSTROKE } from 'src/actions/keystroke';
import { FETCHING, FETCHED, ERROR, INIT } from 'src/status';
import reducer from './quote';

test('The quote reducer', t => {

    const payload = {random: faker.random.alphaNumeric()};

    const states = [
        {
            result: {
                status: INIT
            }
        },
        {
            action: {
                type: QUOTE_FETCHING
            },
            result: {
                status: FETCHING
            }
        },
        {
            action: {
                type: QUOTE_FETCHED,
                payload
            },
            result: {
                ...payload,
                status   : FETCHED,
                positions: []
            }
        },
        {
            action: {
                type: QUOTE_ERROR,
                payload
            },
            result: {
                status: ERROR,
                error : payload.toString()
            }
        },
        {
            state : {
                status   : FETCHED,
                positions: [],
                quote    : 'a'
            },
            action: {
                type   : KEYSTROKE,
                payload: {
                    letter: 'a',
                    time  : 10
                }
            },
            result: {
                status   : FETCHED,
                quote    : 'a',
                positions: [10]
            }
        },
        {
            state : {
                status   : FETCHED,
                positions: [],
                quote    : 'b'
            },
            action: {
                type   : KEYSTROKE,
                payload: {
                    letter: 'a',
                    time  : 10
                }
            },
            result: {
                status   : FETCHED,
                quote    : 'b',
                positions: []
            }
        }
    ];

    t.plan(states.length);

    states.forEach(({state, action, result}) => t.deepEqual(reducer(state, action), result, `should return the ${ result.status } status`));
});