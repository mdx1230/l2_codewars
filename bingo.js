function bingo(ticket, win){
let count = 0;

  for (let [str, code] of ticket) {
    // проверяем, есть ли хотя бы один символ с нужным кодом
    if ([...str].some(ch => ch.charCodeAt(0) === code)) {
      count++;
    }
  }

  return count >= win ? "Winner!" : "Loser!";
}
