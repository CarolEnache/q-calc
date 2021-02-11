import React from 'react';

const Pinterest = (props) => {
  const { width, height, fill } = props;

  return (
    <svg fill={fill} width={width} height={height}>
      {' '}
      <path d='M 13 0.1875 C 5.925781 0.1875 0.1875 5.925781 0.1875 13 C 0.1875 18.421875 3.558594 23.046875 8.316406 24.917969 C 8.296875 24.480469 8.296875 22.210938 9.875 15.441406 C 10.085938 13.183594 9.792969 12.382813 9.792969 11.445313 C 9.792969 9.316406 10.898438 8.867188 11.546875 8.867188 C 12.46875 8.867188 13.738281 9.21875 13.738281 10.703125 C 13.738281 12.402344 12.351563 12.851563 12.351563 12.851563 C 12.351563 12.851563 12.253906 13.285156 12.136719 14.492188 C 12.023438 15.703125 12.507813 17.015625 14.480469 17.015625 C 17.644531 17.015625 18.132813 12.621094 18.132813 11.410156 C 18.132813 9.742188 16.910156 6.351563 13.109375 6.351563 C 8.042969 6.351563 7.171875 10.890625 7.171875 12.101563 C 7.171875 12.621094 7.3125 13.535156 7.410156 13.925781 C 8.367188 14.082031 8.269531 15.390625 7.859375 15.761719 C 7.40625 16.171875 5.066406 16.660156 5.066406 11.527344 C 5.066406 6.640625 9.421875 4.121094 13.246094 4.121094 C 16.886719 4.121094 20.847656 6.632813 20.847656 11.46875 C 20.847656 15.789063 17.746094 19.1875 14.484375 19.1875 C 12.527344 19.1875 11.488281 17.574219 11.488281 17.574219 C 11.488281 19.085938 8.714844 24.273438 8.359375 24.933594 C 9.800781 25.492188 11.363281 25.8125 13 25.8125 C 20.078125 25.8125 25.8125 20.078125 25.8125 13 C 25.8125 5.921875 20.074219 0.1875 13 0.1875 Z' />
    </svg>
  );
};

export default Pinterest;
