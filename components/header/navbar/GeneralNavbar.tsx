import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "@/components/header/navbar/generalNavbar.module.css";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import {
  filteredLinks,
  isEmpty,
  navLinksGeneral,
  NavLinksItem,
  UserProps,
} from "./navbar.helper";
import HamBurgerIcon from "@/components/common/icon/HamburgerIcon";
const GeneralNavbarOffCanvas = dynamic(
  () => import("@/components/header/navbar/GeneralNavbarOffCanvas"),
  { ssr: false }
);

interface GeneralNavbarProps {
  cssClassName?: string;
}

const GeneralNavbar: React.FC<GeneralNavbarProps> = ({ cssClassName }) => {
  const [user, setUser] = useState({} as UserProps);
  const loggedInUser = useMemo(() => {
    return {
      email: "alamin.cse15@gmail.com",
      firstName: "Shaikh",
      lastName: "Alamin",
      role: "admin",
      isLoggedIn: true,
    };
  }, []);

  useEffect(() => {
    setUser({
      email: loggedInUser.email,
      firstName: loggedInUser.firstName,
      lastName: loggedInUser.lastName,
      role: loggedInUser.role,
      isLoggedIn: loggedInUser.isLoggedIn,
    });
  }, [loggedInUser]);

  return (
    <>
      <Navbar
        expand={"lg"}
        role="general-nav-role"
        className={`${cssClassName}`}
        collapseOnSelect={true}
      >
        <Container fluid>
          <Link href="/" passHref>
            <Navbar.Brand
              role="general-navbar-brand-role"
              className={styles.marginLeft}
            >
              <span className="brand-logo">e-jobs</span>
              <sub className="text-white">BD</sub>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            role="navbar-toggle-role"
            className="border-none"
          >
            <HamBurgerIcon />
          </Navbar.Toggle>
          <GeneralNavbarOffCanvas {...user} />
          <Navbar.Collapse id="responsive-navbar-nav" in={false}>
            <Nav
              role="general-navbar-navigation-links-role"
              className={`me-auto `}
            >
              {filteredLinks(
                navLinksGeneral,
                "nav-home-role",
                user?.isLoggedIn
              ).map((item) => {
                return (
                  <ActiveLink
                    key={item.text}
                    item={item}
                    cssClassName="header-links-padding"
                  />
                );
              })}
            </Nav>
            <Nav className={``}>
              <Nav.Link
                role="general-navbar-logged-in-user-email"
                className={`text-white fs-14 fw-bold ${styles.lineHeight130} ${styles.marginRight22}`}
              >
                {user && user?.email}
              </Nav.Link>

              {!isEmpty(user) && (
                <Button
                  variant="outline-light"
                  size="sm"
                  role="general-nav-logout-btn"
                  className="ml-2"
                  onClick={() => console.log("logging out")}
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

GeneralNavbar.defaultProps = {
  cssClassName: "bg-navbar-general",
};

export default GeneralNavbar;
