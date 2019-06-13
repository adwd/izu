import { Component, h } from '@stencil/core';

@Component({
  tag: 'izu-input',
  styleUrl: 'izu-input.css',
  shadow: true,
})
export class IzuInput {
  render() {
    return (
      <div>
        <textarea></textarea>
      </div>
    );
  }
}
