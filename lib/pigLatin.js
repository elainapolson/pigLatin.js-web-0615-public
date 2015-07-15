'use strict';

var pigLatin = function(english){
  var pigPhrase = [];
  var pigWord;
  english.split(' ').forEach(function(word){
    if(word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u") {
      pigPhrase.push(word + "ay");
    } else if(word[0] == "q" && word[1] == "u") {
      pigPhrase.push(word.slice(2) + word[0] + word[1] + "ay")
    } else if(word[0] == "c" && word[1] == "h"){
      pigPhrase.push(word.slice(2) + word[0] + word[1] + "ay") 
    } else if(word[0] == "t" && word[1] == "h" && word[2] == "r"){
      pigPhrase.push(word.slice(3) + word[0] + word[1] + word[2] + "ay") 
    } else if(word[1] == "q" && word[2] == "u") {
      pigPhrase.push(word.slice(3) + word[0] + word[1] + word[2] + "ay") 
    } else if(word[0] == "t" && word[1] == "h") {
      pigPhrase.push(word.slice(2) + word[0] + word[1] + "ay")
    } else if(word[0] == "s" && word[1] == "c" && word[2] == "h"){
      pigPhrase.push(word.slice(3) + word[0] + word[1] + word[2] + "ay") 
    } else {
      pigPhrase.push(word.slice(1) + word[0] + "ay")
    }
  })
  return pigPhrase.join(" ")
};