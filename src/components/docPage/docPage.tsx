import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Container from '../../common/Container';
import DocsNavigation from './components/docsNavigation';
import to from 'await-to-js';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Col, Row } from 'antd';
import { COLOR_PALETTE } from '../../const/theme';
// import commonQuestions from '../../md/commonQuestions.md';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import WrappedLoading from '../../components/loading/wrappedLoading';

const { useRef, useState, useEffect, useMemo } = React;

interface DocPageProps {
  importFunc: () => Promise<typeof import('*.md')>;
}

const DocPage: React.FC<DocPageProps> = (props: DocPageProps) => {
  const { importFunc } = props;

  const [md, setMd] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const getMd = async () => {
    setIsLoading(true);
    const [mdImportErr, mdImport] = await to(importFunc());

    const [err, md] = await to(
      fetch(mdImport?.default || '').then(res => res.text())
    );

    if (err || mdImportErr) {
      setIsLoading(false);
      console.error(err);
      return '';
    }
    setIsLoading(false);
    return md;
  };

  useEffect(() => {
    getMd()
      .then(md => {
        setMd(md);
      })
      .catch(err => {
        /** noop */
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      style={{
        paddingTop: '2rem',
      }}
    >
      {isLoading ? (
        <WrappedLoading style={{ height: '20rem' }}></WrappedLoading>
      ) : (
        <Row>
          <Col
            xs={20}
            sm={5}
            md={5}
            lg={5}
            xl={5}
            style={{
              marginLeft: '-1rem',
              marginRight: '1.2rem',
            }}
          >
            <DocsNavigation style={{}} article={md || ''}></DocsNavigation>
          </Col>
          <Col
            xs={24}
            sm={18}
            md={18}
            lg={18}
            xl={18}
            style={
              {
                // marginLeft: 'rem',
              }
            }
          >
            <ReactMarkdown
              transformImageUri={uri => {
                return uri.replace('../../public/', './');
              }}
              children={md || ''}
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    style={{ maxWidth: '100%' }}
                    alt={props?.alt || ''}
                    {...props}
                  />
                ),
                code: ({ node, className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={solarizedlight}
                      customStyle={{
                        backgroundColor:
                          COLOR_PALETTE.LEETECHO_INPUT_BACKGROUND,
                      }}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code
                      style={{
                        backgroundColor:
                          COLOR_PALETTE.LEETECHO_INPUT_BACKGROUND,
                        padding: '0 0.6rem',
                      }}
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            ></ReactMarkdown>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DocPage;
