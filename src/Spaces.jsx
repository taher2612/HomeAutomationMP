import React from 'react';
import styled from '@emotion/styled';
import MenuBar from './MenuBar';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 100vh;
  position: relative;
  background-image: url('assets/background.png');
  background-image: url('assets/space.png');
  background-size: cover;
  width: 500px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spaces: [
        { title: 'Home', description: 'B/1803 Lamington Road', link:'/home' },
        // { title: 'Office', description: 'Bandra Kurla Complex' }
      ],
      open: false,
      newTitle: '',
      newDescription: ''
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAdd = () => {
    const { spaces, newTitle, newDescription } = this.state;
    spaces.push({ title: newTitle, description: newDescription });
    this.setState({ spaces, newTitle: '', newDescription: '', open: false });
  };

  render() {
    const { spaces, open, newTitle, newDescription } = this.state;

    return (
      <>
        <Container>
          <div className="container">
            <div>
              <div className="bg-space"></div>
              <div className="home-top-shadow"></div>

              <div className="row pt-5">
                <div className="col-2  text-end text-white ">
                  <MenuBar />
                </div>
                <div className="col-2 ms-2 text-black home-title align-center align-self-center ">
                  <h6 className='text-white' >Taher's</h6>
                  <h5 className='text-white user-name' >Spaces</h5>
                </div>
              </div>
              <div className="row pt-5 gap-3 justify-content-center ">
                {spaces.map((space, index) => (
                  <div key={index} className="col-10" onClick={() => {this.handleNavigaiton(space.link)}}>
                      <Link to={space.link}>
                      <div className="space-card">
                        <h5 className='text-white text-start '>{space.title}</h5>
                        <p className='text-white text-start  space-title fw-400 '>
                          {space.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-1"></div>

                <div className="col-6">
                  <div className="card">
                    <IconButton onClick={this.handleOpen}>
                      <AddIcon className='text-white ' />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Add New Space</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={newTitle}
              onChange={(e) => this.setState({ newTitle: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              value={newDescription}
              onChange={(e) => this.setState({ newDescription: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleAdd}>Add</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default Home;
