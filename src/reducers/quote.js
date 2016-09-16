import { QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR } from 'src/actions/quote';
import { KEYSTROKE } from 'src/actions/keystroke';
import { FETCHING, FETCHED, ERROR, INIT } from 'src/status';

export default (state = {status: INIT}, action = {}) => {

    const {type, payload} = action;

    switch (type) {

    case QUOTE_FETCHING:

        return {
            status: FETCHING
        };

    case QUOTE_FETCHED:

        return {
            ...payload,
            status   : FETCHED,
            positions: []
        };

    case QUOTE_ERROR:

        return {
            status: ERROR,
            error : payload.toString()
        };

    case KEYSTROKE:

        const {positions, quote} = state,
              {letter, time}     = payload;

        return quote.charAt(positions.length) !== letter ? state : {...state, positions: [...positions, time]};

    default:
        return state;
    }
}
