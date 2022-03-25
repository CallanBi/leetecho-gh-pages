import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Container from '../../common/Container';
import DocsNavigation from './components/docsNavigation';

const { useRef, useState, useEffect, useMemo } = React;

interface DocumentsProps {}

const Documents: React.FC<DocumentsProps> = (props: DocumentsProps) => {
  const {} = props;

  return (
    <Container>
      <DocsNavigation article={''}></DocsNavigation>
    </Container>
  );
};

export default Documents;
