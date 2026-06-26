
export const startListening = ({
  onResult,
  onError,
  onStart,
  onEnd,
}) => {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {

    if (onError) {
      onError(
        "Speech Recognition not supported"
      );
    }

    return;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-IN";

  recognition.continuous = false;

  recognition.interimResults = false;

  recognition.maxAlternatives = 1;

  recognition.onstart = () => {

    if (onStart) {
      onStart();
    }

  };

  recognition.onresult = (event) => {

    const transcript =
      event.results[0][0].transcript;

    if (onResult) {
      onResult(transcript);
    }

  };

  recognition.onerror = (event) => {

    if (onError) {
      onError(event.error);
    }

  };

  recognition.onend = () => {

    if (onEnd) {
      onEnd();
    }

  };

  recognition.start();
};