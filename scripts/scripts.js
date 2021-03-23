$(document).ready(function() {

  // Per tigliere il div del logo che sfarfalla e far vedere sotto il video che va
  var a = 0;
  $('#logosfarfalla').on('click', function() {
    $('#logosfarfalla').toggleClass('fade');

  })

  $('#logosfarfalla').click(function(event) {
    var video = $('#orgasmo')[0];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
      //così va in loop anche il trailer
    }
    return false;
  });






});
