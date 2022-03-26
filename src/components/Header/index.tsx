import { useState } from 'react';
import { Row, Col, Drawer } from 'antd';
import { withTranslation } from 'react-i18next';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from './styles';
import { GithubOutlined } from '@ant-design/icons';
import { useRouter } from '../../hooks';

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const router = useRouter();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall
          onClick={() => {
            router?.push('./docs');
          }}
        >
          <Span>{t('文档')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => {
            router?.push('./questions');
          }}
        >
          <Span>{t('常见问题和迭代计划')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => {}}>
          <GithubOutlined
            onClick={() => {
              window.open('https://github.com/CallanBi/Leetecho', '_blank');
            }}
          />
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="156.8px" height="24" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: '2.5rem' }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
