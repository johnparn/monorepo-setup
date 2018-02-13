/**
 * @jest-environment node
 */
import 'jsdom-global/register';
import React from 'react';
import { mount, render } from 'enzyme';

import CustomTheme from './';

describe('Custom Theme', function() {
  it('exports the theme object', () => {
    const expected = expect.objectContaining({
      primary: expect.any(String),
      secondary: expect.any(String)
    });

    expect(CustomTheme).toEqual(expected);
  });
});
