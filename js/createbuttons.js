function createButtons() {
	for (let i = 0; i < 16; i++) {
		for (let j = 0; j < 8; j++) {
			let butt = document.createElement('button');
			let para1 = document.createElement('p');
			para1.innerHTML = `${game.generators[i][j].name}`;
			para1.className = 'para1';
			para1.id = `gb${i}${j}1`;
			let para2 = document.createElement('p');
			para2.innerHTML = `${displayNum(game.generators[i][j].amount)}`;
			para2.className = 'para2';
			para2.id = `gb${i}${j}2`;
			let para3 = document.createElement('p');
			if (!game.buyAmount.gt(1e10)) {
				para3.innerHTML = `${displayNum(game.generators[i][j].costForN(game.buyAmount))}`;
			} else if (game.buyAmount.gt(1e10)) {
				game.buyAmount = new Decimal(1e10);
				document.getElementById('bulk').value = game.buyAmount.toString();
			} else {
				game.buyAmount = new Decimal(0);
			}
			para3.className = 'para3';
			para3.id = `gb${i}${j}3`;
			let cookieImg = document.createElement('img');
			cookieImg.src = 'assets/img/cookie.png';
			cookieImg.width = '11';
			cookieImg.height = '11';
			
			butt.id = `g${i}${j}Button`;
			butt.setAttribute('onclick', `buyGen(${i}, ${j})`);
			butt.className = 'genbutton';
			butt.appendChild(para1);
			butt.appendChild(para2);
			butt.appendChild(cookieImg);
			butt.appendChild(para3);
			document.getElementById(`${game.generators[i][j].type.replace(' ', '')}Shop`).appendChild(butt);
		}
	}
}