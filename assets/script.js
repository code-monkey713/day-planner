function getCurrentDate() {
  let currentDate = moment().format('MMMM Do YYYY, h:mma');
  $('#currentDay').text(currentDate);
}

getCurrentDate();

// array of objects for each time slot
let myDay = [
  {
    id: '0',
    hour: '08',
    time: '08',
    ampm: 'am',
    notes: 'You are awesome!',
  },
  {
    id: '1',
    hour: '09',
    time: '09',
    ampm: 'am',
    notes: '',
  },
  {
    id: '2',
    hour: '10',
    time: '10',
    ampm: 'am',
    notes: '',
  },
  {
    id: '3',
    hour: '11',
    time: '11',
    ampm: 'am',
    notes: '',
  },
  {
    id: '4',
    hour: '12',
    time: '12',
    ampm: 'pm',
    notes: '',
  },

  // time will be using 24-hour format so it can be calculated easier while display time will be using AM/PM
  {
    id: '5',
    hour: '01',
    time: '13',
    ampm: 'pm',
    notes: '',
  },
  {
    id: '6',
    hour: '02',
    time: '14',
    ampm: 'pm',
    notes: '',
  },
  {
    id: '7',
    hour: '03',
    time: '15',
    ampm: 'pm',
    notes: '',
  },
  {
    id: '8',
    hour: '04',
    time: '16',
    ampm: 'pm',
    notes: '',
  },
  {
    id: '9',
    hour: '05',
    time: '17',
    ampm: 'pm',
    notes: '',
  },
];

// this is to draw the hourly time slots
myDay.forEach(function (thisHR) {
  const hourRow = $('<div>').attr({ class: 'row time-block' });
  $('.container').append(hourRow);

  const hourEl = $('<div>')
    .text(`${thisHR.hour}${thisHR.ampm}`)
    .attr({ class: 'col-sm-12 col-md-2 hour' });

  const hourDesc = $('<div>').attr({ class: 'col-sm-12 col-md-9 description' });
  const hourDescText = $('<textarea>');
  hourEl.append(hourDesc);
  hourDesc.append(hourDescText);
  hourDescText.attr('id', thisHR.id);

  // this sets the color code for past, present, future event text element
  if (thisHR.time < moment().format('HH')) {
    hourDescText.attr({ class: 'past' });
  } else if (thisHR.time === moment().format('HH')) {
    hourDescText.attr({ class: 'present' });
  } else if (thisHR.time > moment().format('HH')) {
    hourDescText.attr({ class: 'future' });
  }

  // this is the save button
  const saveBtn = $("<i class='far fa-save fa-lg'></i>");
  const saveArea = $('<button>').attr({ class: 'col-sm-12 col-md-1 saveBtn' });
  saveArea.append(saveBtn);

  hourRow.append(hourEl, hourDesc, saveArea);
});

// this starts the app and any events saved from local storage
function start() {
  const storedEvents = JSON.parse(localStorage.getItem('myDay'));
  if (storedEvents) {
    myDay = storedEvents;
  }
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
  });
}

// function for save event button
$('.saveBtn').on('click', function (event) {
  event.preventDefault();
  const clickIndex = $(this).siblings('.description').children().attr('id');
  myDay[clickIndex].notes = $(this).siblings('.description').children().val();
  saveNotes();
  displayNotes();
});

start();
