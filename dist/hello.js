import { LitElement, html, css } from 'lit';
class TestComponent extends LitElement {
    render() {
        return html `
      <div>Hello, world!</div>
    `;
    }
}
TestComponent.styles = css `
    /* CSS styles for your component */
  `;
export default TestComponent;
customElements.define('my-web-component', TestComponent);
