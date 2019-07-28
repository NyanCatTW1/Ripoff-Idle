function showElems() {
	for (let i = 0; i < 2; i++) {
		hide(`tab${i}`);
	}
	
	for (let i = 0; i < 5; i++) {
		hide(`subtab${i}`);
	}
	
	for (let i = 0; i < 16; i++) {
		hide(`${game.generators[i][0].type.replace(' ', '')}Shop`);
	}
	
	for (let i = 0; i < game.upgrades.length; i++) {
		if (game.upgrades[i].isVisible()) {
			show(`upg${i}`);
		} else {
			hide(`upg${i}`);
		}
	}
	
	show(`tab${game.tab}`);
	show(`subtab${game.subtab}`);
	show(`${game.generators[game.shoptab][0].type.replace(' ', '')}Shop`);
	if (game.autosave) {
		setdisp('autosavetime', 'inline');
	} else {
		setdisp('autosavetime', 'none');
	}
}