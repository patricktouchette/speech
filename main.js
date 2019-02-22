window.SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  window.mozSpeechRecognition ||
  window.msSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "fr-CA";
recognition.interimResults = true;

console.log("recognition", recognition);

let p = document.createElement("p");
const words = document.querySelector(".words-container");
words.appendChild(p);

recognition.addEventListener("result", e => {
  const transcript = Array.from(e.results)
    .map(result => result[0].transcript)
    // .map(result => result.transcript)
    .join("");

  p.textContent = transcript;
  console.log(transcript);
  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }

  if (e.results[0].isFinal && transcript.includes("ok")) {
    alert("OK!!");
  }

  console.log(transcript);
});

recognition.addEventListener("end", recognition.start);

recognition.start();
