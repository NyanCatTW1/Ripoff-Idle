function switchTab(i) {
	game.tab = i;
}

function switchSubTab(i) {
	game.subtab = i;
}

function switchShopTab(i) {
	game.shoptab = i;
}

function cookieClick() {
	game.cookies = game.cookies.add(game.clickPro);
	game.cookieClicks++;
}

function toggleas() {
	game.autosave = !game.autosave;
}

function togglebm() {
	game.buymax = !game.buymax;
}

function buyGen(typeId, dim) {
	if (game.buymax) {
		game.generators[typeId][dim].buy(maxOf(typeId, dim));
	} else {
		game.generators[typeId][dim].buy(game.buyAmount);
	}
}

function setElem(id, content) {
	document.getElementById(id).innerHTML = content;
}

function displayNum(decimal) {
	if (decimal.lt(1)) {
		return decimal.toPrecision(1);
	} else if (decimal.lt(10)) {
		return decimal.floor().toString().replace('+', '');
	} else if (decimal.lt(100)) {
		return decimal.floor().toPrecision(2).toString().replace('+', '');
	} else {
		return decimal.floor().toPrecision(3).toString().replace('+', '');
	}
}

function setdisp(id, val) {
	document.getElementById(id).style.display = val;
}

function show(id) {
	setdisp(id, 'block');
}

function hide(id) {
	setdisp(id, 'none');
}

function maxOf(typeId, dim) {
	return Decimal.affordGeometricSeries(game.cookies, game.generators[typeId][dim].dimBasePrice, new Decimal(1.15), game.generators[typeId][dim].bought);
}