import styled from '@emotion/styled';
import React from 'react';


import { useNavigate } from 'react-router-dom';

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
const SignSignup = () => {
  const navigate = useNavigate();
  const componentDidMount = () => {
    setTimeout(() => {
      navigate('/sign-signup');
    }, 1000);
  };

  componentDidMount();
  return (
    <Container>
      <FormContainer>
        <Title>Casa</Title>
      </FormContainer>
    </Container>
  );
}

export default SignSignup;

