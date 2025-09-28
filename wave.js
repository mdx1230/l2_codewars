function wave(str){
  const arr = [];
  const lower = str.toLowerCase();    

  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === " ") continue; 

    // формируем новую строку с i-й буквой в верхнем регистре
    const waveWord =
      lower.slice(0, i) +lower[i].toUpperCase() +lower.slice(i + 1);

    arr.push(waveWord);
  }

  return arr;
}
