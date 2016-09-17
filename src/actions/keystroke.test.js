import test from 'tape';
import sinon from 'sinon';
import { keyPress, KEYSTROKE } from './keystroke';

test('The keyPress', t => {

    t.plan(1);

    const time   = Math.floor(1000 * Math.random()),
          letter = 'aAbBcCdD1.,'.substr(Math.floor(11 * Math.random()), 1),
          clock  = sinon.useFakeTimers(time),
          action = keyPress({charCode: letter.charCodeAt(0)});

    t.deepEqual(action, {
        type   : KEYSTROKE,
        payload: {letter, time}
    }, `should create a ${ KEYSTROKE } action with time and letter`);

    clock.restore();
});