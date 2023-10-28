const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function dateText(date, string) {
  const cDate = new Date(date);
  let newString = string;

  newString = newString.replace("{year}", cDate.getFullYear());
  newString = newString.replace("{month}", cDate.getMonth() + 1);
  newString = newString.replace("{month_name}", months[cDate.getMonth()]);
  newString = newString.replace("{day}", cDate.getDate());
  newString = newString.replace("{hours}", cDate.getHours());
  newString = newString.replace("{minutes}", cDate.getMinutes());
  newString = newString.replace("{seconds}", cDate.getSeconds());

  return newString;
}