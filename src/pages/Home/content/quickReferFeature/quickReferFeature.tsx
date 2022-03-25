import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import FeatureComponent from '../components/featureComponent';
import { Typography } from 'antd';

const { useRef, useState, useEffect, useMemo } = React;

interface QuickReferFeatureProps {
  id?: string;
}

const QuickReferFeature: React.FC<QuickReferFeatureProps> = (
  props: QuickReferFeatureProps
) => {
  const { id = 'quickRefer' } = props;

  return (
    <FeatureComponent
      id={id}
      imgSrc={'quick-refer.svg'}
      direction={'right'}
      layout={'vertical'}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Typography.Title level={2}>可快速检索的题目和笔记</Typography.Title>
        <Typography.Paragraph
          style={{
            fontSize: '1.2rem',
          }}
        >
          发布过程提示友好，清晰可控。
        </Typography.Paragraph>
      </section>
    </FeatureComponent>
  );
};

export default QuickReferFeature;
