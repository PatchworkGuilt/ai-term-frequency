You can play with a working version of this project [here](https://patchworkguilt.github.io/ai-term-frequency).

To build and run locally:
```
npm install
npm start
```

The source code is found in the `src` directory.  The calculation of TF is split between `src/Services/Documents.js` (where we take a text blob and convert it to a dictionary of words:=>wordFrequency, and `src/Reducers/Documents.js` (where we take that dictionary and merge it into our global state, which has the master dictionary of word:=>document-with-highest-tf)

UI boilerplate generated from the wonderful [Create React App](https://github.com/facebookincubator/create-react-app)).