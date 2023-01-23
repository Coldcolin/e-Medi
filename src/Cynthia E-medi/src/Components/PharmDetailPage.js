import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import MedicationIcon from '@mui/icons-material/Medication';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link, useParams} from "react-router-dom";
import Header from "./Header"
import axios from "axios"
import imh1 from "../../../BlessingEmedi/src/component/E-MEDI PICTURES/pexels-charles-wundengba-5430213.jpg"
import imh2 from "../../../BlessingEmedi/src/component/E-MEDI PICTURES/pexels-antoni-shkraba-7345468.jpg"
import imh3 from "../../../BlessingEmedi/src/component/E-MEDI PICTURES/pexels-rodnae-productions-6129203.jpg"
import imh4 from "../../../BlessingEmedi/src/component/E-MEDI PICTURES/pexels-laura-james-6097761.jpg"
import imh5 from "../../../BlessingEmedi/src/component/E-MEDI PICTURES/pexels-edmond-dantès-8553867.jpg"
import { AuthContext } from "../../../Components/Global/AuthProvider"
// import {useParams} from "react-router-dom"

const DetailPage = () => {
    const { saveUser } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const { id } = useParams()

    const getUser = async()=>{
        try{
        const res = await axios.get(`https://e-medi.onrender.com/api/pharm/get/${id}`)
        // console.log(res.data)
        setData(res.data.vendors)
        // console.log(id)
        }catch(error){
            if (error.response) {
                alert(error.response.data.message);
                console.log(error.response.status);
                console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
        }
    }
    useEffect(()=>{
        getUser()
    }, [])

  return (
   <Container>
       <Head>
                    <Header/>
                   <div style={{
                       width: "100%",
                       height: "70px",
                       backgroundColor: "#33354a"
                   }}>
                   <h1 style={{
                        color: "white",
                        marginLeft: "30px"
                    }}>Pharmacist</h1>
                    <h4 style={{
                        color:"#009587",
                        marginLeft: "30px",
                        marginTop: "30px",
                    }}>Vendor</h4>
                   </div>
                </Head>
       <Wrapper>
           <NewWrapper>
               
            <Left>
                <HeroHold src={data.Avatar}/>
                <Title style={{
                    lineHeight:"50px"
                }}>
                    <Holder> 
                        <div style={{
                            width:"70%"
                        }}>
                        <div style={{
                                lineHeight: "40px",
                            }}>
                            <h1 style={{
                                color:"black",
                            }}>{data.name}</h1>
                            </div>
                            <div style={{
                                width: "100px",
                                height: "2px",
                                marginBottom:"20px",
                                backgroundColor: "#009587"
                            }}></div>
                                </div>
                                <SocialIcons>
                                    <MailIcon/>
                                    <TwitterIcon/>
                                    <LinkedInIcon/>
                                    <FacebookIcon/>
                                </SocialIcons>
                            </Holder>
                                <Desc1>The department of Cardiology strives to improve your well-being. We are recognised by WHO, the region and nation as a center of excellence and innovation in health care. Our department will continue to improve our abilities through the support and opportunities provided by the department</Desc1>
                </Title>

            </Left>
            <Right>
                <h1>Quick Profile</h1>
                <Profile>
                   <div>
                       <h3>Name</h3>
                       <h3>{data.name}</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Email</h3>
                       <h3>{data.email}</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Address</h3>
                       <h3>{data.Address}</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Contact</h3>
                       <h3>{data.Contact}</h3>
                   </div>
                   <p></p>
                   <div>
                       <h3>Location</h3>
                       <h3>{data.Location}</h3>
                   </div>
                   <p></p>
                   
                </Profile>
                {
                    !saveUser? <Button0 to="SingUp" >Sign Up</Button0>: saveUser.isUser? <Button0 to={`/Products/${id}`} >See Drugs</Button0>: saveUser.isPharm? <Button0 to={`/PharmPage/${saveUser._id}`} >See Dashboard</Button0>: null
                }
            </Right>
           </NewWrapper>
           <CertDiv>
                           <Cert src={imh1} alt=''/>
                           <Cert src={imh2} alt=''/>
                           <Cert  src={imh3} alt=''/>
                           <Cert src={imh4} alt=''/>
                           <Cert src={imh5} alt=''/>
             </CertDiv>
            <ReviewHold>
                    <h1>People Say</h1>
                    <Box>
                    <Up>
                        As the number of mobile users continue to outspace the number of desktop users, it should go without saying designers  now have to design on mobile first mentally
                    </Up>
                    <Down>
                        <Image></Image>
                        <div>
                        <View>John Doe</View>
                        <View>Designer</View>
                        </div>
                    </Down>
                    </Box>
            </ReviewHold>
            </Wrapper>
                    <Wrap4 >
                            <Hold>
                            <MedicationIcon style={{
                                width:"100px",
                                height:"100px",
                                color:"white"
                            }}/>
                            <div style={{
                                "display":"flex",
                                "flex-direction":"column",
                            }}>
                            <h3 style={{
                              color:"white"
                            }}>Encompassing All Accessible Exclusive Medical Treatment</h3>
                            <p style={{
                              color:"white"
                            }}>We offer extensive medical procedures to outbound and inbound patients</p>
                            </div>
                            <PharmButton to='/pharm'>Get In Touch</PharmButton>
                            </Hold>
                            <Footer>
                                <div>
                      <div>
                    <h3 style={{
                            color:"white",
                        }}>Departments</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>Neurology</p>
                                <p>Traumatology</p>
                                <p>Gynacology</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>
                                
                                <div>
                                    
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Head Office</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>#4 Barr Ahmed Musa</p>
                                <p>Orege, Mechanic Bus stop</p>
                                <p>Opposite 1&2 Hotel</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>

                                <div>  
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Quick Links</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>Home</p>
                                <p>Doctors</p>
                                <p>Departments</p>
                                <p>Pages</p>
                                <p>News</p>
                                <p>Register</p>
                                </div>

                                <div>
                                    
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Quick Links</h3>
                        <div style={{
                            width: "125px",
                            height: "1px",
                            marginBottom:"20px",
                            backgroundColor: "silver"
                        }}></div>
                    </div>
                    <p>Neurology</p>
                                <p>Traumatology</p>
                                <p>Gynacology</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>

                            </Footer>
                      <Button><a style={{
                        color: "white",
                        textDecoration:"none"
                      }} href=''>Have A Question? You can Ask US</a></Button>
                      </Wrap4>
   </Container>
  )
}

export default DetailPage;


const Desc1 = styled.div`
    line-height: 25px;
    font-size: 20px;
    
    @media Screen and (max-width: 768px){
        width: 90%;
        text-align: center;
        font-size: small;
    }
`;
const NewWrapper = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */

    @media Screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;

    }
`;
const PharmButton = styled(Link)`
    width:200px;
    height:50px;
    background:transparent;
    margin: 10px;
    border:1px solid white;
    cursor:pointer;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration:none;

    :hover{
        transform: scale(1.05);
        transition: all 350ms;
    }

    @media Screen and (max-width: 768px){
        width: 150px;
    }
`;


const Footer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    color: white;
    @media Screen and (max-width: 768px){
        display: none;
    }
`;

const Wrap4 = styled.div`
    width: 100%;
    background-color: #33354a;
    height: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media Screen and (max-width: 768px){
        width: 90%;
    }
`;
const Hold = styled.div`
    width: 70%;
    height: auto;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid silver;
    margin-top: 10px;
    /* align-items: center; */

    @media Screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
        width: 60%;
        text-align: center;

        span{
            display: none;
        }
        h3{
            font-size: 15px;
        }
    }
`;


const View = styled.div``;
const Image = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url('/ART ME.png');
    background-size: cover;
    border: 1px solid grey;
    margin-bottom: 20px;
`;
const CertDiv = styled.div`
       width:90%;
       display:flex;
       justify-content:space-between;
       align-items:center;
       /* background-color:yellow; */
       margin-top: 50px;

       @media Screen and (max-width: 768px){
           flex-direction: column;
           justify-content: center;
           /* background-color: aqua; */
       }
`;

const Cert = styled.img`
    width: 250px;
    height: 200px;
    background-color: aqua;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    object-fit: cover;

    @media Screen and (max-width: 768px){
        margin: 10px;
    }
`;

const ReviewHold = styled.div`
    width: 90%;
    margin-top: 100px;
    /* background-color: red; */
    
    @media Screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const Box = styled.div`
    width: 60%;
    border: 1px solid #33354a;
    /* background-color: #5699AE; */
    color: black;
    border-radius: 5px;
    padding: 10px;
`;
const Up = styled.div`
    width: 300px;
    margin-bottom: 30px;

    @media Screen and (max-width: 768px){
        width: 100%;
    }

`;
const Down = styled.div`
    width: 300px;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
`;

const Button0 = styled(Link)`
     width: 300px;
     height: 50px;
     text-decoration: none;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 50px;
    color: #009587;
    font-weight: bold;

    :hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: all 350ms;
    }

    @media Screen and (max-width: 768px){
    width: 80%;
    margin: 10px;
    height: 70px;
    font-size: large;
    /* margin-bottom: 10px; */
    }
`;

const Profile = styled.div`
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    div{
        width: 90%;
        /* height: 1px; */
        /* background-color: white; */
        display: flex;
        justify-content: space-between;
        /* align-items: center; */

        h6{
        margin-top: 10px;
        }
    }
    p{
        width: 90%;
        height: 1px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media Screen and (max-width: 768px){
        
        div{
            flex-direction: column;
            justify-content: center;
        }
        h3{
            font-size: smaller;
        }
    }
`;
const ButtonHold = styled.div``;

const SocialIcons = styled.div`
    width:30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        width: 80%;
    }

`;
const Holder = styled.div`
    /* background-color: olive; */
    width: 90%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        flex-direction: column;

        h1{
            font-size: 20px;
            width: 300px;
        }
    }
`;
const Container = styled.div`
    width: 100%;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Poppins;
`;

const Head = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0%;


    @media (max-width: 768px) {
        /* display: flex; */
        
    }
`;

const Wrapper = styled.div`
    width: 90%;
    /* height: 100vh; */
    /* background-color: tomato; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media Screen and (max-width: 768px){
        width: 100%;
    }
`;
const Left = styled.div`
    width: 50%;
    height: auto;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* margin: 10px; */

    @media Screen and (max-width: 768px){
        width: 100%;
    }
    
    
`;
const Right = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    background-color: #33354a;
    /* margin: 10px; */
    h1{
        color: white;
    }

    @media Screen and (max-width: 768px){
       justify-content: center;
        width: 75%;
        margin-top: 20px;

        h1{
        margin: 10px;
        }
    }
`;

const Title = styled.div`
    line-height: 10px;
    /* background-color: red; */

`;
const HeroHold = styled.img`
    width: 600px;
    height: 500px;
    /* background-color: red; */
    /* background-image: url('/doc4.jpg'); */
    /* background-size: cover; */
    object-fit: cover;
    /* background-repeat: no-repeat; */
    border-radius: 5px;
    @media Screen and (max-width: 768px){
        width: 250px;
        height: 250px
    }

`;


const Button = styled.div`
    width: 600px;
    height: 50px;
    /* background-color: #5699ae; */
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-top: 50px;

    @media Screen and (max-width: 768px){
        width: 250px;

    }

    :hover{
        cursor: pointer
    }
`;