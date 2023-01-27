const checkValue = (el, desc1, desc2, desc3) => {
  let current = el

  switch (true) {
    case el < 2:
      current = desc1
      break

    case el < 5:
      current = `${el + desc2}`
      break

    case el >= 5:
      current = `${el + desc3}`
      break
  }

  return current
}

export default checkValue
