import * as React from 'react';
import styled from '@emotion/styled';
import { COLOR_PALETTE } from '../../const/theme';

const { useRef, useState, useEffect, useMemo } = React;

interface LoadingProps {
  style?: React.CSSProperties;
}

const LoadingSection = styled.section`
  @keyframes square-spin {
    25% {
      transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50% {
      transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75% {
      transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100% {
      transform: perspective(100px) rotateX(0) rotateY(0);
    }
  }
  animation-fill-mode: both;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: ${COLOR_PALETTE.LEETECHO_BLUE};
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
`;

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const { style = {} } = props;

  return <LoadingSection style={style || {}} />;
};

export default Loading;
