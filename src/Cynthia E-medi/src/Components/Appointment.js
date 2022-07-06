import React from 'react';
import styled from 'styled-components';
import Header from "./Header"

const Appointment = () => {
  return (
    <Container>
    <Header/>
        <Form>
            <h1>BOOK APPOINTMENT</h1>
            <div>
                <Name>NAME AND SURNAME</Name>
                <Input placeholder='Name'/>
            </div>
            <div>
                <Name>Email Address</Name>
                <Input placeholder='Email'/>
            </div>
            <div>
                <Name>Phone Number</Name>
                <Input placeholder='Phone Number'/>
            </div>
            <Hold>
            <div>
                <Name>DATE FORM</Name>
                <Input1 type='datetime-local' placeholder='Phone Number'/>
            </div>
            <div>
                <Name>DATE TO</Name>
                <Input1 type='datetime-local' placeholder='Phone Number'/>
            </div>
            </Hold>
            {/* <Hold1>
            <Name>HOURLY PREFERENCES</Name>
                <Wrap>
                <Button>Morning</Button>
                <Button>Afternoon</Button>
                <Button>Evening</Button>
                </Wrap>
            </Hold1> */}
        <Line></Line>
            <Button1>Submit</Button1>
        </Form>
    </Container>
  )
}

export default Appointment;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;

`;
const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Button1 = styled.button`
    padding: 15px 100px;
    border-radius: 15px;
    border: none;
    background-color: #009587;
    color: white;
    margin: 20px;
    font-size: large;
    font-weight: bold;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
        transition: all 350ms;
    }

`;
const Button = styled.button`
    padding: 15px 30px;
    border-radius: 20px;
    border: none;
    background-color: #009587;
    color: white;
    font-size: large;
    font-weight: bold;

    :hover{
        background-color: transparent;
        border: 2px solid #009587;
        transition: all 350ms;
    }


`;
const Hold1 = styled.div`
    /* width: 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: pink; */
`;
const Hold = styled.div`
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: pink; */

    @media Screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;
const Input = styled.input`
     width: 400px;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: medium;
  padding: 0 10px;

    @media Screen and (max-width: 768px){
        width: 350px;
    }
    @media Screen and (max-width: 320px){
        width: 100%;
    }

`;
const Name = styled.div`
     font-size: medium;
  font-weight: bold;
`;
const Input1 = styled.input`
  width: 180px;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: medium;
  padding: 0 10px;

  @media Screen and (max-width: 768px){
      width: 350px;
  }

  @media Screen and (max-width: 320px){
      width: 100%;
  }
    /* margin: 10px; */
`; 
const Container = styled.div`
    width: 100%;
    height:100vh;
    /* background-color: olivedrab; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;
const Form = styled.div`
    width: 70%;
    background-color: #33354a;
    height: auto;
    margin: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        text-align: center;
    }

    div{
        margin: 10px;
    }

    @media Screen and (max-width: 768px){
        width: 80%;
        height: 100vh;
    }
`;