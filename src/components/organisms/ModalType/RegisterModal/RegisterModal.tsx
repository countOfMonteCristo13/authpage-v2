import { FC } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import AuthModalForm from '../../../moleculs/AuthModalForm/AuthModalForm';

type RegisterModalProps = {
  onClose: () => void;
  isOpen: boolean;
  toggleModal: (action: string) => void;
};

const RegisterModal: FC<RegisterModalProps> = ({
  onClose,
  isOpen,
  toggleModal,
}) => {
  return (
    <AuthModal title="Register" onClose={onClose} isOpen={isOpen} className="">
      <AuthModalForm
        primaryBtn="Sign up"
        secondaryBtn="Already have an account?"
        redirectModalLink="Sign in"
        toggleModal={toggleModal}
      />
    </AuthModal>
  );
};

export default RegisterModal;
