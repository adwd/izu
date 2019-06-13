import { Component, Event, EventEmitter, State, h } from '@stencil/core';

@Component({
  tag: 'izu-buttons',
  styleUrl: 'izu-buttons.css',
  shadow: true,
})
export class IzuButtons {
  @State() toggle = false;
  @Event({
    eventName: 'toggleOn',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) toggleOn: EventEmitter;
  @Event({
    eventName: 'toggleOff',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) toggleOff: EventEmitter;

  @State() write = false;
  @Event({
    eventName: 'writeOn',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) writeOn: EventEmitter;
  @Event({
    eventName: 'writeOff',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) writeOff: EventEmitter;

  handleToggle(current: boolean) {
    const next = !current
    this.toggle = next;
    if (next) {
      this.toggleOn.emit();
    } else {
      this.toggleOff.emit();
    }
  }

  handleWrite(current: boolean) {
    const next = !current
    this.write = next;
    if (next) {
      this.writeOn.emit();
    } else {
      this.writeOff.emit();
    }
  }

  render() {
    return (
      <div>
        <button class={`toggle ${this.toggle ? 'on' : 'off'}`}
          onClick={() => this.handleToggle(this.toggle)}>
        </button>
        <button class={`write ${this.write ? 'on' : 'off'}`}
          onClick={() => this.handleWrite(this.write)}>
        </button>
      </div>
    );
  }
}
