require('dotenv').config();
const app = require('./src/app');
const connectToDb = require('./src/db/db');

connectToDb();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})