const characters = ["|", "/", "-", "\\", "|", "-", "\\", "|", "\n"];
let delay = 0;

for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay);
  delay += 200;
}
