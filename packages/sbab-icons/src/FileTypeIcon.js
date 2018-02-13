import React from 'react';
import { PropTypes } from 'prop-types';

import FileTypePDFIcon from './FileTypePDFIcon';
import FileTypeWordIcon from './FileTypeWordIcon';
import FileTypeGenericIcon from './FileTypeGenericIcon';

const FileTypeIcon = props => {
  const extension = props.extension ? props.extension : 'FILE';
  const width = props.width || '48px';
  const height = props.height || '48px';

  switch (extension.toUpperCase()) {
    case 'PDF':
      return <FileTypePDFIcon width={width} height={height} />;
    case 'DOC':
    case 'DOCX':
      return <FileTypeWordIcon width={width} height={height} />;
    default:
      return (
        <FileTypeGenericIcon
          extension={extension.toUpperCase()}
          width={width}
          height={height}
        />
      );
  }
};

FileTypeIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  extension: PropTypes.string
};

export default FileTypeIcon;
