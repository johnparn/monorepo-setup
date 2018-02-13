import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SbabLogo, FileTypeIcon } from '.';

storiesOf('sbab-icons', module)
  .add('SbabLogo', () => <SbabLogo onClick={action('clicked')} />)
  .add('FileTypeIcon PDF', () => (
    <FileTypeIcon extension="PDF" onClick={action('clicked')} />
  ))
  .add('FileTypeIcon Word', () => (
    <FileTypeIcon extension="DOC" onClick={action('clicked')} />
  ))
  .add('FileTypeIcon Generic', () => (
    <FileTypeIcon extension="TXT" onClick={action('clicked')} />
  ));
