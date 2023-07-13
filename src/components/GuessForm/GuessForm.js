import React from "react";

function GuessForm({ guess, setGuess, addGuess }) {

  return <form
    onSubmit={event => {
      event.preventDefault();
      addGuess(guess);
      setGuess("");
    }}
    className="guess-input-wrapper"
    >
    <label htmlFor="guess-input">
      Enter Guess:
    </label>
    <input
      id="guess-input"
      value={guess}
      onChange={event => {
        setGuess(event.target.value.toUpperCase());
      }}

      pattern="....."
      maxLength={5}
    />
  </form>;
}

export default GuessForm;
