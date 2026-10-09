const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express! Running under PM2.\n\
    Testing Render system to see if app still runs.');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/crash', (req, res) => {
  setTimeout(() => {
    throw new Error('Simulated crash');
  }, 100);
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
