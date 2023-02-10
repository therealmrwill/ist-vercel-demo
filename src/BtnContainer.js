import {LitElement, html} from 'lit';
import "@lrnwebcomponents/accent-card/accent-card.js";
import "@lrnwebcomponents/simple-colors/simple-colors.js";

class BtnContainer extends LitElement {

  static properties = {
      cardData: 
      {Type: Array},
      numberHorizontal: {Type: Number, attribute: 'num-horizontal', reflect: true},
      height: {Type: Number},
      width: {Type: Number},
      fullDataLists: {Type: Array}
  };

  constructor(){
    super();
    this.cardData = [{
      "side-one": "This is a test card",
      "side-two": "Which should not be seen",
      "height": 100,
      "width": 100,
      "color-1": "white",
      "color-2": "black"}];
    this.fullDataLists = [];
    this.numberHorizontal = 2;
    this.height = 100;
    this.width = 50;
  }


  firstUpdated(changedProperties){
    this.updateValues();
  }

  async updateValues(){
    const data = await fetch("api/cardData").then(res => res.json());
    this.cardData = data;
  }

  _prepList(){
    this.fullDataLists = [[]];

    var horizontalList = [];
    for(var i = 0; i < this.cardData.length; i++){
      horizontalList.push(this.cardData[i]);

      if((i + 1) % this.numberHorizontal == 0 ){
        this.fullDataLists.push(horizontalList);
        horizontalList = [];
      }
    }

    if(this.numberHorizontal.length > 0){
      this.fullDataLists.push(horizontalList); 
    }


  }


  render() {
    //Need to prep new maps for the horizontal and vertical lines 
    //Full list is a list of the horizontal lists 
    this._prepList();

    return html`
      <div style="display: block;">

        ${this.fullDataLists.map(horizontal => html`

          <div style="display: flex;">

          ${horizontal.map(item => html`

            <div
              style="padding: 48px;"
            >

              <accent-card 
                image-align = 'left'
                accent-color="${item['color-2']}"
                dark
                accent-background
                style="min-width: ${item.width}px; min-height='${item.height}px';"
                >
                <h1 slot="heading"> ${item['side-one']}</h1>
                <p slot="content">${item['side-two']}</p>

              </accent-card>

            </div>

            

          `)} 
          
          </div>

          `)}

        </div>
    `;
  }
}
customElements.define('btn-container', BtnContainer);