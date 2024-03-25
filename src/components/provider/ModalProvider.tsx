import RootModal from "@components/global/modals/RootModal";
import { ReactNode, createContext, useState } from "react";

export interface ModalData {
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface ModalParams {
  type: string;
  data: ModalData;
}

export const ModalType = {
  Basic: "basic",
  // Confirm: "confirm",
  // Success: "success",
  // Loading: "loading",
  // Warning: "warning",
  // Error: "error",
};

export const ModalContext = createContext({
  isModalOpen: false,
  openModal: ({ ...params }: ModalParams) => {},
  closeModal: () => {},
  type: ModalType.Basic,
  data: {},
});

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState(ModalType.Basic);
  const [data, setData] = useState({});

  const openModal = ({ type, data }: ModalParams) => {
    setType(type);
    setData(data);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setType(ModalType.Basic);
    setData({});
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen: modal,
        openModal,
        closeModal,
        type,
        data,
      }}>
      <RootModal />
      {children}
    </ModalContext.Provider>
  );
}
