import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../common/modals/modalReducer";
import { Icon } from "semantic-ui-react";
import { logoutAction } from "../store/auth/authAction";
import jwt_decode from "jwt-decode";
const NavMenu = () => {
  const { auth } = useSelector((state) => ({ ...state }));

  let isAdminUser;
  if (auth?.token) {
    isAdminUser = jwt_decode(auth?.token).role.indexOf("AdminUser") !== -1;
  }

  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch(logoutAction());
    // history.push("/");
  };
  const loggedOut = () => {
    return (
      <>
        <Nav.Link
          onClick={() => {
            dispatch(openModal({ modalType: "Register", modalProps: null }));
          }}
          className="text-white font-weight-bold"
        >
          Register
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            dispatch(openModal({ modalType: "Login", modalProps: null }));
          }}
          className="text-white font-weight-bold"
        >
          Login
        </Nav.Link>
      </>
    );
  };
  const loggedIn = () => {
    return (
      <NavDropdown
        title={auth?.user?.userName}
        id="basic-nav-dropdown"
        className="text-white font-weight-bold"
      >
        <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout} className="text-danger">
          <Icon name="power" /> Logout
        </NavDropdown.Item>
      </NavDropdown>
    );
  };

  return (
    <>
      <Navbar bg="" expand="lg" className="navbar-dark bg-alliance">
        <Container>
          {/* <Navbar.Brand as={Link} to="/">
            <img src="alliance.jpg" alt="" style={{ width: "150px" }} />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="text-white font-weight-bold"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/courses"
                className="text-white font-weight-bold"
              >
                Courses
              </Nav.Link>
            </Nav>

            <Nav className="ml-auto">
              {isAdminUser && (
                <>
                  <Nav.Link
                    onClick={() => {
                      dispatch(
                        openModal({ modalType: "MemberForm", modalProps: null })
                      );
                    }}
                    className="text-white font-weight-bold"
                  >
                    Add Staff
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      dispatch(
                        openModal({
                          modalType: "StudentForm",
                          modalProps: null,
                        })
                      );
                    }}
                    className="text-white font-weight-bold"
                  >
                    Add Student
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/members"
                    className="text-white font-weight-bold"
                  >
                    Members
                  </Nav.Link>
                </>
              )}
              {auth?.token ? loggedIn() : loggedOut()}
            </Nav>

            {/* <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
  </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavMenu;
