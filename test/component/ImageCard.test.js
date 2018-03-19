/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import {Card, Image} from 'semantic-ui-react';
import ImageCard from '../../src/component/ImageCard';

test('ImageCard renders without crashing', () => {
  const comp = shallow(<ImageCard src="test" href="test href"/>);
  expect(comp.exists()).toBe(true);
});

test('Have the correct Image src', () => {
  const comp = shallow(<ImageCard src="test" href="test href"/>);
  expect(
      comp
      .containsMatchingElement(<Image src="test" size="medium"/>)
  ).toBe(true);
});

test('Does not the correct Image src', () => {
  const comp = shallow(<ImageCard src="test" href="test href"/>);
  expect(
      comp
      .containsMatchingElement(<Image src="NOT CORRECT" size="medium"/>)
  ).toBe(false);
});

test('Have the correct Card.Header', () => {
  const comp = shallow(<ImageCard src="test" href="test href" username="t"/> );
  expect(
      comp
      .containsMatchingElement(
          <Card.Header>
            Photo by:
            <a href="test href" target="_blank"> t</a>
          </Card.Header>
      )
  ).toBe(true);
});

test('InCorrect Card.Header', () => {
  const comp = shallow(<ImageCard src="test" href="test href" username="t"/>);
  expect(
      comp
      .containsMatchingElement(
          <Card.Header>
            Photo by:
            <a href="test href" target="_blank"> not correct</a>
          </Card.Header>
      )
  ).toBe(false);
});

test('Have the correct Card.Description', () => {
  const comp = shallow(<ImageCard src="test" href="test href" description="Hi"/>);
  expect(
      comp
      .containsMatchingElement(
          <Card.Description>
            Hi
          </Card.Description>
      )
  ).toBe(true);
});

test('Have the incorrect Card.Description', () => {
  const comp = shallow(<ImageCard src="test" href="test href" description="Hi"/>);
  expect(
      comp
      .containsMatchingElement(
          <Card.Description>
            Wrong header
          </Card.Description>
      )
  ).toBe(false);
});