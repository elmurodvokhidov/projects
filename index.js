const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const accountSid = 'ACc14e8a699b6ef7cea384100e53c18874';
const authToken = '1d72e0bcc5f0e1f0d8b313528d82ccb0';
const client = require('twilio')(accountSid, authToken);

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-sms', (req, res) => {
    const { to, message } = req.body;
    console.log('Incoming Request Body:', req.body);
    client.messages
        .create({
            body: message,
            from: '+12059903532',
            to: to
        })
        .then(() => {
            res.send('SMS sent successfully!');
        })
        .catch(err => {
            console.error(err.message);
            res.status(500).send('Error sending SMS!');
        })
        // .then(message => console.log(message.sid))
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});