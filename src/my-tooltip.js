import { LitElement, html, css } from "lit-element";

export class MyTooltip extends LitElement {
  /**
   * Define properties for tooltip
   */
  static get properties() {
    return {
      arrow: { type: String },
      text: { type: String },
      error: { type: Boolean }
    };
  }
  /**
   * Assign default props
   */
  constructor() {
    super();
    this.arrow = "left";
    this.text = "Component";
    this.error = false;
  }
  /**
   * Define CSS for tooltip
   */
  static get styles() {
    return css`
      :host {
      }
      span {
        background: var(--bodyLight, #444);
        font-size: 11px;
        color: #fff;
        padding: 5px;
        border-radius: 3px;
        font-weight: 600;
        position: relative;
        display: inline-block;
        font-family: -apple-system, BlinkMacSystemFont, Arial, Helvetica,
          sans-serif;
      }

      span:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
      }

      .top:before,
      .bottom:before {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        left: 50%;
        transform: translateX(-2px);
      }

      .top:before {
        top: -4px;
        border-bottom: 4px solid var(--bodyLight, #444);
      }

      .bottom:before {
        bottom: -4px;
        border-top: 4px solid var(--bodyLight, #444);
      }

      .right:before,
      .left:before {
        top: 7px;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
      }
      .right:before {
        right: -4px;
        border-left: 4px solid var(--bodyLight, #444);
      }
      .left:before {
        left: -4px;
        border-right: 4px solid var(--bodyLight, #444);
      }

      .error {
        background-color: var(--danger, #f44);
      }

      .error.top:before {
        border-bottom-color: var(--danger, #f44);
      }
      .error.right:before {
        border-left-color: var(--danger, #f44);
      }
      .error.bottom:before {
        border-top-color: var(--danger, #f44);
      }
      .error.left:before {
        border-right-color: var(--danger, #f44);
      }
    `;
  }
  /**
   * Render template
   */
  render() {
    return html`
      <span
        class="${this.error ? "error" : ""} ${this.arrow ? this.arrow : ""}"
      >
        ${this.text}
      </span>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-tooltip", MyTooltip);
