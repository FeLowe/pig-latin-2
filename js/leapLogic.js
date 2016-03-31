$(function(){


  debugger

  var vowels= ["a", "e", "i", "o", "u"];

  var isVowel = function(letter){
    for (var i = 0; i < vowels.length; i++) {
      if (letter === vowels[i]) {
        return true;
      }
    }
    return false;
  }
  var userWord = function(word) {
    if (isVowel(word[0]) && word[0] !== "y") {
      return word.concat("ay");
    } else {
      for (var letter = 1; letter < string.length; letter++) {
        if (isVowel(word[letter])) {
          if ((word[letter] === "u" && (word[letter -1]) === "q")) {
            var front = word.slice(0, letter +1);
            var middle = word.slice(letter +1, word.length);
            return middle + front + "ay";
          } else {
            var front = word.slice(0, letter);
            var middle = word.slice(letter, word.length);
            return middle + front + "ay";
          }
        }
      }
    }
    return word + "ay";
  }
  
  var translate = function(sentence) {
    var newSentence = [];
    wordArray = sentence.split(" ");
    for (var word = 0; word< wordArray.length; word++) {
      newSentence.push(userWord(wordArray[word]));
    }
    return newSentence.join(" ");
  }
  $(document).ready(function() {
    $("form#pig-latin").submit(function(event) {
      event.preventDefault();
      var sentence = $("#sentence").val().toLowerCase();
      var final = translate(sentence);
      $(".results").text(final);
    });
  });
