// Timing Is Everything

class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
    
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    
    this.seconds += 1;

    if (this.seconds >= 60) {
      this.minutes += 1;
      this.seconds = 0;

      if (this.minutes >= 60) {
        this.hour += 1;
        this.minutes = 0;
      }
    } 
    
    this.printTime();
  }
};

// const clock = new Clock();


// addNumbers
// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Enter a number", function (answer) {
      const parsed = parseInt(answer);
      sum += parsed;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback)
      reader.close();
    })
  } else if (numsLeft === 0) {
    completionCallback(sum);
  }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// Absurd Bubble Sort


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`${el1} > ${el2}`, function(answer) {
      if (answer === "yes") {
        callback(true);
      } else if (answer === "no") {
        callback(false);
      }
  })
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
debugger;
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (booleanVal) {
      if (booleanVal === true) {
        let currentNum = arr[i];
        let nextNum = arr[i + 1]
        
        arr[i] = nextNum;
        arr[i + 1] = currentNum;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
    })
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === false) {
        sortCompletionCallback(arr);
    } else {
        innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1, 5], function (arr)  {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

// askIfGreaterThan(2, 4, function(booleanVar) {
//     if (booleanVar === true) {
//         console.log("It was true.");
//     } else {
//         console.log("It was false.");
//     }
// });

// function outerLoop(x) {
//   console.log("outer bubble sort loop");
// };

// innerBubbleSortLoop([5, 1, 4, 6], 0, false, outerLoop);


// My Bind

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function (x, y) {
  console.log("Turning on " + this.name + x + y);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

Function.prototype.myBind = function(context, ...args) {
  console.log(args);
  
  return () => this.apply(context, args);
}

// const boundTurnOn = turnOn.bind(lamp, 'fad', 'fdafd');
// const myBoundTurnOn = turnOn.myBind(lamp, 'fad', 'fdafd');

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"



// My Throttle


Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;

  return () => {
    if (!tooSoon) {
      tooSoon = true;

      setTimeout(function() {
        tooSoon = false
      }, 500);

      this();
    }
  }
}

class Neuron {
  fire() {
    console.log("Firing!");
  }
}

// const neuron = new Neuron();

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// neuron.fire = neuron.fire.myThrottle(500);


// My Debounce

Function.prototype.myDebounce = function (interval) {
    let invoked = false;

    if (invoked === true) {
        
    }
}