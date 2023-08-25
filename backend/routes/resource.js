import express from "express";
import db from "../dataBase/db.js";

const resourceRouter = express.Router();

resourceRouter.get("/", (req, res) => {
  const q = "SELECT * FROM adminView;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    else return res.json(data);// sends a json responce
  });
});

resourceRouter.get("/:id", (req, res) => {
  const resource_id = req.params.id;
  const q = "SELECT * FROM resource WHERE Resource_ID = ? ;";
  db.query(q,[resource_id] ,(err, data) => {
    if (err) return res.json(err);
    else return res.json(data); 
  });
});

resourceRouter.delete("/:id" , (req, res) => {
  const resource_id = req.params.id;
  const q = "DELETE FROM resource  WHERE Resource_ID = ?;"
  db.query(q,[resource_id], (err,data)=>{
    if(err) return res.json(err);
    else return res.json(data);
  })
})

resourceRouter.post("/", (req, res) => {
 
  const q = "INSERT INTO resource (`Name`,`Resource_Type`,`Model`,`Serial_Number`,`Specifications`,`Lab_ID`,`Location`,`Availability`,`Condition`,`Last_Maintenance_Date`,`Maintenance_Interval`) values (?)";
  const values = [ 
    req.body.Name,
    req.body.Resource_Type,
    req.body.Model,
    req.body.Serial_Number,
    req.body.Specifications,
    req.body.Lab_ID,
    req.body.Location,
    req.body.Availability,
    req.body.Condition,
    req.body.Last_Maintenance_Date,
    req.body.Maintenance_Interval];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    else return res.json("Asset has been created successfully");
  });
});


export default resourceRouter;