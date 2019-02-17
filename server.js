const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'plc',
  password: 'password',
  port: 5432
});

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  pool.query ('Select * FROM heroes', (error, results) => {
    if(error) {
        throw error
    }
    res.status(200).json(results.rows)
})
  });
  app.post('/api/world', (req, res) => {
    console.log(req.body);
    const {name, lesson, nickname, questions } = {name: req.body.post.name, lesson: req.body.post.lesson, nickname: req.body.post.nickname, questions: req.body.post.questions}

    pool.query('INSERT INTO heroes (name, lesson, nickname, questions) VALUES ($1, $2, $3, $4)', [name, lesson, nickname, questions], (error, results) => {
      if (error) {
        throw error
      }
      res.send(
        `I received your POST request and added it to the Database. This is what you sent me: ${req.body.post.name}, ${req.body.post.lesson}, ${req.body.post.nickname}, ${req.body.post.questions}  `,
      );
    })
  });
  
  app.listen(port, () => console.log(`Listening on port ${port}`));