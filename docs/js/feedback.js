var FEEDBACK_ENDPOINT = "https://apl.danii.fi/metrics/feedback";

(function () {
  function attach(form) {
    if (form.dataset.wired) return;
    form.dataset.wired = "1";

    var status = form.querySelector(".apl-feedback__status");
    var button = form.querySelector(".apl-feedback__send");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      button.disabled = true;
      status.textContent = "Sending…";

      fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify({
          s: form.dataset.section,
          u: location.href,
          e: form.querySelector(".apl-feedback__email").value,
          m: form.querySelector(".apl-feedback__message").value
        })
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          status.textContent = "Thanks!";
        } else {
          status.textContent = "Could not send.";
        }
        button.disabled = false;
      }).catch(function () {
        status.textContent = "Could not send.";
        button.disabled = false;
      });
    });
  }

  function wire() {
    var forms = document.querySelectorAll(".apl-feedback");
    for (var i = 0; i < forms.length; i++) attach(forms[i]);
  }

  if (typeof document$ !== "undefined" && document$ && document$.subscribe) {
    document$.subscribe(wire);
  } else {
    wire();
  }
})();
