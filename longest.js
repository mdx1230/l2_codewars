function longest(arr, n) {
  if(!Array.isArray(arr)||n<1) return null;
  const sorted=arr.map((str, idx) => ({ str, idx }))       // запоминаем исходный индекс
    .sort((a, b) => {
      if (b.str.length !== a.str.length) {
        return b.str.length - a.str.length;  // сначала по длине
      }
      return a.idx - b.idx;                  // при равной длине — по исходному порядку
    })
    return sorted[n - 1]?sorted[n-1].str:null;                    // возвращаем строку
}
