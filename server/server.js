const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


const PORT = process.env.PORT || 8080;


app.get('/api', (req, res) => {
  res.json({ message: 'Hello from my ExpressJS' });
});


app.get('/api/myname', (req, res) => {
    const name = {name: "Ariel"};
    res.json(name);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});