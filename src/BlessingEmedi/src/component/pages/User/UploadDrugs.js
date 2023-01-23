import React, { useEffect } from 'react'
import styled from "styled-components"
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import SideNav from "../../../../new/Pharmacy/PharmacyDashboard"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as yup from "yup"
import pic from "../../../ASSETS/ampicilin.png"


const UploadDrugs = () => {
  // const [data, setData] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)
    const [imageDB, setImageDB] = useState("")
    const [avatar, setAvatar] = useState(pic)

    const yupModel = yup.object().shape({
        name: yup.string().required("The name field has to be filled"),
        Type: yup.string().required("The Type field has to be filled"),
        API: yup.string().required("The API field has to be filled"),
        Category: yup.string().required("The Category field need to be filled"),
        Price: yup.number().required("The Price has to be filled"),
        NAFDAC: yup.string().required("The NAFDAC number has to be filled"),
    })
    const {register, reset, handleSubmit, formState:{errors}} =
    useForm({resolver: yupResolver(yupModel)})

    const File = (e) =>{
        const file = e.target.files[0];
        const save = URL.createObjectURL(file);
        setAvatar(save);
        setImageDB(file);
        // console.log("saved")
    }

    const addItem = handleSubmit(async (data)=>{
        try{
            // setClicked(true)
        const {name, Type, API, Category, Price, NAFDAC} = data
        console.log(data, imageDB, id)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("Type", Type);
        formData.append("Category", Category);
        formData.append("API", API);
        formData.append("Price", Price);
        formData.append("NAFDAC", NAFDAC);
        formData.append("Image", imageDB);

        const config ={
            headers:{
                "content-type": "multipart/formData"
            }
        }
    
        await axios.post(`https://e-medi.onrender.com/Store/create/${id}`, formData, config)
        reset()
        // navigate("/")
        }catch(error){
            // setClicked(false)
            if (error.response) {
                alert(error.response.data.message, error.response.status, )
                // alert(error.response.data.message);
                console.log(error.response.status);
                console.log(error.response.headers);
                } else if (error.request) {
                    alert(error.request)
                    console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
        }
    })
useEffect(()=>{
  console.log(id)
}, [])

  return (
    <div>
      <SideNav />
      <Container>
        <Wrapper>
          <MainCard type="multipart/form-data" onSubmit={addItem}>
            <Card>
              <Title>
              <LogoTitle1 src={avatar} alt=""/>
          <input type="file" id="pix" onChange={File} />

              </Title>
              <Uplod htmlFor="pix">Upload</Uplod>

            </Card>
            <Name>
              <InputTitle>Name</InputTitle>
              <Input
                placeholder="e.g: Paracetamol"

                  {...register("name")}
              />
            </Name>
            <Error>{errors?.name?.message}</Error>
            <Name>
              <InputTitle>Type-of</InputTitle>
              <select {...register("Type")}>
                <option>-- Select option --</option>
                <option>OTC (over the counter) </option>
                <option>Ethical Drug</option>
              </select>
            </Name>
            <Error>{errors?.Type?.message}</Error>
            <Hold>
              <PhoneData>
                <Phone>
                  <InputTitle>Drug API</InputTitle>
                  <Input
                    placeholder="e.g: Tetracyclin"

                      {...register("API")}
                  />
                </Phone>
                <Error>{errors?.API?.message}</Error>
              </PhoneData>
            </Hold>

            <Name>
              <InputTitle>Category</InputTitle>

              <select {...register("Category")}>
                <option>-- Select option --</option>
                <option>Wellness and Fitness</option>
                <option>Family Care</option>
                <option>Skin Care</option>
                <option>Child Care</option>
                <option>Sexual Wellness</option>
              </select>
            </Name>
            <Error>{errors?.Category?.message}</Error>
            {/* <br /> */}
            <Name>
              <InputTitle>Price</InputTitle>
              <Input
                placeholder="Price in Naira:"
                {...register("Price")}
              />
            </Name>
            <Error>{errors?.Price?.message}</Error>
            <Name>
              <InputTitle>NAFDAC Number</InputTitle>
              <Input
                placeholder="Nafdac no:"
                {...register("NAFDAC")}
              />
            </Name>
            <Error>{errors?.NAFDAC?.message}</Error>
            <Button type="submit">Continue</Button>
          </MainCard>
        </Wrapper>
      </Container>
    </div>
  );
}

export default UploadDrugs

const Button = styled.button`
  outline: none;
  border: 0;
  font-family: Poppins;
  background-color: #009688;
  height: 45px;
  width: 100%;
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }
`;
const Phone = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-right: 5px;
`;
const Phone1 = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin-left: 5px;
`;
const PhoneData = styled.div`
  width: 100%;
`;
const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 3px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 500;
`;
const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0;
  width: 100%;
  height: 100%;
  padding-left: 10px;

  ::placeholder {
    color: lightgray;
    font-family: Poppins;
    font-size: 12px;
  }
`;
const InputTitle = styled.div`
  font-size: 13px;
  position: absolute;
  top: -10px;
  left: 7px;
  padding: 0 3px;
  background-color: #e5e8ef;
  /* background-clip: content-box; */
  font-weight: 700;
  color: #009688;
`;
const Name = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 40px;
  position: relative;
  margin: 10px 0;
  select {
    background-color: transparent;
    outline: none;
    border: 0;
    width: 100%;
    height: 100%;
    padding-left: 10px;
  }
`;
const LogoTitle1 = styled.img`
  width: 100px;
  height: 50px;
  font-weight: 700;
  color: #009688;
  margin-bottom: 50px;
  object-fit:cover;
  font-size: 30px;
  /* text-transform: uppercase; */
`;
const MainCard = styled.form`
  width: 50%;
  height:100%;
  flex-direction: column;
  display: flex;
  color: #e5e8ef;
  align-items: center;
  @media (max-width: 800px) {
    width: 80%;
    justify-content: center;
    margin-top: 40px;
  }
`;
const Title = styled.div`
margin-top: 100px;
input{
  display:none ;
}
/* border: 1px dashed grey; */
font-weight: 600;
font-size: 12px;
display: flex;
justify-content:center;
align-items: center;
width:100px;
height: 50px;
/* background: #fff; */

color:#009688;

`
const Uplod = styled.label`
    width: 40%;
    margin-top: 20px;
    background: #009688;
    transition: all 350ms ;

    :hover{
      cursor: pointer;
      transform: scale(1.09);
      transition: all 350ms ;
    }
    color: #fff;
    padding: 10px 0;
    text-align: center;
`;
 const Card = styled.div`
 width:200px;
 /* min-height:150px; */
 height: 100%;
 display: flex;
 background: #e5e5e5;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 50px;
padding: 10px;

 `
const Hold = styled.div`
  width: 100%;
  height: 60%;
  /* background-color: #ebeaf1; */
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content:center;
align-items: center;

`
const Container = styled.div`
  width: calc(100vw - 250px);
  display: flex;
  justify-content: center;
  position: absolute;
  left: 220px;
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