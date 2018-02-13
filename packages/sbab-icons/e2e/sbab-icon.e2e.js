/**
 * @jest-environment node
 */
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

//import { SbabLogo } from 'sbab-icons';
import 'jsdom-global/register';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SbabLogo } from '../src/';

const { Chrome } = require('navalia');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('Logo', () => {
  let chrome = null;

  beforeEach(() => {
    Enzyme.configure({ adapter: new Adapter() });
    chrome = new Chrome();
  });

  afterEach(() => {
    chrome.done();
  });

  it('should not be altered', () => {
    return (
      chrome
        .goto('http://localhost:3000')
        .then(() => chrome.screenshot())
        // Set failure threshold - allow small differences due to differents fonts
        .then(image =>
          expect(image).toMatchImageSnapshot({
            failureThreshold: 0.04,
            failureThresholdType: 'percent'
          })
        )
    );
  });
});
