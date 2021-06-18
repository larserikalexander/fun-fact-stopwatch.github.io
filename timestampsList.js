class ListOfTimestamps {
  timestamps = [];

  constructor(timeDOM, btnDOM, id) {
    this.timeDOM = timeDOM;
    this.btnDOM = btnDOM;
    this.id = id;
    this.localStorageFilename = 'timestamps' + this.id;

    this.get();
    this.show();
    this.setIsRunning();
    this.update();
  }

  // Method for adding a timestamp
  add() {
    const ts = Date.now();
    this.get();
    this.timestamps.push(ts);
    this.setIsRunning();
    this.show();
    this.set();
  }

  setIsRunning() {
    if (this.timestamps.length % 2 == 0) {
      this.isRunning = false;
    } else {
      this.isRunning = true;
      console.log("Stopwatch " + this.id + " is running!");
    }
  }

  // Method for showing the total time in the browser. This might go in a DOM class instead
  show() {
    let measuredTime = new Date(null);
    measuredTime.setSeconds(this.count());
    let totalTime = measuredTime.toISOString().substr(11, 8);

    this.timeDOM.innerHTML = totalTime;
    updateData();
  }

  // Method for running show every 1000 ms to update time every second
  update() {
    this.IntervalId = setInterval(this.show.bind(this), 1000);
  }

  // Method for counting the total time the stopwatch has been active
  count() {
    let time = 0;
    const index = this.timestamps.length - 1;
    for (let i = 0; i <= index; i++) {
      // True if the index stores a stopping timestamp
      if (i % 2 !== 0) {
        time += (this.timestamps[i] - this.timestamps[i - 1]); // Adds time between start and stop
      } else if (i == index) {
        const now = Date.now();
        const latest = this.timestamps[index];
        time += (now - latest);
      }
    }
    time = Math.floor(time / 1000); // Converts from milliseconds to floored seconds
    return time;
  }

  // Method for getting the timestamps data from local storage in the web browser
  get() {
    const sTimestamps = localStorage.getItem(this.localStorageFilename);
    if (sTimestamps) {
      this.timestamps = JSON.parse(sTimestamps);
    } else {
      // console.log("Couldn't get the timestamps file from localStorage for stopwatch " + this.id);
    }
  }

  // Method for storing the timestamps data in local storage in the web browser
  set() {
    const sTimestamps = JSON.stringify(this.timestamps);
    localStorage.setItem(this.localStorageFilename, sTimestamps);
  }

  // Method for resetting the stopwatch
  reset() {
    localStorage.removeItem(this.localStorageFilename);
    this.timestamps = [];
    this.show();
    this.setIsRunning();
  }
}
