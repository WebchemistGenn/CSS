import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
import s from "./header.module.scss";

const HeaderComponent: React.FC = () => {
  const menu = [
    { path: "/", name: "Home" },
    { path: "/styled-components", name: "styled-components" },
    { path: "/css-module", name: "CSS Module" },
    { path: "/useful", name: "Useful" },
  ];

  return (
    <div className={cx(s.wrap)}>
      <ul className={cx(s.menu)}>
        {menu.map((item) => (
          <li key={item.name} className={cx(s.item)}>
            <NavLink to={item.path} className={({ isActive }) => (isActive ? s.active : "")}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderComponent;
