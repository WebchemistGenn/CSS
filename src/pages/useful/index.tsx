import React from "react";
import cx from "classnames";
import s from "./useful.module.scss";
import Layout from "../../layouts";

const UsefulPage: React.FC = () => {
  return (
    <Layout>
      <h1>Position</h1>
      <div className={cx(s.wrap)}>
        <div className={cx(s.position)}>
          <div className={cx(s.empty)}></div>
          <div className={cx(s.fixed)}>fixed</div>
          <div className={cx(s.absolute)}>absolute</div>
          <div className={cx(s.sticky)}>sticky</div>
        </div>
      </div>

      <h1>Dispaly: flex</h1>
      <div className={cx(s.wrap)}>
        <div className={cx(s.flex)}>
          <div className={cx(s.item1)}>item1</div>
          <div className={cx(s.item2)}>item2</div>
          <div className={cx(s.item3)}>item3</div>
        </div>
      </div>

      <h1>Dispaly: grid</h1>
      <div className={cx(s.wrap)}>
        <div className={cx(s.grid)}>
          <div className={cx(s.item)}>item</div>
          <div className={cx(s.item)}>item</div>
          <div className={cx(s.item)}>item</div>
          <div className={cx(s.item)}>item</div>
          <div className={cx(s.item)}>item</div>
          <div className={cx(s.item)}>item</div>
        </div>
      </div>

      <h1>Transform</h1>
      <div className={cx(s.wrap)}>
        <div className={cx(s.transform)}>
          <div>translate</div>
          <div>scale</div>
          <div>rotate</div>
          <div>skew</div>
        </div>
      </div>

      <h1>Transition</h1>
      <div className={cx(s.wrap)}>
        <div className={cx(s.transition)}>
          <div />
        </div>
      </div>

      <h1>Animation</h1>
      <div className={cx(s.wrap)}>
        <div className={cx(s.animation)}>
          <div />
        </div>
      </div>
    </Layout>
  );
};

export default UsefulPage;
