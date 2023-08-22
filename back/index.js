import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Listening...");
});
