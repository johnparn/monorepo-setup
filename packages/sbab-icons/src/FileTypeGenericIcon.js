import React, { Fragment, Component } from 'react';
import { PropTypes } from 'prop-types';

const FileTypeGenericIcon = props => {
  const width = props.width ? props.width : '48px';
  const height = props.height ? props.height : '48px';

  const styles = {
    fontSize: '0.7em',
    fontStyle: 'normal',
    fontFamily: 'Oswald',
    textAnchor: 'middle'
  };

  return (
    <svg
      className="icon filetype generic"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 46 46"
    >
      <defs>
        <mask id="text-clip">
          <rect id="bg" width="100%" height="100%" fill="white" />
          <text
            xmlSpace="preserve"
            {...styles}
            x="10.992004"
            y="34.21402"
            id="text-clip-value"
          >
            {props.extension}
          </text>
        </mask>
      </defs>
      <g id="g3308">
        <path
          clipRule="evenodd"
          d="M 36 23.29 c 0 0 0 11.43 0 11.43 c 0 1.26 -1.01 2.28 -2.25 2.28 c 0 0 -31.5 0 -31.5 0 c -1.24 0 -2.25 -1.02 -2.25 -2.28 c 0 0 0 -11.43 0 -11.43 c 0 -1.26 1.01 -2.29 2.25 -2.29 c 0 0 31.5 0 31.5 0 c 1.24 0 2.25 1.03 2.25 2.29 c 0 0 0 0 0 0 m -6.12 -18.5 c 0 0 0 8.37 0 8.37 c 0 0.53 0.43 0.96 0.96 0.96 c 0 0 8.6 0 8.6 0 c 0 0 -9.56 -9.33 -9.56 -9.33 m 13.12 12.21 c 0 0 0 25 0 25 c 0 2.21 -1.79 4 -4 4 c 0 0 -31 0 -31 0 c -2.21 0 -4 -1.79 -4 -4 c 0 0 0 -2 0 -2 c 0 0 3 0 3 0 c 0 0 0 2 0 2 c 0 0.56 0.45 1 1 1 c 0 0 31 0 31 0 c 0.55 0 1 -0.44 1 -1 c 0 0 0 -25 0 -25 c 0 0 -9.16 0 -9.16 0 c -2.12 0 -3.84 -1.71 -3.84 -3.84 c 0 0 0 -10.14 0 -10.14 c -0.06 0 -0.12 -0.02 -0.19 -0.02 c 0 0 -18.81 0 -18.81 0 c -0.55 0 -1 0.45 -1 1 c 0 0 0 14 0 14 c 0 0 -3 0 -3 0 c 0 0 0 -14 0 -14 c 0 -2.21 1.79 -4 4 -4 c 0 0 18.81 0 18.81 0 c 2.63 0 4 1.5 4 1.5 c 0 0 11.07 10.81 11.07 10.81 c 0 0 0.57 0.5 0.89 1.81 c 0 0 0.23 0 0.23 0 c 0 0 0 2.88 0 2.88 c 0 0 0 0 0 0"
          id="path313"
          mask="url(#text-clip)"
        />
      </g>
    </svg>
  );
};

FileTypeGenericIcon.defaultProps = {
  extension: 'FILE'
};

FileTypeGenericIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  extension: PropTypes.string
};

export default FileTypeGenericIcon;
