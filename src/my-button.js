import { LitElement, html, css } from "lit-element";

class MyButton extends LitElement {
  /**
   * Define properties for button
   */
  static get properties() {
    return {
      text: { type: String },
      fluid: { type: Boolean },
      disabled: { type: Boolean },
      kind: { type: String }
    };
  }
  /**
   * Assign default props
   */
  constructor() {
    super();
    this.text = "Download App";
    this.fluid = false;
    this.disabled = false;
    this.kind = "default";
  }
  /**
   * Define CSS for button
   */
  static get styles() {
    return css`
      :host {
      }
      /* Default Styles */
      button {
        height: 50px;
        width: 150px;
        border-radius: 4px;
        border: none;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        color: #222;
        font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica,
          sans-serif;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -0.2px;
        line-height: 1.1;
        margin: 0;
        text-align: center;
      }
      /* Hover Styles */
      button:hover {
        color: #444;
        transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
        box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
          0px 1px 1px 0px rgba(0, 0, 0, 0.05);
      }
      /* Active Styles */
      button:active {
        transition: none;
        color: #666;
        background-color: #fdfdfd;
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
      }
      /* Fluid Styles */
      .fluid {
        width: 100%;
      }

      /* Disabled Styles */
      .disabled {
        color: #aaa;
        pointer-events: none;
      }

      /* Primary Styles */
      .primary {
        background-color: #75f;
        color: #fff;
      }
      .primary:active {
        color: rgba(255, 255, 255, 0.7);
        background-color: #74f;
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
          inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
      }
      .primary:hover {
        color: rgba(255, 255, 255, 0.8);
        box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.15);
      }
      /* Danger Styles */
      .danger {
        background-color: #f44;
        color: #fff;
      }
      .danger:hover {
        color: rgba(255, 255, 255, 0.8);
        box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.2),
          0px 1px 1px 0px rgba(0, 0, 0, 0.15);
      }
      .danger:active {
        color: rgba(255, 255, 255, 0.6);
        background-color: #f34;
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2),
          inset 0px 0px 0px 1px hsla(0, 0%, 0%, 0.05);
      }

      button:focus {
        outline: 0;
      }
    `;
  }
  /**
   * Render button template
   */
  render() {
    return html`
      <button
        class="${this.fluid ? "fluid" : ""} ${this.disabled
          ? "disabled"
          : ""}  ${this.kind ? this.kind : ""}"
      >
        ${this.text}
      </button>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-button", MyButton);
