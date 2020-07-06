/*

3)Напишите скрипт на JS достраивающий до минимально возможного палиндрома, добавляя необходимые символы в конец строки.

палиндром образуется по следующему принципу - слово долно получиться ПОЛНОСТЬЮ СИММЕТРИЧНЫМ 

abcddc   ->   abcdc+ba   -> abcd|dcba
122    ->   122+1   ->    12|21

вход:
abcddc   
122

выход:
abcddcba
1221

*/

function palindrome() {
  const input = document.getElementById("text");
  const output = document.getElementById("output");
  let str = input.value;
  let append = "";
  let copy = str;
  copy = copy.split("");
  //логика проста если не палиндром избавляемся от первых букв и проверяем остаток и проверяем остаток
  //храним буквы в переменной append
  //если остаток палиндром к оригинальной строке добавляем накопленный append перевернутый
  for (let i of str) {
    if (checkPalindrome(copy.join(""))) {
      const result = [str + append.split("").reverse().join(""), append.length];
      output.innerHTML +=
        result[0] + " " + result[1] + " - количество доб букв<br/>";
      input.value = "";
      return result;
    } else {
      append += copy.shift();
    }
  }
}

function checkPalindrome(str) {
  return str === str.split("").reverse().join("");
}
