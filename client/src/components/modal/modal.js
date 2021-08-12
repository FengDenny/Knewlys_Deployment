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

// modal context

const switchToSignup = (setActive) => {
  setTimeout(() => {
    setActive("signup");
  }, 200);
};

const switchToSignin = (setActive) => {
  setTimeout(() => {
    setActive("signin");
  }, 200);
};

const switchToForgotPassword = (setActive) => {
  setTimeout(() => {
    setActive("forgot");
  }, 200);
};

const switchToRedirect = (setActive) => {
  setTimeout(() => {
    setActive("redirect");
  }, 200);
};

export const contextValue = {
  switchToSignup,
  switchToSignin,
  switchToForgotPassword,
  switchToRedirect,
};
