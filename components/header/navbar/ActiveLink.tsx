import Link from "next/link";
import { SyntheticEvent } from "react";
import { useRouter } from "next/router";
import { Nav } from "react-bootstrap";
import styles from "@/components/header/navbar/generalNavbar.module.css";
import { NavLinksItem } from "./navbar.helper";

interface LinkItemProps {
  item: NavLinksItem;
  cssClassName?: string;
}

const ActiveLink: React.FC<LinkItemProps> = ({ item, cssClassName }) => {
  const router = useRouter();
  const activeClass = router.asPath === item.href ? "text-white" : "text-white";

  const handleClick = (e: SyntheticEvent) => {
    if (router.asPath == item.href) {
      e.preventDefault();
      return;
    }
    router.push(item.href);
  };

  return (
    <Link href={item.href} passHref>
      <Nav.Link
        key={item.text}
        role={item.role}
        className={`fs-14 ${styles.lineHeight130} ${activeClass} ${cssClassName}`}
        onClick={(e) => handleClick(e)}
      >
        {item.text}
      </Nav.Link>
    </Link>
  );
};

export default ActiveLink;
