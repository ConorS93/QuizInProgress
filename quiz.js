var score = 0; //set score
var total = 10; // sets total number
var point = 1;// points per correct answer
var highScore = 10;

function init(){
 sessionStorage.setItem('a1','a');  
 sessionStorage.setItem('a2','b');  
 sessionStorage.setItem('a3','c');  
 sessionStorage.setItem('a4','d');  
 sessionStorage.setItem('a5','e');  
}

$(document).ready(function(){         
  $('.questionSetup').hide();
  $('#q1').show();

$('#q1 #submit').click(function(){
  $('.questionSetup').hide();
   process('q1');
  $('#q2').fadeIn(250);
  return false;
  })
  $('#q2 #submit').click(function(){
  $('.questionSetup').hide();
     process('q2');
  $('#q3').fadeIn(250);
  return false;
  })
  $('#q3 #submit').click(function(){
  $('.questionSetup').hide();
     process('q3');
  $('#q4').fadeIn(250);
  return false;
  })
  $('#q4 #submit').click(function(){
  $('.questionSetup').hide();
     process('q4');
  $('#q5').fadeIn(250);
  return false;
  })
  $('#q5 #submit').click(function(){
  $('.questionSetup').hide();
     process('q5');
  $('#results').fadeIn(250);
  return false;
  })
})
window.addEventListener('load', init, false);
