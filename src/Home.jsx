import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from './MenuBar';

/* */
const Container = styled.div`
  height: 100vh;
  position: relative;
  background-image: url('assets/background.png');
  background-size: cover;
  width: 500px;
`;

const Title = styled.h2`
  font-family: 'Cagliostro';
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  text-align: center;
  color: #000000;
`;

const Home = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(['Bill', 'Spaces', 'Bedroom']);
  const [linkItems, setLinkItems] = useState(['bill', 'spaces', 'bedroom']);
  const [newItem, setNewItem] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
      setOpen(false);
    }
  };

  return (
    <Container>
      <div className="container">
        <div className="bg-home"></div>
        <div className="home-top-shadow"></div>
        <div className="row pt-5">
          <div className="col-2  text-start text-white ">
            <MenuBar />
          </div>
          <div className="col-10  home-title">
            <div className='card-title text-start  text-white ' >
              Welcome Home,
            </div>
            <div className='user-name text-start text-white' >
              Taher
            </div>
          </div>
        </div>
        <div className='row justify-content-center  mt-3 ' >
          <div className="col-10">
            <div className='row  my-3 justify-content-between'  >
              {items.map((item, index) => (
                // <Route path="/bedroom" element={<Bedroom/>} > 
                <div key={index} className="col-6 mb-2 cursor-pointer">
                  <div className="home-card"
                    onClick={() => navigate(`/${linkItems.at(index)}`)}
                  // onClick={() => navigate(`/${item.toLowerCase().replace(/\s+/g, '-')}`)}
                  >
                    <span className='text-xl '  >
                      {item}
                    </span>
                  </div>
                </div>
                // </Route>
              ))}
              {/* <div className="col-6">
                <div className="home-card-add">
                  <IconButton onClick={handleOpen}>
                    <AddIcon className='text-white btn-add' />
                  </IconButton>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Item"
            type="text"
            fullWidth
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;