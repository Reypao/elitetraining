document.addEventListener('DOMContentLoaded', function () {

  const calendarEl = document.getElementById('trainingCalendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'en', 

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },

    events: [
      {
        title: 'CPR Certification',
        date: '2026-06-10'
      },
      {
        title: 'First Aid Training',
        date: '2026-06-15'
      },
      {
        title: 'Phlebotomy Course',
        date: '2026-06-22'
      }
    ]
  });

  calendar.render();

});