$(document).ready(function(){
                  
  $('.questionSetup').hide();

  $('#q1').show();

$('#q1 #submit').click(function(){
  $('.questionSetup').hide();
  $('#q2').fadeIn(250);
  return false;
  })
})
