```tsx
import React from 'react';

const AdvancedNLG: React.FC = () => {
  const API_URL = "https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5";
  const headers = {"Authorization": "Bearer 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"};

  const query = async (payload: any) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
  }

  const handleQuery = async () => {
    const payload = {
      inputs: "Can you please let us know more details about your "
    };
    const output = await query(payload);
    console.log(output);
  }

  return (
    <div>
      <h1>Advanced NLG</h1>
      <button onClick={handleQuery}>Send Query</button>
    </div>
  );
}

export default AdvancedNLG;
```