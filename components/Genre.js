const Genre = ({ genre }) => {
  return (
    <div>
      <p className="text-color">Genre</p>
      <ul>
        {genre
          ? genre.split(",").map((g, index) => {
              return <li key={index}>{g}</li>;
            })
          : ""}
      </ul>
    </div>
  );
};
export default Genre;
