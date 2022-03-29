import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import DocPage from '../../components/docPage';
import to from 'await-to-js';

const { useRef, useState, useEffect, useMemo } = React;

interface IterationPlanProps {}

const IterationPlan: React.FC<IterationPlanProps> = (
  props: IterationPlanProps
) => {
  const {} = props;

  return (
    <DocPage
      importFunc={async () => {
        const [err, md] = await to(import('../../md/iterationPlan.md'));
        if (err) {
          throw err;
        }
        return md;
      }}
    ></DocPage>
  );
};

export default IterationPlan;
