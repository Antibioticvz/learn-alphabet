import React from "react"
import PropTypes from "prop-types"

import { Button } from "react-bootstrap"

export const BUTTON_STYLES = {
  MISSING: "danger",
  PUSHED: "info",
  NORMAL: "light"
}

const LetterButton = ({ style, letter, letterKey, disabled, onSelectLetter }) => (
  <Button variant={style} disabled={disabled} onClick={() => onSelectLetter(letterKey, letter)}>
    {letter}
  </Button>
)

LetterButton.propTypes = {
  style: PropTypes.oneOf(Object.values(BUTTON_STYLES)),
  letter: PropTypes.string.isRequired,
  letterKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool.isRequired,
  onSelectLetter: PropTypes.func
}
LetterButton.defaultProps = {
  style: BUTTON_STYLES.NORMAL,
  onSelectLetter: () => console.log("hi")
}
export default LetterButton
