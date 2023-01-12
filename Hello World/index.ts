const text = document.getElementById("text") as HTMLElement;

const word = "World";
const anotherWord = 1;
const x = true;

function greeting(word: string) {
    text.innerText += `Hello ${word}!`;
}

greeting(word);
// greeting(anotherWord);
// greeting(x);