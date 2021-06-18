// TO FIX:
// Change CSS to fit 3 boxes on a row for most cases
// Refactor how DOM elements are created, create a function for it
// Add icons
// Create statistics based on the measurements
// Show milliseconds somehow
// Export measurements as csv or something
// Add categories in the browser

// Function for starting the chosen timer and stopping all the other timers
function toggleTimers(id) {
  for (let timer of timers) {
    if (id === timer.id) {
      timer.toggle();
    } else {
      timer.stop();
    }
  }
}

// Function for stopping all timers
function stopTimers() {
  for (let timer of timers) {
    timer.stop();
  }
}

// Function for reseting all timers
function resetTimers() {
  if (window.confirm("Vill du nollställa tidtagaruren? Du kan inte ångra det.")) {
    for (let timer of timers) {
      timer.reset();
    }
  }
}

// Adding keyboard shortcuts to the window
window.addEventListener('keydown', function(event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case ' ':
      stopTimers();
      break;
    case '1':
      toggleTimers(0);
      break;
    case '2':
      toggleTimers(1);
      break;
    case '3':
      toggleTimers(2);
      break;
    case '4':
      toggleTimers(3);
      break;
    case '5':
      toggleTimers(4);
      break;
    case '6':
      toggleTimers(5);
      break;
    case '7':
      toggleTimers(6);
      break;
    case '8':
      toggleTimers(7);
      break;
    case '9':
      toggleTimers(8);
      break;
    case '10':
      toggleTimers(9);
      break;
    case 'r':
    case 'R':
      resetTimers();
      break;
    case 'u':
    // case 'U':
    //   console.log("U is pressed");
    //   updateData();
    //   break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to window

let myChart = new Chart(
  document.getElementById('myChart'),
  config
);
