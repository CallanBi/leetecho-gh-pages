import { lazy } from 'react';
import Intro from './content/intro';

// const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import('./content/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const CustomFilterFeature = lazy(() => import('./content/customFilterFeature'));
const QuickReferFeature = lazy(() => import('./content/quickReferFeature'));
const GoodFlowFeature = lazy(() => import('./content/goodFlowFeature'));
const NiceGenerateFeature = lazy(() => import('./content/niceGenerateFeature'));
const Download = lazy(() => import('./content/download'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <Intro></Intro>
      <MiddleBlock />
      <CustomFilterFeature></CustomFilterFeature>
      <QuickReferFeature></QuickReferFeature>
      <GoodFlowFeature id={'goodFlow'}></GoodFlowFeature>
      <NiceGenerateFeature></NiceGenerateFeature>
      <Download></Download>
    </Container>
  );
};

export default Home;
