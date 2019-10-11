const Cast = ({ cast }) => {
  return (
    <div>
      <p className="text-color">Cast</p>
      <ul>
        {cast
          ? cast.split(",").map((actor, index) => {
              return <li key={index}>{actor}</li>;
            })
          : ""}
      </ul>
    </div>
  );
};

export default Cast;
