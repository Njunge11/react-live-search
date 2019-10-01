import Link from "next/link";
const image =
  "https://raw.githubusercontent.com/Significa/frontend-challenge/master/layout/2.Exports/2.Logos/logo.png";
const Header = () => {
  return (
    <div className="span-col-6 logo">
      <img src={image} width={"110"} />
    </div>
  );
};

export default Header;
