let upgradeData = [
	// 1D Cursors
	{
		name: 'Ready, Steady, Click',
		cost: new Decimal(100),
		icon: 'assets/img/cookie.png',
		onBuy: () => this.generators[0][0].multMult(2),
		visReq: () => this.generators[0][0].amount.gte(1),
		purpose: 'Multiplies 1D cursor efficiency by 2.'
	},
	{
		name: 'Fast Fingers',
		cost: new Decimal(1000),
		icon: 'assets/img/cookie.png',
		onBuy: () => this.generators[0][0].multMult(2),
		visReq: () => this.generators[0][0].amount.gte(2),
		purpose: 'Multiplies 1D cursor efficiency by 2.'
	},
	{
		name: 'Quick Fingers',
		cost: new Decimal(10000),
		icon: 'assets/img/cookie.png',
		onBuy: () => this.generators[0][0].multMult(2),
		visReq: () => this.generators[0][0].amount.gte(10),
		purpose: 'Multiplies 1D cursor efficiency by 2.'
	},
	{
		name: 'Speedy Fingers',
		cost: new Decimal(100000),
		icon: 'assets/img/cookie.png',
		onBuy: () => this.generators[0][0].multMult(2),
		visReq: () => this.generators[0][0].amount.gte(25),
		purpose: 'Multiplies 1D cursor efficiency by 2.'
	},
	{
		name: 'Swift Fingers',
		cost: new Decimal(1e6),
		icon: 'assets/img/cookie.png',
		onBuy: () => this.generators[0][0].multMult(2),
		visReq: () => this.generators[0][0].amount.gte(50),
		purpose: 'Multiplies 1D cursor efficiency by 2.'
	},
	{
		name: 'Brisk Fingers',
		cost: new Decimal(1e7),
		icon: 'assets/img/cookie.png',
		onBuy: () => this.generators[0][0].multMult(2),
		visReq: () => this.generators[0][0].amount.gte(100),
		purpose: 'Multiplies 1D cursor efficiency by 2.'
	}
]