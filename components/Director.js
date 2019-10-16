import TitleText from "./TitleText";
const Director = ({ director }) => {
  return (
    <div>
      <TitleText title="Director" />
      <ul>
        {director
          ? director.split(",").map((d, index) => {
              return <li key={index}>{d}</li>;
            })
          : ""}
      </ul>
    </div>
  );
};
export default Director;
