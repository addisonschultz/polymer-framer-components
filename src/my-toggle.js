import { LitElement, html, css } from "lit-element";

export class MyToggle extends LitElement {
  /**
   * Define properties for toggle
   */
  static get properties() {
    return {
      disabled: { type: Boolean },
      on: { type: Boolean }
    };
  }
  /**
   * Assign default props
   */
  constructor() {
    super();
    this.disabled = false;
    this.on = false;
  }
  /**
   * Define CSS for toggle
   */
  static get styles() {
    return css`
      :host {
      }
      span {
        background: var(--paneBgDark, #fdfdfd);
        border-radius: 18px;
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          inset 0px 0px 0px 1px var(--paneBorder, rgba(0, 0, 0, 0.1));
        cursor: pointer;
        display: block;
        font-size: 14px;
        height: 36px;
        position: relative;
        transition: background-color 0.2s ease, box-shadow 0.2s ease;
        width: 64px;
      }

      span:before {
        content: "";
        display: block;
        position: absolute;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        top: 3px;
        left: 3px;
        background: var(--paneBg, #fff);
        transition: left 0.2s ease;
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
          0px 1px 2px 0px hsla(0, 0%, 0%, 0.08);
      }

      .on {
        background: var(--primary, #75f);
      }

      .on:before {
        left: 31px;
      }

      .disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    `;
  }
  /**
   * Event Handler to toggle state
   */
  handleToggle(e) {
    this.on = !this.on;
  }
  /**
   * Render template
   */
  render() {
    return html`
      <span
        class="${this.disabled ? "disabled" : ""} ${this.on ? "on" : ""}"
        @click="${this.handleToggle}"
      />
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-toggle", MyToggle);
