$(function(){
  var count=0;
  $('#first').hide();
  $('#twitter').click(function()
{
  //alert("you clicked it");
  count++;
  $('#count').text(count);
  $('#first').show().fadeOut(2000);
});

});
