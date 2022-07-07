import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios"
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from  "@hookform/resolvers/yup"
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import { addId } from "./Global/globState"


const SignUp = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false)

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
    const schemaModel = yup.object().shape({
        email: yup.string().email().required("This field has not been filled"),
        password: yup.string().required("This field has not been filled")
    })
    const {register, reset, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(schemaModel)})

    const logIn = handleSubmit(async (data) =>{
        try{
            setToggle(!toggle)
        const {email, password} = data

        const res = await axios.post("https://emediback.herokuapp.com/api/login", { 
            email, password
        })
        // console.log(res.data)
        localStorage.setItem("emedi", JSON.stringify(res.data.data))
        dispatch(addId(res.data.data))
        reset();
        Toast.fire({
            icon: 'success',
            title: 'Log in successful'
        })
        navigate("/");
        window.location.reload();
        }catch(error){
            if (error.response) {
                Toast.fire({
                    icon: 'fail',
                    title: error.response.data.message
                })
                setToggle(!toggle)
                console.log(error.response.status);
                console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
        }
    })
    return(
        <Container>
            <Wrapper>
            {/* <Wrap> */}
                       <FormHold>
                           <InputHold onSubmit={logIn}>
                               {/* <div> */}
                               <Input placeholder='Email:' {...register("email")}/>
                               <Input type='password' placeholder='Password:' {...register("password")}/>
                                   {
                                    toggle? <Button>Signing In...</Button>:<Button type="submit">Sign In</Button>
                                   }
                           </InputHold>
                           <Social>
                               <H5 to="/SignUp">Don't have an account? <span>Sign Up</span></H5>
                               <H55 to="/SigninDoc">Sign in as Doctor</H55>
                               <H55 to="/SigninPharm">Sign in Phamarcy</H55>
                           </Social>
                       </FormHold>
            {/* </Wrap> */}
            </Wrapper>
        </Container>
    )
}

export default SignUp;
// const Line = styled.div`
//     width: 450px;
//     height: 1px;
//     background-color: black;
// `;

const H5 = styled(Link)`
    text-decoration: none;
    font-family: poppins;
    font-weight: 500 ;
    color:white;
    margin: 0px 0px 20px 0px;

    span{
        color: black;
    }

    @media Screen and (max-width: 768px){
        font-size: 12px;
    }
`;
const H55 = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 0.5px solid rgba(255, 255, 255, 0.4);
    width: 120px;
    height: 30px;
    background-color: grey;
    font-size: 12px;
    font-family: poppins;
    font-weight: 500 ;
    color:white;
    margin: 0px 0px 20px 0px;
    transform: scale(1);
    transition: 350ms;
    :hover{
        transition: 350ms;
        transform: scale(1.0005);
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
    }


    @media Screen and (max-width: 768px){
        font-size: 12px;
    }
`;
const H6 = styled.div`
    font-family: poppins;
    font-weight: 500 ;
    color:white;
    margin: 5px 0px 30px 0px;

    span{
        color: black;
    }

    @media Screen and (max-width: 768px){
        font-size: 12px;
    }
`;
const H3 = styled.div`
    font-family: poppins;
    font-weight: 800 ;
    color:black;
    margin: 5px 0px 10px 0px;

    span{
        color: black;
    }

    @media Screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* background-color: #0E0E0E; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    /* background-color:#009587; */
`;
const FormHold = styled.div`
    width: 500px;
    height: 400px;
    background-color: #009587;
    border-radius: 5px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media Screen and (max-width: 768px){
        width: 80%;
        height: 350px;
    }

`;
const Input = styled.input`
    width: 400px;
    height: 30px;
    margin: 10px;
    border-radius: 10px;
    border: none;
    color: white;
    border-bottom: 1px solid white;
    background-color: transparent;
    font-size: 16px;
    outline: none;

    ::placeholder{
        color: white;
        font-size: 12px;
    }
    @media Screen and (max-width: 768px){
        width: 90%;
    }
`;
const InputHold = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 30px;

    @media Screen and (max-width: 768px){
        width: 100%;
    }
`;
const Button = styled.button`
    outline: none;
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
    font-weight: 800;
    margin-top: 30px;
    color: #009587;

    @media Screen and (max-width: 768px){
        width: 60%;
        height: 30px;
        font-size: 16px ;
    }

`;
const Social = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-bottom: 50px; */
    line-height: 0%;

    @media Screen and (max-width: 768px){
        width: 80%;
    }
`;
const Div = styled.div`
    width: 100%;
    height: 40px;
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        width: 80%;
    }
`;
const Circles = styled.div`
    width: 50px;
    height: 50px;
    background-color: silver;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    @media Screen and (max-width: 768px){
        width: 30px;
        height: 30px;
    }
`;
