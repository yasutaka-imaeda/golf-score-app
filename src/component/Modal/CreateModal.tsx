import React from "react";
import Modal from "react-modal";
import styles from "./CreateModal.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { setIsCreateModalOpen } from "../../app/modalSlice";

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

const CreateModal: React.FC<Props> = ({ isModalOpen }) => {
  const dispatch = useAppDispatch();
  const onCloseButtonClick = () => {
    dispatch(setIsCreateModalOpen(false));
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseButtonClick}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <div className={styles.text}>スコア登録しました。</div>
      <div className={styles.button} onClick={onCloseButtonClick}>
        閉じる
      </div>
    </Modal>
  );
};

export default CreateModal;
