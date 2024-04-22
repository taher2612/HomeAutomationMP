import React from 'react';
import { TextField, Button } from '@mui/material';
import styled from '@emotion/styled';
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

const RoundedTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: white; /* Set background color to white */

    & .MuiOutlinedInput-root {
      border-radius: 20px;
      border-color: black; /* Change border color here */
    }

    & .MuiInputLabel-root {
      color: black; /* Change label color here */
    }
  }
`;

const BlackButton = styled(Button)`
  && {
    background-color: black;
    color: white;
    margin-top: 10px;
    border-radius: 20px;
  }
`;

class Login1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  render() {
    return (
      <Container>
        <FormContainer>
          <Title>Casa</Title>
          <form onSubmit={this.handleSubmit}>
            <RoundedTextField
              type="email"
              name="email"
              label="Email address"
              value={this.state.email}
              onChange={this.handleChange}
              variant="outlined"
              required
            />
             <Link to="/login2">
              <BlackButton variant="contained">
                Next
              </BlackButton>
            </Link>
          </form>
        </FormContainer>
      </Container>
    );
  }
}

export default Login1;
