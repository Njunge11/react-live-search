import TitleText from "./TitleText";

const Cast = ({ cast }) => {
  return (
    <div>
      <TitleText title="Cast" />
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
