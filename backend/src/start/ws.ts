import app from './app';

const ws = app.ws;

ws.on('connection', socket => {
    ws.emit('userQuantityUpdate');
});
