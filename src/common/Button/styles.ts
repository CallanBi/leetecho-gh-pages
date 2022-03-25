import styled from 'styled-components';
import { COLOR_PALETTE } from '../../const/theme';

export const StyledButton = styled('button')<any>`
  background: ${p => p.color || COLOR_PALETTE.LEETECHO_WHITE};
  color: ${p =>
    p.color ? COLOR_PALETTE.LEETECHO_WHITE : COLOR_PALETTE.LEETECHO_BLACK};
  border: none;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: background 0.2s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    border: none;
    background-color: ${p =>
      p?.color
        ? COLOR_PALETTE.LEETECHO_BLUE
        : COLOR_PALETTE.LEETECHO_INPUT_HOVER_BG};
  }
`;
