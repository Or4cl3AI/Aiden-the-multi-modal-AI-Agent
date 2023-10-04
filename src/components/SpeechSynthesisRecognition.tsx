```tsx
import React, { useState } from 'react';

const SpeechSynthesisRecognition: React.FC = () => {
  const [text, setText] = useState('');

  const handleSpeechRecognition = () => {
    const recognition = new SpeechRecognition();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.start();
  };

  const handleSpeechSynthesis = () => {
    const synthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    synthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={handleSpeechRecognition}>Start Speech Recognition</button>
      <button onClick={handleSpeechSynthesis}>Start Speech Synthesis</button>
      <p>Text: {text}</p>
    </div>
  );
};

export default SpeechSynthesisRecognition;
```