import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

const SideHeader = () => {
  return (
    <Container>
      <Wrapp>
        <Right>
          <Navig>
          <Nav to="/">Home</Nav>
          {/* <Nav to="/">About Us</Nav> */}
          <Nav to="/viewAlDocs">Consult</Nav>
          <Nav to="/pharm">Pharmacy</Nav>
          </Navig>
          {/* <Hld style={{ border: "none" }}></Hld> */}
        </Right>
      </Wrapp>
    </Container>
  );
}

export default SideHeader
const Hld = styled.div`
  width: 11%;
  /* background: plum; */
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  display: none;
  :hover {
    cursor: pointer;
  }
`;
const Button = styled.div`
  width: 150px;
  height: 50px;
  background: #3e435e;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 5px; */
  color: #fff;

  &.active {
    height: 3px;
    width: 80%;
    transition: all 550ms;
    transform: scale(1);
    transform-origin: center left;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Right = styled.div`
  /* background: pink; */
  display: none;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* background: red; */
    height: 100vh;
    /* width: 400px; */
  }
`;
const Nav = styled(Link)`
  text-decoration: none;
  /* margin-right: 25px; */
  height: 60%;
  /* background:red; */
  display: flex;
  align-items: center;
  /* color: #009587; */
  color:#fff;
  :hover{
    background:#009587;
  }

  &.active {
    border-bottom: 1px solid skyblue;
    color: skyblue;

    transition: all 550ms;
    transform: scale(1);
    transform-origin: center left;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const Navig = styled.div`
  display: none;

  /* background:brown; */
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 50%;
    width: 50%;
  }
`;

const Container = styled.div`
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 50px; */
  /* background: darkcyan; */
`;
const Wrapp = styled.div`
  display: flex;
  width: 100%;
  min-height: 600px;
  height: 100%;
  flex-direction: column;
  /* justify-content: space-between; */
  /* background: peachpuff; */
  align-items: center;
`;