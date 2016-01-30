// Function to control lamp
$(document).ready(function() {

  // Click on buttons
  $("#on").click(function() {
    $.get('/lamp_control/digital/5/1');
  });

  $("#off").click(function() {
    $.get('/lamp_control/digital/5/0');
  });

});