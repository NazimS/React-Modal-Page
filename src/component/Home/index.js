import React, {useState} from 'react';
import Button from '../Button';
import ModalPage from '../Modal';
import '../../assets/styles/home.css';


function Home() {

  const [isModalPageOpen, setIsModalPageOpen] = useState(false);

  const openModalPage = () => {
    setIsModalPageOpen(true);
  };

  const closeModalPage = () => {
    setIsModalPageOpen(false);
  };

  return (
    <div className='content'>
        <Button onClick={openModalPage} />
        <ModalPage isOpen={isModalPageOpen} onClose={closeModalPage} />
    </div>
  )
}

export default Home