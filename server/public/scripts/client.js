// const { response } = require("express");  Ask Edan about why this keeps coming up



$(document).ready(handleReady);

let clientAllGuesses = [];
let clientAllComparison =[];

function handleReady() {
  console.log("jquery is loaded!");

  $('#form').on('submit', onSubmitGuess);

  $('#resetBtn').on('click', resetGame);

}


function onSubmitGuess(evt){
    evt.preventDefault();

    console.log('Test test');

    let newInput ={
      player1: $('#player1').val(),
      player2: $('#player2').val() 
    }
    console.log(newInput);


    $.ajax({
      url: '/guess',
      method: 'POST',
      data: newInput
    })
      .then((response)=>{
        console.log('in ajax POST');
        getStoredGuess();
      });

}

function resetGame () {

  clientAllGuesses = [];
  clientAllComparison =[];

  $('#gameTable').empty();
  $('#guessCounter').empty();

}

function getStoredGuess () {

  $.ajax({
    url: '/guess', 
    method: 'GET',
  })
    .then((response)=> {
      
      clientAllGuesses = response;
      console.log(clientAllGuesses);
      render();
    });

  $.ajax({
    url: '/comparison',
    method: 'GET'
  })
    .then((response)=> {
      clientAllComparison.push(response);
      console.log(clientAllComparison);
      render();
    });
}


function render(){
    $('#gameTable').empty();
    $('#guessCounter').empty();

  for (let words of clientAllComparison){
    $('#gameTable').append(`
    <tr>
      <td> ${words.player1} </td>
      <td> ${words.player2} </td>
    </tr>
    `)

    if(words.player1 === 'winner' && words.player2 === 'winner'){
      $('#winner').append(`
      <h1>It's a Tie!</h1>
      <button id="resetBtn">Reset!!</button>
      `);
    }else if(words.player2 === 'winner'){
      $('#winner').append(`
      <h1>Player 2 Wins</h1>
      <button id="resetBtn">Reset!!</button>
      `);
    }else if(words.player1 === 'winner'){
      $('#winner').append(`
      <h1>Player 1 Wins</h1>
      <button id="resetBtn">Reset!!</button>
      `);
    };


  };

    $('#guessCounter').append(`Round: ${clientAllComparison.length + 1 }`);
}