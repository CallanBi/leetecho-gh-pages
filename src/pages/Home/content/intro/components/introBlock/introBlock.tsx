import { Row, Col, Typography } from 'antd';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../../../../common/Button';
import { ContentBlockProps } from '../../../../../../components/ContentBlock/types';
import { Fade } from 'react-awesome-reveal';
import {
  RightBlockContainer,
  ContentWrapper,
  ButtonWrapper,
} from '../../../../../../components/ContentBlock/RightContentBlock/styles';
import { SvgIcon } from '../../../../../../common/SvgIcon';

import { COLOR_PALETTE } from '../../../../../../const/theme';
import { css } from '@emotion/react';

type IntroContentBlockProps = {
  t?: any;
  id: string;
};

const RightBlock = ({ t, id }: IntroContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <ContentWrapper>
              <section
                style={{
                  marginBottom: '3.5rem',
                }}
              >
                <SvgIcon src={'logo-text.svg'} width="220rem" height="" />
              </section>
              <section>
                <Typography.Title level={2}>
                  一款优雅、体验友好的自动生成 LeetCode
                  题解和笔记并发布到代码托管平台的个人仓库的产品
                </Typography.Title>
                <Typography.Paragraph>
                  编写自定义的封面和题目模板，将你的题解和代码上传至个人仓库，让你美妙的思路和代码在开源世界有一个展示的窗口。
                </Typography.Paragraph>
                <Typography.Paragraph>
                  很有趣的一点是：如果每天都刷一道题，Leetecho 能够让你的 road
                  map 保持全年绿色！
                </Typography.Paragraph>
              </section>
              <ButtonWrapper>
                <Button
                  fixedWidth={true}
                  color={COLOR_PALETTE.LEETECHO_BLUE}
                  onClick={() => {
                    scrollTo('download');
                  }}
                >
                  前往下载
                </Button>
                <Button
                  fixedWidth={true}
                  onClick={() => {
                    scrollTo('explanation');
                  }}
                >
                  了解更多
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={15}
            xl={15}
            style={{
              marginTop: '3rem',
            }}
          >
            <SvgIcon src={'allProblemBig.svg'} width="100%" height="" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
