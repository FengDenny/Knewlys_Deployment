export const openModal = ({ setOpacity, setModalOpen }) => {
  setOpacity(0);
  setModalOpen(true);
};

export const closeModal = (setModalOpen) => {
  setModalOpen(false);
};

export const afterOpen = ({ setOpacity }) => {
  setTimeout(() => {
    setOpacity(1);
  }, 100);
};

export const beforeClose = ({ setOpacity }) => {
  return new Promise((resolve) => {
    setOpacity(0);
    setTimeout(resolve, 200);
  });
};
