import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #FFC629;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #FFC629;
  padding: 20px;
  width: 300px;
`;


const BlackButton = styled(Button)`
  && {
    background-color: black;
    color: white;
    margin-top: 10px;
    border-radius: 20px;
  }
`;

const Title = styled.h2`
font-family: 'Cagliostro';
font-style: normal;
font-weight: 400;
font-size: 42px;
text-align: center;
color: #000000;
text-align: center;
font-family: 'Your Font Here', sans-serif; /* Change the font-family here */
color: black; /* Change the font color here */
`;

const Line = styled.hr`
  border: 1px solid black;
  width: 100%;
  margin: 20px 0;
`;

class SignSignup extends React.Component {

  render() {
    return (
      <Container>
        <FormContainer>
          <Title>Casa</Title>
          <div  >
            {/* <BlackButton type="submit" variant="contained" >
              Sign Up
            </BlackButton>
            <Line />
            <BlackButton type="submit" variant="contained">
              Sign In
            </BlackButton> */}
             <Link to="/signup">
              <BlackButton variant="contained">
                Sign Up
              </BlackButton>
            </Link>
            <Line />
            <Link to="/login1">
              <BlackButton variant="contained">
                Sign In
              </BlackButton>
            </Link>
          </div>
        </FormContainer>
      </Container>
    );
  }
}

export default SignSignup;
