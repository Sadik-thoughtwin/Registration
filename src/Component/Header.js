import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { user: u } = useSelector((state) => state.reducer);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));

  function logout() {
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto nav_bar_wrapper p-25">
          {localStorage.getItem("user-info") ? (
            <>
              <Link className="p-2" to="/">
                ProductList
              </Link>
              <Link className="p-2" to="/add">
                Add Product
              </Link>
              <Link className="p-2" to={`/update/${u?._id}`}>
                Update
              </Link>
            </>
          ) : (
            <>
              <Link className="p-2" to="/register">
                Register
              </Link>
              <Link className="p-2" to="/login">
                Login
              </Link>
            </>
          )}
        </Nav>
        {localStorage.getItem("user-info") ? (
          <Nav>
            <NavDropdown className="pl-5" title={user && user.name}>
              <NavDropdown.Item
                onClick={logout}
                className="mr-5 padding-right: 9.5rem"
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        ) : null}
      </Navbar>
    </div>
  );
}
