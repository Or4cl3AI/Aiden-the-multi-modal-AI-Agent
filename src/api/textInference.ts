```typescript
import requests

const API_URL = "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5";
const headers = {
  "Authorization": "Bearer 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"
};

export const query = async (payload: any) => {
  const response = await requests.post(API_URL, { headers, json: payload });
  return response.json();
};

const output = await query({
  "inputs": "Can you please let us know more details about your "
});
```