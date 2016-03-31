$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var userInput = $("#startVowel").val();
    var userInputSplit = userInput.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var emptyArray = [];
    var first = userInput.slice(0,1);
    var sLast = userInput.slice(1);
    var output;

debugger
    for(i = 0; i <userInput.length; i++){
        if(userInput[0] === "a" || userInput[0] === "e" || userInput[0] === "i" || userInput[0] === "o" || userInput[0] === "u"){


          output = userInput + "ay";
          alert(output);
          $(".resultsTest").text(output);
          // emptyArray.push(userInput + "ay");
}
}
    if(userInput[0] != "a" && userInput[0] != "e" && userInput[0] != "i" && userInput[0] != "o" && userInput[0] !="u"){

        emptyArray = sLast + first + "ayo";
        $(".results").text(emptyArray);
        alert(emptyArray);


    }



  });
});

// console.log(userInput);
// console.log(output);

























// $(document).ready(function(){
//
//   $("form#pig-latin").submit(function(event) {
//     event.preventDefault();
//
// var userInput = $("#startVowel").val();
// var userInputSplit = userInput.split("");
// var pushAy = "ay";
// var first = userInputSplit.slice(0,1);
// console.log(first);
// var last = userInputSplit.slice(1);
// console.log(last);
// var output = [];
// // var vowels = ["a","e","i","o","u"];
// // var first = usr_word.slice(0,1);
// // var sLast = usr_word.slice(1);
// //****slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
// //*****The slice() method extracts parts of a string and returns the extracted parts in a new string.
//
// debugger
//
//     if (first === "a" || first === "e" || first === "i" || first === "o" ||first === "u") {
//           output.push( + pushAy);
//         };
//         if (usr_word != "a" || usr_word != "e" || usr_word != "i" || usr_word != "o" || usr_word != "u"){
//             output.push(last + pushAy)
//           };
//
// });
//
// });
//
//
// // $(document).ready(function(){
// //   $("form#pig-latin").submit(function(event) {
// //     event.preventDefault();
// //
// //     var userInput = $("#startVowel").val();
// //     var vowels = ["a", "e", "i", "o", "u"];
// //     var emptyArray = [];
// //
// //
//
// //
