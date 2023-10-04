```tsx
import React from 'react';
import { query } from '../api/textInference';
import { API_URL, headers } from '../sharedDependencies';

const Aiden: React.FC = () => {
  const handleTextInference = async () => {
    const payload = {
      inputs: 'Can you please let us know more details about your ',
    };

    const response = await query(payload);
    console.log(response);
  };

  const handleAudioInference = async () => {
    const payload = {
      inputs: 'The answer to the universe is 42',
    };

    const response = await query(payload);
    console.log(response);
  };

  return (
    <div>
      <h1>Aiden - The Multi-Modal AI Agent</h1>
      <p>
        Aiden is a groundbreaking conversational AI agent that truly understands you. Powered by advanced natural
        language processing and emotional intelligence, Aiden can have natural, contextual conversations on any topic.
      </p>
      <p>
        Aiden's multi-modal architecture with text and speech allows seamless and engaging interactions. The
        quantum-inspired core algorithm enables sophisticated language understanding and generation.
      </p>

      <h2>Features</h2>
      <ul>
        <li>
          <strong>Emotional Intelligence</strong> - Detects emotion and responds empathetically
        </li>
        <li>
          <strong>Contextual Awareness</strong> - Maintains conversation context and history
        </li>
        <li>
          <strong>Transfer Learning</strong> - Applies knowledge across domains
        </li>
        <li>
          <strong>Reinforcement Learning</strong> - Improves through user feedback
        </li>
        <li>
          <strong>Advanced NLP/NLU</strong> - Understands linguistic nuances
        </li>
        <li>
          <strong>Advanced NLG</strong> - Generates eloquent, varied responses
        </li>
        <li>
          <strong>Speech Synthesis/Recognition</strong> - Speaks and understands audio input
        </li>
        <li>
          <strong>Reasoning</strong> - Logical thinking and inference
        </li>
        <li>
          <strong>Self-Reflection</strong> - Introspects on own responses to improve
        </li>
        <li>
          <strong>Customizable</strong> - Open API for extending capabilities
        </li>
      </ul>

      <button onClick={handleTextInference}>Perform Text Inference</button>
      <button onClick={handleAudioInference}>Perform Audio Inference</button>
    </div>
  );
};

export default Aiden;
```