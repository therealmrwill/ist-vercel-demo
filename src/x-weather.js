import { LitElement, html, css } from 'lit';

class XWeather extends LitElement {
	static get properties() {
		return {
			endpoint: { type: String },
			city: { type: String, reflect: true },
			weather: { type: Object }
		}
	}

	constructor() {
		super();
		this.city = 'Boston';
		this.weather = {};
		this.endpoint = '/api/weather';
	}

	updated(changedProperties) {
		changedProperties.forEach((old, propName) => {
			if (propName === 'city') {
				this.getWeather(this[propName]);
			}
		});
	}

	async getWeather(city) {
		console.log("Trying to fetch from: " + `${this.endpoint}?city=${city}`);

		const weather = await fetch(`${this.endpoint}?city=${city}`).then(res => res.json());
		this.weather = weather?.weather[0];

		const testVal = await fetch()


		console.log("This is the weather for " + this.city + ": " + this.weather);
	}
	static get styles() {
		return css`
			:host {
				display: block;
			}
			.overcast {
				color: white;
				background-color: #555555;
			}
			.mist {
				color: blue;
				background-color: black;
			}
			.clear.sky {
				color: black;
				background-color: blue;
			}
			.snow {
				background-color: orange;
				color: white;
			}
		`;
	}
	render() {
		if(this.weather == null){
			console.log("Weather is null");
		}else{
			console.log(this.weather);
		}

		return html`
			<p>
				

				Current weather in ${this.city}: <span class="${this.weather.description}">${this.weather.description}</span>,
			<br>
			Do you want to book a trip to ${this.city}?
			<a href="${this.city}-visitors-center">Visit ${this.city}</a>
			</p>
		`
	}
}

customElements.define('x-weather', XWeather);
