import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const SignUpSuccess = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
                <Big>Signed Up Successfully</Big>
                <Small>check your mail to continue</Small>
                {/* <Link to="/login">Login</Link> */}
            </Card>
        </Wrapper>
    </Container>
  )
}

export default SignUpSuccess

const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Card = styled.div`
    width: 500px;
    height: 300px;
    border: 3px solid #5699ae;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow:  5px 5px 10px rgba(0,0,0,0.4);
`
const Big = styled.div`
    font-size: 30px;
    font-weight: 400;
`
const Small = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #5699ae;
`