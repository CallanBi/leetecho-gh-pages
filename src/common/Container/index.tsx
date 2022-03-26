import { StyledContainer } from './styles';
import { ContainerProps } from '../types';

const Container = ({ border, children, style = {} }: ContainerProps) => (
  <StyledContainer style={style} border={border}>
    {children}
  </StyledContainer>
);

export default Container;
