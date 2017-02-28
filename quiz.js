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

function process(q){
 if(q == 'q1){
      var submitted = $('input [name=q1]:checked').val();
      if (submitted == sessionStorage.a1){
        score++;
      }
    }
if(q == 'q2){
      var submitted = $('input [name=q2]:checked').val();
      if (submitted == sessionStorage.a2){
        score++;
      }
    }
    if(q == 'q3){
      var submitted = $('input [name=q3]:checked').val();
      if (submitted == sessionStorage.a3){
        score++;
      }
    }
    if(q == 'q4){
      var submitted = $('input [name=q4]:checked').val();
      if (submitted == sessionStorage.a4){
        score++;
      }
    }
    if(q == 'q5){
      var submitted = $('input [name=q5]:checked').val();
      if (submitted == sessionStorage.a5){
        score++;
      }
      $('#results').html ('<h3> Your score is: '+score+' out of 10 </h3>< a href="page2.html"> take quiz again</a>');
    }
    return false;
}
window.addEventListener('load', init, false);
