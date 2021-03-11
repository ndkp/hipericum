document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      googleCalendarApiKey: 'AIzaSyBCSlo5E13JaKg_1T6bNeOVfHXC7DWdG-A',
      eventSources: [
        {
          googleCalendarId: 'nfo.hipericum@gmail.com'
        }
      ]
    });
    calendar.render();
  });