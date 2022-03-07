import React from "react";
import cx from "classnames";
import s from "./box.module.scss";
import Layout from "../../layouts";

const CSSModulePage: React.FC = () => {
  return (
    <Layout>
      <h1>CSS Module (CSS-in-CSS)</h1>
      <p>별도의 JS를 분석을 하지 않아도 되기때문에 performance에 유리합니다. 개발 코드가 아닌 별도의 계획적인 CSS를 구성해야합니다.</p>
      <div className={cx(s.box, s.box_200)}></div>
    </Layout>
  );
};

export default CSSModulePage;
