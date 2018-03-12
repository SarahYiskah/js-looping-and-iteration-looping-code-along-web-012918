// Code your solutions in this file
function printBadges(employeeNames) {
  for(let i = 0; i < employeeNames.length; i++) {
    console.log(`Welcome ${employeeNames[i]}! You are employee #${i+1}.`)
  }
  return employeeNames
}

function headsOrTails() {
  const coin = ["heads", "tails"]
  if (coin[Math.floor(Math.random() * coin.length)] === "tails") {
    return true
  } else {
    return false
  }
}


function tailsNeverFails() {
  let count = 0;
  while (headsOrTails()) {
    count++;
  }
  return `You got ${count} tails in a row!`;
}
