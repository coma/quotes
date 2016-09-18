import React from 'react';
import test from 'tape';
import sinon from 'sinon';
import faker from 'faker';
import parse, { offset } from './parse';

test('The parse function on empty', t => {

    const time   = Date.now(),
          length = faker.random.number(),
          clock  = sinon.useFakeTimers(time);

    t.plan(1);
    t.deepEqual(parse({positions: [], length}), {
        viewBox: `0 0 ${ offset } ${ length }`,
        d      : `M0 ${ length }  H${ offset } V${ length } H0`
    }, 'should return an empty chart');

    clock.restore();
});

test('The parse function on points between', t => {

    const time      = Date.now(),
          length    = faker.random.number({min: 10, max: 50}),
          clock     = sinon.useFakeTimers(time),
          tick      = faker.random.number({min: 0, max: 100}),
          positions = [time - tick, time];

    t.plan(1);
    t.equal(parse({positions, length}).d, `M0 ${ length - 2 } H0 V${ length - 2 } H${ tick } V${ length - 1 } H${ offset } V${ length } H0`, 'should return a filled chart');

    clock.restore();
});

test('The parse function on points out of range', t => {

    const time      = Date.now(),
          length    = faker.random.number({min: 10, max: 50}),
          clock     = sinon.useFakeTimers(time),
          positions = [time - offset - 2, time - offset - 1];

    t.plan(1);
    t.equal(parse({positions, length}).d, `M0 ${ length - 2 }  H${ offset } V${ length } H0`, 'should return a filled chart');

    clock.restore();
});