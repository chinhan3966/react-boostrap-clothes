export const disableScrollBody = (hasEnable) => {
  const bodyElement = document.querySelector("body");

  if (hasEnable) {
    bodyElement.classList.add("disable-scroll");
  } else {
    bodyElement.classList.remove("disable-scroll");
  }
};

export const disableScrollBodyMobile = (hasEnable) => {
  const bodyElement = document.querySelector("body");

  if (hasEnable) {
    bodyElement.classList.add("disable-scroll-mobile");
  } else {
    bodyElement.classList.remove("disable-scroll-mobile");
  }
};
