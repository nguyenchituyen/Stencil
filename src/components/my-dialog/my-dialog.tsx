import { Component, JSX, Prop, h, Watch, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "my-dialog",
  styleUrl: "my-dialog.css",
  shadow: true
})
export class MyDialog {

  @Prop() dialogOpened: boolean;

  @State() visible: boolean = false;

  @Event() onclose: EventEmitter;

  @Event() onopen: EventEmitter;

  private handleOnClose = () => {
    this.visible = false;
  };

  @Watch('visible')
  watchStateVisible() {
    if(this.visible) {
      this.onopen.emit();
    } else {
      this.onclose.emit();
    }
  }

  @Watch('dialogOpened')
  watchPropHandler(dialogOpened: boolean) {
    this.visible = dialogOpened;
  }

  componentWillLoad() {
    this.watchPropHandler(this.dialogOpened);
  }

  public render(): JSX.Element {
    return (
      <div class={this.visible ? "x-modal-wrapper visible" : "x-modal-wrapper"}>
        <div class="x-modal">
          <h3 class="dialog__title">
            Stencil Dialog
          </h3>
          <slot></slot>
          <button  type="button" class="btn btn--close dialog__btn" onClick={this.handleOnClose}>
              Close
          </button>
        </div>
      </div>
    );
  }
}