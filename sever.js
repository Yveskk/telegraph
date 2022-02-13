const express = require('express');

const lib = require('./library')
const conn = require('./connect')
const app = express();
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const server = require('http').Server(app);
const port = 5000;

app.get('/', (req, res) => {
	res.status(200);
    res.json({message: "Get Response"});
    res.end();
 });   

app.post('/', (req, res) => {
	res.status(200);
	res.json({ message: "POST Response" });
	res.end();
});

app.post('/crypt-message', (req, res) => {
      const request = req.body; // get request senGETt
      const message = request.message;
      const algorithm = request.algorithm;
    // Logs imofration received
      console.log("Message to process: ", message);
      console.log("Algorithm used for encryption: ", algorithm);

     let message_encrypted = "";
     for (let i = message.length - 1; i >= 0; i--) {
        message_encrypted = message_encrypted + message.charAt(i);
     }
     res.status(200) ;
     res.json({message: message_encrypted});
     res.end();
    });

    app.post('/decrypt-message', (req, res) => {
        const request = req.body; // get request senGETt
        const message = request.message;
        const algorithm = request.algorithm;
      // Logs imofration received
        console.log("Message to process: ", message);
        console.log("Algorithm used for decryption: ", algorithm);
  
       let message_decrypted = "";
       for (let i = message.length - 1; i >= 0; i--) {
          message_decrypted = message_decrypted + message.charAt(i);
       }
       res.status(200) ;
       res.json({message: message_decrypted});
       res.end();
      });

    app.put('/decrypted-message', (req, res) =>{
        res.status(200);
        res.json({message: "PUT response"});
        res.end();
    })  
      
    server.listen(port, (err) => {
        if(err) {
            throw err ;
        }

        console.log('server running on localhost: ', port);

    });