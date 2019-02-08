import React, { Component } from "react"
import { Button, Modal, InputGroup, FormControl } from "react-bootstrap"

class TextModal extends Component {
  state = {
    text: ""
  }

  onSubmit = e => {
    e.preventDefault()
    const { onUploadText } = this.props
    const { text } = this.state
    onUploadText(text)
  }

  onChangeText = e => {
    const { value } = e.currentTarget
    this.setState(() => ({ text: value }))
  }

  render() {
    const { showModal, onCloseModal } = this.props
    return (
      <>
        <Button variant="primary" onClick={onCloseModal}>
          Launch demo modal
        </Button>

        <Modal show={showModal} onHide={onCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Here you can upload your own text and start to learn</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <FormControl
                as="textarea"
                rows="20"
                aria-label="With textarea"
                onChange={this.onChangeText}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Upload
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
export default TextModal
