import { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from 'src/actions/quote';
import { KEYSTROKE } from 'src/actions/keystroke';
import { FETCHING, FETCHED, ERROR, INIT } from 'src/status';

export default (state = {status: INIT}, action = {}) => {

    const {type, payload}   = action,
          {quote, position} = state;

    switch (type) {

    case QUOTE_FETCHING:

        return {
            status: FETCHING
        };

    case QUOTE_FETCHED:

        return {
            status  : FETCHED,
            position: 0,
            errors  : 0,
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

        return quote ? {...state, position: quote.charAt(position) === payload.letter ? position + 1 : position} : state;

    default:
        return state;
    }
}
