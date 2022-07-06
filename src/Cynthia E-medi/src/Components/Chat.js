import React from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const ChatPage = () => {
  return (
    <Container>
      <Wrapper>
      <Form>
      <InputHold>
        <SentDiv>
          <Name>Dr Muna Ekeke</Name>
        <Box>Message</Box>
        {/* <Input  type='text' placeholder='Send a message'/> */}
        </SentDiv>
        <Div>
        <Line></Line>
        <div>Today</div>
        <Line></Line>
        </Div>
        <RepDiv>
        <Name>Blessing Abgor </Name>
        <Box2>Message</Box2>
        {/* <Input type='text' placeholder='Send a message'/> */}
        </RepDiv>
      </InputHold>
      </Form>
      <SendHold>
      <Input type='text' placeholder='Send a message'/>
      <AddReactionIcon style={{
        // backgroundColor:"#33354a",
        width:"30px"
      }}/>
      <SendIcon style={{
        color:"#33354a",
        width:"30px",
        margin: "10px",
      }}/>
      </SendHold>
      </Wrapper>
    </Container>
  )
}

export default ChatPage;

const Profile = styled.div`
  background-color: red;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 20px;
`;
const SentDiv = styled.div`
width: 100%;
/* background-color: red; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

div{
  /* width: 300px; */
  display: flex;
  /* background-color: pink; */
  justify-content: space-between;
  align-items: center;
}

@media Screen and (max-width: 768px){
  width: 100%;
}

/* margin-right: 100px; */
`;
const RepDiv = styled.div`
  width: 100%;
/* background-color: red; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media Screen and (max-width: 768px){
  width: 100%;
}

`;
const SendHold = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled.div`
  width: 500px;
  background-color: #009587;
  border-radius: 20px;
  height: auto;
  padding: 30px 20px;
  font-size: 20px;
  font-weight: bold;
  /* margin-left: 300px; */
  @media Screen and (max-width: 768px){
    width: 500px;
  }
  @media Screen and (max-width: 320px){
    width: 270px;
  }

`;
const Box = styled.div`
  width: 500px;
  background-color: #009587;
  border-radius: 20px;
  height: auto;
  padding: 30px 20px;
  font-size: 20px;
  font-weight: bold;
  @media Screen and (max-width: 768px){
    width: 500px;
  }
  @media Screen and (max-width: 320px){
    width: 270px;
  }

`;
const Div = styled.div`
  width: 110%;
  /* background-color: red; */
  display: flex;
  align-items: center;

`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

const InputHold = styled.div`
  width: 80%;
  /* background-color: red; */
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
    margin: 10px 0;
  }

`;
const Name = styled.div`
  font-size: large;
  font-weight: bold;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  font-size: medium;
  padding: 0 10px;
  margin: 10px;
  outline: none;
  background: transparent;

  ::placeholder{
      font-size: 20px;
      padding: 10px 20px;
    }
  :focus{
    font-size: 20px;
    /* outline: solid #009587 2px; */
  }

  
  @media Screen and (max-width: 768px){
    width: 300px;
  }
  
  @media Screen and (max-width: 320px){
    width: 250px;
  }

  
`;




const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  /* background-color: red; */

`;
const Form = styled.div`
  width: 100%;
  color: white;
  height: 100vh;
  background-color: #33354a;
  /* background-color: #009587; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

`;


