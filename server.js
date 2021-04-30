// Import dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv/config');

const port = process.env.PORT || 4000;
const app = express();
//import Routers
const testRoute = require('./routes/test');
const itemRoute = require('./routes/item');
const hcodeRoute = require('./routes/hcode');
const pcodeRoute = require('./routes/pcode');
const itemhcodeRoute = require('./routes/itemhcode');
const itempcodeRoute = require('./routes/itempcode');
const api = require('./routes/routes');


//DB connect
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true }, () =>
    console.log('connected to db!')
    );

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api/v1/', api);
app.use('/test', testRoute);
app.use('/item', itemRoute);
app.use('/hcode', hcodeRoute);
app.use('/pcode', pcodeRoute);
app.use('/itemhcode', itemhcodeRoute);
app.use('/itempcode', itempcodeRoute);


// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

app.get('/',(req,res) => {
    res.send('Server Home');
});

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));