import express from "express";
import bodyParser from 'body-parser';

import { Instagram } from "./controllers/instagram-controller";
import { LOGIN_ROUTE, FEED_ROUTE, AUTH_ROUTE } from "./config/routes";

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(LOGIN_ROUTE, Instagram.login);
app.post(AUTH_ROUTE, Instagram.getToken);
app.get(FEED_ROUTE, Instagram.getPosts);
