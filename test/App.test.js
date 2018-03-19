/**
 * @jest-environment node
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

test('App renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toBe(true);
});

test('adds 1 + 2 to equal 3', () => {
  expect((1 + 2)).toBe(3);
});
