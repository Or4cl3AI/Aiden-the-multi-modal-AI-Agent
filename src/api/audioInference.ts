```typescript
import requests

const API_URL = "https://api-inference.huggingface.co/models/or4cl3ai/SoundSlayerAI";
const headers = {
  "Authorization": "Bearer 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"
};

export const query = (payload: any) => {
  const response = requests.post(API_URL, { headers, json: payload });
  return response.json();
};

export const audioInference = () => {
  const payload = {
    "inputs": "The answer to the universe is 42"
  };

  const output = query(payload);
  return output;
};
```