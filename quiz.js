$(document).ready(function(){
                  
  $('.questionForm').hide();

  $('#q1').show();

$('#q1 #submit').click(function(){
  $('.questionForm').hide();
  $('#q2').fadeIn(250);
  return false;
  })
})
