const express = require('express');
const path = require('path');
const cors  = require('cors');
const models = require('./../database/model.js');

const app = express();

const publicFolder = path.join(__dirname, '/../public');
app.use(express.json(), express.urlencoded({ extended: true }), cors());
app.use(express.static(publicFolder));
app.use('/projects/*', express.static(publicFolder));

app.get('/support/:id', (req, res) => {
  const projectId = req.params.id;
  models.queryOne(projectId, (err, pledgeList) => {
    if (err) {
      return console.error(err);
    }
    return res.send(pledgeList[0]);
  });
});

app.get('/', (req, res) => {
  res.send('');
});

app.post('/', (req, res) => {
  res.send('Nothing was posted');
});


app.listen(3003, () => {
  console.log('server is listening at port 3003');
});
