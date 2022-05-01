import { Row, Col, Typography } from 'antd';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../../../../../common/SvgIcon';
import { Fade } from 'react-awesome-reveal';
import { LeftContentSection, Content } from './styles';

export type LeftContentBlockProps = {
  t: any;
  id: string;
};

const LeftContentBlock = ({ t, id }: LeftContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Row>
            <Row>
              <Col span={24}>
                <Content>
                  <Typography.Title level={2}>
                    可自定义的题集筛选
                  </Typography.Title>
                  <Typography.Paragraph
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    使用 leetecho
                    提供的模板语法能力，选择你所需要展示的题集作为封面索引。
                  </Typography.Paragraph>
                </Content>
              </Col>
            </Row>
          </Row>
          <Row
          // style={{
          //   marginLeft: '-2rem',
          // }}
          >
            <SvgIcon src={'custom-filter-svg.svg'} width="100%" height="" />
          </Row>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
