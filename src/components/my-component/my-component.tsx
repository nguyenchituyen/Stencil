import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css'
})
export class DemoModal {
  
  @State() isOpen: boolean = false;
  @Listen('click', { capture: true})
  handleOpen() {
    this.isOpen = true;
  }

  @Listen('onclose')
  handleOnClose() {
    this.isOpen = false;
  }


  render() {
    return ([
      <div class="app">
        <section>
            <nav role="navigation">
              <button type="button" class="btn" onClick={this.handleOpen} >
                Open Stencil Dialog
              </button>
            </nav>
        </section>
    </div>,
    <dialog-component dialog-opened={this.isOpen}></dialog-component>
    ]);
  }
}