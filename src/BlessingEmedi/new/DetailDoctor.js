import React, {useState, useEffect} from "react";
import styled from "styled-components";
import pix from "../../BlessingEmedi/src/ASSETS/fa6-solid_user-doctor.png";
import log from "../../BlessingEmedi/src/ASSETS/Ellipse 12.png"
import { BiCurrentLocation, BiLocationPlus, BiSearchAlt } from "react-icons/bi";
import axios from "axios"
// import SideNav from "../src/component/pages/Pharmacy/"
import Header from "../src/component/header/Header"
import {Link } from "react-router-dom"

const DetailDoctor = () => {
  const [data, setData] = useState([])

const getDocs = async()=>{
  try{
    const res = await axios.get("http://localhost:4400/api/doctor/docs")
    setData(res.data.doctors)
    console.log(res.data.doctors)
  }catch(error){
    if (error.response) {
      console.log(error.response.message)
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
  getDocs()
}, [])
  return (
    <div>
      {/* <SideNav /> */}
      <Container>
        <Wrapper>
        <Header/>
          <Row2>
            <div
              style={{
                display: "flex",
                width: "30%",
                alignItems: "center",
              }}
            >
              <Icon2 src={pix} />
              <Title>Doctors</Title>
            </div>

            <Holder>
              <SearchBar>
                <Top>
                  {/* <Icons /> */}
                  <div>By+</div>
                  {/* <select>
                  <option>Location</option>
                </select> */}
                </Top>
                <Input placeholder="Doctors, Specalists" />
                <Icon1 />
              </SearchBar>
            </Holder>
          </Row2>
          <Row>
            {/* <Div>
            <Topic>Build up your Profile</Topic>
          </Div> */}
            <Hold>
                  {
                    data?.map((props)=>(
                      <Card key={props._id}>
                        <Right>
                          <Profile>
                            <ImageHold>
                              <Image src={`http://localhost:4400/${props.Avatar}`} />
                              {/* <Div></Div> */}
                            </ImageHold>
                            <NameHold>
                              <Name>{props.name}</Name>
                              <NameTag>{props.Specialty}</NameTag>
                            </NameHold>
                          </Profile>

                          {/* <Product>My Product</Product> */}
                          <Text>
                            <Icons />
                            <span>{props.Address}</span>
                          </Text>
                          <End>
                            {/* <span>
                              Specialty: <b>{}</b>
                            </span> */}
                            <Click to={`/detailpage/${props._id}`}>View Profile</Click>
                            <Click to="/">Book Appointment</Click>
                          </End>
                        </Right>
                      </Card>
                    ))
                  }
            </Hold>
          </Row>

          {/* Row two */}


        </Wrapper>
      </Container>
    </div>
  );
};

export default DetailDoctor;
// const Container = styled.div``
const Name = styled.div``;
const NameTag = styled.div`
  font-size: 12px;
`;
const NameHold = styled.div`
  /* width: 100%; */
`;
const ImageHold = styled.div`
  /* width: 100%; */
  margin-right: 15px;
  display: flex;
  /* background: red; */
`;
const Image = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid silver;
`;
const Div = styled.div`
  width: 10px;
  border-radius: 50%;
  height: 10px;
  background: chartreuse;
  position: absolute;
  margin: 0 5px;
`;
const Profile = styled.div`
  display: flex;
  /* margin: 20px 0; */
  /* height: 15%; */
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  /* background: #009688; */
  /* justify-content: space-between; */
  /* width: 70%; */
  /* flex-direction: row; */
  @media (max-width: 800px) {
    flex-direction:column;
    justify-content: center;

  }
`;
const Icon1 = styled(BiSearchAlt)`
  font-size:20px;
  /* color: ; */
  cursor: pointer;
  /* background: grey; */
  height: 100%;
  /* width: 40px; */
  padding: 0 10px;
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;
           

const Input = styled.input`
  background-color: transparent;
  border: 0;
  outline: none;
  /* flex: 1; */
  width: 100%;
  height: 100%;
  padding-left: 15px;
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
  ::placeholder {
    font-size: 15px;
    color: grey;
    text-align: center;
    font-family: Nunito;
    @media (max-width: 800px) {
      font-size: 12px;
    }
  }
`;
const SearchBar = styled.div`
  height: 50px;
  :focus {
    outline: 3px solid #009688;
  }
  border-radius: 3px;
  padding: 0 10px;
  background: #fff;
  /* width:100%; */
  /* border: 1px solid blue; */
  width: 80%;
  @media (max-width: 800px) {
    width: 80%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Holder = styled.div`
  /* margin-bottom: 30px; */
  select {
    width: 200px;
    /* background: blue; */
    cursor: pointer;
    color: #009688;
    background: #E5E5E5;
    font-size: 20px;
  }
  display: flex;
  /* align-items: center; */
  /* height: 100%; */
  justify-content:center;
  align-items: center;
  /* width: 100%; */
  flex:1;
  @media (max-width: 800px) {
    width: 100%;
    margin: 10px 0;
  }
  /* background-color:blue; */
  justify-content: center;
`;
const Icons = styled(BiLocationPlus)`
margin-right: 10px;
color: red;
`;
const Top = styled.div`
  /* width: 100%; */
  font-size: 19px;
  display: flex;
  width: 20%;
  /* justify-content:center; */
  align-items: center;
  select {
    border: none;
    outline: none;
    font-size: 20px;
  }
`;
const Icon2 = styled.img`
  /* color: red; */
  padding: 0 30px;
  @media (max-width: 800px) {
    /* flex-direction: column;
    align-items: flex-start; */
    width: 25px;
    height: 25px;
  }
`;
const Row2 = styled.div`
  width: 100%;
  padding: 20px 0;
  background: #e5e8ef;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 80%;
  }
`;
const Title = styled.div`
  color: grey;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 800px) {
    /* flex-direction: column;
    align-items: flex-start; */
    font-size: 10px;
  }
`;
const Click = styled(Link)`
  text-decoration: none;
  height: 40px;
  padding: 3px 10px;
  background: #1069e1;
  display: flex;
  color:#fff;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin: 5px;
  @media (max-width: 800px) {
    width:50%;
    font-size: 50%;
  }
`;
const End = styled.div`
  width: 100%;
  margin-top:20px;
  display: flex;
  justify-content: space-between;
  align-items:center ;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
const Text = styled.div`
  width: 100%;
  font-weight: bolder;

  align-items: center;
  display: flex;
  margin: 20px 0;
  font-size: 12px;

  @media (max-width: 800px) {
    /* min-height: 200px; */
    height: 80%;
    /* margin-bottom: 20px; */
    /* text-align: center; */
    font-size: 12px;
    /* width:80%; */
    span{
      font-size: 12px;
    }
    /* background:green; */
  }
`;
const Product = styled.div`
  color: grey;
  padding-bottom: 15px;
  @media (max-width: 800px) {
    font-size: 14px;
    /* padding-bottom: 5px; */
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 800px) {
    justify-content:center;
    align-items: center;
  }
`;
const Div1 = styled.div`
  display: flex;
  /* justify-content:center; */
  align-items: center;
  flex-direction: column;
  /* position: absolute; */
  /* left:20px; */
  @media (max-width: 800px) {
    flex-direction: row;
  }
`;

const Topic = styled.div``;
const Card = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  background: #fff;
  align-items: flex-start;
  padding: 30px 15px;
  margin: 15px;
  border-radius: 3px;
  /* padding-right: 40px;
  padding-left: 40px; */
  border: 1px solid lightgray;
  transition: all 350ms;
  :hover {
    transition: all 350ms;
    background: #009688;
    cursor: pointer;
    color: #fff;

    ${Product} {
      color: #fff;
    }
    ${Click} {
      background: #fff;
      color: #009688;
    }
  }

  @media (max-width: 800px) {
    width: 50%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    margin: 20px 0;
    min-height: 200px;
    height: 100%;
    flex-direction: column;
    /* padding-bottom:10px; */
  }
`;
const Hold = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center;
  align-items: center; */
  /* height: 212px; */
  /* background: brown; */
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  /* background: purple; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 40px 0;
  height: 100%;
  background: #fff;
  @media (max-width: 800px) {
    /* width: 100%; */
    flex: 1;
    height: 100%;
  }
  /* flex-direction: column; */
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100%;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  /* background: hotpink; */
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* height: 150%; */
  display: flex;
  justify-content: center;
 
  @media (max-width: 800px) {
    width: calc(100vw - 150px);
    padding: 0;
    align-items: center;
    left: 150px;
  }
  @media (max-width: 500px) {
    width: calc(100vw - 100px);
    left: 100px;
  }
`;
