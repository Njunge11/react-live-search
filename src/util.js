import axios from "axios";
let source;
const resources = {};
const queryMovies = async query => {
  if (source) {
    source.cancel();
  }
  const CancelToken = axios.CancelToken;
  source = CancelToken.source();
  try {
    if (resources[query]) {
      return resources[query];
    }
    const res = await axios(query, { cancelToken: source.token });
    const result = res.data.results;
    resources[query] = result;
    return result;
  } catch (error) {
    if (axios.isCancel) {
      console.log("Request cancelled ", error.message);
    } else {
      console.log("Something went wrong: ", error.message);
    }
  }
};
export default queryMovies;
