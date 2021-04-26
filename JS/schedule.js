
  document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'listMonth,dayGridMonth',
            color: 'yellow',   // an option!
            textColor: 'black' // an option!
          },
          googleCalendarApiKey: 'AIzaSyBCSlo5E13JaKg_1T6bNeOVfHXC7DWdG-A',
          eventSources: [
            {
              googleCalendarId: 'info.hipericum@gmail.com'
            }
          ]
        });
        
        calendar.render();
      });
      


      
