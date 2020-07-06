/*

2)Напишите скрипт на JS рассчитывающий сколько дней осталось до Рождеста по введенной дате.

*/
function daysLeft() {
  const input = document.getElementById("data");
  const output = document.getElementById("output");
  let str = input.value;
  const inputDate = new Date(str); //получаем введеную дату
  const insertedYear = inputDate.getFullYear(); //получаем год
  let christmas = insertedYear + "-12-25"; //образуем новую строку даты
  const date2 = new Date(christmas); //создаем дату рождества с введеным пользователем годом
  let milliseconds = date2.getTime() - inputDate.getTime(); //разницу в миллисекундах
  let daysLeftToCrist = milliseconds / (1000 * 3600 * 24); // конвертируем в дни

  output.innerHTML += daysLeftToCrist + " дня" + "<br/>";
  input.value = "";
  return null;
}
