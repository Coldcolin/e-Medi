import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import { AiFillHome, AiOutlineHeart, AiFillSchedule } from "react-icons/ai";
import {MdDashboard} from "react-icons/md"
import {FiSettings} from "react-icons/fi"
import {GoRequestChanges} from "react-icons/go"
import {BiBookAlt} from "react-icons/bi"
// import pix from "/logo192.png"
const PharmacyDashboard = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Logo to="/">E-Medi</Logo>

          <NavHold>
            <Nav>
              <NV>
                <Icon1 />
                <span>Dashboard</span>
              </NV>
              {/* <Span></Span> */}
            </Nav>

            <Nav>
              <NV>
                <Icon2 />
                <span>Products</span>
              </NV>
              {/* <Span></Span> */}
            </Nav>

            <Nav>
              <NV>
                <Icon3 />
                <span>Requests</span>
              </NV>
              <Span>1</Span>
            </Nav>

            <Nav>
              <NV>
                <Icon4 />
                <span>Accounting</span>
              </NV>
              {/* <Span>1</Span> */}
            </Nav>
          </NavHold>

          <Profile>
            <ImageHold>
              <Image src="/logo192.png" />
              <Div></Div>
            </ImageHold>
            <NameHold>
              <Name>Kai Smith</Name>
              <NameTag>Administrator</NameTag>
            </NameHold>
          </Profile>
          <Settings>
            <Icon9 />
            <span>Settings</span>
          </Settings>

          <Settings>
          
            <span>Logout</span>
          </Settings>
        </Hold>
      </Wrapper>
    </Container>
  );
}

export default PharmacyDashboard
const NV = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  span{
    font-size: 20px;
  }
  width: 60%;
  justify-content:space-between;
  /* border: none;
  outline: none;
  background: none;
  background: #fff; */
  
  align-items: center;
`;

const Span = styled.div`
  padding: 0 7px;
  border-radius: 3px;
  background: #f15f1f;
  color: #fff;
  font-size: 14px;
`;
const Icon9 = styled(FiSettings)`
  font-size: 30px;

  margin-right: 10px;
`;
const Settings = styled.div`
  display: flex;
  /* justify-content:center; */
  align-items: center;
  font-size: 20px;
  margin: 20px 0;
`;
const Icon4 = styled(BiBookAlt)`
  font-size: 30px;

  margin-right: 5px;
`;
const Name = styled.div``
const NameTag = styled.div`
font-size: 12px;
`
const NameHold = styled.div`
/* width: 100%; */

`
const ImageHold = styled.div`
/* width: 100%; */
margin-right: 15px;
display: flex;
/* background: red; */

`
const Image = styled.img`
width:40px;
height: 40px;

border-radius:50%;
border: 1px solid silver;
`
const Div = styled.div`
width:10px;
border-radius: 50%;
height: 10px;
background: chartreuse;
position: absolute;
margin:0 5px;
`
const NavHold = styled.div`
margin-bottom: 20px;
/* height:50vh; */
/* background: peachpuff; */
`;
const Nav = styled.div`
  width: 90%;
  display: flex;
  color: #2e3097;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  margin: 20px 0;

  /* background: green; */
  cursor: pointer;
  &.active {
    border-left: 1px solid green;
    background: #fff;
  }

  /* background: #123456; */
  font-size: 18px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  /* background: blanchedalmond; */
`;
const Icon5 = styled(AiFillHome)`
  font-size: 30px;

  margin-right: 5px;
`;
const Icon3 = styled(GoRequestChanges)`
  font-size: 30px;

  margin-right: 5px;
`;
const Icon2 = styled(AiFillSchedule)`
  font-size: 30px;

  margin-right: 5px;
`;
const Icon1 = styled(MdDashboard)`
  font-size: 30px;
  margin-right: 5px;
`;
const Logo = styled(Link)`
text-decoration: none;
font-size: 20px;
margin-bottom: 35px;
color:black;
padding-left: 20px;
`
const Hold = styled.div`
  display: flex;
  justify-content:space-between;
  flex-direction: column;
  /* background: yellow; */
  /* align-items: center; */
  width: 100%;
  height: 100%;
`;


const Profile = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  width: 70%;
  /* flex-direction: row; */
`;

const Container = styled.div`
  /* width: 100%; */
  font-family: poppins;
  width: 220px;
  display: flex;
  position: fixed;
  height: 100vh;
  color: #2e3097;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  z-index: 10;
  @media (max-width: 800px) {
    width: 200px;
    height: 100%;
    position: fixed;
  }
  
`;
const Wrapper = styled.div`
  width: 100%;
  /* background: grey; */
  display: flex;
  /* padding: 0 15px; */
  height: 100%;
  /* min-height: 80vh; */

`;

// const Container = styled.div``;
