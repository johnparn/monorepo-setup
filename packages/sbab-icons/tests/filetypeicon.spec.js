/**
 * @jest-environment node
 */

global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

import 'jsdom-global/register';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FileTypeIcon } from '../src/';
import FileTypeGenericIcon from '../src/FileTypeGenericIcon.js';
import FileTypeWordIcon from '../src/FileTypeWordIcon.js';
import FileTypePDFIcon from '../src/FileTypePDFIcon.js';

const { Chrome } = require('navalia');

describe('Filetype Icon', () => {
  let chrome = null;

  beforeEach(() => {
    Enzyme.configure({ adapter: new Adapter() });
    chrome = new Chrome();
  });

  afterEach(() => {
    chrome.done();
  });

  it('should render PDF type', () => {
    const wrapper = mount(<FileTypeIcon extension="PDF" />);
    //const paths = wrapper.find('path');
    const path = wrapper
      .find('path')
      .first()
      .prop('d');
    //const d = paths[0].prop("d");
    expect(path).toEqual(
      'm451.7 99.72-71.4-71.44c-15.6-15.55-46.3-28.28-68.3-28.28h-240c-22 0-40 18-40 40v432c0 22 18 40 40 40h368c22 0 40-18 40-40v-304c0-22-12.7-52.7-28.3-68.28z'
    );
  });

  it('should render TXT as file type', () => {
    const wrapper = mount(<FileTypeIcon extension="TXT" />);
    const text = wrapper.find('#text-clip-value').text();
    expect(text).toEqual('TXT');
  });

  it('should render filetype icon with specified size', () => {
    const width = '200px';
    const height = '200px';
    const wrapper = mount(
      <FileTypeIcon extension="DOC" width={width} height={height} />
    );
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });

  it('should render Word filetype icon with specified size', () => {
    const width = '200px';
    const height = '200px';
    const wrapper = mount(
      <FileTypeWordIcon extension="DOC" width={width} height={height} />
    );
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });

  it('should render generic filetype icon with default size', () => {
    const width = '48px';
    const height = '48px';
    const wrapper = mount(<FileTypeWordIcon extension="TXT" />);
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });

  it('should render PDF filetype icon with specified size', () => {
    const width = '200px';
    const height = '200px';
    const wrapper = mount(
      <FileTypePDFIcon extension="PDF" width={width} height={height} />
    );
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });

  it('should render PDF filetype icon with default size', () => {
    const width = '48px';
    const height = '48px';
    const wrapper = mount(<FileTypePDFIcon extension="PDF" />);
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });

  it('should render generic filetype icon with specified size', () => {
    const width = '200px';
    const height = '200px';
    const wrapper = mount(
      <FileTypeGenericIcon extension="TXT" width={width} height={height} />
    );
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });

  it('should render generic filetype icon with specified size', () => {
    const width = '48px';
    const height = '48px';
    const wrapper = mount(<FileTypeGenericIcon extension="TXT" />);
    const compWidth = wrapper.find('svg').prop('width');
    const compHeight = wrapper.find('svg').prop('height');
    expect(compWidth).toEqual(width);
    expect(compHeight).toEqual(height);
  });
});
