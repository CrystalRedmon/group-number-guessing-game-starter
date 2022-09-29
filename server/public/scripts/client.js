$(document).ready(handleReady);

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

}