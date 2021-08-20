import React from 'react';
import { css, keyframes } from '@emotion/core';

const bounceDelay = keyframes`
    0%,
    80%,
    100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
`;

const spinnerCSS = css`
  width: 16px;
  height: 16px;
  position: relative;
  display: inline-block;

  .loadingChild {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .loadingChild:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #fff;
    border-radius: 100%;
    animation: ${bounceDelay} 1.2s infinite ease-in-out both;
  }
  .loadingSpinnerCircle2 {
    transform: rotate(30deg);
  }
  .loadingSpinnerCircle3 {
    transform: rotate(60deg);
  }
  .loadingSpinnerCircle4 {
    transform: rotate(90deg);
  }
  .loadingSpinnerCircle5 {
    transform: rotate(120deg);
  }
  .loadingSpinnerCircle6 {
    transform: rotate(150deg);
  }
  .loadingSpinnerCircle7 {
    transform: rotate(180deg);
  }
  .loadingSpinnerCircle8 {
    transform: rotate(210deg);
  }
  .loadingSpinnerCircle9 {
    transform: rotate(240deg);
  }
  .loadingSpinnerCircle10 {
    transform: rotate(270deg);
  }
  .loadingSpinnerCircle11 {
    transform: rotate(300deg);
  }
  .loadingSpinnerCircle12 {
    transform: rotate(330deg);
  }
  .loadingSpinnerCircle2:before {
    animation-delay: -1.1s;
  }
  .loadingSpinnerCircle3:before {
    animation-delay: -1s;
  }
  .loadingSpinnerCircle4:before {
    animation-delay: -0.9s;
  }
  .loadingSpinnerCircle5:before {
    animation-delay: -0.8s;
  }
  .loadingSpinnerCircle6:before {
    animation-delay: -0.7s;
  }
  .loadingSpinnerCircle7:before {
    animation-delay: -0.6s;
  }
  .loadingSpinnerCircle8:before {
    animation-delay: -0.5s;
  }
  .loadingSpinnerCircle9:before {
    animation-delay: -0.4s;
  }
  .loadingSpinnerCircle10:before {
    animation-delay: -0.3s;
  }
  .loadingSpinnerCircle11:before {
    animation-delay: -0.2s;
  }
  .loadingSpinnerCircle12:before {
    animation-delay: -0.1s;
  }
`;

const Spinner = () => {
  return (
    <div css={spinnerCSS} className="ac-spinner">
      <div className="loadingSpinnerCircle1 loadingChild"></div>
      <div className="loadingSpinnerCircle2 loadingChild"></div>
      <div className="loadingSpinnerCircle3 loadingChild"></div>
      <div className="loadingSpinnerCircle4 loadingChild"></div>
      <div className="loadingSpinnerCircle5 loadingChild"></div>
      <div className="loadingSpinnerCircle6 loadingChild"></div>
      <div className="loadingSpinnerCircle7 loadingChild"></div>
      <div className="loadingSpinnerCircle8 loadingChild"></div>
      <div className="loadingSpinnerCircle9 loadingChild"></div>
      <div className="loadingSpinnerCircle10 loadingChild"></div>
      <div className="loadingSpinnerCircle11 loadingChild"></div>
      <div className="loadingSpinnerCircle12 loadingChild"></div>
    </div>
  );
};

export default Spinner;
