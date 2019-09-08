import os from 'os';

const net = os.networkInterfaces();
let currentIp = null;

Object.keys(net).forEach((name) => {
    net[name].forEach((face) => {
        if (face.family !== 'IPv4' || face.internal !== false) return;
        currentIp = face.address;
    });
});

export default {
    ip: currentIp,
    port: 3000,
};