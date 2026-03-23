document.addEventListener("DOMContentLoaded", function () {

  const calendarEl = document.getElementById("trainingCalendar");

  const events = [
    {
      title: "CPR Certification",
      start: "2026-06-10",
      location: "Salt Lake City",
      modal: "cprModal",
      color: "#c62828"
    },
    {
      title: "First Aid Training",
      start: "2026-06-15",
      location: "West Jordan",
      modal: "firstAidModal",
      color: "#2e7d32"
    },
    {
      title: "Phlebotomy Course",
      start: "2026-06-22",
      location: "Salt Lake City",
      modal: "phlebotomyModal",
      color: "#1565c0"
    }
  ];

  const calendar = new FullCalendar.Calendar(calendarEl, {

    initialView: "dayGridMonth",

    events: events.map(e => ({
      title: e.title,
      start: e.start,
      backgroundColor: e.color,
      borderColor: e.color,
      extendedProps: {
        location: e.location,
        modal: e.modal
      }
    })),

    eventClick: function (info) {

      const modalId = info.event.extendedProps.modal;
      const modal = document.getElementById(modalId);

      if (modal) {
        const form = modal.querySelector("form");

        // Inject selected date
        let dateInput = form.querySelector("input[name='date']");
        if (!dateInput) {
          dateInput = document.createElement("input");
          dateInput.type = "hidden";
          dateInput.name = "date";
          form.appendChild(dateInput);
        }

        dateInput.value = info.event.start.toDateString();

        modal.showModal();
      }
    }

  });

  calendar.render();

});

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "a2b1df0f-13a0-4ab2-a24d-e721e9476dfc");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});