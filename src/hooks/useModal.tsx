import {
  ModalContext,
  ModalParams,
  ModalType,
} from "@components/provider/ModalProvider";
import { useContext } from "react";

export default function useModal() {
  const { isModalOpen, openModal, closeModal, type, data } =
    useContext(ModalContext);
  return {
    isModalOpen,
    openModal: ({ type = ModalType.Basic, data }: ModalParams) => {
      openModal({ type, data });
    },
    closeModal,
    type,
    data,
  };
}
