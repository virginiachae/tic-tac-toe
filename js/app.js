// wait for the DOM to finish loading
console.log('linked!');

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var clickCount = 0;
  var $boxes = $('div.box');
  //reset button
  $('button').on('click', reset);
  //text on top of page
  $('hr').after("<p>Let's play! <span>X will start!</span></p>")
  //clicking actions
  $boxes.one('click', markBox);
  function markBox() {
    clickCount += 1;
    if(clickCount%2 === 0) {
      $('p').text("X's TURN");
      $(this).text('O')
      $(this).css("color", "orange");
      $('p').css("color", "pink");
      checkWinner()
    } else {
      $('p').text("O's TURN");
      $(this).text('X')
      $(this).css("color", "pink");
      $('p').css("color", "orange");
      checkWinner();
    }
  }
  function reset() {
    clickCount = 0;
    $('p').html("<p>Let's play! <span>X will start!</span></p>");
    $boxes.text('');
    $boxes.off('click');
    $boxes.one('click', markBox);
  }
});

// function checkWinner() {
// if (
//   $('#one').text() && $('#two').text() && $('#three').text() === 'X'||
//   $('#one').text() && $('#four').text() && $('#seven').text() === 'X' ||
//   $('#one').text() && $('#five').text() && $('#nine').text() === 'X' ||
//   $('#two').text() && $('#five').text() && $('#eight').text() === 'X' ||
//   $('#three').text() && $('#six').text() && $('#nine').text() === 'X' ||
//   $('#four').text() && $('#five').text() && $('#six').text() === 'X' ||
//   $('#seven').text() && $('#eight').text() && $('#nine').text() === 'X'
// ) {
//   $('p').text("X WINS!");
//   $('p').css("color", "pink");
// } else if (
//   $('#one').text() && $('#two').text() && $('#three').text() === 'O'||
//   $('#one').text() && $('#four').text() && $('#seven').text() === 'O' ||
//   $('#one').text() && $('#five').text() && $('#nine').text() === 'O' ||
//   $('#two').text() && $('#five').text() && $('#eight').text() === 'O' ||
//   $('#three').text() && $('#six').text() && $('#nine').text() === 'O' ||
//   $('#four').text() && $('#five').text() && $('#six').text() === 'O' ||
//   $('#seven').text() && $('#eight').text() && $('#nine').text() === 'O'
// ) {
//   $('p').text("O WINS!");
//   $('p').css("color", "orange");
// }
// };
