$(document).ready(function() {
  $("form#word-puzzle").submit(function(event) {
    var puzzleInput = $("input#puzzleString").val();
    var puzzleOutput = '';

    var vowels = "aeiouAEIOU";

    for (var index = 0; index < puzzleInput.length; index += 1) {

      var char = puzzleInput[index];
      if (vowels.search(char) >= 0) {
        puzzleOutput += '-';
      } else {
        puzzleOutput += char;
      }
    }

    $(".puzzle-result").append(puzzleOutput);
    // show output
    // hide form
    $(".puzzle-result").show();



    event.preventDefault();
  });
});
