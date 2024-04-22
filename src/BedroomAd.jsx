import styled from '@emotion/styled';
import React from 'react';
import MenuBar from './MenuBar';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const Container = styled.div`
  height: 100vh;
  position: relative;
  background-size: cover;
  width: 500px;
`;

class Bedroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Container>
          <div className="container">
            <div>
              <div className="bg-bedroom"></div>
              <div className="home-top-shadow"></div>

              <div className="row pt-5  ">
                <div className="col-2  text-end text-white home-title">
                  <MenuBar />
                </div>
                <div className="col-2 ms-2 text-black home-title align-center align-self-center ">
                  <h6 className='text-white' >Home</h6>
                  <h5 className='text-white' >Bedroom</h5>
                </div>
              </div>

              <div className="row pt-5 gap-3 justify-content-center ">
                <div className="col-10">
                  <div className="space-card">
                    <h5 className='text-white text-start'>Home</h5>
                    <div className="row gap-2" >
                      <div className="col-4 eclipse">
                        <h6>Main</h6>
                      </div>
                      <div className="col-4 eclipse yellow">
                        <h6>Study</h6>
                      </div>
                      <div className="col-4 eclipse yellow">
                        <h6>Lamp</h6>
                      </div>
                    </div>
                    <div className="row mt-2" >
                      <div className="col-4 eclipse">
                        <h6>
                          <IconButton >
                            <AddIcon className='text-white ' />
                          </IconButton>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row pt-5 gap-3 justify-content-center">
                <div className="col-10">
                  <div className="space-card">
                    <h5 className='text-white text-start'>Fans</h5>
                    <div className="row gap-2" >
                      <div className="col-4 eclipse">
                        <h6>Centre</h6>
                      </div>
                      <div className="col-4 eclipse">
                        <h6>
                          <IconButton >
                            <AddIcon className='text-white ' />
                          </IconButton>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Bedroom;
