import TextBox from "../components/TextBox";
import { useEffect, useState } from "react";

const TRUTH_STAMENTS_AMOUNT = 2;
const LIE_STATEMENTS_AMOUNT = 1;

const gameData = {
  thruths: [
    "I was born on a Friday the 13th (Spooky)",
    "I played clarinet in high school band",
    "I went to the University of Waterloo for NanoTechnology Engineering",
    "I was a team leader at Mcdonalds in high school",
    "I built my own PC",
    "I think that windows 10 has a better UI than MacOS",
    "I like Javascript",
    "I almost got an internship with Apple, but was happy in hindsight to not have gotten the job",
  ],
  lies: [
    "I played the UPS guy in my high school's production of Legally Blonde",
    "I still use Windows 7 daily",
    "Internet explorer is a great browser",
    "I have been to Italy",
  ],
};

const TwoTruths = () => {
  //This could proabably be abstracted to x-truths y-lies easily
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  // const [totalAnswers, setTotalAnswers] = useState(0)
  const [cardSelected, setCardSelected] = useState([false, false, false]);
  const [isTheLie, setIsTheLie] = useState([false, false, false]);
  const [cardStatments, setCardStatements] = useState(["", "", ""]);
  const [isCurrentSelectionCorrect, setIsCurrentSelectionCorrect] =
    useState(false);
  const [message, setMessage] = useState("");

  //controls the success message
  useEffect(() => {
    if (cardSelected.includes(true) || correctAnswers > 0) {
      console.log("if statemenet");
      const messageText = isCurrentSelectionCorrect
        ? `Correct! You have guessed ${correctAnswers} lie(s) so far`
        : "INCORRECT GUESS AGAIN";
      setMessage(messageText);
    }
  }, [cardSelected]);

  //updates card data
  useEffect(() => {
    if (gameOver || !gameStarted) {
      return;
    } else if (
      gameData.thruths.length < TRUTH_STAMENTS_AMOUNT ||
      gameData.lies.length < LIE_STATEMENTS_AMOUNT
    ) {
      setGameOver(true);
    }

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    const randomOrder = [0, 1, 2];
    shuffleArray(randomOrder);
    const newStatements = ["", "", ""];
    const newLieOrder = [false, false, false];

    for (let i = 0; i < TRUTH_STAMENTS_AMOUNT; i++) {
      const randomtruthPosition = randomOrder.pop();
      const randomIndex = Math.floor(Math.random() * gameData.thruths.length);
      const randomTruth = gameData.thruths.splice(randomIndex, 1)[0];
      newStatements[randomtruthPosition] = randomTruth;
    }
    const randomLiePosition = randomOrder.pop();
    const randomIndex = Math.floor(Math.random() * gameData.lies.length);
    const randomLie = gameData.lies.splice(randomIndex, 1)[0];
    newStatements[randomLiePosition] = randomLie;
    newLieOrder[randomLiePosition] = true;

    setCardStatements(newStatements);
    setIsTheLie(newLieOrder);
  }, [gameStarted, correctAnswers, gameOver]);

  const getCardData = (cardId) => {
    return cardStatments[cardId];
  };

  const getCardClassName = (cardId) => {
    return cardSelected[cardId] ? "truth-card-selected" : "truth-card";
  };

  const cleanCardData = () => {
    const noCardSelected = [false, false, false];
    setCardSelected(noCardSelected);
  };

  const chooseAnswer = (cardId) => {
    if (isTheLie[cardId] === true) {
      setCorrectAnswers((num) => num + 1);
      setIsCurrentSelectionCorrect(true);
      cleanCardData();
    } else {
      const newSelectedState = cardSelected.slice();
      newSelectedState[cardId] = true;
      setCardSelected(newSelectedState);
      setIsCurrentSelectionCorrect(false);
    }
  };

  return (
    <div id="2truths">
      <TextBox>
        <h3>
          {!gameOver &&
            (gameStarted
              ? "Here are 3 statements about me, try to guess which is the lie!"
              : "Enough boring reading! Lets play 2 truths 1 lie! Which I realize is still reading, but I think it is more fun.")}
        </h3>
        <h3>
          {gameOver &&
            `Game over! You found ${correctAnswers} lies. I guess that means you know everything about me now.`}
        </h3>
        {!gameOver && !gameStarted && (
          <div className="two-truths-start">
            <button
              className="two-truths-start-inner"
              onClick={() => {
                setGameStarted(true);
              }}
            >
              <h3>Start Game!</h3>
            </button>
          </div>
        )}
        {!gameOver && gameStarted && (
          <>
            <div className="grid-container">
              <div className="grid-item">
                <div
                  className={getCardClassName(0)}
                  onClick={() => {
                    chooseAnswer(0);
                  }}
                >
                  <button className="truth-card-button">
                    <h3>{getCardData(0)}</h3>
                  </button>
                </div>
              </div>
              <div className="grid-item">
                <div
                  className={getCardClassName(1)}
                  onClick={() => {
                    chooseAnswer(1);
                  }}
                >
                  <button className="truth-card-button">
                    <h3>{getCardData(1)}</h3>
                  </button>
                </div>
              </div>
              <div className="grid-item">
                <div
                  className={getCardClassName(2)}
                  onClick={() => {
                    chooseAnswer(2);
                  }}
                >
                  <button className="truth-card-button">
                    <h3>{getCardData(2)}</h3>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-response">
              <h3>{message}</h3>
            </div>
          </>
        )}
      </TextBox>
    </div>
  );
};

export default TwoTruths;
