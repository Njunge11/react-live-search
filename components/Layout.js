import Head from "next/head";
import Header from "./Header";
const withLayout = Page => props => {
  console.log("the prop", props.url.query.id);
  return (
    <div>
      <Head>
        <title>Movies</title>
        <link href="/static/app.css" rel="stylesheet" />
      </Head>
      <div className="container">
        <Header />
      </div>
      <Page />
    </div>
  );
};
export default withLayout;
