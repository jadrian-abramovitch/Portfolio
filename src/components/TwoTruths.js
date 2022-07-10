import TextBox from '../components/TextBox';
import { useState } from 'react';

const TRUTH_STAMENTS_AMOUNT = 2;
const LIE_STATEMENTS_AMOUNT = 1;

const gameData = {
    thruths: [
        'I was born on a Friday the 13th (Spooky)',
        'I played clarinet in high school band',
        'I went to the University of Waterloo for NanoTechnology Engineering',
        'I was a team leader at Mcdonalds in high school',
        'I built my own PC',
        'I think that windows 10 has a better UI than MacOS',
        'I like Javascript',
        'I almost got an internship with Apple, but was happy in hindsight to not have gotten the job'
    ],
    lies: [
        'I played the UPS guy in my high school\'s production of Legally Blonde',
        'I still use Windows 7 daily',
        'Internet explorer is a great browser',
        'I have been to Italy'
    ]
};

const TwoTruths = () => {
    //add styling to truth/lie list elements
    const [gameStarted, setGameStarted] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    let currentData = {
        cardData : [],
        isTheLie: [],
        lieMapper: {}
    };
    
    const setCardData = () => {
        console.log('test test');
        if (currentData.cardData.length !== 0) {
            throw new Error('Card Data already exists');
        }
        if (gameData.thruths < TRUTH_STAMENTS_AMOUNT || gameData.lie < LIE_STATEMENTS_AMOUNT) {
            throw new Error('No more data');
        }
        for (let i = 0; i < TRUTH_STAMENTS_AMOUNT; i++) {
            const randomIndex = Math.floor(Math.random()*gameData.thruths.length);
            const randomTruth = gameData.thruths.splice(randomIndex, 1)[0];
            currentData.cardData.push(randomTruth);
            currentData.isTheLie.push(false);
        };
        const randomIndex = Math.floor(Math.random()*gameData.lies.length);
        const randomLie = gameData.lies.splice(randomIndex, 1)[0];
        currentData.cardData.push(randomLie);
        currentData.isTheLie.push(true);
        // console.log(gameData);
    };

    const getCardData = (cardId) => {
        if (currentData.cardData.length === 0) {
            try {
                setCardData();
            } catch(error) {
                setGameOver(true);
            }
        }
        const randomIndex = Math.floor(Math.random()*currentData.cardData.length);
        const isLie = currentData.isTheLie.splice(randomIndex, 1)[0];
        currentData.lieMapper[cardId] = isLie;
        return currentData.cardData.splice(randomIndex, 1)[0];
    };

    const displayCorrectMessage = () => {
        alert('Correct!!!');
    }

    const displayIncorrectMessage = () => {
        alert('Incorrect!!!');
    }

    const chooseAnswer = (cardId) => {
        if (currentData.lieMapper[cardId] === true) {
            displayCorrectMessage();
            setCorrectAnswers(correctAnswers + 1);
        } else {
            displayIncorrectMessage();
        }
    };

    const gridStyle = {
    };

    return(
        <div id='2truths'>
            <TextBox>
                <h3>{!gameOver && (gameStarted ? 'Here are 3 statements about me, try to guess which is the lie!': 
                                   'Enough boring reading! Lets play 2 truths 1 lie! Which I realize is still reading, but I think it is more fun.')}
                </h3>
                <h3> 
                    {gameOver && `Game over! You found ${correctAnswers} lies. I guess that means you know everything about me now.`}
                </h3>
                { !gameOver && !gameStarted && <button onClick={() => {setGameStarted(true)}}>Start!</button> }
                { !gameOver && gameStarted &&
                <div style={gridStyle}>      
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="truth-card" onClick={() => {chooseAnswer(0)}}>
                                <button className="truth-card-button">
                                    <h3>{getCardData(0)}</h3>
                                </button>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="truth-card" onClick={() => {chooseAnswer(1)}}>
                                <button className="truth-card-button">
                                    <h3>{getCardData(1)}</h3>
                                </button>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="truth-card" onClick={() => {chooseAnswer(2)}}>
                                <button className="truth-card-button">
                                    <h3>{getCardData(2)}</h3>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </TextBox>
        </div>
    );
};

export default TwoTruths;
