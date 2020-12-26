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
    notes: "start of workday"
  },
  {
    id: "1",
    hour: "09",
    time: "09",
    ampm: "am",
    notes: ""
  },
  {
    id: "2",
    hour: "10",
    time: "10",
    ampm: "am",
    notes: ""
  },
  {
    id: "3",
    hour: "11",
    time: "11",
    ampm: "am",
    notes: ""
  },
  {
    id: "4",
    hour: "12",
    time: "12",
    ampm: "pm",
    notes: "noon time"
  },

  // time will be using 24-hour format while display time will be using AM/PM
  {
    id: "5",
    hour: "01",
    time: "13",
    ampm: "pm",
    notes: ""
  },
  {
    id: "6",
    hour: "02",
    time: "14",
    ampm: "pm",
    notes: ""
  },
  {
    id: "7",
    hour: "03",
    time: "15",
    ampm: "pm",
    notes: ""
  },
  {
    id: "8",
    hour: "04",
    time: "16",
    ampm: "pm",
    notes: ""
  },
  {
    id: "9",
    hour: "05",
    time: "17",
    ampm: "pm",
    notes: "closing of workday"
  }
]

// console log the hour value from index 8 of the array
// console.log(myDay[8].hour);

myDay.forEach(function(thisHR){
  // this is the hour row in the container div class
  const hourRow = $('<form>').attr({'class': 'row'});
  $('.container').append(hourRow);

  const hourEl = $('<div>').text(`${thisHR.hour}${thisHR.ampm}`).attr({'class': 'col-md-2 hour'});

  const hourDesc = $('<div>').attr({'class': 'col-md-9 description'});
  const hourDescText = $('<textarea>');
  hourEl.append(hourDesc);
  hourDesc.append(hourDescText);
  hourDescText.attr('id', thisHR.id);
  hourDescText.attr({'class': 'future'});

  // create if loops for past, present, future class here
  
  // this is the save button
  const saveBtn = $("<i class='far fa-save fa-lg'></i>");
  const saveArea = $('<button>').attr({'class': 'col-md-1 saveBtn'});
  saveArea.append(saveBtn);

  hourRow.append(hourEl, hourDesc, saveArea);
})

function start() {
  const storedEvents = JSON.parse(localStorage.getItem('myDay'));
  if (storedEvents) {
    myDay = storedEvents;
  }
  // console.log(storedEvents);
  saveNotes();
  displayNotes();
}

function saveNotes() {
  localStorage.setItem('myDay', JSON.stringify(myDay));
}

// function to add the notes to the description
function displayNotes() {
  myDay.forEach(function (thisNote) {
      $(`#${thisNote.id}`).val(thisNote.notes);
  })
}



start();