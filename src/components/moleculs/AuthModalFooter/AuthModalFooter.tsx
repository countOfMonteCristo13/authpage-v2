import { FC } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

type AuthModalFooterProps = {
  primaryBtn: string;
  secondaryBtn: string;
  redirectModalLink: string;
  toggleModal: (action: string) => void;
  onSubmit: () => void;
};

const AuthModalFooter: FC<AuthModalFooterProps> = ({
  primaryBtn,
  secondaryBtn,
  redirectModalLink,
  toggleModal,
  onSubmit,
}) => {
  return (
    <StyledModalFooter>
      <Button label={primaryBtn} onClick={onSubmit} />
      <RedirectModalButton
        type="secondary"
        label={secondaryBtn}
        onClick={() => toggleModal(redirectModalLink)}
      />
    </StyledModalFooter>
  );
};

const StyledModalFooter = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const RedirectModalButton = styled(Button)`
  border: unset;
  width: fit-content;
  background: transparent;

  &:not(:disabled):hover {
    border: unset;
    text-decoration: underline;
  }
`;

export default AuthModalFooter;
