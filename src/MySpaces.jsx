import React from 'react';
import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import AddHomeIcon from '@mui/icons-material/AddHome';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuBar from './MenuBar';


const Container = styled.div`
  height: 100vh;
  position: relative;
  background-size: cover;
  width: 500px;
`;

class MySpace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: '',
      description: '',
      cards: [
        { title: 'Living Room', description: '5 Device' },
        { title: 'Bedroom', description: '4 Device' },
        { title: 'Kithcen', description: '1 Device' },
      ],
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSave = () => {
    this.setState(prevState => ({
      cards: [...prevState.cards, { title: this.state.title, description: this.state.description }],
      open: false,
      title: '',
      description: '',
    }));
  };
  render() {
    return (
      <>
        <Container>
          <div className="container">
            <div>
              <div className="bill-top-shadow"></div>

              <div className="row pt-5 justify-content-between  ">
                <div className="col-8 ms-2 text-black home-title text-start ">
                  <h4>My Spaces</h4>
                </div>
                <div className="col-2  text-end text-white home-title">
                  <MenuBar />
                </div>
              </div>

              <div className="row pt-5 gap-3 justify-content-center ">
                <div className="col-10">
                  <div className="row justify-content-between gap-2" >
                    {this.state.cards.map((card, index) => (
                      <div key={index} className="col-5 myspace-card text-center ">
                        <div className='myspace-card-img'  >
                          <IconButton >
                            <AddHomeIcon className='  ' />
                          </IconButton>
                        </div>
                        <div className='myspace-card-title' >{card.title}</div>
                        <div className='myspace-card-text' >{card.description}</div>
                      </div>
                    ))}
                    <div className="col-5 myspace-card-add ">
                      <div className='myspace-card-img text-black border-black '  >
                        <IconButton onClick={this.handleClickOpen}>
                          <AddIcon className=' text-black' />
                        </IconButton>
                      </div>
                      <div className='myspace-card-title' >Add</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Add a new card</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              value={this.state.title}
              onChange={(event) => this.setState({ title: event.target.value })}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              value={this.state.description}
              onChange={(event) => this.setState({ description: event.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Close</Button>
            <Button onClick={this.handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default MySpace;