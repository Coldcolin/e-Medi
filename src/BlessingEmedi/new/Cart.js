import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Components/Global/AuthProvider";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, addToCart, removeCart, changeItem, total } from "../../Components/Global/globState";
import Header from "../src/component/header/Header"
import Paystack from "../../Components/PaystackIntegration"




const Cart = () => {
    // const { saveUser } = useContext(AuthContext);
    const [data, setData] = useState([])

  const dispatch = useDispatch();
  const myData = useSelector((state) => state.reducer.cart);
  const myTotal = useSelector((state) => state.reducer.MyTotalCost)
  const showTotal = useSelector((state)=> state.reducer.total)
//   const showData = myData.data

  const fetchData = async () => {
    const res = await axios.get("http://localhost:4400/Store/Show");

    dispatch(addProduct(res.data.data));

    
    setData(res.data.data)
  };

 

  useEffect(() => {
    fetchData();
    dispatch(total())
  }, [myData]);
return (
    <div>
        <Conatiner>
        <Wrapper>
          <Header/>
          <Divs>Total Price: #{showTotal}</Divs>
          <Card>
            {myData.map((props) => (
              <Holder key={props._id}>
                <Image src={`http://localhost:4400/${props.Image}`} />

                <Div>
                  <TitleHolder>
                    <Title>{props.name}</Title>
                    <Price>#{props.Price * props.QTY}</Price>
                    <Price>{props.Category}</Price>
                    <Hold>
                    <But onClick={() => {
                      dispatch(changeItem(props));
                    }}>-</But>
                    <Pric>{props.QTY}</Pric>
                    <But onClick={() => {
                      dispatch(addToCart(props));
                    }}>+</But>
                    </Hold>
                  </TitleHolder>
                  <Button
                    onClick={() => {
                      dispatch(removeCart(props));
                    }}
                  >
                    Remove from Cart
                  </Button>
                </Div>
              </Holder>
            ))}
            
          </Card>
          <Paystack />
        </Wrapper>
      </Conatiner>
    </div>
)
};

export default Cart;


const But = styled.div`
    padding: 3px 10px;
    background-color: black;
    color: white;
    display: flex;
    font-weight: bold;
    font-size: 16px;
    justify-content: center;
    align-items: center;

    :hover{
        cursor: pointer;
    }
`
const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 0px 10px;
`;
const Pric = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
const TitleHolder = styled.div`
  width: 200px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: bold;
`;

const Welcome = styled.div`
  margin-bottom: 50px;
  font-weight: bold;
    font-size: 30px;

  span {
    font-weight: bold;
    font-size: 30px;
  }
`;

const Div = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: center;
  flex-direction: column;
`;

const Holder = styled.div`
  margin: 30px;
  width: 300px;
  min-height: 100px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 5px;

  transform: scale(1);
  transition: all 350ms;

  :hover{
    transform: scale(1.01);
    cursor: pointer
    transition: all 350ms;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
  background: black;
  margin-top: -20px;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Conatiner = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  height: 100%;
`;

const Button = styled.button`
  padding: 10px 15px;
  border-radius: 3px;
  background: red;
  color: white;
  margin: 10px 10px;
  transition: all 350ms;
  transform: scale(1);
  border: 0;
  outline: none;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
    background-color: red;
  }
`;

const Divs = styled.div`
    padding: 15px 20px;
    border-radius: 3px;
    background: coral;
    color: white;
    font-size:25px;
    font-family: poppins;
    margin-bottom: 30px;
    font-weight: bold;
    /* margin: 0 10px; */
    transition: all 350ms;
    transform: scale(1);
    border: 0;
    outline: none;
`
const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
`