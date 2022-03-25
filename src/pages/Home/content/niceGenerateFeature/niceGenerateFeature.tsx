import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import FeatureComponent from '../components/featureComponent';
import { Typography } from 'antd';

const { useRef, useState, useEffect, useMemo } = React;

interface NiceGenerateFeatureProps {}

const NiceGenerateFeature: React.FC<NiceGenerateFeatureProps> = (
  props: NiceGenerateFeatureProps
) => {
  const {} = props;

  return (
    <FeatureComponent
      id={'niceGenerate'}
      imgSrc={'exquisite-generation-svg.svg'}
      direction={'right'}
      layout={'horizontal'}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginLeft: '1rem',
        }}
      >
        <Typography.Title level={2}>精美的文档生成</Typography.Title>
        <Typography.Paragraph
          style={{
            fontSize: '1.2rem',
          }}
        >
          自定义模板生成 md 文档，包括图片插入，题目索引和其他你想要的一切。（计划未来还会支持基于 md 文档的静态网站生成！）
        </Typography.Paragraph>
      </section>
    </FeatureComponent>
  );
};

export default NiceGenerateFeature;
