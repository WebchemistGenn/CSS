import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1>Hello CSS!! World</h1>

      <div className="nesting1">
        <div className="nesting2">
          <div className="nesting3">
            <div className="nesting4"></div>
          </div>
        </div>
      </div>

      <div>
        <div className="blue-bg"></div>
        <div className="red-bg"></div>
      </div>

      <div>
        <div className="pt-0">pt-0</div>
        <div className="pt-5">pt-5</div>
        <div className="pt-10">pt-10</div>
        <div className="pt-15">pt-15</div>
        <div className="pt-20">pt-20</div>
        <div className="pt-30">pt-30</div>
      </div>

      <div>
        <div className="square-av"></div>
        <div className="circle-av"></div>
      </div>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
        <li>4</li>
      </ul>
    </Layout>
  );
};

export default HomePage;
