import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import MenuBar from './MenuBar';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, TextField, Button } from '@mui/material';
import { io } from 'socket.io-client';

const Container = styled.div`
  height: 100vh;
  position: relative;
  background-size: cover;
  background-image: url('assets/bedroom.png');
  width: 500px;
`;
const serverURL = import.meta.env.VITE_SERVER_URL;
const socket = io(serverURL);

socket.on('connect', ()=>{
    console.log("you are connected "+socket.id);
});

socket.emit("join-space", {sp_id:1, acc_id:321});

const Bedroom = () => {

  const [appliances, setAppliances] = useState([]);

  const handleToggleYellow = (appl_id) => {
    const newAppliances = appliances.map((appl) => {
      if(appl.appl_id == appl_id){
        appl.appl_state = !appl.appl_state;
        socket.emit('switch-state', {
          ...appl,
          appl_state:appl.appl_state,
          acc_id:321,
          sp_id:1,
          room_id:1,
        });
      }
      return appl;
    });    
    setAppliances(prev => newAppliances);
  };
  
  socket.on('state-changed', (data) => {
    const newAppliances = appliances.map((appl) => {
      if(appl.appl_id == data.appl_id){
        appl.appl_state = data.appl_state;
      }
      return appl;
    });    
    setAppliances(prev => newAppliances);    
  })
  useEffect(() => {
    const fetchAppls = async () => {
      let errFlag = false;
      const res = await fetch(serverURL + "/control/appliances", {
        method : "GET"
      });
      if(res.status !== 200) errFlag = true;
      const response = await res.json();
      if(errFlag) return console.log(response);
      setAppliances(prev => response.applianceList);
      console.log(response);
    }
    fetchAppls();
  },[])

  return (
    <>
      <Container>
        <div className="bg-bedroom"></div>
        <div className="home-top-shadow"></div>

        <div className="row pt-5  ">
          <div className="col-2  text-end text-white ">
            <MenuBar />
          </div>
          <div className="col-2 ms-2 text-black home-title align-center align-self-center ">
            <h6 className='text-white'>Home</h6>
          </div>
        </div>
        <div className="row pt-5 gap-3 justify-content-center ">
          <div className="col-10">
            <div className="space-card">
            <h5 className='text-white mb-4 text-xl'>Bedroom</h5>
              <div className="flex gap-2 justify-center flex-wrap">
                {/* {homeItems.map((item, index) => (
                  <div key={index} className="col-4 eclipse yellow">
                    <h6>{item}</h6>
                  </div>
                ))} */}
                {appliances.map((appl) => (
                  <div
                    key={appl.appl_id}
                    className={`col-4 eclipse ${appl.appl_state ? 'yellow' : ''}`}
                    onClick={() => handleToggleYellow(appl.appl_id)}
                  >
                    <h6>{appl.appl_name}</h6>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Bedroom;
