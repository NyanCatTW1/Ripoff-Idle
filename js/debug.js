class Debugger {
	constructor() {
	}
	
	log(input) {
		console.log(input);
	}
	
	tab(input) {
		console.table(input);
	}
	
	get g() {
		this.tab(game);
	}
}

let d = new Debugger();