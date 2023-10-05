const findLargestWord = (sentence) => {
  return sentence
    .split(" ")
    .sort((a, b) => {
      if (b.length - a.length !== 0) {
        return b.length - a.length;
      }
      const vowelsCount = (word) => word.match(/[aeiou]/gi).length;
      return vowelsCount(b) - vowelsCount(a);
    })[0]
    .replace(/,/g, "");
};

const output = findLargestWord(
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
);
console.log(output);
