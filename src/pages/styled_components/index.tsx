import React from "react";
import styled from "styled-components";
import Layout from "../../layouts";

const StyledComponentPage: React.FC = () => {
  const size = 200;

  return (
    <Layout>
      <h1>Styled-Components (CSS-in-JS)</h1>
      <p>값을 전달 하기 쉬워 개발시 편의성을 제공합니다. 데이터에 의한 변동이 무수하게 많은, 조합해야 하는 경우 유리합니다.</p>
      <Box size={size}></Box>
    </Layout>
  );
};

export default StyledComponentPage;

interface BoxProps {
  size?: number;
}

const Box = styled.div.attrs<BoxProps>((props) => ({ size: props.size ?? 100 }))<BoxProps>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  background-color: pink;
`;
