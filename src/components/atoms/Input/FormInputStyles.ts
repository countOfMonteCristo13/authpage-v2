import styled from 'styled-components';

export const StyledInput = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
`;

type InputProps = {
  $inputType?: string;
};

export const Input = styled.input.attrs<InputProps>(props => ({
  type: props.$inputType || 'text',
}))`
  padding: 0.2rem 0.4rem;
  border: 2px solid var(--color-purple);
  border-radius: 8px;
  color: var(--color-purple);
  height: 2rem;
  width: 100%;

  &:focus {
    border-color: var(--color-purple);
  }
`;

export const Label = styled.label`
  color: var(--color-purple);
  text-transform: capitalize;
`;
