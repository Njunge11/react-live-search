import Link from "next/link";
import publicRuntimeConfig from "../src/config";
const url = publicRuntimeConfig.imageURL;
const heartIconWhite =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIg%0D%0AaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uLWhl%0D%0AYXJ0LXdoaXRlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgog%0D%0AICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN0eWxlZ3VpZGUtcHJlc2VudGF0aW9uIiBzdHJv%0D%0Aa2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2Rk%0D%0AIj4KICAgICAgICA8ZyBpZD0iOC5pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzMC4wMDAw%0D%0AMDAsIC0zNDQuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uLWhlYXJ0LXdoaXRlIiB0%0D%0AcmFuc2Zvcm09InRyYW5zbGF0ZSg1MzAuMDAwMDAwLCAzNDQuMDAwMDAwKSI+CiAgICAgICAgICAg%0D%0AICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTEzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdo%0D%0AdD0iMjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiw1LjczODQwMDcgQzI0%0D%0ALjMxNTk5NzIsLTMuODc3NTE4MzUgMjYuMzEzMzIxOSwxNC40ODk4NTA1IDEyLDIwIEMtMi4zMTMz%0D%0AMjE5MiwxNS41NzAyODQgLTAuMzE1OTk3MjQsLTMuODc3NTE4MzUgMTIsNS43Mzg0MDA3IFoiIGlk%0D%0APSJSZWN0YW5nbGUtMTIiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+%0D%0ACiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
const MovieLink = props => (
  <div>
    <Link href="/movie/[id]" as={`/movie/${props.movie.imdbID}`}>
      <div className="card">
        <img className="card-img" src={props.movie.Poster} alt="card image" />
        <div className="card-img-overlay">
          <img className="heart-icon" src={heartIconWhite} />
          <p className="title">{props.movie.Title}</p>
          <p className="year">{props.movie.Year}</p>
        </div>
      </div>
    </Link>
  </div>
);
const Card = ({ movie }) => {
  return <MovieLink movie={movie} />;
};
export default Card;
