import withLayout from "../components/Layout";
import Search from "../components/Search";
import IndexDefault from "../components/IndexDefault";
const Index = () => {
  return (
    <div>
      <Search />
      <IndexDefault />
    </div>
  );
};
export default withLayout(Index);
