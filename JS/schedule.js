
  document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'listMonth,dayGridMonth',
          },
          googleCalendarApiKey: 'AIzaSyBCSlo5E13JaKg_1T6bNeOVfHXC7DWdG-A',
          eventSources: [
            {
              googleCalendarId: 'info.hipericum@gmail.com',
              backgroundColor: "#F3F5F7",
            }
          ]
        });
        
        calendar.render();
      });
      


      
