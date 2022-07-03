import TextBox from '../components/TextBox';
import { useState } from 'react';

const TwoTruths = () => {
    //add styling to truth/lie list elements
    const [gameStarted, setGameStarted] = useState(false);

    const gameData = {
        thruths: [
            'I was born on a Friday the 13th (Spooky)',
            'I played clarinet in high school band'
        ],
        lies: [
            'I played the UPS guy in my high school\'s production of Legally Blonde'
        ]
    };

    return(
        <div id='2truths'>
            <TextBox>
                <h3>{gameStarted ? 'Here are 3 statements about me, try to guess which is the lie!': 
                                   'Enough boring reading! Lets play 2 truths 1 lie! Which I realize is still reading, but I think it is more fun.'}
                </h3>
                { !gameStarted && <button onClick={() => {setGameStarted(true)}}>Start!</button> }
                { gameStarted && <div>
                    <h5>{gameData.lies[0]}</h5>
                    <h5>{gameData.thruths[0]}</h5>
                    <h5>{gameData.thruths[1]}</h5>
                </div>
                }
            </TextBox>
        </div>
    );
};

export default TwoTruths;
