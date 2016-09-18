import React from 'react';
import test from 'tape';
import sinon from 'sinon';
import Start from './index';
import { shallow } from 'enzyme';

test('The start', t => {

    const fetch = sinon.spy();

    shallow(<Start { ...{fetch} }/>)
        .find('a')
        .simulate('click');

    t.plan(1);
    t.ok(fetch.calledOnce, 'should have a link to start the game');
});