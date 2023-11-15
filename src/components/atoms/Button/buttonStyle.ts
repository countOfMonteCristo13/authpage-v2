import styled from 'styled-components';
import { ButtonType } from './Button';

export const StyledButton = styled.button<{
  $buttonType: ButtonType;
  $disabled: boolean;
}>`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  width: 6rem;
  font-weight: bold;

  color: ${props => {
    if (props.$buttonType === 'primary') {
      return 'white';
    }

    if (props.$buttonType === 'secondary') {
      return 'var(--color-purple)';
    }
  }};

  background: ${props => {
    if (props.$buttonType === 'primary') {
      return 'var(--color-purple)';
    }

    if (props.$buttonType === 'secondary') {
      return 'white';
    }
  }};

  opacity: ${props => {
    if (props.$disabled) {
      return '0.5';
    }
  }};

  border: ${props => {
    if (props.$buttonType === 'secondary') {
      return '2px solid var(--color-purple)';
    }
  }};

  &:not(:disabled):hover {
    cursor: ${props => (props.$disabled ? 'default' : 'pointer')};
    background-color: ${props => {
      if (!props.$disabled && props.$buttonType === 'primary') {
        return 'var(--color-darkpurple)';
      }
    }};

    color: ${props => {
      if (!props.$disabled && props.$buttonType === 'primary') {
        return 'white';
      }

      if (!props.$disabled && props.$buttonType === 'secondary') {
        return 'var(--color-darkpurple)';
      }
    }};

    border: ${props => {
      if (!props.$disabled && props.$buttonType === 'secondary') {
        return '2px solid var(--color-darkpurple)';
      }
    }};
  }
`;
