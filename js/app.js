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

function checkWinner() {
if (
  $('#one').text() === 'X' && $('#two').text() === 'X' && $('#three').text() === 'X'||
  $('#one').text() === 'X' && $('#four').text() === 'X' && $('#seven').text() === 'X' ||
  $('#one').text() === 'X' && $('#five').text() === 'X' && $('#nine').text() === 'X' ||
  $('#two').text() === 'X' && $('#five').text() === 'X' && $('#eight').text() === 'X' ||
  $('#three').text() === 'X' && $('#six').text() === 'X' && $('#nine').text() === 'X' ||
  $('#four').text() === 'X' && $('#five').text() === 'X' && $('#six').text() === 'X' ||
  $('#seven').text() === 'X' && $('#eight').text() === 'X' && $('#nine').text() === 'X'
) {
  $('p').text("X WINS!");
  $('p').css("color", "pink");
} else if (
  $('#one').text() === 'O' && $('#two').text() === 'O' && $('#three').text() === 'O'||
  $('#one').text() === 'O' && $('#four').text() === 'O' && $('#seven').text() === 'O' ||
  $('#one').text() === 'O' && $('#five').text() === 'O' && $('#nine').text() === 'O' ||
  $('#two').text() === 'O' && $('#five').text() === 'O' && $('#eight').text() === 'O' ||
  $('#three').text() === 'O' && $('#six').text() === 'O' && $('#nine').text() === 'O' ||
  $('#four').text() === 'O' && $('#five').text() === 'O' && $('#six').text() === 'O' ||
  $('#seven').text() === 'O' && $('#eight').text() === 'O' && $('#nine').text() === 'O'
) {
  $('p').text("O WINS!");
  $('p').css("color", "orange");
} else if (
  ($('#one').text() !== '') &&
  ($('#two').text() !== '') &&
  ($('#three').text() !== '') &&
  ($('#four').text() !== '') &&
  ($('#five').text() !== '') &&
  ($('#six').text() !== '') &&
  ($('#seven').text() !== '') &&
  ($('#eight').text() !== '') &&
  ($('#nine').text() !== '')
) {
  $('p').text("-DRAW-");
  $('p').css("color", "grey");
}
};
