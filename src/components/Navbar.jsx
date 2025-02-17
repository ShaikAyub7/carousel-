import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h4>Carousel</h4>
        <div className="nav-container">
          {/* <FaCartPlus className="cart-icon" /> */}
          <div className="amount-container">
            <p className="total-amount">Hi</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
