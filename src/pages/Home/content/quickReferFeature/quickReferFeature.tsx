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
        <Typography.Title level={2}>可快速检索的题目和一站式笔记管理方案</Typography.Title>
        <Typography.Paragraph
          style={{
            fontSize: '1.2rem',
          }}
        >
          比官方体验更胜一筹的 AC 代码与笔记速览，每一次对已 AC 题目的回顾都有新的灵感。
          代理 LeetCode NoteBook实现笔记检索和管理闭环，一站式笔记管理体验。
        </Typography.Paragraph>
      </section>
    </FeatureComponent>
  );
};

export default QuickReferFeature;
