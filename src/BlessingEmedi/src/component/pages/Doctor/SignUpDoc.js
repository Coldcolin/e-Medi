import React, { useState } from "react";
import styled from "styled-components";
import pic from "../download.png"
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
import axios from "axios";

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
  
      await axios.post("https://emediback.herokuapp.com/api/doctor/register", formData, config)
      reset()
      navigate("/")
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
            We know you are aware of this but a quick <b>Reminder</b>
          </Text>
          <Brief>
            <strong>
              <h1>Registration as an online Doctor or Specialist</h1>
            </strong>{" "}
            <li>Pros of Virtual Care</li>
            We are living in the age of virtual care. With over 2/3 of Americans
            now using smartphones and tablets, the mobile revolution has helped
            make adopting virtual care software a much less costly and
            technologically complex endeavor than in the past. Many modern
            virtual care software solutions require only a computer or
            smartphone, and an internet connection to complete a virtual care
            visit. 1. Virtual Care Can Expand Your Patient Base. With virtual
            care, a patient can get convenient healthcare from the comfort of
            their own home. This allows many patients to access specialists they
            wouldn’t normally be able to see for treatment. Hospitals and health
            systems can take advantage of this by expanding their patient base
            and strengthening relationships with existing patients.
            <br /> Virtual care allows specialists to connect with patients
            outside of their geographic region, which is especially effective
            in: Post surgical follow-up Behavioral health COVID-19 Urgent care
            ED Triage <li>Virtual Care is Cost-Efficient.</li> Virtual care is
            often a less expensive alternative to in-office visits for both
            patients and providers. Removing the time sitting in the waiting
            room and commuting to the clinic can be a tremendous benefit for
            them, especially if they have a chronic condition that requires
            frequent appointments. Virtual care can allow providers to have
            follow-up visits or check in on chronic patients with a smaller time
            commitment than an in-office visit.
            <li>Engage Patients and Get Better Patient Outcomes.</li> Being able
            to check in on a patient remotely allows providers to reinforce
            treatment adherence – which can be a crucial part of preventing
            unnecessary hospital admissions and maintaining patient health. If a
            patient has questions about a medication or thinks they need to
            change their treatment plan, virtual care allows them to quickly and
            conveniently check in with their provider for guidance. Virtual care
            can also be a great tool for helping patients feel more in charge of
            their health, a confidence vital for lifetime good health.
            <h1>Cons of Virtual Care</h1>While many are optimistic about the
            potential of virtual care, others in the industry still have some
            concerns. Virtual care technology has come a long way, but it’s not
            flawless. And with the breakneck speed that telehealth technology is
            developing, the regulatory landscape has been struggling to keep up.
            The most obvious disadvantages of virtual care involve the
            continuing need for clearer, streamlined policies and standards
            around telehealth practice to enable easier implementation.{" "}
            <li>Physical Examination is Limited.</li>
            Until relatively recently, live video communications technology
            wasn’t advanced enough to allow for comprehensive medical care.
            Today, most patients and providers have easy access to technology
            that allows high-quality video-conferencing. But for some providers,
            a virtual visit may not seem enough to diagnose or treat a patient.
            Although virtual care can be very effective for many minor
            conditions, physicians may not feel comfortable conducting an
            examination over video chat. Some patients may also see this as a
            reason to choose in-person visit over virtual appointments.
          </Brief>
        </Brand>
        <Line />
        
        <MainCard onSubmit={signUp}>
          <LogoTitle1>Register as a Doctor</LogoTitle1>
          <Profile >
                        {/* <h1>Profile</h1> */}
                        <Circle src={avatar} alt="" >
                        </Circle>
                        <Add htmlFor='pix'>Add Image</Add>
                        <Upload id="pix" type="file" placeholder='Upload Image' onChange={File}/>
                    </Profile>
          <Name>
            <InputTitle>Name</InputTitle>
            <Input
              placeholder="e.g: Shanna Pharmacy"

                {...register("name")}
            />
          </Name>
          <Error>{errors?.name?.message}</Error>
          <Name>
            <InputTitle>Location</InputTitle>

            <select {...register("Location")}>
              <option>-- choose your Location --</option>
              <option>Ajegunle</option>
              <option>Lagos-Island</option>
              <option>Ebute-metta</option>
              <option>Yaba</option>
              <option>Alagomeji</option>
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
          
          <Name>
            <InputTitle>Area of specialty</InputTitle>

                    
            <select {...register("Specialty")}>
              <option>-- Select an option --</option>
              <option>Neurologist</option>
              <option>Dyslexia</option>
              <option>Oncologist</option>
              <option>Dermatologist</option>
              <option>General Surgeon</option>
              <option>Physician</option>
            </select>
          </Name>
          <Error>{errors?.Specialty?.message}</Error>
          <br />
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
  margin: 20px 0;
`;

const LogoTitle1 = styled.div`
  font-weight: 700;
  color: #009688;
  margin-top: 30px;
  margin-bottom: 30px;

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