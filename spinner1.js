let spins = ["\r|", "\r/", "\r-", "\r\\", "\r| \n"];
let interval = 0;

for (let spin of spins) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, interval += 100);
}
