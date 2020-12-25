// function to get the current date amd time
function getCurrentDate() {
  let currentDate = moment().format('MMMM Do YYYY, h:mma');
  $("#currentDay").text(currentDate);
}

getCurrentDate();

// array of objects for each time slot
let myDay = [
  {
    id: "0",
    hour: "08",
    time: "08",
    ampm: "am",
    reminder: ""
  },
  {
    id: "1",
    hour: "09",
    time: "09",
    ampm: "am",
    reminder: ""
  },
  {
    id: "2",
    hour: "10",
    time: "10",
    ampm: "am",
    reminder: ""
  },
  {
    id: "3",
    hour: "11",
    time: "11",
    ampm: "am",
    reminder: ""
  },
  {
    id: "4",
    hour: "12",
    time: "12",
    ampm: "pm",
    reminder: ""
  },

  // time will be using 24-hour format while display time will be using AM/PM
  {
    id: "5",
    hour: "01",
    time: "13",
    ampm: "pm",
    reminder: ""
  },
  {
    id: "6",
    hour: "02",
    time: "14",
    ampm: "pm",
    reminder: ""
  },
  {
    id: "7",
    hour: "03",
    time: "15",
    ampm: "pm",
    reminder: ""
  },
  {
    id: "8",
    hour: "04",
    time: "16",
    ampm: "pm",
    reminder: ""
  },
  {
    id: "9",
    hour: "05",
    time: "17",
    ampm: "pm",
    reminder: ""
  }
]

console.log(myDay[8]);