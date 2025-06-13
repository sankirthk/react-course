import React, { useEffect } from "react";

interface ModalProps {
  modalContent: string;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <>
      <p>{modalContent}</p>
    </>
  );
};

export default Modal;
