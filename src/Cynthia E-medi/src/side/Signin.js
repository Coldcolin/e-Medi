import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { Link } from 'react-router-dom';


const SignUp = () =>{
    return(
        <Container>
            <Wrapper>
                <Wrap>
                        <Hero>
                            <Doc/>
                        </Hero>
                       <FormHold>
                           <InputHold>
                               <div>
                               <Input type='email' placeholder='Email:'/>
                               <AlternateEmailIcon/>
                               </div>-*/
                               <Line></Line>
                               <div>
                               <Input type='password' placeholder='Password:'/>
                               <VisibilityOffIcon/>
                               </div>
                               <Line></Line>
                               <div>
                                   <Button>Sign Up</Button>
                               </div>
                           </InputHold>
                           <Social>
                               <h5 style={{
                                   display:"flex",
                               }}>Don't have an account? <H5 to='/home-+' style={{
                                   marginLeft:"10px",
                                   color:"white"
                               }}>Sign Up</H5></h5>
                               <div style={{
                                   width:"150px",
                                //    backgroundColor:"white",
                                   display:"flex",
                                   flexDirection:"column",
                                   justifyContent:"center",
                                   alignItems:"center"
                               }}>
                                   <h3>Or</h3>
                                   <h4>Sign Up With...</h4>
                               </div>
                               <Div>
                               <Circles style={{
                                   "background-color":"#D65045",
                               }}>
                                   <GoogleIcon style={{
                                       color:"white"
                                   }}/>
                               </Circles>
                               <Circles style={{
                                   "background-color":"#CC4667"
                               }}>
                                    <InstagramIcon style={{
                                       color:"white"
                                   }}/>
                               </Circles>
                               <Circles style={{
                                   "background-color":"#3B5999"
                               }}>                                        <FacebookIcon style={{
                                color:"white"
                            }}/>
                               </Circles>
                               <Circles style={{
                                   "background-color":"#6AACDD"
                               }}>
                                   <TwitterIcon style={{
                                       color:"white"
                                   }}/>
                               </Circles>
                               </Div>
                           </Social>
                       </FormHold>
            </Wrap>
            </Wrapper>
        </Container>
    )
}

export default SignUp;
const Line = styled.div`
    width: 450px;
    height: 1px;
    background-color: black;
`;

const H5 = styled.div``;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: #0E0E0E; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 80%;
    height: 90%;
    background-color: #5699ae;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
const Wrap = styled.div`
    width: 90%;
    height: 90%;
    background-image: url('/12.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    display: flex;

`;
const FormHold = styled.div`
    width: 50%;
    height: 100%;
    /* background-color: aqua; */
    border-radius: 5px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const Hero = styled.div`
    width: 50%;
    height: 100%;
    background-color: aqua;
    border-radius: 5px;
    margin: 5px;
`;
const Doc = styled.img`
    width: 100%;
    height: 100%;
    background-image: url('/pp.jpg');
    background-size: cover;
    border-radius: 5px;
`;




const Input = styled.input`
    width: 400px;
    height: 30px;
    margin: 10px;
    border-radius: 10px;
    border: none;
    color: black;
    background-color: transparent;
    font-size: 20px;
    outline: none;

    ::placeholder{
        color: black;
    }
`;
const InputHold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 20px; */
`;
const Button = styled.div`
    margin: 15px;
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: #F5F5F5;
    font-weight: 600;
    margin-top: 60px;

`;
const Social = styled.div`
    width: 300px;
    /* background-color: azure; */
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
    line-height: 0%;
`;
const Div = styled.div`
    width: 100%;
    height: 40px;
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Circles = styled.div`
    width: 50px;
    height: 50px;
    background-color: silver;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
