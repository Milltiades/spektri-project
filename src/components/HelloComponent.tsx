import { styled } from "styled-components";

export default function HelloComponent() {
  return (
    <Div>
      <H1>HELLO!</H1>
      <P>What's Happening!</P>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  font-style: normal;
  background: #555454;
  color: #e0e0e0;
  padding: 21px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 141px;
  margin-top: 24px;
  @media (min-width: 1200px) {
    margin-top: 48px;
    height: 214px;
  }
`;

const H1 = styled.h1`
  font-weight: 400;
  font-size: 50px;
  line-height: 61px;
  width: 176px;
  @media (min-width: 1200px) {
    font-size: 96px;
    line-height: 116px;
    width: auto;
  }
`;
const P = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  @media (min-width: 1200px) {
    font-size: 38px;
    line-height: 44px;
  }
`;
