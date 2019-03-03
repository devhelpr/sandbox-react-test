import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  color: blue;
`;

export default class Test extends React.Component {
  render() {
    return <Title>Hello Styled component</Title>;
  }
}
