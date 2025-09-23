function hasTwoCubeSums(n) {
  const seen = new Set();
  let count = 0;

  for (let a = 1; a * a * a < n; a++) {
    let aCubed = a ** 3;
    let bCubed = n - aCubed;
    let b = Math.round(Math.cbrt(bCubed));

    if (b > 0 && b !== a && b ** 3 === bCubed) {
      // Чтобы избежать дубликатов (например, (a,b) и (b,a)), сортируем пару
      const key = [Math.min(a, b), Math.max(a, b)].join(',');

      if (!seen.has(key)) {
        seen.add(key);
        count++;
        if (count >= 2) return true;
      }
    }
  }

  return false;
}
