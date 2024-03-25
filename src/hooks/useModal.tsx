import {
  ModalContext,
  ModalParams,
  ModalType,
} from "@components/provider/ModalProvider";
import { useContext } from "react";
import { ModalData } from '@components/provider/ModalProvider';

export default function useModal() {
  const { isModalOpen, openModal, closeModal, type, data } =
    useContext(ModalContext);
  return {
    isModalOpen,
    openModal: ({ type = ModalType.Basic, data }: ModalParams) => {
      openModal({ type, data });
    },
    closeModal,
    type: type as string,
    data: data as ModalData,
  };
}
