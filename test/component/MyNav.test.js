/**
 * @jest-environment node
 */

import React from 'react';
import {shallow} from 'enzyme';
import MyNav from '../../src/component/MyNav';
import {Menu, Header} from 'semantic-ui-react';

test('Render MyNav without crashing', () => {
  const comp = shallow(<MyNav />);
  expect(comp.exists()).toBe(true);
});

test('find the header name', () => {
  const comp = shallow(<MyNav />);
  expect(comp.containsMatchingElement(<Header>Gallery</Header>))
  .toBe(true);
});