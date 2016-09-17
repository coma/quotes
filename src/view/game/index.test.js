import React from 'react';
import test from 'tape';
import { INIT, FETCHING, FETCHED, ERROR } from 'src/status';
import Start from './start';
import Wait from './wait';
import Game from './game';
import Error from './error';
import { View } from './index';
import { shallow } from 'enzyme';

test('The game view', t => {

    t.plan(4);

    const fetch     = () => {},
          quote     = '',
          positions = [],
          props     = {fetch, quote, positions};

    t.ok(shallow(<View { ...props } status={ INIT }/>).equals(<Start { ...{fetch} }/>), `should render the start on ${ INIT }`);
    t.ok(shallow(<View { ...props } status={ FETCHING }/>).equals(<Wait/>), `should render the wait on ${ FETCHING }`);
    t.ok(shallow(<View { ...props } status={ FETCHED }/>).equals(<Game { ...{quote, positions} }/>), `should render the game on ${ FETCHED }`);
    t.ok(shallow(<View { ...props } status={ ERROR }/>).equals(<Error/>), `should render the error on ${ ERROR }`);
});