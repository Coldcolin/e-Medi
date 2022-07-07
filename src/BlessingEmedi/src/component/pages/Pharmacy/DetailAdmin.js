import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import axios from 'axios';

const DetailAdmin = () => {
  const [data, setData] = useState([]);
  const { id } = useParams()

  const getUser = async()=>{
      try{
      const res = await axios.get(`https://emediback.herokuapp.com/api/pharm/get/${id}`)
      console.log(res.data.vendors)
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
      <Wrapper>
        <Row>
          <Div>
            <Topic>Build up your Profile</Topic>
          </Div>
          <Hold>
            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left>
              <Right>
                <Product>My Product</Product>
                <Text>
                  List all your products to start using the other features in
                  your dashboard
                </Text>
                <Click to={`/uploadPage/${id}`}>Click here...</Click>
              </Right>
            </Card>

            {/* card2 */}
            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  {/* <Number>24</Number> */}
                </Div1>
              </Left>
              <Right>
                <Product>Company Profile</Product>
                <Text>
                  Complete or edit all information related to your company
                </Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>

            {/* card 3 */}

            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  {/* <Number>24</Number> */}
                </Div1>
              </Left>
              <Right>
                <Product>Personal Information</Product>
                <Text>Complete or edit information about you</Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>
          </Hold>
        </Row>

        {/* Row two */}

        <Row>
          <Div>
            <Topic>Get new serious leads</Topic>
          </Div>
          <Hold>
            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  {/* <Number>24</Number> */}
                </Div1>
              </Left>
              <Right>
                <Product>Company distributors</Product>
                <Text>
                  Browse distributors who are interested in your product range
                </Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>

            {/* card2 */}
            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  {/* <Number>24</Number> */}
                </Div1>
              </Left>
              <Right>
                <Product>Intelligent Matching</Product>
                <Text>
                 Get 2 recommended matches of MENA distributor every month
                </Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>

            {/* card 3 */}

            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  {/* <Number>24</Number> */}
                </Div1>
              </Left>
              <Right>
                <Product>Priority as Search</Product>
                <Text>Be the first to show in search results for one reserved keyword</Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>
          </Hold>
        </Row>

        {/* Row 3 */}
          <Row>
          <Div>
            <Topic>Build up your Profile</Topic>
          </Div>
          <Hold>
            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  <Number>24</Number>
                </Div1>
              </Left>
              <Right>
                <Product>My Product</Product>
                <Text>
                  List all your products to start using the other features in
                  your dashboard
                </Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>

            {/* card2 */}
            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  {/* <Number>24</Number> */}
                </Div1>
              </Left>
              <Right>
                <Product>Company Profile</Product>
                <Text>
                 Complete or edit all information related to your company
                </Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>

            {/* card 3 */}

            <Card>
              <Left>
                <Div1>
                  <Dot></Dot>
                  {/* <Number>24</Number> */}
                </Div1>
              </Left>
              <Right>
                <Product>Personal Information</Product>
                <Text>
                  Complete or edit information about you 
                </Text>
                <Click to="/">Click here...</Click>
              </Right>
            </Card>
          </Hold>
        </Row>
      </Wrapper>
    </Container>
  );
}

export default DetailAdmin
// const Container = styled.div``
const Click = styled(Link)`
  text-decoration: none;
  color: red;
`;
const Text = styled.div`
width: 100%;
margin-bottom: 20px;
font-weight: bolder;
height:80px;
/* background: orange; */
@media (max-width: 800px) {
    min-height: 200px;
    height: 100%;
    font-size: 80%;
}
`
const Product = styled.div`
color: grey;
padding-bottom: 15px;
@media (max-width: 800px) {
    font-size: 14px;
}
`
const Right = styled.div``
const Div1 = styled.div`
display: flex;
/* justify-content:center; */
align-items: center;
flex-direction: column;
/* position: absolute; */
/* left:20px; */
`;
const Number = styled.div`
width: 30px;
text-align: center;
height: 20px;
color:#fff;
background: blue;
margin-top: 15px;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin-top: 10px;

  border-radius: 50%;
  background: blue;
`;
const Left = styled.div`
height:120px;
width: 2px;
background: blue;
display: flex;
justify-content: center;
margin-right: 40px;
/* align-items: center; */
`;
const Div = styled.div`
/* width: 100%; */
display: flex;
padding: 10px 0;
padding-left: 40px;

/* align-items: flex-start; */
/* background: green; */
`
const Topic = styled.div``
const Card = styled.div`
  width: 350%;
  /* height: 200px; */
  display: flex;
  background: #fff;
  align-items: flex-start;
  padding: 30px;
  padding-right: 40px;
  padding-left: 40px;
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  @media (max-width: 800px) {
    width: 55%;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
      margin: 20px 0;
  }
`;
const Hold = styled.div`
  width: 100%;
  display: flex;
  /* height: 212px; */
  /* background: brown; */
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 40px 0;
      /* height: 212px; */
  background: #fff;
 
  /* flex-direction: column; */
`;
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  /* background: hotpink; */
  
`;

const Container = styled.div`
 width: calc(100vw - 250px);
  /* min-height: 100vh; */
  /* height: 150%; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  /* left:0; */
  left: 220px;
  /* padding: 0; */
  /* background: wheat; */
  @media (max-width: 800px) {
    width: calc(100vw - 200px); 
    padding: 0;
    align-items: center;
    left:170px;
  }
`;