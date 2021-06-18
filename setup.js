// TO FIX:
// Change CSS to fit 3 boxes on a row for most cases
// Refactor how DOM elements are created, create a function for it
// Add icons
// Create statistics based on the measurements
// Show milliseconds somehow
// Export measurements as csv or something
// Add categories in the browser

function updateData() {
  _data = [];
  for (timer of timers) {

    // let measuredTime = new Date(null);
    // measuredTime.setSeconds(timer.tsList.count());
    // let temp = measuredTime.toISOString().substr(11, 8);
    // _data.push(temp);

    _data.push(timer.tsList.count());
  }
  if (myChart.update) {
    data.datasets[0].data = _data;
    myChart.update();
  }
}
// Enter the categories you want to measure time for. The keyboard shortcuts only work for the first 10 categories.

let categories = ["Handläggning", "Hämta akt", "Hämta handlingar", "Leta handlingar", "Diskutera med kollega", "Övrigt"];
// let categories = ["Handläggning", "Hämta akt", "Kategori 3"];

let _data = []



let numberOfTimers = categories.length;

let timers = [];

// Create timers by adding categories at the top of this file
for (i = 0; i < numberOfTimers; i++) {
  timers.push(new Timer(i, categories[i]));
}
