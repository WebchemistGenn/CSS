import React from "react";
import Header from "../components/header";
import cx from "classnames";
import s from "./layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <section className={cx(s.section)}>{children}</section>
    </React.Fragment>
  );
};

export default Layout;
