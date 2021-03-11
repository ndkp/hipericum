
 document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});


document.addEventListener('DOMContentLoaded', function() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'list', 'googleCalendar'],
      locale: 'ja',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listYear'
      },
      displayEventTime: false, 
      googleCalendarApiKey: 'AIzaSyBCSlo5E13JaKg_1T6bNeOVfHXC7DWdG-A',
      events: 'info.hipericum@gmail.com',
    });
    calendar.render();
  });
