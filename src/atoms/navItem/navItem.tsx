import React, { useEffect, useState } from "react";

import * as styles from "./navItem.module.scss";
import { NavItemProps } from "./navItem.type";

import { Link } from "gatsby";

const NavItem = ({isHref, path, onClick, text}: NavItemProps): JSX.Element => {

  const [ on, setOn ] = useState(false);

  const filteredPath = path.slice(1)

  const getElementRect = () => {
    let rect, windowTop, windowBottom, rectTop, rectBottom;
    
    if(document.getElementById(filteredPath)){
      rect = document.getElementById(filteredPath)!.getBoundingClientRect();
      windowTop = window.scrollY;
      windowBottom = windowTop + window.innerHeight;
      rectTop = rect.top + windowTop;
      rectBottom = rect.bottom + windowTop;

      if( rectTop >= windowTop && rectBottom <= windowBottom || rectTop <= windowTop && rectBottom >= windowBottom || rectTop >= windowTop && rectTop+250 <= windowBottom && rectBottom >= windowBottom ) {
        setOn(true)
      }
      else setOn(false)
    }
    
  }

  useEffect(() => {
    window.addEventListener('scroll', getElementRect);
  }, [])

  return (
    <>
      {isHref ? (
        <a
          href={path}
          className={on? styles.itemOn : styles.item}
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
