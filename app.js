// server.js

// modules =================================================
var express = require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
// var forceSsl = require('force-ssl-heroku');
var app = express();
app.use(cors())
// app.use(forceSsl);


// configuration ===========================================
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: "stmpccatan@gmail.com",
        pass: "ccatan123"
    },tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});
// config files

// set our port
var port = process.env.PORT || 3000;

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/dist'));

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/

/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/
app.get('/.well-known/acme-challenge/:content', function (req, res) {
    res.send('L2xYiYb9o3lgSgM5KKBZQHCqaEqU0CbUWozKVD_W__o.8d4kxirupueEDLH_EkaGNpcFaHZwxi4TuzQDJhCPxsM')
})

app.post('/reserve', function (req, res) {
    
    let checkin = req.body.checkin.slice(0, 10);
    let checkout = req.body.checkout.slice(0, 10);

    var mailOptions = {
        from: 'stmpccatan@gmail.com', 
        subject: 'ECO LODGE CCATAN RESERVE!!', 
        html: `<h1>CCATAN RESERVA</h1></br>
        <div><p><b>Primer Nombre:${req.body.firstname}</b></p></div>
        <div><p><b>Segundo Nombre:${req.body.lastname}</b></p></div>
        <div><p><b>Telefono:${req.body.phone}</b></p></div>
        <div><p><b>Email:${req.body.email}</b></p></div>
        <div><p><b>Numero de Adultos:${req.body.nAdults}</b></p></div>
        <div><p><b>Numero de chicos:${req.body.nChilds}</b></p></div>
        <div><p><b>Check-in:${checkin}</b></p></div>
        <div><p><b>Check-out:${checkout}</b></p></div>
        <div><p><b>Message:${req.body.message}}</b></p></div>
        <br>
        <div><p style="color:red;"><b>ATENCION ESTA ES UNA COPIA DE SU PEDIDO DE RESERVA, ESPERE CONFIRMACION DEL HOSTEL POR TELEFONO O EMAIL.</b></p></div>
        <div><p style="color:red;"><b>ATTENTION PLEASE THIS IS A COPY OF YOUR RESERVATION REQUEST, WAIT FOR CONFIRMATION FROM THE HOTEL BY TELEPHONE OR EMAIL.</b></p></div>`,
        to: `ecolodgeccatan@gmail.com,${req.body.email}`
    }

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            emailMessage = "there was an error :-(, and it was this: " + error.message;
        } else {
            emailMessage = "Message sent: " + info.response;
        }
        return res.json({
            message: "success",
            email: emailMessage
        });
    });
});


app.post('/sendemail', function (req, res) {

    var mailOptions = {
        from: 'stmpccatan@gmail.com', 
        subject: 'ECO LODGE CCATAN contact',
        html: '<h1>CCATANA CONTACT</h1></br><div><p><b>MESSAGE:</br></b>' + req.body.message + ' </div><div><b>Nombre de cliente:</b> ' + req.body.name + '</p></div><div><p><b>Email:</b> ' + req.body.email + '</p></div>', // html body
        to: 'ecolodgeccatan@gmail.com'
    }

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            emailMessage = "there was an error :-(, and it was this: " + error.message;
        } else {
            emailMessage = "Message sent: " + info.response;
        }
        return res.json({
            message: "success",
            email: emailMessage
        });
    });
});


/*--------------------Routing Over----------------------------*/

app.listen(port, function () {
    console.log("Express Started on Port 3000");
});


