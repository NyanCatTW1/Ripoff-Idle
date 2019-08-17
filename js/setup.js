function setup() {
	game = new Game();
}

class Game {
	constructor(data) {
		this.cookies = new Decimal(0);
		this.cookieClicks = 0;
		this.cookiesFromClicks = new Decimal(0);
		this.totalProdCookies = new Decimal(0);
		this.cps = new Decimal(0);
		this.clickPro = new Decimal(1);
		this.tps = new Decimal(20);
		this.tpsc = new Decimal(100);
		this.tooltip = '';

		this.generators = [];
		this.unlockedGens = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

		for (let i = 0; i < 16; i++) {
			this.generators[i] = [];
			for (let j = 0; j < 8; j++) {
				this.generators[i][j] = new Generator(i, j);
			}
		}

		// Begin Data Objects
		this.upgradeData = [
			// 1D Cursors
			{
				name: 'Fast Fingers',
				cost: new Decimal(100),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(0, 0, 2),
				visReq: () => ggte(0, 0, 1),
				purpose: 'Multiplies 1D cursor efficiency by 2.'
			},
			{
				name: 'Quick Fingers',
				cost: new Decimal(1e3),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(0, 0, 2),
				visReq: () => ggte(0, 0, 10),
				purpose: 'Multiplies 1D cursor efficiency by 2.'
			},
			{
				name: 'Speedy Fingers',
				cost: new Decimal(1e4),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(0, 0, 2),
				visReq: () => ggte(0, 0, 25),
				purpose: 'Multiplies 1D cursor efficiency by 2.'
			},
			{
				name: 'Swift Fingers',
				cost: new Decimal(1e6),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(0, 0, 2),
				visReq: () => ggte(0, 0, 50),
				purpose: 'Multiplies 1D cursor efficiency by 2.'
			},
			{
				name: 'Brisk Fingers',
				cost: new Decimal(1e9),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(0, 0, 2),
				visReq: () => ggte(0, 0, 100),
				purpose: 'Multiplies 1D cursor efficiency by 2.'
			},
			// All Cursors
			{
				name: 'Gotta Hand it to You',
				cost: new Decimal(2e3),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(0, 2),
				visReq: () => ggte(0, 1, 1),
				purpose: 'Multiplies cursor efficiency by 2.'
			},
			{
				name: 'How Many Fingers?',
				cost: new Decimal(1e5),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(0, 3),
				visReq: () => ggte(0, 2, 1),
				purpose: 'Multiplies cursor efficiency by 3.'
			},
			{
				name: 'True Pianist',
				cost: new Decimal(5e6),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(0, 4),
				visReq: () => ggte(0, 3, 1),
				purpose: 'Multiplies cursor efficiency by 4.'
			},
			{
				name: 'Too Many Fingers',
				cost: new Decimal(3e8),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(0, 5),
				visReq: () => ggte(0, 4, 1),
				purpose: 'Multiplies cursor efficiency by 5.'
			},
			{
				name: 'All of the Fingers',
				cost: new Decimal(2e10),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(0, 6),
				visReq: () => ggte(0, 5, 1),
				purpose: 'Multiplies cursor efficiency by 6.'
			},
			{
				name: 'Tendonitis',
				cost: new Decimal(1e12),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(0, 7),
				visReq: () => ggte(0, 6, 1),
				purpose: 'Multiplies cursor efficiency by 7.'
			},
			{
				name: 'Just One More Click',
				cost: new Decimal(5e13),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(0, 8),
				visReq: () => ggte(0, 7, 1),
				purpose: 'Multiplies cursor efficiency by 8.'
			},
			// 1D Grandmas
			{
				name: 'A Grandma',
				cost: new Decimal(500),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(1, 0, 2),
				visReq: () => ggte(1, 0, 1),
				purpose: 'Multiplies 1D grandma efficiency by 2.'
			},
			{
				name: 'More Grandma',
				cost: new Decimal(1e4),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(1, 0, 2),
				visReq: () => ggte(1, 0, 10),
				purpose: 'Multiplies 1D grandma efficiency by 2.'
			},
			{
				name: 'Many Grandma',
				cost: new Decimal(5e5),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(1, 0, 2),
				visReq: () => ggte(1, 0, 25),
				purpose: 'Multiplies 1D grandma efficiency by 2.'
			},
			{
				name: 'Most Grandma',
				cost: new Decimal(1e7),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(1, 0, 2),
				visReq: () => ggte(1, 0, 50),
				purpose: 'Multiplies 1D grandma efficiency by 2.'
			},
			{
				name: 'All Grandma',
				cost: new Decimal(5e9),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(1, 0, 2),
				visReq: () => ggte(1, 0, 100),
				purpose: 'Multiplies 1D grandma efficiency by 2.'
			},
			// All Grandmas
			{
				name: 'Flat Grandmas',
				cost: new Decimal(1e5),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(1, 2),
				visReq: () => ggte(1, 1, 1),
				purpose: 'Multiplies grandma efficiency by 2.'
			},
			{
				name: 'Fat Grandmas',
				cost: new Decimal(3e7),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(1, 3),
				visReq: () => ggte(1, 2, 1),
				purpose: 'Multiplies grandma efficiency by 3.'
			},
			{
				name: 'Meta Grandmas',
				cost: new Decimal(8e9),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(1, 4),
				visReq: () => ggte(1, 3, 1),
				purpose: 'Multiplies grandma efficiency by 4.'
			},
			{
				name: 'Meta Meta Grandmas',
				cost: new Decimal(2e12),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(1, 5),
				visReq: () => ggte(1, 4, 1),
				purpose: 'Multiplies grandma efficiency by 5.'
			},
			{
				name: 'Meta Meta Meta Grandmas',
				cost: new Decimal(5e14),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(1, 6),
				visReq: () => ggte(1, 5, 1),
				purpose: 'Multiplies grandma efficiency by 6.'
			},
			{
				name: 'Meta<sup>4</sup> Grandmas',
				cost: new Decimal(1e17),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(1, 7),
				visReq: () => ggte(1, 6, 1),
				purpose: 'Multiplies grandma efficiency by 7.'
			},
			{
				name: 'Grandmas',
				cost: new Decimal(3e19),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(1, 8),
				visReq: () => ggte(1, 7, 1),
				purpose: 'Multiplies grandma efficiency by 8.'
			},
			// 1D Farms
			{
				name: 'Cookie Seeds',
				cost: new Decimal(5e3),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(2, 0, 2),
				visReq: () => ggte(2, 0, 1),
				purpose: 'Multiplies 1D farm efficiency by 2.'
			},
			{
				name: 'Chocolate Hoes',
				cost: new Decimal(1e5),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(2, 0, 2),
				visReq: () => ggte(2, 0, 10),
				purpose: 'Multiplies 1D farm efficiency by 2.'
			},
			{
				name: 'Sugary Fertiliser',
				cost: new Decimal(1e6),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(2, 0, 2),
				visReq: () => ggte(2, 0, 25),
				purpose: 'Multiplies 1D farm efficiency by 2.'
			},
			{
				name: 'Agricultural Chocolate',
				cost: new Decimal(3e7),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(2, 0, 2),
				visReq: () => ggte(2, 0, 50),
				purpose: 'Multiplies 1D farm efficiency by 2.'
			},
			{
				name: 'Genetically Modified Chocolate',
				cost: new Decimal(5e10),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(2, 0, 2),
				visReq: () => ggte(2, 0, 100),
				purpose: 'Multiplies 1D farm efficiency by 2.'
			},
			// All Farms
			{
				name: 'Crop Fields',
				cost: new Decimal(1e7),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(2, 2),
				visReq: () => ggte(2, 1, 1),
				purpose: 'Multiplies farm efficiency by 2.'
			},
			{
				name: 'Farming Planet',
				cost: new Decimal(1e10),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(2, 3),
				visReq: () => ggte(2, 2, 1),
				purpose: 'Multiplies farm efficiency by 3.'
			},
			{
				name: 'Hyperbolic Farm',
				cost: new Decimal(1e13),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(2, 4),
				visReq: () => ggte(2, 3, 1),
				purpose: 'Multiplies farm efficiency by 4.'
			},
			{
				name: 'Elliptic Farm',
				cost: new Decimal(1e16),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(2, 5),
				visReq: () => ggte(2, 4, 1),
				purpose: 'Multiplies farm efficiency by 5.'
			},
			{
				name: 'Multidimensional Toroid Farm',
				cost: new Decimal(1e19),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(2, 6),
				visReq: () => ggte(2, 5, 1),
				purpose: 'Multiplies farm efficiency by 6.'
			},
			{
				name: 'Möbius Farm',
				cost: new Decimal(1e22),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(2, 7),
				visReq: () => ggte(2, 6, 1),
				purpose: 'Multiplies farm efficiency by 7.'
			},
			{
				name: 'Poincaré Farm',
				cost: new Decimal(1e25),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(2, 8),
				visReq: () => ggte(2, 7, 1),
				purpose: 'Multiplies farm efficiency by 8.'
			},
			// 1D Mines
			{
				name: 'Wooden Pickaxes',
				cost: new Decimal(5e4),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(3, 0, 2),
				visReq: () => ggte(3, 0, 1),
				purpose: 'Multiplies 1D mine efficiency by 2.'
			},
			{
				name: 'Stone Pickaxes',
				cost: new Decimal(1e6),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(3, 0, 2),
				visReq: () => ggte(3, 0, 10),
				purpose: 'Multiplies 1D mine efficiency by 2.'
			},
			{
				name: 'Iron Pickaxes',
				cost: new Decimal(1e7),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(3, 0, 2),
				visReq: () => ggte(3, 0, 25),
				purpose: 'Multiplies 1D mine efficiency by 2.'
			},
			{
				name: 'Diamond Pickaxes',
				cost: new Decimal(3e8),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(3, 0, 2),
				visReq: () => ggte(3, 0, 50),
				purpose: 'Multiplies 1D mine efficiency by 2.'
			},
			{
				name: 'Punching <strike>Wood</strike> Chocolate',
				cost: new Decimal(5e11),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(3, 0, 2),
				visReq: () => ggte(3, 0, 100),
				purpose: 'Multiplies 1D mine efficiency by 2.'
			},
			// All Mines
			{
				name: 'Drills',
				cost: new Decimal(5e9),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(3, 2),
				visReq: () => ggte(3, 1, 1),
				purpose: 'Multiplies mine efficiency by 2.'
			},
			{
				name: 'Dynamite',
				cost: new Decimal(5e14),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(3, 3),
				visReq: () => ggte(3, 2, 1),
				purpose: 'Multiplies mine efficiency by 3.'
			},
			{
				name: 'Large Scale Mining Operations',
				cost: new Decimal(5e19),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(3, 4),
				visReq: () => ggte(3, 3, 1),
				purpose: 'Multiplies mine efficiency by 4.'
			},
			{
				name: 'Controlled Nuclear Explosives',
				cost: new Decimal(5e24),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(3, 5),
				visReq: () => ggte(3, 4, 1),
				purpose: 'Multiplies mine efficiency by 5.'
			},
			{
				name: 'Quarries',
				cost: new Decimal(5e29),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(3, 6),
				visReq: () => ggte(3, 5, 1),
				purpose: 'Multiplies mine efficiency by 6.'
			},
			{
				name: 'Hollow Earth',
				cost: new Decimal(5e34),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(3, 7),
				visReq: () => ggte(3, 6, 1),
				purpose: 'Multiplies mine efficiency by 7.'
			},
			{
				name: 'Extrasolar Planetary Mines',
				cost: new Decimal(5e39),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(3, 8),
				visReq: () => ggte(3, 7, 1),
				purpose: 'Multiplies mine efficiency by 8'
			},
			// 1D Factories
			{
				name: 'Industrialism',
				cost: new Decimal(3e5),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(4, 0, 2),
				visReq: () => ggte(4, 0, 1),
				purpose: 'Multiplies 1D factory efficiency by 2.'
			},
			{
				name: 'Bigger Warehouses',
				cost: new Decimal(5e6),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(4, 0, 2),
				visReq: () => ggte(4, 0, 10),
				purpose: 'Multiplies 1D factory efficiency by 2.'
			},
			{
				name: 'Hyperspeed Manafacturing',
				cost: new Decimal(1e8),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(4, 0, 2),
				visReq: () => ggte(4, 0, 25),
				purpose: 'Multiplies 1D factory efficiency by 2.'
			},
			{
				name: 'Chocolate Construction Plant',
				cost: new Decimal(3e10),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(4, 0, 2),
				visReq: () => ggte(4, 0, 50),
				purpose: 'Multiplies 1D factory efficiency by 2.'
			},
			{
				name: 'Lunar Factories',
				cost: new Decimal(3e12),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(4, 0, 2),
				visReq: () => ggte(4, 0, 100),
				purpose: 'Multiplies 1D factory efficiency by 2.'
			},
			// All Factories
			{
				name: 'Layered Conveyor Belts',
				cost: new Decimal(8e13),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(4, 2),
				visReq: () => ggte(4, 1, 1),
				purpose: 'Multiplies factory efficiency by 2.'
			},
			{
				name: 'Efficient Waste Disposal',
				cost: new Decimal(1e22),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(4, 3),
				visReq: () => ggte(4, 2, 1),
				purpose: 'Multiplies factory efficiency by 3.'
			},
			{
				name: 'Dyson Sphere Powered Planetary Factories',
				cost: new Decimal(5e29),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(4, 4),
				visReq: () => ggte(4, 3, 1),
				purpose: 'Multiplies factory efficiency by 4.'
			},
			{
				name: 'Controlled Gamma Ray Burst Energy Sources',
				cost: new Decimal(5e37),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(4, 5),
				visReq: () => ggte(4, 4, 1),
				purpose: 'Multiplies factory efficiency by 5.'
			},
			{
				name: 'Pulsar Based Energy Sources',
				cost: new Decimal(6e45),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(4, 6),
				visReq: () => ggte(4, 5, 1),
				purpose: 'Multiplies factory efficiency by 6.'
			},
			{
				name: 'Magnetar Based Energy Sources',
				cost: new Decimal(7e53),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(4, 7),
				visReq: () => ggte(4, 6, 1),
				purpose: 'Multiplies factory efficiency by 7.'
			},
			{
				name: 'Black Hole Based Energy Sources',
				cost: new Decimal(8e61),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(4, 8),
				visReq: () => ggte(4, 7, 1),
				purpose: 'Multiplies factory efficiency by 8.'
			},
			// 1D Banks
			{
				name: 'Economic Cookies',
				cost: new Decimal(5e6),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(5, 0, 2),
				visReq: () => ggte(5, 0, 1),
				purpose: 'Multiplies 1D bank efficiency by 2.'
			},
			{
				name: 'Sweet Loans',
				cost: new Decimal(8e7),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(5, 0, 2),
				visReq: () => ggte(5, 0, 10),
				purpose: 'Multiplies 1D bank efficiency by 2.'
			},
			{
				name: 'Chocolate Interest',
				cost: new Decimal(1e9),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(5, 0, 2),
				visReq: () => ggte(5, 0, 25),
				purpose: 'Multiplies 1D bank efficiency by 2.'
			},
			{
				name: 'Sugary Profit',
				cost: new Decimal(5e10),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(5, 0, 2),
				visReq: () => ggte(5, 0, 50),
				purpose: 'Multiplies 1D bank efficiency by 2.'
			},
			{
				name: 'Cookie Investment',
				cost: new Decimal(5e13),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(5, 0, 2),
				visReq: () => ggte(5, 0, 100),
				purpose: 'Multiplies 1D bank efficiency by 2.'
			},
			// All Banks
			{
				name: 'Chocolate Credit',
				cost: new Decimal(6e18),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(5, 2),
				visReq: () => ggte(5, 1, 1),
				purpose: 'Multiplies bank efficiency by 2.'
			},
			{
				name: 'Capital Cookies',
				cost: new Decimal(6e30),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(5, 3),
				visReq: () => ggte(5, 2, 1),
				purpose: 'Multiplies bank efficiency by 3.'
			},
			{
				name: 'Sugar Treasury',
				cost: new Decimal(6e42),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(5, 4),
				visReq: () => ggte(5, 3, 1),
				purpose: 'Multiplies bank efficiency by 4.'
			},
			{
				name: 'ECTPOS',
				cost: new Decimal(6e54),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(5, 5),
				visReq: () => ggte(5, 4, 1),
				purpose: 'Multiplies bank efficiency by 5.'
			},
			{
				name: 'Online Cookies',
				cost: new Decimal(6e66),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(5, 6),
				visReq: () => ggte(5, 5, 1),
				purpose: 'Multiplies bank efficiency by 6.'
			},
			{
				name: 'Long Term Cookies',
				cost: new Decimal(6e78),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(5, 7),
				visReq: () => ggte(5, 6, 1),
				purpose: 'Multiplies bank efficiency by 7.'
			},
			{
				name: 'Mortgaged Cookies',
				cost: new Decimal(6e80),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(5, 8),
				visReq: () => ggte(5, 7, 1),
				purpose: 'Multiplies bank efficiency by 8.'
			},
			// 1D Temples
			{
				name: 'Moral Chocolate',
				cost: new Decimal(1e8),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(6, 0, 2),
				visReq: () => ggte(6, 0, 1),
				purpose: 'Multiplies 1D temple efficiency by 2.'
			},
			{
				name: 'Divine Cookies',
				cost: new Decimal(2e9),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(6, 0, 2),
				visReq: () => ggte(6, 0, 10),
				purpose: 'Multiplies 1D temple efficiency by 2.'
			},
			{
				name: 'Sacred Sugar',
				cost: new Decimal(2.5e10),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(6, 0, 2),
				visReq: () => ggte(6, 0, 25),
				purpose: 'Multiplies 1D temple efficiency by 2.'
			},
			{
				name: 'Ethical Chocolate',
				cost: new Decimal(1e12),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(6, 0, 2),
				visReq: () => ggte(6, 0, 50),
				purpose: 'Multiplies 1D temple efficiency by 2.'
			},
			{
				name: 'Sugarfree Sugar',
				cost: new Decimal(1e15),
				icon: 'assets/img/cookie.png',
				onBuy: () => mg(6, 0, 2),
				visReq: () => ggte(6, 0, 100),
				purpose: 'Multiplies 1D temple efficiency by 2.'
			},
			// All Temples
			{
				name: 'Chocolate Bible',
				cost: new Decimal(1e23),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(6, 2),
				visReq: () => ggte(6, 1, 1),
				purpose: 'Multiplies temple efficiency by 2.'
			},
			{
				name: 'Prayer to <strike>Orteil</strike> Reinhardt',
				cost: new Decimal(1e39),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(6, 3),
				visReq: () => ggte(6, 2, 1),
				purpose: 'Multiplies temple efficiency by 3.'
			},
			{
				name: 'Angelic Cookies',
				cost: new Decimal(1e53),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(6, 4),
				visReq: () => ggte(6, 3, 1),
				purpose: 'Multiplies temple efficiency by 4.'
			},
			{
				name: 'Principal Cookies',
				cost: new Decimal(1e68),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(6, 5),
				visReq: () => ggte(6, 4, 1),
				purpose: 'Multiplies temple efficiency by 5.'
			},
			{
				name: 'Virtuous Cookies',
				cost: new Decimal(1e83),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(6, 6),
				visReq: () => ggte(6, 5, 1),
				purpose: 'Multiplies temple efficiency by 6.'
			},
			{
				name: 'Cookie Dominions',
				cost: new Decimal(1e98),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(6, 7),
				visReq: () => ggte(6, 6, 1),
				purpose: 'Multiplies temple efficiency by 7.'
			},
			{
				name: 'Godlike Cookies',
				cost: new Decimal(1e113),
				icon: 'assets/img/cookie.png',
				onBuy: () => mag(6, 8),
				visReq: () => ggte(6, 7, 1),
				purpose: 'Multiplies temple efficiency by 8.'
			}
		]

		this.achievementData = [
			// Cookie Achievements
			{
				name: 'I Have a Cookie',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(1),
				unlockTxt: 'Baked 1 cookie'
			},
			{
				name: 'Double the Calories',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(2),
				unlockTxt: 'Baked 2 cookies'
			},
			{
				name: 'I Need More Chocolate Chips',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(10),
				unlockTxt: 'Baked 10 cookies'
			},
			{
				name: 'Sugar Craving',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(25),
				unlockTxt: 'Bake 25 cookies'
			},
			{
				name: 'Addiction',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(50),
				unlockTxt: 'Bake 50 cookies'
			},
			{
				name: 'You Can\'t Stop Now!',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(100),
				unlockTxt: 'Bake 100 cookies'
			},
			{
				name: 'Well Yes, But Actually Cookies',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(250),
				unlockTxt: 'Bake 250 cookies'
			},
			{
				name: '<strike>STONKS</strike> COOKIES',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(500),
				unlockTxt: 'Bake 500 cookies'
			},
			{
				name: 'New SI Unit: Kilocookie',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(1000),
				unlockTxt: 'Bake 1K cookies'
			},
			{
				name: 'Much Cookie',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(5000),
				unlockTxt: 'Bake 5K cookies'
			},
			{
				name: 'Only 102% Sugar!',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(10000),
				unlockTxt: 'Bake 10K cookies'
			},
			{
				name: 'Just One More',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(100000),
				unlockTxt: 'Bake 100K cookies'
			},
			{
				name: 'New SI Unit: Megacookie',
				icon: 'assets/img/cookie.png',
				unlockReq: () => tcgte(1000000),
				unlockTxt: 'Bake 1M cookies'
			},
			// 1D Cursors
			{
				name: 'Click',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 0, 1),
				unlockTxt: 'Have a 1D cursor'
			},
			{
				name: 'Double Click',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 0, 2),
				unlockTxt: 'Have 2 1D cursors'
			},
			{
				name: 'Look Ma, Two Hands!',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 0, 10),
				unlockTxt: 'Have 10 1D cursors'
			},
			{
				name: '5 Hands is Better Than 1',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 0, 25),
				unlockTxt: 'Have 25 1D cursors'
			},
			{
				name: 'Fifty Fingers',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 0, 50),
				unlockTxt: 'Have 50 1D cursors'
			},
			{
				name: 'Hundred Fingers',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 0, 100),
				unlockTxt: 'Have 100 1D cursors'
			},
			// All Cursors
			{
				name: 'Slap',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 1, 1),
				unlockTxt: 'Have 1 2D cursor'
			},
			{
				name: 'With (not really) 3D Graphics',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 2, 1),
				unlockTxt: 'Have 1 3D cursor'
			},
			{
				name: 'Stereographic Projection',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 3, 1),
				unlockTxt: 'Have 1 4D cursor'
			},
			{
				name: 'Orthographic Projection',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 4, 1),
				unlockTxt: 'Have 1 5D cursor'
			},
			{
				name: 'Projection Matrices',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 5, 1),
				unlockTxt: 'Have 1 6D cursor'
			},
			{
				name: 'Sphere Inside the Outside of a Sphere',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 6, 1),
				unlockTxt: 'Have 1 7D cursor'
			},
			{
				name: 'Click Lattice',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(0, 7, 1),
				unlockTxt: 'Have 1 8D cursor'
			},
			// 1D Grandmas
			{
				name: 'Nice Grandma',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 0, 1),
				unlockTxt: 'Have a 1D grandma'
			},
			{
				name: 'Nice Grandmas',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 0, 10),
				unlockTxt: 'Have 10 1D grandmas'
			},
			{
				name: 'Lots of Nice Grandmas',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 0, 25),
				unlockTxt: 'Have 25 1D grandma'
			},
			{
				name: 'Too Many Nice Grandmas',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 0, 50),
				unlockTxt: 'Have 50 1D grandmas'
			},
			{
				name: 'Death by Warm Hugs',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 0, 100),
				unlockTxt: 'Have 100 1D grandmas'
			},
			// All Grandmas
			{
				name: 'Square Glasses',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 1, 1),
				unlockTxt: 'Have a 2D grandma'
			},
			{
				name: 'Knitted Sweaters',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 2, 1),
				unlockTxt: 'Have a 3D grandma'
			},
			{
				name: 'Propreantepenultimate Grandma',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 3, 1),
				unlockTxt: 'Have a 4D grandma'
			},
			{
				name: 'Preantepenultimate Grandma',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 4, 1),
				unlockTxt: 'Have a 5D grandma'
			},
			{
				name: 'Antepenultimate Grandma',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 5, 1),
				unlockTxt: 'Have a 6D grandma'
			},
			{
				name: 'Penultimate Grandma',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 6, 1),
				unlockTxt: 'Have a 7D grandma'
			},
			{
				name: 'Ultimate Grandma',
				icon: 'assets/img/cookie.png',
				unlockReq: () => ggte(1, 4, 1),
				unlockTxt: 'Have an 8D grandma<br>"This isn\'t even my final form!"'
			}
		]

		// End Data Objects

		this.upgrades = [];

		for (let i = 0; i < this.upgradeData.length; i++) {
			this.upgrades[i] = new Upgrade(this.upgradeData[i].name, this.upgradeData[i].cost, false, this.upgradeData[i].icon, this.upgradeData[i].onBuy, this.upgradeData[i].visReq);
		}

		this.achievements = [];

		for (let i = 0; i < this.achievementData.length; i++) {
			this.achievements[i] = new Achievement(i, this.achievementData[i].name, this.achievementData[i].icon, this.achievementData[i].unlockReq, false);
		}

		this.buyAmount = new Decimal(1);
		document.getElementById('bulk').value = this.buyAmount;
		this.buymax = false;

		this.tab = 0;
		this.subtab = 0;
		this.shoptab = 0;

		this.autosave = true;
		this.autosaveintv = 10;
		document.getElementById('asintv').value = this.autosaveintv;

		this.vers = '1.3.2';

		if (data != undefined) {
			try {
				this.cookies = new Decimal(data.cookies);
				this.clickPro = new Decimal(data.clickPro);
				this.cookieClicks = data.cookieClicks;
				this.cookiesFromClicks = new Decimal(data.cookiesFromClicks);
				this.totalProdCookies = new Decimal(data.totalProdCookies);
				this.tps = new Decimal(data.tps);
				this.tpsc = new Decimal(data.tpsc);

				for (let i = 0; i < data.generators.length; i++) {
					this.generators[i] = [];
					for (let j = 0; j < data.generators[i].length; j++) {
						if (data.generators[i][j].amount && data.generators[i][j].bought) {
							this.generators[i][j] = new Generator(i, j, data.generators[i][j].amount, data.generators[i][j].bought, 1);
						} else {
							this.generators[i][j] = new Generator(i, j, 0, 0, 1);
						}
					}
				}

				if (data.unlockedGens) {
					for (let i = 0; i < 16; i++) {
						this.unlockedGens[i] = data.unlockedGens[i];
					}
				}

				for (let i = 0; i < data.upgrades.length; i++) {
					this.upgrades[i] = new Upgrade(this.upgradeData[i].name, this.upgradeData[i].cost, data.upgrades[i].bought, this.upgradeData[i].icon, this.upgradeData[i].onBuy, this.upgradeData[i].visReq);
				}

				for (let i = 0; i < data.achievements.length; i++) {
					this.achievements[i] = new Achievement(i, this.achievementData[i].name, this.achievementData[i].icon, this.achievementData[i].unlockReq, data.achievements[i].unlocked);
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
			} catch(e) {
				console.log(e);
			}
		}
	}
}
