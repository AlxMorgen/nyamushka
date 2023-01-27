const handlerClick = (select, setSelect, setQuestion, event) => {
  if (
    event.target.parentNode.classList.contains('disable') ||
    event.target.classList.contains('border')
  ) {
    return
  }
  if (select) {
    setQuestion(false)
  }
  setSelect(!select)

  return
}

const handlerHover = (select, quest, setQuest) => {
  if (select) {
    setQuest(!quest)
  }

  return
}

const handlerLeave = (select, setQuest) => {
  if (select) {
    setQuest(false)
  }

  return
}

export { handlerClick, handlerHover, handlerLeave }
