class RwStarRating extends HTMLElement {
    constructor() {
        super();
        // Shadow Root
        this._root = this.attachShadow({ mode: "open" });
        // Elements
        this._$top = null;
        // Data
        this._value = null;
    }
    set value(value) {
        if (this._value === value) return;
        this._value = value;
        if (this._$top !== null) {
            this._$top.style.width = ((value * 10) * 2) + "%";
        }
    }
    get value() {
        return this._value;
    }
    connectedCallback() {
        this._root.innerHTML = `
            <style>
                :host {
                    width: 125px;
                    height: 35px;
                    display: inline-block;
                    contain: content;
                    overflow: hidden;
                    user-select: none;
                }
                .container {
                  unicode-bidi: bidi-override;
                  color: #c5c5c5;
                  font-size: 25px;                            
                  margin: 0 auto;
                  position: relative;
                  padding: 0;
                  cursor: pointer;
                }
                :host([readonly]) .container {
                    cursor: inherit;
                }
                .container .top {
                  color: #e7bd06;
                  padding: 0;
                  position: absolute;
                  z-index: 1;
                  display: block;
                  top: 0;
                  left: 0;
                  overflow: hidden;                 
                }
                .container:hover .top {
                    display: none;
                }
                :host([readonly]) .container .top {
                    display: block;
                }               
                .container .bottom {
                  padding: 0;
                  display: block;
                  position: absolute;
                  top: 0;
                  left: 0;
                  direction: rtl;
                }
                .container .bottom > span:hover,
                .container .bottom > span:hover ~ span {               
                   color: #e7bd06;
                }
                :host([readonly]) .container .bottom > span:hover,
                :host([readonly]) .container .bottom > span:hover ~ span {
                    color: inherit;
                }
            </style>
            <div class="container">
                <div class="top">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div class="bottom">
                    <span data-value="5">★</span><span data-value="4">★</span><span data-value="3">★</span><span data-value="2">★</span><span data-value="1">★</span>                   
                </div>
            </div>
        `;
        this._$top = this._root.querySelector(".top");
        this._$bottom = this._root.querySelector(".bottom");
        this._$bottom.addEventListener("click", (event) => {
            if (event.target.dataset.value !== undefined) {
                this.value = event.target.dataset.value;
            }
        })
    }

}
window.customElements.define("rw-star-rating", RwStarRating);
