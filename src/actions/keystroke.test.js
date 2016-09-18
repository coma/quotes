import test from 'tape';
import faker from 'faker';
import sinon from 'sinon';
import { keyPress, KEYSTROKE } from './keystroke';

test('The keyPress', t => {

    const time   = Date.now(),
          letter = faker.random.alphaNumeric(),
          clock  = sinon.useFakeTimers(time),
          action = keyPress({charCode: letter.charCodeAt(0)});

    t.plan(1);

    t.deepEqual(action, {
        type   : KEYSTROKE,
        payload: {letter, time}
    }, `should create a ${ KEYSTROKE } action with time and letter`);

    clock.restore();
});