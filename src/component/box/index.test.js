import React from 'react';
import test from 'tape';
import sinon from 'sinon';
import faker from 'faker';
import Box from './index';
import style from './index.css';
import { shallow } from 'enzyme';

test('The Box component', t => {

    style.box = faker.random.word();

    const another  = faker.random.word(),
          keyPress = sinon.spy(),
          wrapper  = shallow(
              <Box className={ another } onKeyPress={ keyPress }>
                  <br/>
              </Box>
          );

    wrapper.simulate('keypress');

    t.plan(5);
    t.equal(wrapper.find('br').length, 1, 'should nest its children');
    t.ok(wrapper.hasClass(style.box), 'should have a box style');
    t.ok(wrapper.hasClass(another), 'might have another style');
    t.equal(wrapper.prop('tabIndex'), '1', 'should have tabIndex');
    t.ok(keyPress.calledOnce, 'might trigger onKeyPress');
});