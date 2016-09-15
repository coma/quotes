import { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from 'src/actions/quote';
import { KEYSTROKE } from 'src/actions/keystroke';
import { FETCHING, FETCHED, ERROR, INIT } from 'src/status';

export default (state = {status: INIT}, action = {}) => {

    const {type, payload}               = action,
          {quote, position, keystrokes} = state;

    switch (type) {

    case QUOTE_FETCHING:

        return {
            status: FETCHING
        };

    case QUOTE_FETCHED:

        return {
            status  : FETCHED,
            keystrokes: [],
            position: 0,
            length  : payload.quote.length,
            start   : Date.now(),
            ...payload
        };

    case QUOTE_ERROR:

        return {
            status: ERROR,
            error : payload.toString()
        };

    case KEYSTROKE:

        const {letter, time} = payload,
              right          = quote.charAt(position) === letter;

        return {
            ...state,
            keystrokes: [...keystrokes, {right, time, letter}],
            position  : right ? position + 1 : position
        };

    default:
        return state;
    }
}
