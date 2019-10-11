const image =
  "https://66.media.tumblr.com/60bd2013620b0da00220889969665d21/tumblr_ox8955EH6Y1qdkzi9o1_1280.jpg";
const Poster = ({ posterImage }) => {
  return (
    <div>
      <div className="card poster">
        <img
          className="card-image poster-image"
          src={posterImage}
          width={"500"}
        />
      </div>
    </div>
  );
};
export default Poster;
