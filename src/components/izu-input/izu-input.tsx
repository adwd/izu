import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'izu-input',
  styleUrl: 'izu-input.css',
  shadow: true,
})
export class IzuInput {
  @State() show = false;

  @Listen('writeOn', { target: 'body' })
  handleShow() {
    this.show = true;
  }

  @Listen('writeOff', { target: 'body' })
  handleHide() {
    this.show = false;
  }

  render() {
    if (!this.show) {
      return null;
    }

    return (
      <div>
        <textarea></textarea>
      </div>
    );
  }
}
