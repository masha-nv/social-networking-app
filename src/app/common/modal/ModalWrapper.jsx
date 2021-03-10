import React from "react";
import { useDispatch } from "react-redux";
import { Modal, ModalContent, ModalHeader } from "semantic-ui-react";
import { closeModal } from "./modalReducer";

const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch();
  return (
    <Modal onClose={() => dispatch(closeModal())} open={true} size={size}>
      {header && <ModalHeader>{header}</ModalHeader>}
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default ModalWrapper;
