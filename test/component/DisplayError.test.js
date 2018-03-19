/**
 * @jest-environment node
 */

import React from 'react';
import {shallow} from 'enzyme';
import DisplayError from '../../src/component/DisplayError';
import {Message} from 'semantic-ui-react';

test('DisplayError without crashing', () => {
  const comp = shallow(<DisplayError status={404} msg="Page not found"/>);
  expect(comp.exists()).toBe(true);
});

test('Display correct error status (code)', () => {
  const comp = shallow(<DisplayError status='404' msg="Page not found"/>);
  expect(comp.containsMatchingElement(<Message.Header>404</Message.Header>))
  .toBe(true);
});

test('Not displaying correct error status (code)', () => {
  const comp = shallow(<DisplayError status='404' msg="Page not found"/>);
  expect(comp.containsMatchingElement(<Message.Header>200</Message.Header>))
  .toBe(false);
});

test('Display correct error message', () => {
  const comp = shallow(<DisplayError status={404} msg="Page not found"/>);
  expect(comp.containsMatchingElement(<p>Page not found</p>)).toBe(true);
});

test('Recognize if error code does not match given msg', () => {
  const comp = shallow(<DisplayError status={404} msg="Page not found"/>);
  expect(comp.containsMatchingElement(<p>Not the correct</p>)).toBe(false);
});




