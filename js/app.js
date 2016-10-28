// wait for the DOM to finish loading
console.log('linked!');

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
  var clickCount = 0;
  var $boxes = $('div.box');
  //reset button
  $('button').on('click', reset);
  //console.log($boxes);
  //sanity check click!
  // $boxes.on('click', function consoleClicked() {
  //   console.log('clicked!');
  // });
  $boxes.one('click', markBox);

  function markBox() {
    clickCount += 1;
    console.log(this);
    if(clickCount%2 === 0) {
      var currentBox = this;
      $(this).text('O')
      $(this).text('O')
      console.log('O turn');
    } else {
      $(this).text('X')
      console.log('X turn');
    }
  //checkWinner();
  }
  function reset() {
    clickCount = 0;
    $boxes.text('');
    $boxes.off('click');
    $boxes.one('click', markBox);
  }
});

function checkWinner() {
  console.log('hello');
}
