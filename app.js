import express from 'express';
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Viski',
    birthdate: '2001-12-04',
    weight: 10,
    owner: 'Nimo',
    image: 'https://loremflickr.com/320/240/cat'
  };
  res.json(cat)
});

app.use('/public', express.static('public'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
