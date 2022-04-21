import Card from './Card';
import Score from './Score';

import imgJett from './assets/images/jett.png';
import imgViper from './assets/images/viper.png';
import imgAstra from './assets/images/astra.png';
import { useState } from 'react';


function Game() {

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(score);
    const [reset, setReset] = useState(false);

    const changeScore = (name) => {
        setScore(score + 1);

    }

    const gameOver = () => {
        console.log('game over');
        if (score > bestScore) setBestScore(score);
        setScore(0);
        setReset(true);

    }

    const startGame = () => {
        setReset(false);
        console.log("começou");
    }

    let cardsArr = [
        { name: "Jett", image: imgJett },
        { name: "Astra", image: imgAstra },
        { name: "Viper", image: imgViper },
    ];



    const shuffleCards = (array) => {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    cardsArr = shuffleCards(cardsArr);

    return (
        <div>
            <Score text={"Score: "} score={score} />
            <Score text={"Best Score: "} score={bestScore} />
            {cardsArr.map(({ name, image }) => (
                <Card key={name} name={name} image={image} changeScore={changeScore} gameOver={gameOver} reset={reset} startGame={startGame} />
            ))}
        </div>
    );
};

export default Game;