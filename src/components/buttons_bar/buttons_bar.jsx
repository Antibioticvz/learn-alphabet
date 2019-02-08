import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { ButtonToolbar } from "react-bootstrap"

import Button from "./components/letter_button"
import { BUTTON_STYLES } from "./components/letter_button/letter_button"

export default class ButtonsBar extends PureComponent {
  static propTypes = {
    alphabet: PropTypes.arrayOf(PropTypes.string).isRequired,
    pushed: PropTypes.shape({}),
    pairs: PropTypes.shape({}),
    onSelectLetter: PropTypes.func
  }
  static defaultProps = {
    alphabet: [],
    pushed: {},
    pairs: {},
    onSelectLetter: () => {}
  }

  getStyle = letter => {
    const { pushed, pairs } = this.props

    const valuesOfPairs = Object.values(pairs)

    if (!valuesOfPairs.includes(letter)) return BUTTON_STYLES.MISSING

    if (Object.values(pushed).indexOf(letter) > -1) return BUTTON_STYLES.PUSHED

    return BUTTON_STYLES.NORMAL
  }

  render() {
    const { alphabet, pairs, onSelectLetter } = this.props
    const valuesOfPairs = Object.values(pairs)
    return (
      <ButtonToolbar className="d-flex flex-row justify-content-center align-items-center">
        {alphabet.map((letter, i) => {
          const key = Object.keys(pairs).find(key => pairs[key] === letter)
          return (
            <div key={letter}>
              <Button
                style={this.getStyle(letter)}
                disabled={!valuesOfPairs.includes(letter)}
                onSelectLetter={onSelectLetter}
                letter={letter}
                letterKey={key || i}
              />
            </div>
          )
        })}
      </ButtonToolbar>
    )
  }
}
