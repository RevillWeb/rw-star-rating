/**
 * Created by Leon.Revill on 07/02/2017.
 */
class RwStarRating extends HTMLElement {
    constructor() {
        super();
        this._root = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this._root.innerHTML = `
            <style>
                .container {
                  unicode-bidi: bidi-override;
                  color: #c5c5c5;
                  font-size: 25px;
                  height: 25px;
                  width: 125px;
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
                  z-index: 0;
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
                <div class="top" style="width: 84%">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div class="bottom">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
            </div>
        `;
    }
}
window.customElements.define("rw-star-rating", RwStarRating);
