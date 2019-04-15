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

app.get('/api/people', (req, res) => {
  pool.query ('Select * FROM people_of_promise as p ORDER BY p.displaydate ASC', (error, results) => {
    if(error) {
        throw error
    }
    res.status(200).json(results.rows)
})
  });

  app.post('/api/onePerson', (req, res) => {
    const {date} = {date: req.body.date.date}
    pool.query ('Select * FROM people_of_promise as p WHERE p.displaydate = $1', [date], (error, results) => {
      if(error) {
          throw error
      }
      res.status(200).json(results.rows[0])
  })
    });

  app.post('/api/addPerson', (req, res) => {
    const {name, nickname, title, intro, scripture, citation, prayer, date} = {name: req.body.postPerson.name, nickname: req.body.postPerson.nickname, title: req.body.postPerson.title, intro: req.body.postPerson.intro, scripture: req.body.postPerson.scripture, citation: req.body.postPerson.citation, prayer: req.body.postPerson.prayer, date: req.body.postPerson.date};

    pool.query('UPDATE people_of_promise AS p SET bname = $1, nickname = $2, title = $3, intro = $4, scripture = $5, citation = $6, prayer = $7 WHERE p.displaydate = $8', [name, nickname, title, intro, scripture, citation, prayer, date], (error, results) => {
      if (error) {
        throw error
      }
      res.send(
        `I received your POST request and added it to the Database. This is what you sent me:`,
      );
    })
  });

  app.post('/api/deletePerson', (req, res) => {

    console.log(req.body.name)

    const {name, nickname, title, intro, scripture, citation, prayer, nameToSend} = {name: null, nickname: null, title: null, intro: null, scripture: null, citation: null, prayer: null, nameToSend: req.body.name};

    pool.query('UPDATE people_of_promise AS p SET bname = $1, nickname = $2, title = $3, intro = $4, scripture = $5, citation = $6, prayer = $7 WHERE p.bname = $8', [name, nickname, title, intro, scripture, citation, prayer, nameToSend], (error, results) => {
      if (error) {
        throw error
      }
      res.send(
        `I received your POST request and added it to the Database. This is what you sent me:`,
      );
    })
  });

  app.post('/api/checkUser', (req, res) => {
    const username = 'plcchurch';
    const password = 'godislove';
  
    if(req.body.postUser.user == username && req.body.postUser.password == password) {
      res.status(200).send(true)
    } else {
      res.status(200).send(false)
    }

  });

  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  app.listen(port, () => console.log(`Listening on port ${port}`));