
let coinFlip;
let numTimesRun = prompt("How many times do you want to flip a coin?")

for (let i = 0; i < numTimesRun; i++) {
    coinFlip = Math.round(Math.random())
    //console.log(`random num is ${coinFlip}`)
    if (coinFlip == 0) {
      console.log("Heads")
    } else {
      console.log("Tails")
    }
  }

  