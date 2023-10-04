```javascript
// Import the required dependencies
const fetch = require('node-fetch');

// Define the query function to send requests to the inference endpoint
async function query(data) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/or4cl3ai/Aiden_t5',
    {
      headers: { Authorization: 'Bearer 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' },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  return result;
}

// Send a query to the inference endpoint and log the response
query({ inputs: 'Can you please let us know more details about your ' }).then((response) => {
  console.log(JSON.stringify(response));
});

// Define another query function to send requests to a different inference endpoint
async function querySoundSlayerAI(data) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/or4cl3ai/SoundSlayerAI',
    {
      headers: { Authorization: 'Bearer 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' },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  return result;
}

// Send another query to the SoundSlayerAI inference endpoint and log the response
querySoundSlayerAI({ inputs: 'The answer to the universe is 42' }).then((response) => {
  console.log(JSON.stringify(response));
});
```

Note: The code assumes that you are using Node.js and have the `node-fetch` package installed to make HTTP requests.