src/firebase/firebase.ts:

```typescript
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Add your Firebase configuration here
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
```

Note: Please replace `// Add your Firebase configuration here` with your actual Firebase configuration.