import { createApp } from 'vue'
import App from './App.vue'
import "./js/socket.io.min";
import "./js/peerjs.min"
import './index.css'

const peer = new window.Peer();

const io = window.io.connect(
    "/", {
        port: 3000,
        transports: ['websocket'],
        upgrade: false
    });

console.log(io);

createApp(App).mount('#app')
