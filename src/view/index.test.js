import React from 'react';
import test from 'tape';
import AppView from './index';
import { shallow } from 'enzyme';

test('The App', t => {

    t.plan(1);
    const wrapper = shallow(<AppView><br/></AppView>);
    t.equal(wrapper.find('br').length, 1, 'should nest its children');
});