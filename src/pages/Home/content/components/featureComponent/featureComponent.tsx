import * as React from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../../../../common/SvgIcon';
import { Fade } from 'react-awesome-reveal';
import { LeftContentSection } from '../../../../../components/ContentBlock/LeftContentBlock/styles';
import { ContentWrapper } from '../../../../../components/ContentBlock/RightContentBlock/styles';
import styled from 'styled-components';

const { useRef, useState, useEffect, useMemo } = React;

interface FeatureComponentProps {
  id?: string;
  imgSrc?: string;
  direction?: 'left' | 'right';
  layout?: 'vertical' | 'horizontal';
}

const Content = styled('div')`
  margin: 1.5rem 0 2rem 0;
`;

const FeatureComponent: React.FC<FeatureComponentProps> = (
  props: React.PropsWithChildren<FeatureComponentProps>
) => {
  const {
    id = Math.random().toString(),
    children = <></>,
    imgSrc = '',
    direction = 'right',
    layout = 'vertical',
  } = props ?? ({} as FeatureComponentProps);

  return (
    <LeftContentSection>
      <Fade direction={direction}>
        {layout === 'horizontal' ? (
          <>
            {direction === 'right' && (
              <Row justify="space-between" align="middle" id={id}>
                {imgSrc && (
                  <Col lg={13} md={13} sm={12} xs={24} style={{}}>
                    <SvgIcon src={imgSrc} width="100%" height="" />
                  </Col>
                )}
                <Col lg={6} md={11} sm={11} xs={24}>
                  <Content>{children ?? <></>}</Content>
                </Col>
              </Row>
            )}
            {direction === 'left' && (
              <Row justify="space-between" align="middle" id={id}>
                <Col lg={11} md={11} sm={11} xs={24}>
                  <Content>{children ?? <></>}</Content>
                </Col>
                {imgSrc && (
                  <Col lg={13} md={13} sm={12} xs={24} style={{}}>
                    <SvgIcon src={imgSrc} width="100%" height="" />
                  </Col>
                )}
              </Row>
            )}
          </>
        ) : (
          <></>
        )}
        {layout === 'vertical' ? (
          <>
            <Content>{children ?? <></>}</Content>
            {imgSrc && (
              <Row
                style={
                  {
                    // marginLeft: '-2rem',
                  }
                }
              >
                <SvgIcon src={imgSrc} width="100%" height="" />
              </Row>
            )}
          </>
        ) : (
          <></>
        )}
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(FeatureComponent);
