import React from "react";
import dynamic from "next/dynamic";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import styles from "@/components/header/navbar/generalNavbar.module.css";
import Link from "next/link";
import {
  companyLinks,
  isEmpty,
  navLinksGeneral,
  UserProps,
} from "./navbar.helper";

const OffCanvasLoggedInUserInfo = dynamic(
  () => import("@/components/header/navbar/OffCanvasLoggedInUserInfo"),
  { ssr: true }
);
const OffCanvasNavLoginButton = dynamic(
  () => import("@/components/header/navbar/OffCanvasNavLoginButton"),
  { ssr: true }
);

const GeneralNavbarOffCanvas: React.FC<UserProps> = ({ ...user }) => {
  let loginLogoutButton;

  if (!isEmpty(user)) {
    loginLogoutButton = <OffCanvasLoggedInUserInfo user={user} />;
  } else {
    loginLogoutButton = <OffCanvasNavLoginButton />;
  }

  return (
    <>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        className="bg-navbar-general"
        role="general-navbar-off-canvas"
      >
        <Offcanvas.Header
          closeButton={true}
          closeVariant="white"
          className="off-canvas-close"
        >
          <Offcanvas.Title id="offcanvasNavbarLabel">
            <span className="brand-logo">e-jobs</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-navbar-general">
          {loginLogoutButton}
          <hr className={`text-white bg-white`} />
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <span className={`text-white fs-14 py-2 ${styles.lineHeight130}`}>
              メニュー
            </span>
            {navLinksGeneral.map((item) => {
              return (
                <Link passHref href={item.href} key={item.text}>
                  <Nav.Link
                    role={item.role}
                    className={`text-white fs-14 fw-bold ${styles.lineHeight130}`}
                  >
                    {item.text}
                  </Nav.Link>
                </Link>
              );
            })}
          </Nav>
          <hr className={`text-white bg-white`} />
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {companyLinks.map((item) => {
              return (
                <Link href={item.href} passHref key={item.text}>
                  <Nav.Link
                    role={item.role}
                    className={`text-white fs-14 fw-bold ${styles.lineHeight130}`}
                    target={item.target}
                  >
                    {item.text}
                  </Nav.Link>
                </Link>
              );
            })}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </>
  );
};

export default GeneralNavbarOffCanvas;
