import React, { useState } from "react"
// import { usePaystackPayment } from 'react-paystack';
import PaystackPop from "@paystack/inline-js"
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';


const PaystackIntegration = ()=>{
    const showTotal = useSelector((state)=> state.reducer.total)

    // const config = {
    //     reference: (new Date()).getTime().toString(),
    //     email: "emedipharm92@gmail.com",
    //     amount: showTotal * 100,
    //     publicKey: 'pk_test_09285f4eba73b2f78492c4626907da8ac6f26304',
    // };
    
    // // you can call this function anything
    // const onSuccess = (reference) => {
    //   // Implementation for whatever you want to do with reference and after success call.
    // //   alert("Thanks for doing business with us! Come back soon!!")
    //   console.log(reference);
    // };
    
    // // you can call this function anything
    // const onClose = () => {
    //   // implementation for  whatever you want to do when the Paystack dialog closed.
    // //   alert("Wait! You need this oil, don't go!!!!")
    //   console.log('closed')
    // }
    
    // const initializePayment = usePaystackPayment(config);
    const paywithPaystack =()=>{
      const paystack = new PaystackPop()
    paystack.newTransaction({
      key: "pk_test_09285f4eba73b2f78492c4626907da8ac6f26304",
      amount: showTotal * 100,
      email: "emedipharm92@gmail.com",
    })
    }
      return (
        <div>
            <Button onClick={() => {
                // initializePayment(onSuccess, onClose)
                paywithPaystack()
            }}>Pay Now</Button>
        </div>
      );
}

export default PaystackIntegration

const Button = styled.button`
    padding: 5px 15px;
    border-radius: 3px;
    border: none;
    background-color: black;
    color: white;

    :hover{
      cursor: pointer;
    }
`