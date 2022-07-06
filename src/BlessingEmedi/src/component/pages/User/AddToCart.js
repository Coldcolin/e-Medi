import React from 'react'
import styled  from "styled-components"
import {IoMdCheckboxOutline, IoMdSend, } from "react-icons/io"
import {BsFillCartCheckFill} from "react-icons/bs"
import pix1 from "../../../ASSETS/bgCart.jpg"
import bg from "../../../ASSETS/healthcare-9621.jpg";
import bg2 from "../../../ASSETS/transforming-healthcare-delivery-2492.jpg";

import pix2 from "../../../ASSETS/ampicilin.png";
import pix3 from "../../../ASSETS/aspirin.png";
import pix4 from "../../../ASSETS/paystack-logo-vector-removebg-preview.png"
// import { Check, CheckBox } from '@mui/icons-material';


const AddToCart = () => {
  return (
    <Container>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#009688"
          fill-opacity="1"
          d="M0,192L0,192L288,192L288,96L576,96L576,32L864,32L864,96L1152,96L1152,0L1440,0L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
        ></path>
      </svg> */}
      <Wrapper>
        <Hold>
          {/* <Divs> */}
            <NavHold>
              <Navs>PRODUCT</Navs>
              <Navs>PRICE</Navs>
              <Navs>QTY</Navs>
              <Navs>TOTAL</Navs>
            </NavHold>
          {/* </Divs> */}

          <ItemRow>
            <Item>
              <Div>
                <Imag src={pix3} />
              </Div>
              <Details>
                <Name>Diclofenac 100mg</Name>
                <Nafdac>203-445-43</Nafdac>
                <Category>Skin care</Category>
              </Details>
            </Item>
            <Price>#23,000</Price>
            <Quanty>
              <Span>
                <div>+</div>
                <strong>2</strong>
                <div>-</div>
              </Span>
            </Quanty>
            <Total>46,000</Total>
          </ItemRow>

          <ItemRow>
            <Item>
              <Div>
                <Imag src={pix3} />
              </Div>
              <Details>
                <Name>Diclofenac 100mg</Name>
                <Nafdac>203-445-43</Nafdac>
                <Category>Skin care</Category>
              </Details>
            </Item>
            <Price>#23,000</Price>
            <Quanty>
              <Span>
                <div>+</div>
                <strong>2</strong>
                <div>-</div>
              </Span>
            </Quanty>
            <Total>46,000</Total>
          </ItemRow>
          <ItemRow>
            <Item>
              <Div>
                <Imag src={pix3} />
              </Div>
              <Details>
                <Name>Diclofenac 100mg</Name>
                <Nafdac>203-445-43</Nafdac>
                <Category>Skin care</Category>
              </Details>
            </Item>
            <Price>#23,000</Price>
            <Quanty>
              <Span>
                <div>+</div>
                <strong>2</strong>
                <div>-</div>
              </Span>
            </Quanty>
            <Total>46,000</Total>
          </ItemRow>
          <FootNote>
            <Note>ADD A NOTE</Note>
            <Input placeholder="Some words to the in House team" />
          </FootNote>
        </Hold>
      </Wrapper>
      {/* <Hold> */}
      <Right>
        <Line />
        <HoldRight>
          <Top>
            CART TOTAL <span>#150,000</span>
            <p>Shipping and taxes calculated at checkpoint</p>
          </Top>
          <div>
            <input type="checkbox"></input>
            <span>
              I agree to the <i>Terms and Conditions</i>
            </span>
          </div>
          <Chec>
            CHECKOUT <IoMdCheckboxOutline />
          </Chec>
          <Pay>
            <img src={pix4} />
          </Pay>
        </HoldRight>
        <Icon />
      </Right>
      {/* </Hold> */}
    </Container>
  );
}

export default AddToCart

// const Container = styled.div``
const Icon = styled(BsFillCartCheckFill)`
height:150px;
color:#fff;
width:80%;
@media (max-width:800px){
height:30vh
}
`;
const Right = styled.div`
  width: 20%;
  height: 80vh;
  left: 77%;
  bottom: 50px;
  background: #fff;
/* color:#fff; */
  display: flex;
  position: fixed;
  padding: 0 20px;
  /* justify-content:center; */
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  @media(max-width: 800px){
    position: relative;
  }
`;
const Line = styled.div`
width:100%;
border-bottom: 3px solid black;
margin-bottom: 80px;

`;
const Top = styled.div`
font-weight: lighter;

  span {
    font-weight: 700;
    font-size: 20px;
  }
`;
const Chec = styled.div`
width:50%;
padding: 10px 0;
border-radius:30px;
cursor: pointer;

color:#fff;
background: black;
margin: 20px 0;
text-align: center;
@media (max-width: 800px) {
  font-size: 80%;
}
`
const Pay = styled.div`
width:40%;
border-radius: 30px;
cursor: pointer;
background: lightgray;
display: flex;
justify-content:center;
align-items: center;
padding: 0 10px;
img{
  width:90%;
  /* height: 70px; */
}
`
const HoldRight = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items: center;
i{
  color:red;
}
flex-direction: column;
`;
const Span = styled.div`
  /* background: red; */
width:100%;
display: flex;
  transition: all 350ms;
  div {
    transition: all 350ms;
    transform: scale(1.03);
    width: 20px;
    text-align: center;
    height: 20px;
    padding: 2px 0;
    margin: 0 10px ;
    :hover {
      background: #3e435e;
      cursor: pointer;
      color:#fff;
      /* border-radius: 100%; */
    }
  }
  strong {
    width: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
  }
`;
const Quanty = styled.div`
  width: 20%;
  text-align: center;
`;
const Total = styled.div`
  font-weight: 800;
  width: 20%;
  text-align: center;
`;

const FootNote = styled.div`
width:100%;
margin-top: 50px;
`;
const Note = styled.div``;
const Input = styled.input`
width:50%;
border:1px solid #3e435e;
height:40px;
outline: none;
background: #e5e5e5;
border-radius: 30px;
padding:0 20px ;
::placeholder{
  font-family: Nunito;
}
:focus{
  outline: 1px solid silver;

}
margin: 20px 0;
`;

const Price = styled.div`
  font-weight: 800;
text-align: center;
  width: 20%;
`;

const Details = styled.div`

`
const Name = styled.div`
  font-weight: 800;
`;
const Nafdac = styled.div``;
const Category = styled.div``;
const Divs = styled.div`
  width: 100%;
  height: 60px;
  background: #e5e5e5;
  display: flex;
  justify-content:center;
  align-items: center;
`;

const NavHold = styled.div`
  width: calc(100% - 48%);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  height:40px;
  background: #fff;
  margin-top: 30px;
`;
const Navs = styled.div`
  width: 20%;
  /* background: ; */
text-align: center;
  font-weight: bold;
  /* background: yellowgreen; */
`;
const Div = styled.div`
width: 100%;
justify-content:center;

`
const Imag = styled.img`
background: #009688;
/* object-fit:cover; */
width:100px;
height:70px;


`
const Item = styled.div`
width:20%;

`;
const ItemRow = styled.div`
/* flex:1; */
width:100%;
display: flex;
justify-content:space-between;
align-items: center;
margin:20px 0;
/* background-color: turquoise; */
/* flex-direction: column; */
`
// const Item = styled.div`
// /* width: 100%; */
// /* flex: 1; */
// display: flex;
// justify-content:space-between;

// `
const Hold = styled.div`
  width: 80%;
  display: flex;
  /* margin: 20px 0; */
  /* justify-content:center; */
  /* height:100vh; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
justify-content:center;
  align-items: center;
  /* overflow-y: scroll; */
  padding: 80px 25px;
  background: #fff;
  /* opacity: 0.9; */
  min-height: 80vh;
  margin-top: 30px;
  height: 100%;

  flex-direction: column;
  /* padding-bottom: 20px; */
`;


const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid black;
  padding: 0 20px;
  align-items:center;
`;
const Length = styled.div`
  font-size: 12px;
  color: grey;
  opacity: 0.8;
  /* padding: 0 20px; */
`;
const H1 = styled.div`
  width: 80%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #009688;
    margin: 0;
    padding: 0;
  }
`;
const Wrapper = styled.div`
  width: calc(80vw - 20%);
  /* padding-top: 30px; */
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
  display: flex;
  /* background: #fff; */
  /* padding: 0 20px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
@media (max-width: 800px) {
  width:80%;
}
  /* background: ghostwhite; */
  /* background: rgba(0, 0, 0, 0.6); */
  /* position: absolute; */
`;
const Container = styled.div`
width:100%;
min-height:100vh;
height: 100%;
display:flex;
justify-content:center;
align-items: center;
background: #3e435e;
@media (max-width: 800px) {
  flex-direction: column;
}
/* background-image: url(${bg}); */
/* background-repeat: no-repeat; */
/* flex-direction: column; */
/* position:relative; */
`;