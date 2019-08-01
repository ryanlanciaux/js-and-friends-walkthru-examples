import React, { useState } from "react";

function Button({ onWatch }) {
  return (
    <button
      onClick={onWatch}
      style={{ padding: 12, margin: 12, backgroundColor: "springgreen" }}
    >
      Watch
    </button>
  );
}

function Movie(props) {
  return (
    <div>
      <strong>{props.title}</strong>
      <Button onWatch={props.onWatch} />
    </div>
  );
}

function StateProps() {
  const [moviesWatched, setMoviesWatched] = useState(0);

  const incrementMovieCount = () => {
    setMoviesWatched(moviesWatched + 1);
  };

  return (
    <>
      <div>Movies Watched: {moviesWatched}</div>
      <Movie title="Star Wars" onWatch={incrementMovieCount} />
      <Movie title="The Hobbit" onWatch={incrementMovieCount} />
      <Movie title="Avengers" onWatch={incrementMovieCount} />
    </>
  );
}

export default StateProps;
