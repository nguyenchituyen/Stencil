import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})

export class MyInput {
  @Prop() placeholder: string;

  @Prop() type: string;

  @Event() onblur: EventEmitter;

  @Event() oninput: EventEmitter;

  @Event() onchange: EventEmitter;

  @Event() onclick: EventEmitter;

  @Event() onfocus: EventEmitter;

  render() {
    return (
      <input 
        type={this.type}
        placeholder={this.placeholder} 
        onBlur={(e) => this.onblur.emit(e)} 
        onFocus={(e) => this.onfocus.emit(e)} 
        onInput={(e) => this.oninput.emit(e)}
        onClick={(e) => this.onclick.emit(e)}
        onChange={(e) => this.onchange.emit(e)}
      />
    );
  }

}
