import { StyledButton } from './styles';
import { ButtonProps } from '../types';

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  style = {},
}: ButtonProps) => (
  <StyledButton
    color={color}
    fixedWidth={fixedWidth}
    onClick={onClick}
    style={style}
  >
    {children}
  </StyledButton>
);
