function toWeirdCase(string){
  return string.split(" ").map(word =>                     // разбиваем на слова и обрабатываем каждое слово отдельно
      [...word].map((ch, i) =>
        i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
      ).join("")
    )
    .join(" ");                      // собираем обратно с пробелами
}

console.log(toWeirdCase("hello world"));
