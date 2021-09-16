const express = require('express');
const path = require('path');
const server = express();
const members = require('./Members');



server.get('/api/members', (req, res) => res.json(members));

const logger = (req, res, next) => {
    console.log(''+ req.protocol + "://" + req.get("host") + req.originalUrl);
    next();
};
server.use(logger);
//server.use(nodemailer);
server.use(express.static(path.join(__dirname, 'Front')));


const PORT = process.env.PORT || 3000;


server.listen(PORT, () => console.log('Server started on port '+ PORT));