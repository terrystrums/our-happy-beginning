// Set the start date (in milliseconds since 1970)
const startDate = new Date("2022-11-04T00:00:00").getTime();

// Update the timer every second
const timer = setInterval(function() {

  // Get the current date and time (in milliseconds since 1970)
  const now = new Date().getTime();

  // Calculate the time elapsed (in milliseconds)
  const timeElapsed = now - startDate;

  // Calculate the days elapsed
  const daysElapsed = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

  // Format the elapsed days and display it on the page
  document.getElementById("count").innerHTML = `Its been ${daysElapsed} days since ${new Date(startDate).toDateString()}`;
}, 1000);
