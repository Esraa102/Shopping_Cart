import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto p-4 flex item-center justify-between">
        <Link to="/" className="text-xl font-bold uppercase">
          E-Commerce
        </Link>
        <Link className="text-lg font-bold text-orange-700" to="/cart">
          Your Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
