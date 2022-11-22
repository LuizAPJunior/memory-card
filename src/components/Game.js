import { useState } from 'react';

import Card from './Card';
import Score from './Score';

import '../assets/styles/game.css';

import imgJett from '../assets/images/jett.png';
import imgRaze from '../assets/images/raze.png';
import imgYoru from '../assets/images/yoru.png';
import imgPhoenix from '../assets/images/phoenix.png';
import imgReyna from '../assets/images/reyna.png';
import imgNeon from '../assets/images/neon.png';
import imgSova from '../assets/images/sova.png';
import imgBreach from '../assets/images/breach.png';
import imgSkye from '../assets/images/skye.png';
import imgKayo from '../assets/images/kayo.png';
import imgViper from '../assets/images/viper.png';
import imgAstra from '../assets/images/astra.png';
import imgBrimstone from '../assets/images/brimstone.png';
import imgOmen from '../assets/images/omen.png';
import imgCypher from '../assets/images/cypher.png';
import imgKilljoy from '../assets/images/killjoy.png';
import imgSage from '../assets/images/sage.png';
import imgChamber from '../assets/images/chamber.png';

function Game() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(score);
	const [reset, setReset] = useState(false);

	const changeScore = () => {
		setScore(score + 1);
	};

	const gameOver = () => {
		console.log('game over');
		if (score > bestScore) setBestScore(score);
		setScore(0);
		setReset(true);
	};

	const startGame = () => {
		setReset(false);
	};

	let cardsArr = [
		{ name: 'Jett', image: imgJett },
		{ name: 'Raze', image: imgRaze },
		{ name: 'Yoru', image: imgYoru },
		{ name: 'Reyna', image: imgReyna },
		{ name: 'Phoenix', image: imgPhoenix },
		{ name: 'Neon', image: imgNeon },
		{ name: 'Sova', image: imgSova },
		{ name: 'Breach', image: imgBreach },
		{ name: 'Skye', image: imgSkye },
		{ name: 'Kayo', image: imgKayo },
		{ name: 'Astra', image: imgAstra },
		{ name: 'Viper', image: imgViper },
		{ name: 'Brim', image: imgBrimstone },
		{ name: 'Omen', image: imgOmen },
		{ name: 'Cypher', image: imgCypher },
		{ name: 'Killjoy', image: imgKilljoy },
		{ name: 'Sage', image: imgSage },
		{ name: 'Chamber', image: imgChamber },
	];

	const shuffleCards = (array) => {
		let currentIndex = array.length,
			randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};

	cardsArr = shuffleCards(cardsArr);

	return (
		<div>
			<header className="header">
				<div>
					<h1>VALORANT</h1>
					<h2>memory card game</h2>
				</div>
				<div className="score">
					<Score text={'Score: '} score={score} />
					<Score text={'Best Score: '} score={bestScore} />
				</div>
			</header>
			<main className="cards">
				{cardsArr.map(({ name, image }) => (
					<Card
						key={name}
						name={name}
						image={image}
						changeScore={changeScore}
						gameOver={gameOver}
						reset={reset}
						startGame={startGame}
					/>
				))}
			</main>
		</div>
	);
}

export default Game;
