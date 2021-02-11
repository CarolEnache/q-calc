import React from 'react';

const Youtube = (props) => {
  const { width, height, fill } = props;

  return (
    <svg fill={fill} width={width} height={height}>
      <path d='M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-9.333v24h-24v-24h24zm-4 12c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z' />
    </svg>
  );
};

export default Youtube;
