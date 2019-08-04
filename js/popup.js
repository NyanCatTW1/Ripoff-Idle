class AchievementPopup {
	constructor(id) {
		this.iconSrc = game.achievements[id].iconSrc;
		this.name = game.achievements[id].name;
	}
	
	popup() {
		let d = document.createElement('div');
		d.className = 'popup';
		
		let img = document.createElement('img');
		img.src = this.iconSrc;
		img.width = '46';
		img.height = '46';
		img.style.float = 'left';
		
		let txt = document.createElement('p');
		txt.innerHTML = this.name;
		txt.style.float = 'left';
		txt.style.marginLeft = '5px';
		txt.style.fontSize = '20px';
		
		d.appendChild(img);
		d.appendChild(txt);
		document.getElementById('popups').appendChild(d);
		
		setTimeout(function() {
			document.getElementById('popups').removeChild(d);
			delete this;
		}, 5000);
	}
}