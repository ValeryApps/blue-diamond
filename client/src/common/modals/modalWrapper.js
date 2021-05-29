import { useDispatch } from "react-redux";
import { Modal } from "semantic-ui-react";
import { closeModal } from "./modalReducer";

export const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch();
  return (
    <Modal open={true} onClose={() => dispatch(closeModal())} size={size}>
      {header && <Modal.Header className="text-center bg-danger text-white">{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};
