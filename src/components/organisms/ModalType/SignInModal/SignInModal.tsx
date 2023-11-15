import { FC } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import AuthModalForm from '../../../moleculs/AuthModalForm/AuthModalForm';

type SignInModalProps = {
  onClose: () => void;
  isOpen: boolean;
  toggleModal: (action: string) => void;
};

const SignInModal: FC<SignInModalProps> = ({
  onClose,
  isOpen,
  toggleModal,
}) => {
  return (
    <AuthModal title="Sign In" onClose={onClose} isOpen={isOpen} className="">
      <AuthModalForm
        primaryBtn="Sign in"
        secondaryBtn="Don't have an account?"
        redirectModalLink="Sign up"
        toggleModal={toggleModal}
      />
    </AuthModal>
  );
};

export default SignInModal;
