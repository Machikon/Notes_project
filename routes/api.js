const path = require('path');
const fs =  require('fs');
// const uniqid = require('uniqid');  //give unique id

module.exports = app =>{

// GET - read notes
app.get('/api/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, '../db/db.json'));
});

// POST - add notes
app.post('/api/notes', (req, res) => {

  const { title, text } = req.body;

  if (req.body) {
    const newNotes = {
      title,
      text,
      // id: uniqid() //unique id added here
    };

    readAndAppend(newNotes, 'db/db.json');
    res.json(`Notes added successfully 🚀`);
  } else {
    res.error('Error in adding notes');
  }
});

// GET read json file and return all saved notes
fb.get('/', (req, res) => {
  fs.readFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});
};

