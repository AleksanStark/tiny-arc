export function getAllDaysInMonth(month: number, year: number): Array<Date> {
  const date = new Date(year, month, 1);

  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
