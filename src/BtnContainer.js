import {LitElement, html} from 'lit';

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
    const data = await fetch("src/JSON/test.json").then(res => res.json());
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

            <test-btn 
              sideOneData="${item['side-one']}"
              sideTwoData="${item['side-two']}"
              height= "${item.height}"
              width="${item.width}"
              color1="${item['color-1']}"
              color2="${item['color-2']}"
            ></test-btn>

          `)} 
          
          </div>

          `)}

        </div>
    `;
  }
}
customElements.define('btn-container', BtnContainer);