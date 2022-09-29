// const { response } = require("express");  Ask Edan about why this keeps coming up



$(document).ready(handleReady);

let clientAllGuesses = [];

function handleReady() {
  console.log("jquery is loaded!");

  $('#form').on('submit', onSubmitGuess);



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
}

function render(){

}