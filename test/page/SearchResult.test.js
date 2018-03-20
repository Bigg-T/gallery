/**
 * @jest-environment node
 */
import React from 'react';
import {shallow} from 'enzyme';
import SearchResult from '../../src/page/SearchResult';

test('Render SearchResult without crashing', () => {
  let comp = shallow(<SearchResult/>);
  expect(comp.exists()).toBe(true);
});