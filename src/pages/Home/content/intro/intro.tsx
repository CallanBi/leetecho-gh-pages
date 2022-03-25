import * as React from 'react';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react/macro';
import ContentBlock from './components/introBlock';
import IntroContent from '../../../../content/IntroContent.json';

const { useRef, useState, useEffect, useMemo } = React;

interface IntroProps {}

const Intro: React.FC<IntroProps> = (props: IntroProps) => {
  const {} = props;

  return (
    <>
      <ContentBlock id="intro" />
    </>
  );
};

export default Intro;
