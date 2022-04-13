import { Component, JSX, Prop, h, Watch, State, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "dialog-component",
  styleUrl: "dialog-component.css",
  shadow: true
})
export class XModal {

  @Prop() dialogOpened: boolean;

  @State() visible: boolean = false;

  @Event() onclose: EventEmitter;

  @Event() onopen: EventEmitter;

  private handleOnClose = () => {
    this.visible = false;
    this.onclose.emit();
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
    // console.log('========componentWillLoad========')
  }

  // connectedCallback() {
  //   console.log('========connectedCallback========')
  // }

  // disconnectedCallback() {
  //   console.log('========disconnectedCallback========')
  // }

  // componentDidLoad() {
  //   console.log('========componentDidLoad========')
  // }

  // componentShouldUpdate() {
  //   console.log('========componentShouldUpdate========')
  // }

  // componentWillRender() {
  //   console.log('========componentWillRender========')
  // }

  // componentDidRender() {
  //   console.log('========componentDidRender========')
  // }

  // componentWillUpdate() {
  //   console.log('========componentWillUpdate========')
  // }

  // componentDidUpdate() {
  //   console.log('========componentDidUpdate========')
  // }

  public render(): JSX.Element {
    return (
      <div class={this.visible ? "x-modal-wrapper visible" : "x-modal-wrapper"}>
        <div class="x-modal">
          <h3 class="dialog__title">
            Stencil Dialog
          </h3>
          <p class="dialog__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button  type="button" class="btn btn--close dialog__btn" onClick={this.handleOnClose}>
              Close
          </button>
        </div>
      </div>
    );
  }
}