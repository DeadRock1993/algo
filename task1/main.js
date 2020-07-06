/*
В каком виде хотелось бы получить решение каждой заачи:

напишите для каждой задачи HTML страницу, на которой запускается скрипт, который запрашивает ввод входных данных и отображающий ответ.
*данные из серии вводятся по одному, по очереди а не скопом. 

1)Напишите скрипт на JS, заменяющий каждую букву в строке на другую букву на следующую по алфавиту.

LetterCh("PYTHON");
LetterCh("W3R");
LetterCh("php");

Output:

QZUIPO
X4S
qIq

*/
function LetterCh() {
  let input = document.getElementById("text");
  let output = document.getElementById("output");
  let str = input.value;
  str = str.split("");
  let newStr = "";
  for (let i of str) {
    //case for uppercase
    if (i.charCodeAt() >= 65 && i.charCodeAt() < 90) {
      newStr += String.fromCharCode(i.charCodeAt() + 1);
    } //case for Z
    else if (i.charCodeAt() === 90) {
      newStr += String.fromCharCode(i.charCodeAt() - 25);
    } //case for lowercase
    else if (i.charCodeAt() >= 97 && i.charCodeAt() < 122) {
      newStr += String.fromCharCode(i.charCodeAt() + 1);
    } //case for z
    else if (i.charCodeAt() === 122) {
      newStr += String.fromCharCode(i.charCodeAt() - 25);
    } //case for numbers
    else if (!isNaN(parseInt(i))) {
      newStr += +i + 1;
    } else {
      newStr += i;
    }
  }
  output.innerHTML += newStr + "<br/>";
  input.value = "";
  return newStr;
}
