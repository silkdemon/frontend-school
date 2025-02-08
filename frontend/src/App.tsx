import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Main openModal={openModal} />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;