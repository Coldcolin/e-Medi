import React, {useContext} from 'react'
import styled from "styled-components"
import log from "../../ASSETS/techFairLogo.svg"
import Side from "../../../../Cynthia E-medi/src/Components/SideHeader"
import { BiSearch, BiMenuAltLeft } from "react-icons/bi";
import { HiOutlineMenuAlt2, HiMenu } from "react-icons/hi";
import { BsFillCartPlusFill } from "react-icons/bs";
import {MdOutlinePerson} from "react-icons/md"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux'

import {GrMenu} from "react-icons/gr"


// import {GrMenu} from "react-icons/gr"
import {Link} from "react-router-dom"
import pic from "../pages/download.png"
import { AuthContext } from "../../../../Components/Global/AuthProvider"
import { signOut } from "../../../../Components/Global/globState"
import Swal from 'sweetalert2'

const Header = () => {
  const { saveUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const myCart = useSelector((state) => state.reducer.cart);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  return (
  <>
      <Container>
      <Wrapp>
        <LogoHold>
          <Logo src={log} />
          <div>E-Medi</div>
        </LogoHold>
        <Navig>
          <Nav to="/">Home</Nav>
          {/* <Nav to="/">About Us</Nav> */}
          <Nav to="/viewAlDocs">Consult</Nav>
          <Nav to="/pharm">Pharmacy</Nav>
        </Navig>
        <Right>
          {
            !saveUser? <Button to="/Login">Login</Button>: <Butto onClick={() => {
                dispatch(signOut());
                Toast.fire({
                              icon: 'success',
                              title: 'Logged out successfully'
                          })
                  localStorage.removeItem("emedi");
                  window.location.reload();
                }}>Logout</Butto>
          }
          {
            !saveUser?  <Profile to="/">
              <Picture src={pic}/>
          </Profile> :saveUser.isUser? <Profile to="/">
            {
              saveUser? <Picture src={saveUser.Avatar}/>: <Picture src={pic}/>
            }
          </Profile>: saveUser.isDoc? <Profile to={`/detailpage/${saveUser._id}`}>
            {
              saveUser? <Picture src={saveUser.Avatar}/>: <Picture src={pic}/>
            }
          </Profile>: saveUser.isPharm? <Profile to={`/PharmPage/${saveUser._id}`}>
            {
              saveUser? <Picture src={saveUser.Avatar}/>: <Picture src={pic}/>
            }
          </Profile>: null
          }
          <Div to="/Cart">
          <AddShoppingCartIcon/>
          <div>{myCart.length}</div>
          </Div>
          <Hld style={{ border: "none" }}>
            <HiMenu style={{ marginRight: "10px" }} />
          </Hld>
        </Right>
        <Burger>
            <Men
              id="bar"
              onClick={() => {
                document.getElementById("display").style.top = "0px";
                document.getElementById("bar").style.display = "none";
                document.getElementById("times").style.display = "block";
              }}
            />
            <CancleIcon
              id="times"
              onClick={() => {
                document.getElementById("display").style.top = "-1000px";
                document.getElementById("bar").style.display = "block";
                document.getElementById("times").style.display = "none";
              }}
            />
          </Burger>
      </Wrapp>
    </Container>
    <SideMenu id="display">
        <Side />
      </SideMenu>
  </>
  );
}

export default Header
const SideMenu = styled.div`
  width:250px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: -3000px;
  z-index: 100;
  transition: all 2s ease;
  left:75%;
  @media(max-width:800px){
    left:3%;
  }
`;
const CancleIcon = styled(BiMenuAltLeft)`
  font-size: 30px;
  display: none;
  @media(max-width:800px){
    font-size:20px;
  }
`;
const Men = styled(GrMenu)`
  font-size: 30px;
  @media(max-width:800px){
    font-size:20px;
  }
`;
const Burger = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    /* width: calc(100% - 30%); */
    height: 70px;
    padding-right: 10px;
    left:90%;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 30px; */
    position: fixed;
    top: 0;
    /* padding:0 10px; */
  }
`;


const Container = styled.div`
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 50px; */
  /* background: darkcyan; */
`;
const Wrapp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  /* background: peachpuff; */
  align-items: center;
`;
const Logo = styled.img`
  width: 100px;
  height: 60px;
  @media (max-width:800px){
    width:30%;
  }
`;
const Icon1 = styled(AddShoppingCartIcon)`
font-size: 30px;
  @media(max-width:800px){
    font-size:20px;
  }
`;
const Icon2 = styled.div``;
const Icon3 = styled.div``;
const Icon4 = styled.div``;

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
const Right = styled.div`
  /* background: pink; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  @media (max-width: 800px) {
    width:50%;
    justify-content: flex-start;
    /* background:red; */
  
  }
`;

const Navig = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 50%;
  /* background:brown; */
  @media (max-width: 800px) {
    display: none;
  }
`;
const LogoHold = styled.div`
  width: 30%;
  @media (max-width: 800px) {
    width: 70%;
  }
  /* background: red; */
  /* color: #fff; */
  display: flex;
  div {
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: 600;
    @media (max-width:800px){
      font-size:20px;
    }
  }
  align-items: center;

`;
const Nav = styled(Link)`
  text-decoration: none;
  /* margin-right: 25px; */
  height: 60%;
  /* background:red; */
  display: flex;
  align-items: center;
  color: black;

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
const Button = styled(Link)`
  text-decoration: none;
  width: 100px;
  height: 40px;
  background: #3e435e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
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

  @media (max-width: 800px) {
    display: none;
  }

`;

const Div = styled(Link)`
  color: black;
  text-decoration: none;
  width: 100px;
  height: 60px;
  /* background-color: grey; */
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 18px;
    font-weight: 600;
    margin-top: -15px;
  }
`;

const Profile = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid black;
  @media (max-width:800px){
    width:30px;
    height:30px;
  }
`;
const Picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  @media (max-width:800px){
    width:100%;
    height:100%;
  }
`;
const Butto = styled.div`
  text-decoration: none;
  width: 100px;
  height: 40px;
  background: #3e435e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
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
  @media (max-width: 800px) {
    display: none;
  }

  
`;