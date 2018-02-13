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

describe('Logo', () => {
  let chrome = null;

  beforeEach(() => {
    Enzyme.configure({ adapter: new Adapter() });
    chrome = new Chrome();
  });

  afterEach(() => {
    chrome.done();
  });

  it('should be clickable', () => {
    const onClick = jest.fn();
    const wrapper = mount(<SbabLogo onClick={onClick} />);
    wrapper.find('svg').simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });

  it('should render with specified size', () => {
    const width = '200px';
    const height = '200px';
    const wrapper = mount(
      <SbabLogo color="#F00" width={width} height={height} />
    );
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });
});
