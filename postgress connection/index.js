import express from "express";
import { connection } from "./postgres/postgres.js";
import router from "./view/routes.js";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use(router);

connection();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
