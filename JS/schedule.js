
       document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          googleCalendarApiKey: 'AIzaSyBCSlo5E13JaKg_1T6bNeOVfHXC7DWdG-A',
          eventSources: [
            {
              googleCalendarId: 'info.hipericum@gmail.com'
            }
          ]
        });
        calendar.render();
      });
      
      
      $(document).ready(function() {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,listYear'
      },
      displayEventTime: false, 
      googleCalendarApiKey: 'AIzaSyBCSlo5E13JaKg_1T6bNeOVfHXC7DWdG-A',
      events: 'info.hipericum@gmail.com',
      eventClick: function(event) {
        // opens events in a popup window
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
      },
      loading: function(bool) {
        $('#loading').toggle(bool);
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {

    var calendar = new FullCalendar.Calendar(calendarEl, {
      firstDay: 1,
      headerToolbar: {
        left: "dayGridMonth,listMonth",
        center: "title",
        right: "today prev,next"
      },
      buttonText: {
        today: '今月',
        month: '月',
        list: 'リスト'
      },
    });
    //キャンバスにレンダリング
    calendar.render();
  });