function setup() {
	game = new Game();
}

class Game {
	constructor(data) {
		this.cookies = new Decimal(0);
		this.cookieClicks = 0;
		this.clickPro = new Decimal(1);
		this.cps = new Decimal(0);
		
		this.generators = [];
		
		for (let i = 0; i < 16; i++) {
			this.generators[i] = [];
			for (let j = 0; j < 8; j++) {
				this.generators[i][j] = new Generator(i, j);
			}
		}
		
		this.buyAmount = new Decimal(1);
		document.getElementById('bulk').value = this.buyAmount;
		this.buymax = false;
		
		this.tab = 0;
		this.subtab = 0;
		this.shoptab = 0;
		
		this.autosave = true;
		this.autosaveintv = 30;
		document.getElementById('asintv').value = this.autosaveintv;

		this.vers = '1.0.0';
		
		if (data) {
			this.cookies = new Decimal(data.cookies);
			this.clickPro = new Decimal(data.clickPro);
			this.cookieClicks = data.cookieClicks;
			
			for (let i = 0; i < 16; i++) {
				this.generators[i] = [];
				for (let j = 0; j < 8; j++) {
					this.generators[i][j] = new Generator(i, j, data.generators[i][j].amount, data.generators[i][j].bought, data.generators[i][j].mult);
				}
			}
			
			this.buyAmount = new Decimal(data.buyAmount);
			document.getElementById('bulk').value = this.buyAmount;
			this.buymax = data.buymax;
			
			this.tab = data.tab;
			this.subtab = data.subtab;
			this.shoptab = data.shoptab;
			
			this.autosave = data.autosave;
			this.autosaveintv = data.autosaveintv;
			document.getElementById('asintv').value = this.autosaveintv;
		}
	}
}