//UI logic
$(document).ready(function() {
  $("form#word-puzzle").submit(function(event) {
     puzzleInput = $("input#puzzleString").val();
     var puzzleOutput = '';
     var vowels = "aeiouAEIOU";
     //Business logic begin
     for (var index = 0; index < puzzleInput.length; index += 1) {
       var char = puzzleInput[index];
       if (vowels.search(char) >= 0) {
         puzzleOutput += '-';
       } else {
         puzzleOutput += char;
       }
     }
     //Business logic end

    $(".puzzle-result").append(puzzleOutput);
    $(".puzzle-result").show();
    $("form#word-puzzle").hide();
    event.preventDefault();
  });
});
