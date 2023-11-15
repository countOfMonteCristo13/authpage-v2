import styled from 'styled-components';

export const ModalWrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(195, 172, 208, 0.45);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
`;

export const ModalContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--color-base);
  color: var(--color-purple);
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  border: 4px solid var(--color-purple);
`;

export const ModalHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

export const CloseModalIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  max-width: 2rem;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
