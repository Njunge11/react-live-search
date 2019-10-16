import TitleText from "./TitleText";
const Genre = ({ genre }) => {
  return (
    <div>
      <TitleText title="Genre" />
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
