import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import FeatureComponent from '../components/featureComponent';
import { Col, Row, Typography } from 'antd';
import { ContentWrapper } from '../MiddleBlock/styles';
import { Button } from '../../../../common/Button';
import { COLOR_PALETTE } from '../../../../const/theme';
import { SvgIcon } from '../../../../common/SvgIcon';
import { useRouter } from '../../../../hooks';

const { Title } = Typography;

const { useRef, useState, useEffect, useMemo } = React;

interface DownloadProps {
  id?: string;
}

const Download: React.FC<DownloadProps> = (props: DownloadProps) => {
  const { id = 'download' } = props;

  const router = useRouter();

  return (
    <FeatureComponent direction={'left'} layout={'vertical'}>
      <Col id={'download'}>
        <section
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Title
            level={1}
            style={{
              marginLeft: '-80px',
            }}
          >
            尽情使用！
          </Title>
        </section>
        <Row
          justify="center"
          align="middle"
          gutter={[16, 32]}
          style={{
            marginTop: '1rem',
          }}
        >
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <Button
              style={{
                padding: '0.5rem 1rem',
              }}
              key={'download'}
              fixedWidth={true}
              onClick={() => {}}
            >
              <Row>
                <Col xs={24} sm={4} md={4} lg={4} xl={4}>
                  <SvgIcon src={'mac.svg'} width="24px" height="" />
                </Col>
                <Col
                  style={{
                    marginLeft: '1rem',
                  }}
                  xs={0}
                  sm={15}
                  md={15}
                  lg={15}
                  xl={15}
                >
                  Mac OS
                </Col>
              </Row>
            </Button>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <Button
              style={{
                padding: '0.5rem 1rem',
              }}
              fixedWidth={true}
              onClick={() => {}}
            >
              <Row>
                <Col xs={24} sm={4} md={4} lg={4} xl={4}>
                  <SvgIcon src={'windows-svg.svg'} width="24px" height="" />
                </Col>
                <Col
                  style={{
                    marginLeft: '1rem',
                  }}
                  xs={0}
                  sm={15}
                  md={15}
                  lg={15}
                  xl={15}
                >
                  Windows
                </Col>
              </Row>
            </Button>
          </Col>
          <Col xs={7} sm={7} md={7} lg={7} xl={7}>
            <Button
              style={{
                padding: '0.5rem 1rem',
              }}
              fixedWidth={true}
              onClick={() => {
                router.push('./docs');
              }}
            >
              查看文档
            </Button>
          </Col>
        </Row>
      </Col>
    </FeatureComponent>
  );
};

export default Download;
