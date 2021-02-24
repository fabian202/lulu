import React from 'react';
import styled from 'styled-components';
import { t } from '../utils/getTheme';

const TestComponent = ({ text }) => {
  return (
    <Content>
      {text}
    </Content>
  )
}

const Content = styled.div`
  margin: 1rem;
  padding: 1rem;
  color: ${t('pallette.primary')};
`;

export default TestComponent
