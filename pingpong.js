// Problem: Print numbers from 1 to 20 with "Ping" for multiples of 3, "Pong" for multiples of 5, and "PingPong" for multiples of both.

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

// Run
pingPong();
