var text = document.getElementById("text");
var word = "World";
var anotherWord = 1;
var x = true;
function greeting(word) {
    text.innerText += "Hello ".concat(word, "!");
}
greeting(word);
// greeting(anotherWord);
// greeting(x);
