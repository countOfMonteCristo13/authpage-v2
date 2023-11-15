import { FC } from 'react';
import RegisterModal from './RegisterModal/RegisterModal';
import SignInModal from './SignInModal/SignInModal';

type ModalTypeProps = {
  modalType: string;
  closeModal: () => void;
  isModalOpen: boolean;
  toggleModal: (action: string) => void;
};

const ModalType: FC<ModalTypeProps> = ({
  modalType,
  closeModal,
  isModalOpen,
  toggleModal,
}) => {
  if (modalType === 'Sign up') {
    return (
      <RegisterModal
        onClose={closeModal}
        isOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    );
  } else if (modalType === 'Sign in') {
    return (
      <SignInModal
        onClose={closeModal}
        isOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    );
  }
  return null;
};

export default ModalType;
