const checkValue = (el, desc1, desc2, desc3) => {
    let current = el;
  if (el < 2) {
    current = desc1;
  }

  if (el >= 2) {
    current = `${el + desc2}`;
  }

  if (el >= 5) {
    current = `${el + desc3}`;
  }
  return current;
};

export default checkValue;
