function setElems() {
	setElem('version', `Ripoff Idle v${game.vers} by Reinhardt`);
	setElem('cookiecount', `${displayNum(game.cookies.floor())}`);
	setElem('statcookieclicks', `Cookie Clicks: ${game.cookieClicks}`);
	setElem('statcps', `Cookies per Second: ${displayNum(game.cps)}`);
	if (game.autosave) {
		setElem('asstate', ' On');
	} else {
		setElem('asstate', ' Off');
	}
	if (game.buymax) {
		setElem('bmstate', ' On');
	} else {
		setElem('bmstate', ' Off');
	}
	for (let i = 0; i < 16; i++) {
		for (let j = 0; j < 8; j++) {
			setElem(`gb${i}${j}1`, `${game.generators[i][j].name}`);
			setElem(`gb${i}${j}2`, `${displayNum(game.generators[i][j].amount)}`);
			if (!game.buyAmount.gt(1e10)) {
				if (game.buymax) {
					if (maxOf(i, j).toNumber() == 0) {
						setElem(`gb${i}${j}3`, `${displayNum(game.generators[i][j].costForN(1))}`);
					} else {
						setElem(`gb${i}${j}3`, `${displayNum(game.generators[i][j].costForN(maxOf(i, j)))}`);
					}
				} else {
					setElem(`gb${i}${j}3`, `${displayNum(game.generators[i][j].costForN(game.buyAmount))}`);
				}
			} else if (game.buyAmount.gt(1e10)) {
				game.buyAmount = new Decimal(1e10);
				document.getElementById('bulk').value = game.buyAmount.toString();
			} else {
				game.buyAmount = new Decimal(0);
			}
		}
	}
}