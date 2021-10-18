const lenLastWord = str => {
  const arr = str.split(" ").filter(p => p.trim().length > 0);
  return arr[arr.length - 1].length;
};

console.log(lenLastWord("   fly me   to   the moon  "));
console.log(lenLastWord("Hello World"));
console.log(lenLastWord("luffy is still joyboy"));
