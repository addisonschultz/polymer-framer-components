import { LitElement, html, css } from "lit-element";

export class MyInput extends LitElement {
  /**
   * Define properties for input
   */
  static get properties() {
    return {
      value: { type: String },
      placeholder: { type: String },
      disabled: { type: Boolean },
      error: { type: String }
    };
  }
  /**
   * Assign default props
   */
  constructor() {
    super();
    this.value = "";
    this.placeholder = "Email";
    this.disabled = false;
    this.error = false;
  }
  /**
   * Define CSS for input
   */
  static get styles() {
    return css`
      :host {
      }
      input {
        background-color: #fdfdfd;
        border-radius: 4px;
        border: none;
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
        color: #222;
        font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica,
          sans-serif;
        font-size: 15px;
        font-weight: 500;
        margin: 0;
        outline: 0;
        overflow: visible;
        padding: 16px;
        transition: box-shadow 0.2s;
        width: 100%;
      }

      input:focus {
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          inset 0px 0px 0px 1px #75f, 0px 0px 0px 2px #eef;
      }

      input:focus::placeholder {
        opacity: 0.5;
        transition: opacity 0.2s;
      }

      .disabled {
        color: #aaa;
        pointer-events: none;
      }

      .error {
        color: #f44;
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          inset 0px 0px 0px 1px #f44;
      }

      .error:focus {
        box-shadow: inset 0px 1px 2px 0px rgba(0, 0, 0, 0.05),
          inset 0px 0px 0px 1px #f44, 0px 0px 0px 2px #fdd;
      }
    `;
  }
  /**
   * Render template
   */
  render() {
    return html`
      <input
        value=${this.value}
        placeholder=${this.placeholder}
        type="text"
        class="${this.error ? "error" : ""} ${this.disabled ? "disabled" : ""}"
      />
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-input", MyInput);
