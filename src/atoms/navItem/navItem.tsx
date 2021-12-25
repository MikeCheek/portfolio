import React from "react";

import * as styles from "./navItem.module.scss";
import { NavItemProps } from "./navItem.type";

import { Link } from "gatsby";

const NavItem = ({isHref, path, onClick, text}: NavItemProps): JSX.Element => {
  return (
    <>
      {isHref ? (
        <a
          href={path}
          className={styles.item}
          onClick={onClick}
          title={"Go to " + text + " section"}
        >
          {text}
        </a>
      ) : (
        <div>
          <Link
            className={styles.link}
            to={path}
            onClick={onClick}
            title={"Go to " + text + " page"}
          >
            <p className={styles.item}>{text}</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default NavItem;
