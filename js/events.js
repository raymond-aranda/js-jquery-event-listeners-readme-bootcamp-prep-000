//define functions here

function getIt() {
  $('p').on('click', function() {
    alert('hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function submitIt() {
  $('input[type=submit]').on('submit', function() {
    alert('Your form is going to be submitted now.'')
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
