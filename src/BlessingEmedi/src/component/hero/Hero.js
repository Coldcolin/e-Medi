import React from 'react'
import styled from 'styled-components'
import {BsFillCartPlusFill} from 'react-icons/bs'
import doc from "../../ASSETS/docs.png"  
import reg from "../../ASSETS/reg.png";
import rec from "../../ASSETS/11094-removebg-preview.png";

import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <Container>
      <Wrap>
        <Absolute>
          <Nav>
            Get in touch
            <br />
            with doctors
          </Nav>
          <Nav>
            Become a doctor
            <br />
            and meet new patients
          </Nav>
          <Nav style={{border:"none"}}>
            Become a pharmacists
            <br />
            sell to multiple customers
          </Nav>
        </Absolute>

        <Left>
          <Hold>
            <h1>A heritage in care.</h1>
            <H1>
              A reputation in <br />
              excellence
            </H1>
            <p>
              Now that you're here you problem is half solved, <br />
              just some clicks away till 100%
            </p>
            <Button to="/SignUp">
              Register
              <img src={reg} alt="Image" />
            </Button>
          </Hold>
        </Left>
        <Right>
          <img src={rec} alt="Doc" />
        </Right>
      </Wrap>
    </Container>
  );
}

export default Hero
const Absolute = styled.div`
  width: 600px;
  height: 60px;
  opacity: 0.6;
  top: 500px;

  left: 250px;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
  display: flex;
  /* z-index: -10; */
  position: absolute;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 800px) {
    display:none;
  }
`;
const Nav = styled.div`
  border-right: 1px solid blue;
  flex:1;
  display:flex;
  height:50%;
  text-align:center;
  align-items:center;
  justify-content:center;
  font-size:14px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* margin-top: 5px; */
  justify-content: center;
`;
const Wrap = styled.div`
  display: flex;
  /* video{
    width:100%;
    height:400px;
  } */
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  width: 100%;
  height: 100%;
  align-items: center;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10 rgb(0 0 / 73%) 0px 16px 10px -10px;
  justify-content: space-between;
  /* background:cornsilk; */
`;
const Left = styled.div`
  /* flex: 1; */
  width: 50%;
  display: flex;
  justify-content: flex-end;
  /* align-items: center; */
  background: #e5e5e5;
  height: 500px;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    align-items: center;
    /* background:teal; */
    justify-content: center;
  }
`;
const Button = styled(Link)`
  text-decoration: none;
  width: 200px;
  margin-top: 5px;
  /* border-radius: 5px; */
  height: 50px;
  font-family: poppins;
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  /* text-transform: uppercase; */
  color: white;
  font-weight: 200;
  outline: none;
  border: 0;
  background-color: #3e435e;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const Right = styled.div`
  /* flex: 1; */
  width: 50%;

  background: #3e435e;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    /* padding:20px 0 */
  }
`;



const Hold = styled.div`
  padding: 30px 0;
  /* margin-bottom: 30px; */
  width: 70%;
  /* background:pink; */
  /* just */
  h1 {
    font-weight: 700;
    font-size: 45px;
    padding: 0;
    margin: 0;
    line-height: 1;
    margin: 10px 0;
  }
  p{
    margin: 40px 0;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom:50px;
    width:80%;
    padding:20px 0;
    /* background: green; */
  }
`;
// const Container = styled.div``;

const H1 = styled.div`
  font-size: 50px;
  line-height: 50px;
`