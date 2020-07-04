import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/categories', (req, res) => {
  const categories = [
    'beaches',
    'birds',
    'food',
    'mountain',
  ];
  return res.status(200).json(categories);
});

app.listen(port, () => console.log(`SnapShot API listening on port ${port}!`));
