/**
 * @jest-environment node
 */
import React from 'react';
import {shallow, mount} from 'enzyme';
import Home from '../../src/page/Home';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc;
global.window = doc.defaultView;

test('Render Home without crashing', () => {
  let comp = shallow(<Home/>);
  expect(comp.exists()).toBe(true);
});
