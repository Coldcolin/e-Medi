import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import MedicationIcon from '@mui/icons-material/Medication';

const Footer = () => {
  return (
    <div>
        <Wrap4 >
            <Hold>
            <MedicationIcon style={{
                width:"100px",
                height:"100px",
                color:"white"
            }}/>
            <div style={{
                "display":"flex",
                "flexDirection":"column",
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
                <Footers>
                    <div>
                        <div>
                            <h3 style={{
                                    color:"white",
                                }}>
                                Departments
                            </h3>
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
                            }}>Head Office
                            </h3>
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
                            }}>Quick Links
                            </h3>
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
                                }}>Quick Links
                            </h3>
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
                </Footers>
                    <Button><a style={{color: "white",textDecoration:"none"}} href=''>Have A Question? Ask US</a></Button>
            </Wrap4>
    </div>
  )
}

export default Footer

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

const Footers = styled.div`
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
        cursor: pointer;
        transform: scale(1.05);
        transition: all 350ms;
    }
`;