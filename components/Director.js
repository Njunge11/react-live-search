const Director = ({ director }) => {
  return (
    <div>
      <p className="text-color">Director</p>
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
