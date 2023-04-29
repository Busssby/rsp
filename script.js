let player1 =  true;
let player2 =  false;

let player1_choise = null;
let player2_choise = null;

let text = document.querySelector('.info');
let choice_player1 = document.querySelector('.choice-player-1');
let choice_player2 = document.querySelector('.choice-player-2');

document.addEventListener('keydown', function(arg){

	if (player1 == true && player2 == false) {
		if (arg.code == 'KeyA') {
			console.log('игрок 1 нажал на А')
			player1_choise = 'камень'
			text.innerHTML = 'Ход 2-го игрока'
			player2 = true
			player1 = false
		}
	
		else if(arg.code == 'KeyS'){
			console.log('игрок 1 нажал на S')
			player1_choise = 'ножницы'
			text.innerHTML = 'Ход 2-го игрока'
			player2 = true
			player1 = false
		}
	
		else if(arg.code == 'KeyD'){
			console.log('игрок 1 нажал на D')
			player1_choise = 'бумага'
			text.innerHTML = 'Ход 2-го игрока'
			player2 = true
			player1 = false
		}
	}
	if (player1 == false && player2 == true) {
		if (arg.code == 'KeyJ') {
			console.log('игрок 2 нажал на J')
			player2_choise = 'камень'
			player2 = false
			setTimeout(show_choise, 1000)
			setTimeout(finish, 2000)
		}

		else if (arg.code == 'KeyK') {
			console.log('игрок 2 нажал на K')
			player2_choise = 'ножницы'
			player2 = false
			setTimeout(show_choise, 1000)
			setTimeout(finish, 2000)
		}

		else if (arg.code == 'KeyL') {
			console.log('игрок 2 нажал на L')
			player2_choise = 'бумага'
			player2 = false
			setTimeout(show_choise, 1000)
			setTimeout(finish, 2000)
		}
	}
})

function show_choise(){
	if (player1_choise == 'камень') {
		choice_player1.style.backgroundImage = 'url(1.jpg)'
		choice_player1.style.backgroundSize = '100%'
	}

	else if (player1_choise == 'ножницы') {
		choice_player1.style.backgroundImage = 'url(2.jpg)'
		choice_player1.style.backgroundSize = '100%'
	}

	else if (player1_choise == 'бумага') {
		choice_player1.style.backgroundImage = 'url(3.jpg)'
		choice_player1.style.backgroundSize = '100%'
	}

	if (player2_choise == 'камень') {
		choice_player2.style.backgroundImage = 'url(1.jpg)'
		choice_player2.style.backgroundSize = '100%'
	}
	else if (player2_choise == 'ножницы') {
		choice_player2.style.backgroundImage = 'url(2.jpg)'
		choice_player2.style.backgroundSize = '100%'
	}

	else if (player2_choise == 'бумага') {
		choice_player2.style.backgroundImage = 'url(3.jpg)'
		choice_player2.style.backgroundSize = '100%'
	}
	
}

function finish(){
	if (player1_choise == player2_choise) {
		alert('Ничья!!!!')
	} else if (player1_choise == 'камень' && player2_choise == 'ножницы') {
		alert('Победил 1 игрок')
	}
	else if (player1_choise == 'ножницы' && player2_choise == 'бумага') {
		alert('Победил 1 игрок')
	}
	else if (player1_choise == 'бумага' && player2_choise == 'камень') {
		alert('Победил 1 игрок')
	}
	else if (player1_choise == 'камень' && player2_choise == 'ножницы') {
		alert('Победил 1 игрок')
	} 
	else{
		alert('Победил 2 игрок')
	}
	

}