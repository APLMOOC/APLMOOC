var METRICS_ENDPOINT = "https://apl.danii.fi/metrics/collect";

(function () {
  function send() {
    try {
      if (!window.fetch) return;
      var payload = JSON.stringify({
        p: location.pathname,
        r: document.referrer || null,
        w: window.innerWidth
      });
      fetch(METRICS_ENDPOINT, {
        method: "POST",
        body: payload,
        keepalive: true,
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=UTF-8" }
      }).catch(function () {});
    } catch (e) {
    }
  }

  if (typeof document$ !== "undefined" && document$ && document$.subscribe) {
    document$.subscribe(send);
  } else {
    send();
  }
})();
