import io from 'socket.io-client';
import {server} from './constant';

const serverURL = `${server}/socket`;

const socket = io(serverURL, {
	withCredentials: true,
	path: '/socket.io',
	transports: ['websocket'],
});

socket.on('connect', () => {
	console.log('Connected to Socket.IO server');
});

socket.on('message', (data) => {
	console.log('Received a message:', data);
});

socket.on('disconnect', () => {
	console.log('Disconnected from Socket.IO server');
});

export default socket;
