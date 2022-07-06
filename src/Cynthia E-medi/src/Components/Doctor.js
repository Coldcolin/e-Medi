import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MedicationIcon from '@mui/icons-material/Medication';
import { Link } from 'react-router-dom';
import Boxers from '../Components/Boxers';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Header from "./Header"
import axios from "axios"

const Home = (props) =>{
    const [data, setData] = useState([])

    const getData = async()=>{
        try{
            const res = await axios.get("http://localhost:4400/api/doctor/docs")
            console.log(res.data.doctors)
            setData(res.data.doctors)
        }catch(err){}
    }

    useEffect(()=>{
        getData()
    }, [])
    return(
        <Container>
             <Head>
             <Header/>
                 {/* <HealthAndSafetyIcon/> */}
                   <div style={{
                      width: "100%",
                       height: "70px",
                       backgroundColor: "#33354a"
                   }}>
                   <h1 style={{
                        color: "white",
                        marginLeft: "30px",
                    }}>Doctors</h1>
                    <h4 style={{
                        color:"#009587",
                        marginLeft: "30px",
                        marginTop: "30px",
                    }}>Home/Specialists</h4>
                   </div>
                </Head>
            <Wrapper>
               
               <Wrap2>
                    
                   <div>
                   <h1 style={{
                           color:"black",
                       }}>Medical Specialists</h1>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "#009587"
                       }}></div>
                   </div>
                   <CardHold>
                       <Div>
                           {
                            data?.map((props)=>(
                                <Pharms key={props._id}>
                                <Info>
                                <Iconer src={`http://localhost:4400/${props.Avatar}`}/>
                                <Holding>
                                <Name>{props.name}</Name>
                                    <Dis><MedicationIcon/> Doctor</Dis>
                                </Holding>
                                </Info>
                                <Locate>Specialty: {props.Specialty}</Locate>
                                <Actions>
                                    <View to="/detailpage">View Profile</View>
                                    <Views to="/">Get Advice</Views>
                                </Actions>
                           </Pharms>
                            ))
                           }
                       </Div>
                       <div><Button2 to='/viewAlDocs'>View All Specialists</Button2></div>
                   </CardHold>
               </Wrap2>
               <Wrap>
                   <Texts>
                       <div style={{
                        lineHeight: "40px",
                       }}>
                       <h1 style={{
                           color:"black",
                       }}>Meet Our Specialists</h1>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "#009587"
                       }}></div>
                       <span style={{
                           lineHeight: "20px",
                           width: "100%",
                           color:"#888F94",
                           fontSize:"20px"
                       }}>The structure of the neurological center includes an outpatient department, the department of functional studies of the Nervous system and the Visual Diagnostics and rehabilitation Department. Medical Center provides diagnosis and treatments for patients of all ages.</span>
                       </div>
                   </Texts>
                   <ImgHold >
                      <Img src='/ddo.jpg' alt='Hero'/>
                    </ImgHold>
               </Wrap>
               <Wrap3>
                      <div>
                    <h1 style={{
                            color:"black",
                            }}>Meet Our Professional Pharmacists</h1>
                    </div>
                    <span style={{
                           lineHeight: "20px",
                        //    textAlign: "center",
                           display: 'flex',
                        //    justifyContent:"center",
                           alignItems:"center",
                           color:"#888F94",
                           fontSize:"20px"
                       }}>Medical Center has been a medical service provider in all fields of medicine for the Diplomats and their families for the past twenty years and keeps on maintaining a successful cooperation between the two bodies.</span>
                       <CertDiv>
                           <Cert src='/doccert.jpg' alt=''/>
                           <Cert src='/doccert2.jpg' alt=''/>
                           <Cert  src='/cert.jpg' alt=''/>
                           <Cert src='/cert4.jpg' alt=''/>
                           <Cert src='/cert6.png' alt=''/>
                       </CertDiv>
                      </Wrap3>
                      <Wrap4 >
                            <Hold>
                                <span>
                            <MedicationIcon style={{
                                width:"100px",
                                height:"100px",
                                color:"white"
                            }}/>
                                </span>
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
                            <PharmButton to='/pharm'  style={{
                                width:"200px",
                                height:"50px",
                                "background":"transparent",
                                margin: "10px",
                                border:"1px solid white",
                                cursor:"pointer",
                                color:"white",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                textDecoration:"none",
                            }}>Get In Touch</PharmButton>
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
                      <Button style={{
                        color: "white"
                      }}>Have A Question? Ask US</Button>

                      </Wrap4>
                      
              
            </Wrapper>
        </Container>
    )
}

export default Home;

const Navi = styled.div``;
const PharmButton = styled(Link)`
    :hover{
        transform: scale(1.05);
        transition: all 350ms;
    }
`;
const Button3 = styled(Link)`
    width: 150px;
    height: 40px;
    background-color: #5698ad;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    color: white;
`;

const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    /* background-image: ${({bg})=> bg}; */
    background-image: url('/doc4.jpg');
    background-size: cover;

`;

const Bio = styled.div`
    width: 250px;
    height: 70px;
    /* background-color: pink; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Location = styled.div`
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardDiv = styled.div`
    width: 350px;
    height: 200px;
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;

const One = styled.div`
    margin: 10px;
`;
const Two = styled.div`
    margin-bottom: 10px;
    margin-left: 10px;
    width: 300px;
    height: 30px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    height: 100vh;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
        text-align: center;

        span{
            display: none;
        }
        h3{
            font-size: 15px;
        }
    }
`;

const CertDiv = styled.div`
       width:90%;
       display:flex;
       justify-content:space-between;
       align-items:center;
       margin-top: 100px;

       @media Screen and (max-width: 768px){
           flex-direction: column;
           justify-content: center;
           /* background-color: aqua; */
       }
`;

const Cert = styled.img`
    width: 250px;
    height: 200px;
    background-color: aliceblue;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 5px;

    @media Screen and (max-width: 768px){
    }

`;


const Button2 = styled(Link)`
    width: 300px;
    height: 55px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #009587;
    /* background-color: #59b1e0; */
    border-radius: 10px;
    color: white;
    font-size: 20px ;
    margin: 10px;

    :hover{
        transform: scale(1.05);
        transition: all 350ms;
    }

    @media Screen and (max-width: 768px){
    /* margin-top: 500px; */
    margin-left: 20px;
    width: 270px;
    }
`;

const Wrap3 = styled.div`
     width: 90%;
     height: auto;
     /* background-color: red; */
     display: flex;
     flex-direction: column;
     justify-content: center;
     /* align-items: center; */
     margin-top: 100px;

     span{
         width: 30%;
     }

     @media Screen and (max-width: 768px){
         margin-top: 50px;
         /* align-items: center; */
         h1{
             text-align: center;
             font-size: 25px;
         }
         span{
             width: 90%;
             text-align: center;
             /* background-color: pink; */
         }
     }
`;

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    /* background-color: red; */


    @media Screen and (max-width: 768px){
        /* display: flex; */
        /* flex-direction: column; */
        justify-content: center;
        /* align-items: center; */
        margin-top: 10px;
        /* background-color: olive; */
    }
`;

const Button = styled.div`

    :hover{
        cursor: pointer;
        transform: scale(1.05);
        transition: all 350ms;
    }
`;
const Button1 = styled(Link)``;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Poppins;
    /* align-items: center; */
    /* object-fit: fill; */
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background-color: grey; */
`;
const Head = styled.div`
    width: 100%;
    padding-top: 200px;
    padding-bottom: 50px;
    height: 200px;
    //#59b1e0
    /* background-color: #3e435e; */
    /* background-color: #33354a; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0%;

    @media Screen and (max-width: 768px) {
        
    }

`;
const ImgHold = styled.div`
    /* width: 285px; */
    /* background-color: aqua; */
    @media Screen and (max-width: 768px){
    margin-top: 10px;
    }
`;
const Img = styled.img`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    width:500px;

    @media Screen and (max-width: 768px){
        width: 100%;
    }
    @media Screen and (max-width: 375px){
        width: 100%;
    }
`;
const Wrap = styled.div`
    width: 90%;
    /* background-color: grey; */
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    /* align-items: center; */
    
   @media Screen and (max-width: 768px) {
        flex-direction: column;
        /* text-align: center; */
        margin-top: 10px;

    }

`;
const Texts = styled.div`
    width: 50%;
    height: auto;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;

    @media Screen and (max-width: 768px){
        /* text-align: center; */
        width: 100%;
        flex-direction: column;
        justify-content: center;
        h1{
            font-size: 15px;
        }
        span{
            font-size: 10px;
             width: 100%;
             text-align: center;
        }
    }
`;
const Par = styled.div`
    /* background-color: red; */

    @media Screen and (max-width: 768px){
        /* font-size: 10px; */
        font-size: 10px;
        width: 200px;
    }
`;
const Wrap2 = styled.div`
   /* background-color: #5699AE; */
    width: 90%;
    display: flex;
    flex-direction: column;

    @media (min-width: 330px) and (max-width: 768px) {
       justify-content: center;
       /* align-items: center; */

   };
`;

const CardHold = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
   @media Screen and (max-width: 768px) {
       align-items: center;
       /* background-color: olivedrab; */
   }
    
`;
const Card = styled.div`
    width: 300px;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    /* object-fit: cover; */
    /* margin-bottom: 30px; */

`;
const Card1 = styled.div`
    width: 300px;
    height: 450px;
    margin-top: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: white;
    border-radius: 10px;
`;

const Pharms = styled.div`
    width: 300px;
    height: 200px;
    background-color: aliceblue;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0px 5px;
    margin: 20px;
`
const Iconer = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    /* background-image: ${({bg})=> bg}; */
    /* background-image: url('/doc4.jpg'); */
    background-size: cover;

`;

const Info = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
`
const Name = styled.div`
    font-size: 16px;
    font-weight: 600;
`
const View = styled(Link)`
    text-decoration: none;
    height: 40px;
    background-color:#009587;
    border-radius: 3px;
    padding: 2px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 13px;
    color: white;
    text-decoration: none;

    :hover{
        transform: scale(1.05);
        transition: all 350ms;
    }
`
const Locate = styled.div`
    font-size: 16px;
    font-weight: 600;
`
const Views = styled(Link)`
    text-decoration: none;
    height: 40px;
    /* background-color: #59b1e0; */
    background-color: #009587;
    border-radius: 3px;
    padding: 2px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 13px;
    color: white;
    text-decoration: none;

    :hover{
        transform: scale(1.05);
        transition: all 350ms;
    }
`
const Actions = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
`
const Holding = styled.div`
    display: flex;
    flex-direction: column;
    height: 100% ;
    justify-content: space-around;
`
const Dis = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`