const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
let allGuesses =[];

let compStatus = {
  player1: '',
  player2: ''
};


console.log(number);


app.post('/guess', (req, res)=>{
  console.log('Guessing game');
  
  let playerGuesses = req.body;
  allGuesses.push(playerGuesses);


  ///running comparision player 1
  if(Number(req.body.player1) < number){
    compStatus.player1 = 'too low';
  }else if(Number(req.body.player1) > number){
    compStatus.player1 = 'too high';
  }else if (Number(req.body.player1) === number){
    compStatus.player1 = 'winner';
  };
  // running comparison player 2
  if(Number(req.body.player2) < number){
    compStatus.player2 = 'too low';
  }else if(Number(req.body.player2) > number){
    compStatus.player2 = 'too high';
  }else if(Number(req.body.player2) === number){
    compStatus.player2 = 'winner';
  };

  res.sendStatus(201);
  console.log(allGuesses);

  console.log(compStatus);
});

app.get('/guess', (req, res)=> {
  console.log('server side GET');
  res.send(allGuesses);
});


app.get('/comparison', (req, res)=>{
  console.log('comparision funct');
  res.send(compStatus);
});










app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
