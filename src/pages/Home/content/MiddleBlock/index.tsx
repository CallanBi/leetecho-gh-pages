import { Row, Col, Typography } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import { Button } from '../../../../common/Button';
import { MiddleBlockSection, ContentWrapper } from './styles';

const { Title } = Typography;

interface MiddleBlockProps {
  button?: string;
  t: any;
}

const withLiStyle = (style?: React.CSSProperties) => {
  return {
    ...style,
    paddingTop: '0.5rem',
  };
};

const MiddleBlock = ({ button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle" id={'explanation'}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title level={1}>Leetecho 释义</Title>
              <section style={{}}>
                <Typography.Title level={5} style={withLiStyle()}>
                  前四个字母 Leet: 即 LeetCode。
                </Typography.Title>
                <Typography.Title level={5} style={withLiStyle()}>
                  后五个字母 Techo: 日语中手帐（てちょう）的罗马音。手帐有
                  Notebook，Handbook 之类的含义。
                </Typography.Title>
                <Typography.Title level={5} style={withLiStyle()}>
                  后四个字母 Echo：这款产品能让你回顾起解题时的思路和状态。
                </Typography.Title>
              </section>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
