import Head from "next/head";
import Header from "./Header";
const withLayout = Page => props => {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <link href="/static/app.css" rel="stylesheet" />
      </Head>
      <div className="container">
        <Header />
        <Page />
      </div>
    </div>
  );
};
export default withLayout;
