import React from 'react';
import styled from 'styled-components'
import MedicationIcon from '@mui/icons-material/Medication';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Boxer = ({name, title, but, spec, bg, location}) => {
  return (
    <Container>
        {/* <Wrapper> */}
            <Box>
                 <One>
                       <Bio>
                        <Icon src={bg}/>
                        <div style={{
                            width:"180px",
                            height:"20px",
                            // backgroundColor:"red"
                        }}>
                            <Navi style={{
                                fontWeight:"600",
                            }}>{name}</Navi>
                            <nav style={{
                                width:"200px",
                                display:"flex",
                                alignItems:"center"
                            }}> <MedicationIcon/>{spec}</nav>
                        </div>
                    </Bio>
                <Location>
                    <LocationOnIcon style={{
                        color: "red"
                    }}/>
                    <h5>Location: {location}</h5>
                </Location>
            </One>
            <Two>
                <Navi2 style={{
                    display:"flex",
                    justifyContent: "space-between",
                    alignItems:"center"
                }}>{title}<p style={{
                    fontWeight:"600"
                }}> 1,476</p> </Navi2>
                <Button3 to="/Products" ><AddBoxIcon/>{but}</Button3>
            </Two>
            </Box>
        {/* </Wrapper> */}
    </Container>
  )
};

export default Boxer;

const Navi2 = styled.div`
    margin-right: 20px;
`;
const Navi = styled.div``;
const Container = styled.div`
    width: 320px;
    margin: 0 10px;
    /* background-color: yellow; */
`;
const Wrapper = styled.div`
    width: 100%;
`;
const Box = styled.div`
    width: 320px;
    height: auto;
    /* margin: 10px; */
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    margin: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */

    @media Screen and (max-width: 768px){
        margin: 10px;
        width: 290px;
        margin: 5px;
    }
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

const Button3 = styled(Link)`
    /* width: 450px; */
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
    /* margin-left: 10px; */

`;

const Icon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    /* background-image: ${({bg})=> bg}; */
    /* background-image: url('/doc4.jpg'); */
    background-size: cover;

`;

const One = styled.div`
    margin: 10px;
`;
const Two = styled.div`
    margin-bottom: 20px;
    margin-left: 10px;
    width: 300px;
    height: 30px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        width: 260px;
    }
`;