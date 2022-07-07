import React, { useState } from 'react'
import styled from 'styled-components';
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HomeIcon from '@mui/icons-material/Home';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import pic from '../BlessingEmedi/src/component/pages/download.png'
import * as yup from "yup"
import {Link} from "react-router-dom"
import axios from "axios"
import {useNavigate} from "react-router-dom"


const SignUp = () =>{
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    const [imageDB, setImageDB] = useState("")
    const [avatar, setAvatar] = useState(pic)

    const yupModel = yup.object().shape({
        name: yup.string().required("This field has to be filled"),
        email: yup.string().email().required("This field has to be filled"),
        password: yup.string().required("This field has to be filled"),
        Address: yup.string().required("This field need to be filled"),
        Contact: yup.string().required("This has to be filled"),
        confirm: yup.string().oneOf([yup.ref("password"), null])
    })
    const {register, reset, handleSubmit, formState:{errors}} =
    useForm({resolver: yupResolver(yupModel)})

    const File = (e) =>{
        const file = e.target.files[0];
        const save = URL.createObjectURL(file);
        setAvatar(save);
        setImageDB(file);
        console.log("saved")
    }

    const signUp = handleSubmit(async (data)=>{
        try{
            setClicked(true)
        const {name, email, password, Address, Contact} = data
        console.log(data, imageDB)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("Address", Address);
        formData.append("password", password);
        formData.append("Contact", Contact);
        formData.append("Avatar", imageDB);

        const config ={
            headers:{
                "content-type": "multipart/formData"
            }
        }
    
        await axios.post("https://emediback.herokuapp.com/api/register", formData, config)
        reset()
        navigate("/Signed")
        }catch(error){
            setClicked(false)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                alert(error.response.data.message)
                // alert(error.response.data.message);
                console.log(error.response.status);
                console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
        }
    })

    return(
        <Container>
            <Wrapper>
                <Hero>
                    <Divs> Sign Up on <span>e-Medi</span> <br/> for free</Divs>
                </Hero>
                <FormHold>
                    <Profile >
                        <h1>Profile</h1>
                        <Circle src={avatar} alt="" >
                        </Circle>
                        <Add htmlFor='pix'>Add Image</Add>
                        <Upload id="pix" type="file" placeholder='Upload Image' onChange={File}/>
                    </Profile>
                    <InputHold type="multipart/form-data" onSubmit={signUp}>
                        <div>
                        <Input placeholder='User Name:' {...register("name")}/>
                        {/* <DriveFileRenameOutlineIcon/> */}
                        </div>
                        
                        <div>
                        <Input placeholder='Email:' {...register("email")}/>
                        {/* <AlternateEmailIcon/> */}
                        </div>
                        
                        <div>
                        <Input placeholder='Phone number:' {...register("Contact")}/>
                        {/* <PhoneInTalkIcon/> */}
                        </div>
                        
                        <div>
                        <Input placeholder='Address:' {...register("Address")}/>
                        {/* <HomeIcon/> */}
                        </div>
                        
                        <div>
                        <Input type='password' placeholder='Password:' {...register("password")}/>
                        {/* <VisibilityOffIcon/> */}
                        </div>
                        
                        <div>
                        <Input type='password' placeholder='Confirm Password:' {...register("confirm")}/>
                        {/* <VisibilityOffIcon/> */}
                        </div>
                            {!clicked? <button type="submit">Sign Up</button>: <button>Signing Up...</button>}
                    </InputHold>
                    <Social>
                    <Hall to="/login" style={{
                            display:"flex",
                        }}>Already have an account? <H5 style={{
                            marginLeft:"10px",
                            color:"white"
                        }}>Login..</H5></Hall>
                        <Div>
                        {/* <Circles style={{
                            "backgroundColor":"#D65045",
                        }}>
                            <GoogleIcon style={{
                                color:"white"
                            }}/>
                        </Circles>
                        <Circles style={{
                            "backgroundColor":"#CC4667"
                        }}>
                            <InstagramIcon style={{
                                color:"white"
                            }}/>
                        </Circles>
                        <Circles style={{
                            "backgroundColor":"#3B5999"
                        }}>
                        <FacebookIcon style={{
                        color:"white"
                    }}/>

                        </Circles>
                        <Circles style={{
                            "backgroundColor":"#6AACDD"
                        }}>
                            <TwitterIcon style={{
                                color:"white"
                            }}/>
                        </Circles> */}
                        </Div>
                    </Social>
                </FormHold>
            </Wrapper>
        </Container>
    )
}

export default SignUp;

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
    height: 95%;
    background-color: #009587;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const Divs = styled.div`
    position: absolute;
    font-size: 30px;
    font-family: poppins;
    font-weight: bold;
    color: white;
    top: 200px;
    /* left: 10px; */
    padding: 40px 10px;
    text-align: center;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1) ;

    span{
        color: #009587;
        font-size: 45px;
    }
`
const FormHold = styled.div`
    /* width: 50%; */
    flex: 1;
    height: 100%;
    /* background-color: aqua; */
    border-radius: 5px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

`;
const Hero = styled.div`
    flex: 1;
    height: 96%;
    background-image: url("/images/pexels-ivan-samkov-4989166.jpg");
    background-size: cover;
    border-radius: 10px;
    margin: 20px;
    position: relative;

    @media Screen and (max-width: 768px){
        display: none;
    }
`;
const Doc = styled.img`
    /* margin: 20px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;

const Profile = styled.div`
    height: 40%;
    width: 150px;
    margin-top: 10px; 
    margin-bottom: 20px;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Circle = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 1.5px solid #000000;
    /* background-color: silver; */
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;

    @media Screen and (max-width: 768px){
        height: 60px;
        width: 60px;
    }
`;
const Upload = styled.input`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none
`;
const Input = styled.input`
    width: 60%;
    height: 25px;
    margin: 10px;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    background-color: transparent;
    font-size: 16px;
    outline: none;

    ::placeholder{
        color: white;
    }

    
`;
const InputD = styled.input`
    width: 60%;
    height: 25px;
    margin: 10px;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    background-color: transparent;
    font-size: 16px;
    outline: none;

    ::placeholder{
        color: white;
    }

`;
const InputHold = styled.form`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: blue; */
    }
    button{
        margin-top: 10px;
        font-family: poppins;
        font-size: 20px;
        font-weight: bold;
        width: 60%;
        height: 40px;
        border: none;
        border-radius: 3px;
        color: #5699ae;
        transform: scale(1);
        transition: 350ms;
    }

    :hover{
        button{
            cursor: pointer;
            transform: scale(1.05);
            transition: 350ms ;
        }
    }

    @media Screen and (min-width: 768px){
        /* background-color: yellow; */
    }
`;

const Social = styled.div`
    text-decoration: none;
    width: 300px;
    /* background-color: azure; */
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;

    :hover{
        h5{
            cursor: pointer;
        }
    }
`;
const Div = styled.div`
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Circles = styled.div`
    width: 30px;
    height: 30px;
    background-color: silver;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(1.0) ;
    transition: 350ms;

    :hover{
        cursor: pointer;
        transform: scale(1.03);
        transition: 350ms;
    }
`;

const Add = styled.label`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        font-family: poppins;
        font-size: 16px;
        font-weight: bold;
        width: 120px;
        height: 40px;
        border: none;
        border-radius: 3px;
        color: #5699ae;
        transform: scale(1);
        transition: 350ms;
        background-color: white;

        :hover{
            cursor: pointer;
            transform: scale(1.05);
            transition: 350ms ;
        }
`
const Hall = styled(Link)`
    text-decoration: none;
    color: white;
`
