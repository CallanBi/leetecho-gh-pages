import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import DocPage from '../../components/docPage';
import to from 'await-to-js';

const { useRef, useState, useEffect, useMemo } = React;

interface ChangelogProps {}

const Changelog: React.FC<ChangelogProps> = (props: ChangelogProps) => {
  const {} = props;

  return (
    <>
      <DocPage
        importFunc={async () => {
          const [err, md] = await to(import('../../md/commonQuestions.md'));
          if (err) {
            throw err;
          }
          return md;
        }}
      ></DocPage>
    </>
  );
};

export default Changelog;
