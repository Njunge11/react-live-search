const image =
  "https://raw.githubusercontent.com/Significa/frontend-challenge/master/layout/2.Exports/2.Illustrations/illustration-empty-state.png";
const Default = () => {
  return (
    <div className="container">
      <div className="span-col-6 default-state">
        <div>
          <img src={image}></img>
          <p className="index-default-text-1">Don't know what to search?</p>
          <p className="index-default-text-2">
            Here's an offer you can't refuse
          </p>
        </div>
      </div>
    </div>
  );
};

export default Default;
