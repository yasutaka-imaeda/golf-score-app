import React from "react";
import Modal from "react-modal";
import { useAppDispatch } from "../../app/hooks";
import { setIsDeleteModalOpen } from "../../app/modalSlice";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type Props = {
  isModalOpen: boolean;
};

const DeleteModal: React.FC<Props> = ({ isModalOpen }) => {
  const dispatch = useAppDispatch();
  const onCloseButtonClick = () => {
    dispatch(setIsDeleteModalOpen(false));
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseButtonClick}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <div>削除しました。</div>
      <div onClick={onCloseButtonClick}>閉じる</div>
    </Modal>
  );
};

export default DeleteModal;
