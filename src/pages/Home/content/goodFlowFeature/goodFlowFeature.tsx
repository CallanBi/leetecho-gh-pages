import * as React from 'react';
import { Typography } from 'antd';
import { withTranslation } from 'react-i18next';
import FeatureComponent from '../components/featureComponent';

type LeftContentBlockProps = {
  t: any;
  id: string;
};

const GoodFlowFeature = ({ t, id }: LeftContentBlockProps) => {
  return (
    <FeatureComponent
      id={id}
      imgSrc={'progress-tip-svg.svg'}
      direction={'right'}
      layout={'vertical'}
    >
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex',
        }}
      >
        <Typography.Title level={2}>用户友好的发布流</Typography.Title>
        <Typography.Paragraph style={{
          fontSize: '1.2rem',
        }}>
          发布过程提示友好，清晰可控。
        </Typography.Paragraph>
      </section>
    </FeatureComponent>
  );
};

export default withTranslation()(GoodFlowFeature);
