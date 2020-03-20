class App {
	constructor() {
		this.currentNumber = 100;
		this.pendingCommends = [];

	}
	clearCommend(){
		this.pendingCommends = [];
	}
	addCommend(name, value){
		this.pendingCommends.push({
			name, value
		})
	}
}

let MainApp = new App();
module.exports = MainApp;
