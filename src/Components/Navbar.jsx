import React from "react";
import { useLocation, Link } from "react-router-dom";
function Navbar() {
  let location = useLocation();
  console.log("use location", location.pathname);
  let homeDisplay = location.pathname == "/" ? true : false;
  console.log("homedisplay", homeDisplay);
  let navContent;
  if (homeDisplay) {
    navContent = (
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
        />
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </form>
    );
  } else {
    navContent = (
      <Link to="/" className="btn btn-success">
        Home
      </Link>
    );
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {navContent}
        <Link to="/cart" className="btn btn-success m-2">
          Cart
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
