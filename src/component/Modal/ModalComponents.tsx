import React from "react";
import Modal from "react-modal";
import { useAppDispatch } from "../../app/hooks";
import {
  setIsCreateModalOpen,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
} from "../../app/modalSlice";

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
  ModalInfo: {
    isModalOpen: boolean;
    setModal: string;
  };
};

const ModalComponents: React.FC<Props> = ({ ModalInfo }) => {
  const dispatch = useAppDispatch();
  const onCloseButtonClick = () => {
    if (ModalInfo.setModal === "create") {
      dispatch(setIsCreateModalOpen(false));
    }
    if (ModalInfo.setModal === "edit") {
      dispatch(setIsEditModalOpen(false));
    }
    if (ModalInfo.setModal === "delete") {
      dispatch(setIsDeleteModalOpen(false));
    }
  };

  return (
    <>
      {() => {
        if (ModalInfo.setModal === "create") {
          return (
            <Modal
              isOpen={ModalInfo.isModalOpen}
              onRequestClose={onCloseButtonClick}
              ariaHideApp={false}
              shouldCloseOnOverlayClick={true}
              style={customStyles}
            >
              <div>スコア登録しました。</div>
            </Modal>
          );
        }
        if (ModalInfo.setModal === "edit") {
          return (
            <Modal
              isOpen={ModalInfo.isModalOpen}
              onRequestClose={onCloseButtonClick}
              ariaHideApp={false}
              shouldCloseOnOverlayClick={true}
              style={customStyles}
            >
              <div>更新しました。</div>
            </Modal>
          );
        }
        if (ModalInfo.setModal === "delete") {
          return (
            <Modal
              isOpen={ModalInfo.isModalOpen}
              onRequestClose={onCloseButtonClick}
              ariaHideApp={false}
              shouldCloseOnOverlayClick={true}
              style={customStyles}
            >
              <div>削除しました。</div>
            </Modal>
          );
        }
      }}
    </>
  );
};

export default ModalComponents;
