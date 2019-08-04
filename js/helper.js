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
	game.totalProdCookies = game.totalProdCookies.add(game.clickPro);
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

function buyUpg(id) {
	game.upgrades[id].buy();
}

function setElem(id, content) {
	if (document.getElementById(id).innerHTML != content){
		document.getElementById(id).innerHTML = content;
	}
}

function displayNum(decimal, floor) {
	if (floor) {
		if (decimal.lt(1)) {
			return decimal.floor().toPrecision(1);
		} else if (decimal.lt(10)) {
			return decimal.floor().toPrecision(1).toString().replace('+', '');
		} else if (decimal.lt(100)) {
			return decimal.floor().toPrecision(2).toString().replace('+', '');
		} else {
			return decimal.floor().toPrecision(3).toString().replace('+', '');
		}

	} else {
		if (decimal.lt(1)) {
			return decimal.toPrecision(1);
		} else if (decimal.lt(10)) {
			return decimal.toPrecision(2).toString().replace('+', '');
		} else if (decimal.lt(100)) {
			return decimal.toPrecision(3).toString().replace('+', '');
		} else {
			return decimal.toPrecision(3).toString().replace('+', '');
		}
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

function exIfGame(func) {
	if (game) {
		func();
	}
}

function multGen(typeId, dim, m) {
	game.generators[typeId][dim].multMult(m);
}

function cookiesgte(n) {
	return game.cookies.gte(new Decimal(n));
}

function dimcountgte(tid, dim, n) {
	return game.generators[tid][dim].amount.gte(new Decimal(n));
}

function createTooltipUpg(id) {
	return `${game.upgradeData[id].name}&nbsp&nbsp&nbsp&nbsp<p class='cost'>${displayNum(game.upgradeData[id].cost)}</p><br>
	<i><small>${game.upgradeData[id].purpose}</small></i>`;
}


function createTooltipAch(id) {
	return `${game.achievementData[id].name}<br>
	<i><small>${game.achievementData[id].unlockTxt}</small></i>`;
}

function createTooltipGen(typeId, dim) {
	return `${game.generators[typeId][dim].name}&nbsp&nbsp&nbsp&nbsp<p class='cost'>${displayNum(game.generators[typeId][dim].price, true)}</p><br>
	<small><i>each ${game.generators[typeId][dim].name} produces ${game.generators[typeId][dim].eachCps} ${game.generators[typeId][dim].creates} per second,<br>
	${displayNum(game.generators[typeId][dim].amount, true)} ${game.generators[typeId][dim].name}s are producing ${displayNum(game.generators[typeId][dim].totalCps)} ${game.generators[typeId][dim].creates} per second.</i></small>`;
}

function setTooltipTo(n) {
	game.tooltip = n;
}

function isOverflown(e) {
	el = document.getElementById(e);
    return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
}
