import { useState } from 'react';
import Header from './components/organisms/Header/Header';
import ModalType from './components/organisms/ModalType/ModalType';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const toggleModal = (action: string) => {
    setIsModalOpen(true);
    setModalType(action);
    console.log(action);
  };

  return (
    <>
      <main>
        <Header openModal={toggleModal} />
      </main>
      <ModalType
        modalType={modalType}
        closeModal={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </>
  );
}

export default App;
