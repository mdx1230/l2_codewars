function howManyTimes(time1, time2) {
  const start = new Date(time1); // создаёт объект времени
  const end = new Date(time2);
  let time = new Date(start);
  let count = 0;
  while (time < end) {
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if (minute === 0 && second < 12) {
      let hour1 = hour % 12;
      if (hour1 === 0) {
        hour1 = 12;
      }
      if (second < hour1) {
        count++;
      }
    }
    if (minute === 30 && second === 0) {
      count++;
    }
    time.setSeconds(time.getSeconds() + 1);
  }
  return count;
}
