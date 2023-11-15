import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import closeModalIcon from '../../../../assets/close.png';
import {
  CloseModalIcon,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalWrapper,
} from './AuthModalStyles';

type AuthModalProps = {
  title: string;
  className: string;
  isOpen: boolean;
  onClose: () => void;
};

const AuthModal: FC<PropsWithChildren<AuthModalProps>> = ({
  title,
  className = '',
  isOpen = true,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <ModalWrapper className={className}>
      <ModalContainer>
        <ModalHeader>
          <CloseModalIcon
            src={closeModalIcon}
            alt="close-btn"
            onClick={() => onClose()}
          />
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalWrapper>,
    // eslint-disable-next-line
    // @ts-ignore
    document.getElementById('root'),
  );
};

export default AuthModal;
