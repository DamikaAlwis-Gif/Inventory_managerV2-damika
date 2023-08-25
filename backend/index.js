// to import export add "type":"module"
// without nodemon => node index.js  and to run it again kill the connection
// alter user "root" @ "localhost" identified with mysql_native_password by "damika";
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'damika';

import express from "express";
const app = express();
import resourceRouter from "./routes/resource.js";
import cors from "cors";

app.use(express.json());
app.use(cors());
app.listen(8800, () => {
  console.log("Connected to backend!");
});

app.get("/", (req, res) => {
  res.json("Hello this is backend");
});
app.use("/resources", resourceRouter);