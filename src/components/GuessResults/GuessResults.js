import React from "react";
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';


function GuessResults({ guessList, answer, maxGuesses }) {
  return <div className="guess-results">
    {guessList.map(({ guess, key }) =>
      <p className="guess" key={key}>
        {/* {console.log(guess), console.log(answer)} */}
        {checkGuess(guess, answer).map(({letter,status}, index) =>
          <span className={"cell " + status} key={index}>{letter}</span>
        )}
      </p>
    )}
    {range(0, maxGuesses - guessList.length).map(index =>
      <p className="guess" key={index}>
        {/* {console.log(guess), console.log(answer)} */}
        {range(0, 5).map((index) =>
          <span className={"cell"} key={index}></span>
        )}
      </p>
    )}
  </div>;
}

export default GuessResults;
