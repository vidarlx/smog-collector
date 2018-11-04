import * as express from 'express';
import * as bodyParser from 'body-parser'
import reader from './reader';

const app = express();

app.set("port", process.env.PORT || 9099);
app.use(bodyParser.json());

app.post('/data', (req, res) => {
  const data = reader(req.body);
  res.send(data);
});

export default app;
