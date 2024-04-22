// Import the Socket.io client library
const io = require('socket.io-client');
require('dotenv').config();
const exec = require('child_process').exec;
// Connect to the server
const socket = io.connect(process.env.SERVER_URL);

// Event listener for connection established
socket.on('connect', () => {
    console.log('Connected to server');

    // Send a message to the server
    socket.emit('join-space', {sp_id:1, acc_id:321});
    
    // Listen for messages from the server
    socket.on('state-changed', (data) => {
        exec(`mosquitto_pub -d -t ${'home/taher_room'+data.appl_endpoint} -m '{"state":${data.appl_state ? 1 : 0 }'} -q 1 -u taher_room -P tassu2612`, (err, stdout, stderr) => {
            if (err) {
              console.error(err);
            } else {
              console.log(stdout);
              console.log(stderr);
            }
        });
    });
    
});

// Event listener for connection closed
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});
