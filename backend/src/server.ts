import server from '@start/app';

server.listen(process.env.PORT || 3000, () => {
    console.log(`listening on http://127.0.0.1:${process.env.PORT}`);
});
