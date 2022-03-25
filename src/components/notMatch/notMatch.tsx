import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';

const { useRef, useState, useEffect, useMemo } = React;

interface NotMatchProps {}

const NotMatch: React.FC<NotMatchProps> = (props: NotMatchProps) => {
  const {} = props;

  return (
    <>
      <Container>
        <section
          style={{
            margin: '4rem 0',
          }}
        >
          <SvgIcon src={'not_found.svg'} width={'100%'} height=""></SvgIcon>
        </section>
      </Container>
    </>
  );
};

export default NotMatch;
