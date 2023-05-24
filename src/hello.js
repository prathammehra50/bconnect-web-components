import { LitElement, html, css } from 'lit';

export default class TestComponent extends LitElement {
  static styles = css`
    /* CSS styles for your component */
  `;

  render() {
    return html`
      <div>Hello, world!</div>
    `;
  }
}

customElements.define('my-web-component', TestComponent);
