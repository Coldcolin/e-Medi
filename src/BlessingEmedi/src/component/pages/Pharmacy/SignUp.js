import React, { useState } from "react";
import styled from "styled-components";
import pic from "../download.png"
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import * as yup from "yup"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"


const Register = () => {
  const navigate = useNavigate()
  const [imageDB, setImageDB] = useState("")
    const [avatar, setAvatar] = useState(pic)

    const yupModel = yup.object().shape({
        name: yup.string().required("This field has to be filled"),
        email: yup.string().email().required("This field has to be filled"),
        password: yup.string().required("This field has to be filled"),
        Address: yup.string().required("This field need to be filled"),
        Contact: yup.string().required("This has to be filled"),
        Specialty: yup.string().required("This field is required"),
        License: yup.string().required("This field is required"),
        Location: yup.string().required("This field is required"),
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
            // setClicked(true)
        const {name, email, password, Address, Contact, Location, License, Specialty} = data
        console.log(data, imageDB)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("Address", Address);
        formData.append("password", password);
        formData.append("Contact", Contact);
        formData.append("Avatar", imageDB);
        formData.append("Location", Location);
        formData.append("License", License);
        formData.append("Specialty", Specialty);

        const config ={
            headers:{
                "content-type": "multipart/formData"
            }
        }
    
        await axios.post("https://e-medi.onrender.com/api/pharm/register", formData, config)
        reset()
        navigate("/PharmPage")
        }catch(error){
            if (error.response) {
                alert(error.response.data.message)
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


  return (
    <Container>
      <Wrapper>
        <Brand>
          <Logo to="/">
            <Bar>E-Medi</Bar>
          </Logo>
          <Text>
            We know you are aware of this but said to do a quick <b>Reminder</b>
          </Text>
          <Brief>
            <strong>
              <li>Registration of Pharmaceutical Premises</li>
            </strong>{" "}
            The Registration of Pharmaceutical Premises Regulations, 2005 ("the
            Registration Regulation"), provides for registration of new
            pharmaceutical premises and renewal of old premises; It provides
            that where the premises sought to be registered is a retail
            pharmacy; the company shall be wholly owed by a registered
            pharmacist or in partnership with other registered pharmacist. For a
            pharmaceutical premises involved in wholesale, distribution and
            importation of drugs, poisons and devices, there shall be at least
            one registered
            <b>pharmacist</b> on the Board of Directors of the Company. <br />
            The business shall be carried out under the direct personal control
            and management of a Superintendent Pharmacist. Where the primary
            object of the company is pharmaceutical manufacturing, there shall
            be at least one registered pharmacist on the Board of Directors of
            the Company; the business shall be carried out under the direct
            personal control and management of a Superintendent Pharmacist.
            <br />
          </Brief>
          <Brief>
            <strong>
              <li>
                Inspection, Location and Structure of Pharmaceutical Premises
              </li>
            </strong>
            The Inspection, Location and Structure of Pharmaceutical Premises
            Regulations, 2005 ("the Inspection Regulation") establishes a
            Pharmaceutical Inspectorate Division which consist of registered
            Pharmacists designated as pharmaceutical inspectors, appointed by
            the Council to enter into pharmaceutical premises and inspect to
            ensure due compliance with the provisions of the Regulation. The
            Inspection Regulation provides for the location of pharmaceutical
            premises. <br />
            It shall not be located in motor parks, environment close to a
            location where commercial activities and enterprise are standing and
            growing; market places including kiosks and road side retail. It
            provides that any pharmaceutical premises surrounded or covered
            completely by a growing market or standing close to it shall be
            moved to another suitable location two years after formal
            notification to do so by the Council. Pharmaceutical premises within
            a shopping centre shall not be more than three and they shall be
            well spaced out. Pharmaceutical premises shall be sited not less
            than two hundred meters from each other.
            <br /> Pharmaceutical practice in Nigeria is also regulated by the
            National Agency for Food and Drug Administration Act. The Act
            establishes the National Agency for Food and Drug Administration
            ("NAFDAC"). The Agency has a complementary role to play in the
            registration of pharmaceutical premises. It does the following;
            <li>
              The Agency is in charge of evaluation and registration of
              Pharmaceutical products;
            </li>
            <li>
              Post market surveillance and risk analysis of products; Control of
              product import and export;
            </li>
            <li>and Regulation of product promotion and public education.</li>
          </Brief>
        </Brand>
        <Line />
        
        <MainCard onSubmit={signUp}>
          <LogoTitle1>Register as a Pharmacy</LogoTitle1>
          <Profile >
                        {/* <h1>Profile</h1> */}
                        <Circle src={avatar} alt="" >
                        </Circle>
                        <Add htmlFor='pix'>Add Image</Add>
                        <Upload id="pix" type="file" placeholder='Upload Image' onChange={File}/>
                    </Profile>
          <Name>
            <InputTitle>Pharmacy Name</InputTitle>
            <Input
              placeholder="e.g: Shanna Pharmacy"

                {...register("name")}
            />
          </Name>
          <Error>{errors?.name?.message}</Error>
          <Name>
            <InputTitle>Location</InputTitle>

            <select {...register("Location")}>
              <option>-- Select Location --</option>
              <option>Boundary</option>
              <option>Orege</option>
              <option>Tolu</option>
              <option>Wilmer</option>
              <option>Safejo</option>
              <option>Alaba</option>
            </select>
          </Name>
          <Error>{errors?.Location?.message}</Error>
          {/* <br /> */}
          {/* <Name>
            <InputTitle>Your Full Name</InputTitle>
            <Input
              placeholder="e.g: Blessing Agbor"
              //  {...register("fullName")}
            />
          </Name> */}
          <Error>{/* {errors?.fullName?.message} */}</Error>
          <Hold>
            <PhoneData>
              <Phone>
                <InputTitle>Phone No</InputTitle>
                <Input
                  placeholder="e.g: 2348074496358"

                    {...register("Contact")}
                />
              </Phone>
              <Error>{errors?.Contact?.message}</Error>
            </PhoneData>

            <PhoneData>
              <Phone1>
                <InputTitle>Email</InputTitle>
                <Input
                  placeholder="e.g: shanna@gmail.com"
                    {...register("email")}
                />
              </Phone1>
              <Error>{errors?.email?.message}</Error>
            </PhoneData>
          </Hold>

          <Hold>
            <PhoneData>
              <Phone>
                <InputTitle>Password</InputTitle>
                <Input
                  placeholder="************"
                  type="password"
                    {...register("password")}
                />
              </Phone>
              <Error>{errors?.password?.message}</Error>
            </PhoneData>

            <PhoneData>
              <Phone1>
                <InputTitle>Confirm Password</InputTitle>
                <Input
                  placeholder="************"
                  type="password"

                    {...register("confirm")}
                />
              </Phone1>
              <Error>{errors?.confirm?.message}</Error>
            </PhoneData>
          </Hold>
          {/* <Name>
            <InputTitle>Pharmacist</InputTitle>
            <Input
              placeholder="Full name"
              // {...register("displayName")}
            />
          </Name> */}
          <Error>{/* {errors?.displayName?.message} */}</Error>
          <Name>
            <InputTitle>Area of Specialty</InputTitle>
            <Input
              placeholder="Geriatic"
              {...register("Specialty")}
            />
          </Name>
          <Error>{errors?.Specialty?.message}</Error>
          <Name>
            <InputTitle>License Number</InputTitle>
            <Input
              placeholder="license no:"
              {...register("License")}
            />
          </Name>
          <Error>{errors?.License?.message}</Error>
          <Name>
            <InputTitle>Physical Address Location</InputTitle>
            <Input
              placeholder="e.g 15 Borno-Way, Ebutte-metta,...."
              {...register("Address")}
            />
          </Name>
          <Error>{errors?.Address?.message}</Error>
          <Button type="submit">Submit</Button>

          <Social>
            {/* <SocialText>Use Social Media</SocialText>
            <Icons>
              <Icon />
              <Icon1 />
              <Icon2 />
              <Icon3 />
            </Icons> */}
            {/* <SocialText>
              Have an Account? <Span to="/signin">Login</Span>
            </SocialText> */}
          </Social>
        </MainCard>
      </Wrapper>
    </Container>
  );
};

export default Register;

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

const Span = styled(Link)`
  margin: 0 5px;
  color: #742e9d;
  font-weight: 700;
  text-decoration: none;
`;
const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
  font-size: 35px;
  color: #0077b7;
  :hover {
    cursor: pointer;
  }
`;

const Icon2 = styled(AiFillTwitterSquare)`
  font-size: 35px;
  color: #50abf1;
  :hover {
    cursor: pointer;
  }
`;

const Icon1 = styled(AiFillFacebook)`
  font-size: 35px;
  color: #475993;
  :hover {
    cursor: pointer;
  }
`;
const Icon = styled(AiFillGoogleCircle)`
  font-size: 35px;
  color: red;
  :hover {
    cursor: pointer;
  }
`;

const SocialText = styled.div`
  font-size: 12px;
  display: flex;
  margin-top: 20px ;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
   outline: none;
  border: 0;
  font-family: Poppins;
  background-color: #009688;
  height: 45px;
  width: 90%;
  color: white;
  margin-bottom: 20px;
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

const InputTitle = styled.div`
  font-size: 11px;
  position: absolute;
  top: -10px;
  left: 7px;
  padding: 0 3px;
  background-color: #e5e8ef;
  /* background-clip: content-box; */
  font-weight: 700;
  color: #009688;

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

const Hold = styled.div`
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  width: 90%;
  margin: 17px 0;
`;

const Phone1 = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 30px;
  position: relative;
  margin-left: 5px;
`;

const Phone = styled.div`
  width: 100%;
  border: 1px solid silver;
  border-radius: 5px;
  height: 30px;
  position: relative;
  margin-right: 5px;
`;

const Name = styled.div`
  width: 90%;
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

const MainCard = styled.form`
  flex: 1;
  flex-direction: column;
  height: 100vh;
  display: flex;
  color: #e5e8ef;
  align-items: center;
  /* background: yellow ; */
  @media (max-width: 800px) {
    width: 80%;
    justify-content: center;
    margin-top: 40px;
  }
`;

const Line = styled.div`
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 50px;
`;

const Brief = styled.div`
  margin-top: 20px;
  color: gray;

  font-size: 11px;
  text-align: justify;
  b {
      /* margin-left: 20px; */
  }
`;

const Text = styled.div`
  font-weight: 700;
  /* margin-top: 10px; */
  text-align: center;
  /* width: 400px; */
  font-size: 22px;
  line-height: 1.2;
  color: #009688;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px 0;
`;

const LogoTitle1 = styled.div`
  font-weight: 700;
  color: #009688;
  margin-top: 30px;
  margin-bottom: 10px;

  font-size: 30px;
  /* text-transform: uppercase; */
`;

const LogoTitle = styled.div`
  font-weight: 500;
  color: #009688;
`;

const Bar = styled.div`
  /* width: 100px;
  height: 100px; */
  /* border-radius: 10px; */
  margin-bottom: 15px;
  /* background-color: #3e435e; */
  /* box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  color: #009688;
`;

const Brand = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background: grey; */
  /* text-align: justify; */
  @media (max-width: 800px) {
    flex-direction: column;
    width: 80%;
  }
`;

const Wrapper = styled.div`
   width: 95%;
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* background: blue; */
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
 width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
    height: 20%;
    width: 150px;
    /* margin-top: 10px;  */
    /* margin-bottom: 20px; */
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Circle = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 100%;
    border: 1.5px solid grey;
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