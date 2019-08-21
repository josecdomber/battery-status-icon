import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';

/**
 * # Battery status icon
 *
 * <jcdb-battery-status-icon></jcdb-battery-status-icon>
 *
 * Web component to create battery level icons, with customized design. Based on LitElement.
 *
 * ## Styling
 *
 * ```
 * <jcdb-battery-status-icon
 *   icon="text to select the available icon"
 * ></jcdb-battery-status-icon
 * ```
 *
 * Custom property | Description | Default
 * ----------------|-------------|---------
 * --jcdb-battery-status-icon-size | Font size for the icon | 24px
 * --jcdb-battery-status-icon-color | Color for the icon | #888
 *
 */

export class JcdbBatteryStatusIcon extends LitElement {

    static get properties() {
        return {
        /** Text to select the icon */
            icon: { type: String }
        };
    }

    constructor() {
        super();
        this.icon = 'battery_full'
    }

    static get styles() {
        return css`
          :host[hidden] { display: none; }
          :host { display: inline-block; }
          path {
            fill: var(--jcdb-battery-status-icon-color, #888);
          }
          path[fill="none"] {
            fill: transparent;
          }
          svg {
            width: var(--jcdb-battery-status-icon-size, 24px);
            height: var(--jcdb-battery-status-icon-size, 24px);
          }
          div { display: flex;}
        `;
      }

    render() {
        return html`
        <div>
            ${this._getIcon(this.icon)}
        </div>
        `;
    }

    _getIcon(icon) {
        return icons[icon];
    }
}
customElements.define('jcdb-battery-status-icon', JcdbBatteryStatusIcon);