function findMissing(list) {
  const n = list.length;
  if (n < 3) throw new Error("Массив должен содержать минимум 3 элемента");

  
  const d1 = list[1] - list[0];
  const d2 = list[2] - list[1];
  const d = (d1 === d2) ? d1 : list[n - 1] - list[n - 2]; // предполагаемая разность

  for (let i = 1; i < n - 1; i++) {
    const expected = list[i - 1] + d;
    if (list[i] !== expected) {
      return expected;
    }
  }

  return;
}
console.log(findMissing([-5,1,4,7]));
