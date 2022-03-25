import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import LeftContentBlock from './components/LeftContentBlock';

const { useRef, useState, useEffect, useMemo } = React;

interface ContentBlockProps {}

const CustomFilterFeature: React.FC<ContentBlockProps> = (
  props: ContentBlockProps
) => {
  const {} = props;

  return <LeftContentBlock id={'custom-set'}></LeftContentBlock>;
};

export default CustomFilterFeature;
