import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const { useRef, useState, useEffect, useMemo } = React;

interface DocsNavigationProps {
  article?: string;
  style?: React.CSSProperties;
}

const DosNavigationSection = styled.section``;

const DocsNavigation: React.FC<DocsNavigationProps> = (
  props: DocsNavigationProps
) => {
  const { article = '', style = {} } = props;

  return (
    <DosNavigationSection style={style}>
      <MarkdownNavbar source={article}></MarkdownNavbar>
    </DosNavigationSection>
  );
};

export default DocsNavigation;
