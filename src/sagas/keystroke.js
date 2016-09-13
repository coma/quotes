import { eventChannel } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';
import { KEYSTROKE } from 'src/actions/keystroke';

const listen = () => eventChannel(emit => {

    const send = ({charCode}) => emit({
        type   : KEYSTROKE,
        payload: {
            letter: String.fromCharCode(charCode),
            time  : Date.now()
        }
    });

    document.addEventListener('keypress', send);

    return () => document.removeEventListener('keypress', send);
});

export function* onKeystroke () {

    const channel = yield call(listen);
    //noinspection InfiniteLoopJS
    while (true) {

        yield put(yield take(channel));
    }
}
