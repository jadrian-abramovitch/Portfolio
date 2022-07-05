import TextBox from '../components/TextBox';
import { useState } from 'react';

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
        'Internet explorer is a great browser'
    ]
};

const TwoTruths = () => {
    //add styling to truth/lie list elements
    const [gameStarted, setGameStarted] = useState(false); //setGameStarted triggers a render, causing code to run twice I think
    // im getting trolled intentionally by this https://medium.com/nmc-techblog/wait-youre-not-using-react-strictmode-a9713927a33b
    const [timesPlayed, setTimesplayed] = useState(0);
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
        for (let i = 0; i < 2; i++) { //magic number
            const randomIndex = Math.floor(Math.random()*gameData.thruths.length);
            console.log('gameData.truths: ', gameData.thruths);
            const randomTruth = gameData.thruths.splice(randomIndex, 1)[0];
            console.log('gameData.truths: ', gameData.thruths);
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
            setCardData();
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
            // setGameStarted(false);
            setTimesplayed(timesPlayed + 1);
        } else {
            displayIncorrectMessage();
        }
    };

    return(
        <div id='2truths'>
            <TextBox>
                <h3>{gameStarted ? 'Here are 3 statements about me, try to guess which is the lie!': 
                                   'Enough boring reading! Lets play 2 truths 1 lie! Which I realize is still reading, but I think it is more fun.'}
                </h3>
                { !gameStarted && <button onClick={() => {setGameStarted(true)}}>Start!</button> }
                { gameStarted &&
                <div>      
                    <div className="grid-container">
                        <div className="grid-item">
                            <button onClick={() => {chooseAnswer(0)}}>
                                <h5>{getCardData(0)}</h5>
                            </button>
                        </div>
                        <div className="grid-item">
                            <button onClick={() => {chooseAnswer(1)}}>
                                <h5>{getCardData(1)}</h5>
                            </button>
                        </div>
                        <div className="grid-item">
                            <button onClick={() => {chooseAnswer(2)}}>
                                <h5>{getCardData(2)}</h5>
                            </button>
                        </div>
                    </div>
                </div>
                }
            </TextBox>
        </div>
    );
};

export default TwoTruths;
