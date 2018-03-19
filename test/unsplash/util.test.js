/**
 * @jest-environment node
 */
import React from 'react';
import {shallow} from 'enzyme';
import * as util from '../../src/unsplash/util';
import {ACCESS_KEY, UNSPLASH_BASE_URL} from '../../src/unsplash/Constant';

test('correctly generated client_id string', () => {
  expect(util.clientID()).toBe('client_id='+ACCESS_KEY);
});

test('correctly generated user href (credit to user)', () => {
  expect(util.userHref('test')).toBe(UNSPLASH_BASE_URL+'@test');
});