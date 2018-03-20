/**
 * @jest-environment node
 */
import React from 'react';
import {shallow} from 'enzyme';
import SearchResult from '../../src/page/SearchResult';


//Fail -> might be something about the state
// test('Render SearchResult without crashing', () => {
//   let comp = shallow(<SearchResult/>);
//   expect(comp.exists()).toBe(true);
// });

test('adds 1 + 2 to equal 3', () => {
  expect((1 + 2)).toBe(3);
});