import CustomElements from "../Platform/CustomElements";

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const XLINK_NAMESPACE = "http://www.w3.org/1999/xlink";

export default {
  start: _app => {
    import(/* webpackChunkName: "icons-svg" */ "./Icon.svg").then(text => {
      CustomElements.define(
        "ui-icon-sprite",
        HTMLElement =>
          class extends HTMLElement {
            connectedCallback() {
              const div = document.createElement("div");
              div.style.display = "none";
              div.innerHTML = text.default;
              this.appendChild(div);
            }
          }
      );

      CustomElements.define(
        "ui-icon-view",
        HTMLElement =>
          class extends HTMLElement {
            constructor() {
              super();

              this._iconNode = null;

              this._iconName = this.iconName || "";
              delete this.iconName;

              this._createIcon = this._createIcon.bind(this);
            }

            set iconName(name) {
              if (this._iconName === name) return;
              this._iconName = name;
              this.removeChild(this._iconNode);
              this._iconNode = this._createIcon();
              this.appendChild(this._iconNode);
            }

            connectedCallback() {
              this._iconNode = this._createIcon();
              this.appendChild(this._iconNode);
            }

            _createIcon() {
              const svg = document.createElementNS(SVG_NAMESPACE, "svg");
              svg.setAttributeNS(
                null,
                "class",
                "block w-full h-full fill-current"
              );

              const use = document.createElementNS(SVG_NAMESPACE, "use");
              use.setAttributeNS(
                XLINK_NAMESPACE,
                "xlink:href",
                `#icon-${this._iconName}`
              );

              svg.appendChild(use);
              return svg;
            }
          }
      );
    });
  }
};
