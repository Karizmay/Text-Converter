document.getElementById("upper-case").addEventListener ("click", toUpper);
document.getElementById("lower-case").addEventListener ("click", toLower);
document.getElementById("proper-case").addEventListener ("click", toUpperFirstCharInWords);
document.getElementById("sentence-case").addEventListener ("click", toUpperFirstWordInSentence);
document.getElementById("save-text-file").addEventListener ("click",saveFile);
document.getElementById("clear-text").addEventListener ("click",clearText);

function toUpper ()
{
    document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
}
function toLower ()
{
    document.getElementById("text").value = document.getElementById("text").value.toLowerCase();
}
function toUpperFirstChar (parameter)
{
    let text = document.getElementById("text").value;
    text = text.toLowerCase();
    let words = text.split (/([^А-яЁёA-z])/);
    words.forEach((el,i) => words[i] = toUpFirstLetterInStr(el));
    text = words.join("");
    document.getElementById("text").value = text;
}

function toUpperFirstWordInSentence () {
    let text = document.getElementById("text").value;
    text = text.toLowerCase();
    let sentences = text.split (/([.!?])/);
    sentences.forEach((el,i) => sentences[i] = toUpFirstLetterInStr(el));
    text = sentences.join("");
    document.getElementById("text").value = text;
}

function saveFile () {
    let textElement = document.createElement("a");
    textElement.setAttribute("href","data:text/plain;charset=utf-8,"
        + encodeURIComponent(document.getElementById("text").value));
    textElement.setAttribute("download", "text.txt");
    textElement.style.display = "none";
    document.body.appendChild(textElement);
    textElement.click();
    document.body.removeChild(textElement);
}

function clearText () {
    document.getElementById("text").value = null;
}
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}
function toUpFirstLetterInStr (str) {
    str =str.split("");
    for (let i = 0; i < str.length; i++) {
        if (isLetter (str [i])) {
            str [i] = str [i].toUpperCase();
            break;
        }
    }
    str = str.join("");
    return str;
}