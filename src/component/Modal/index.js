import React, { useEffect } from 'react';
import '../../assets/styles/modal.css';

const ModalPage = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const modalClose = () => {
        onClose(false);
    };

    return (
        <div className={`modal-page ${isOpen ? 'open' : ''}`} onClick={modalClose}>
            <div className="modal-page-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal-content'>
                    <div className='modal-top'>
                        <p></p>
                        <p><b>Welcome</b></p>
                        <a href="#" onClick={modalClose}>X</a>
                    </div>

                    <div className='modal-main'>
                        <p>This is window</p>
                        <div className='boxes'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>

                    <div className='modal-bottom'>
                        <button onClick={modalClose}>Close</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ModalPage;
