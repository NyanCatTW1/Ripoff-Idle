class Upgrade {
	constructor(name, cost, bought, icon, onBuy, visReq) {
		this.name = name;
		this.cost = cost;
		this.onBuy = onBuy;
		this.visReq = visReq;
		this.iconSrc = icon;
		this.bought = bought;
		
		if (bought) {
			this.onBuy();
		}
	}
	
	canBuy() {
		return (game.cookies.gte(this.cost) && this.isVisible());
	}
	
	isVisible() {
		if (this.visReq() && !this.bought) {
			return true;
		} else {
			return false;
		}
	}
	
	buy() {
		if (this.canBuy()) {
			this.bought = true;
			game.cookies = game.cookies.subtract(this.cost);
			this.onBuy();
		}
	}
}