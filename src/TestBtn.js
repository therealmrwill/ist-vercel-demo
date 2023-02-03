import { html, css, LitElement } from 'lit';

export class TestBtn extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;

    }
    div {
      padding: 50px;
      border-radius: 25px;
    }
    p {
      text-align: center;
      margin: auto;
      width: 50%;
      word-break: keep-all;
      font-size: 30px;
    }
  `;
    
    
  static properties = {
    //You can still comment in js
    currentSide: {type: Boolean},
    sideOneData: {type: String},
    sideTwoData: {type: String}, 
    height: {type: Number},
    width: {type: Number},
    color1: {type: String},
    color2: {type: String},
    coloredText: {type: Boolean}
  };

  constructor() {
    super();
    this.currentSide = true;
    this.sideOneData = "No Data Entered (Side 1)";
    this.sideTwoData = "No Data Entered (Side 2)";
    this.height = 300;
    this.width = 150;
    this.color1 = "#AAAE7F";
    this.color2 = "#143109"; 
    this.coloredText = true;
  }

  __flip() {
     this.currentSide = !this.currentSide;

     console.log("Attempting to flip")
  }

  render() {
    var tempString = (this.currentSide) ? this.sideOneData : this.sideTwoData;
    var backgroundColor = (this.currentSide) ? this.color1 : this.color2;

    console.log(this.coloredText);

    var textColor = (this.coloredText == "True") ? ((this.currentSide) ? this.color2 : this.color1) : "white"; 

    console.log(textColor);

    return html`
      <div 
        @click=${this.__flip}
        style="
        height: ${this.height}px;
        width: ${this.width}px;
        background-color: ${backgroundColor};
        color: ${textColor};
        "> 

      <p>${tempString}</p>
      </div>
    `;
  }
}

customElements.define('test-btn', TestBtn);