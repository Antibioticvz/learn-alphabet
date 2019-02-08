import React, { Component } from "react"
import { Navbar } from "react-bootstrap"

import ButtonsBar from "./components/buttons_bar"
import TextModal from "./components/text_modal"
import pairs, { alphabet } from "./pairs/engge"

import "./App.css"

// const text = "There are many ways that reading helps you to learn English."
// "There are many ways that reading helps you to learn English, but reading itself is an important life skill. In everyday life we use reading to get information about the world around us. There are signs on the street. Can you park your car here? Which days can you park? How long? There are letters from school or utility companies that come in the mail. There are also bus schedules, bills, medicine labels, ads, health care pamphlets, and technical manuals for our electronic devices. When you are new to a country, this is the first kind of reading you need. USA Learns will help prepare you with the Life Skills reading activities. health care pamphlets, and technical manuals for our electronic devices. When you are new to a country, this is the first kind of reading you need. USA Learns will help prepare you with the Life Skills reading activities. health care pamphlets, and technical manuals for our electronic devices. When you are new to a country, this is the first kind of reading you need. USA Learns will help prepare you with the Life Skills reading activities. health care pamphlets, and technical manuals for our electronic devices. When you are new to a country, this is the first kind of reading you need. USA Learns will help prepare you with the Life Skills reading activities. health care pamphlets, and technical manuals for our electronic devices. When you are new to a country, this is the first kind of reading you need."

class App extends Component {
  state = {
    showModal: true,
    pushed: {},
    text: "There are many ways that reading helps you to learn foreign language."
  }

  // Buttons options
  onSelectLetter = (key, letter) => {
    const { pushed } = this.state
    if (Object.values(pushed).indexOf(letter) < 0) {
      this.setState(state => ({
        pushed: { ...state.pushed, ...{ [key]: letter } }
      }))
    } else {
      const { [key]: letter, ...other } = this.state.pushed

      this.setState(() => ({ pushed: other }))
    }
  }
  // Buttons options END

  // Upload text modal
  onUploadText = text => this.setState(() => ({ text, showModal: false }))

  onCloseModal = () => this.setState(() => ({ showModal: false }))

  onOpenModal = () => this.setState(() => ({ showModal: false }))
  // Upload text modal END

  render() {
    const { pushed, text, showModal } = this.state

    let newText = text
    Object.keys(pushed).map((key, index) => {
      var search_term = new RegExp(key, "gi")
      return (newText = newText.replace(search_term, pushed[key]))
    })

    return (
      <>
        <TextModal
          showModal={showModal}
          onUploadText={this.onUploadText}
          onCloseModal={this.onCloseModal}
        />
        <Navbar bg="dark" fixed={"top"}>
          <ButtonsBar
            alphabet={alphabet}
            pushed={pushed}
            pairs={pairs}
            onSelectLetter={this.onSelectLetter}
          />
        </Navbar>

        <div className="App-body">
          <p>{newText}</p>
        </div>
      </>
    )
  }
}

export default App
