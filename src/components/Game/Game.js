import React from 'react';

import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { v4 as uuidv4 } from 'uuid';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // todo install esbuild
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  const lastGuess = guessList.length != 0 ? guessList.at(-1).guess : "";
  const status = lastGuess === answer ? "won" :
    guessList.length === 5 ? "lost" : "keepgoing";

  console.log(lastGuess + answer);

  function addGuess(guess) {
    var nextId = uuidv4(); // replit node doesn't have crypto.randomUUID
    setGuessList([...guessList, { guess, key:nextId }]);
  }

  return <>
    <GuessResults guessList={guessList}
      answer={answer}
      maxGuesses={NUM_OF_GUESSES_ALLOWED}
    />

    {
      lastGuess === answer ?
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {" "}
          <strong>{guessList.length} guesses</strong>.
        </p>
      </div>
      : guessList.length === NUM_OF_GUESSES_ALLOWED ? 
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
      :
      <GuessForm
      guess={guess}
      setGuess={setGuess}
      addGuess={addGuess}/>
    }
    
  </>;
}

export default Game;
