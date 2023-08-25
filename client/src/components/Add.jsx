import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

 const Add = () => {
  const [asset, setAsset] = useState({
    Name : "",
    Resource_Type: "Select a type",
    Model: "",
    Serial_Number: "",
    Specifications: "",
    Lab_ID:"Select a lab",
    Location:"",
    Availability:"Select availability",
    Condition:"Select condition",
    Last_Maintenance_Date:"",
    Maintenance_Interval:""
  });
  const handleChange = (e) => {
    setAsset((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(asset);
  };
  const navigate = useNavigate();
  const handleSave = (e) =>{
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, save it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleIsConfirmed();
        Swal.fire("Saved!", "New asset has been saved.", "success");
      }
    });

  }

  const handleIsConfirmed = async () => {
    
    try {
      const responce = await axios.post("http://localhost:8800/resources", asset);
      navigate("/");
      console.log(responce.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    setAsset({
      Name: "",
      Resource_Type: "Select a type",
      Model: "",
      Serial_Number: "",
      Specifications: "",
      Lab_ID: "Select a lab",
      Location: "",
      Availability: "Select availability",
      Condition: "Select condition",
      Last_Maintenance_Date: "",
      Maintenance_Interval: "",
    });
   };

  return (
    <div className="container-md">
      <div className="row my-5 ">
        <div className="col-6 bg-primary-subtle mx-auto shadow rounded">
          <h1 className="my-3">Add a Asset</h1>

          <form>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="name" className="form-label ">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={asset.Name}
                  onChange={(e) => handleChange(e)}
                  name="Name"
                  //placeholder="title"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Resource Type
                </label>
                <select
                  className="form-select"
                  name="Resource_Type"
                  value={asset.Resource_Type}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected disabled>
                    Select a type
                  </option>
                  <option value="Computer">Computer</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Printer">Printer</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Model
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={asset.Model}
                  id=""
                  name="Model"
                />
              </div>
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Serial Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  onChange={(e) => handleChange(e)}
                  value={asset.Serial_Number}
                  name="Serial_Number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="" className="form-label ">
                Specifications
              </label>
              <input
                type="text"
                className="form-control"
                id=""
                onChange={(e) => handleChange(e)}
                value={asset.Specifications}
                name="Specifications"
              />
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Lab_ID
                </label>
                <select
                  className="form-select"
                  name="Lab_ID"
                  value={asset.Lab_ID}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected disabled>
                    Select a lab
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  onChange={(e) => handleChange(e)}
                  value={asset.Location}
                  name="Location"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Availability
                </label>
                <select
                  onChange={(e) => handleChange(e)}
                  class="form-select"
                  name="Availability"
                  value={asset.Availability}
                >
                  <option selected disabled>
                    Select availability
                  </option>
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                  <option value="Under Maintenace">Under Maintenace</option>
                </select>
              </div>
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Condition
                </label>
                <select
                  className="form-select"
                  name="Condition"
                  value={asset.Condition}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected disabled>
                    Select condition
                  </option>
                  <option value="Good">Good</option>
                  <option value="Needs repair">Needs repair</option>
                  <option value="Bad">Bad</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Last Maintenance Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id=""
                  onChange={(e) => handleChange(e)}
                  value={asset.Last_Maintenance_Date}
                  name="Last_Maintenance_Date"
                />
              </div>

              <div className="form-group col">
                <label htmlFor="" className="form-label ">
                  Maintenance Interval
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  value={asset.Maintenance_Interval}
                  onChange={(e) => handleChange(e)}
                  name="Maintenance_Interval"
                  
                />
              </div>
            </div>
          </form>
          <div className="my-3">
            <button
              type="button"
              className="btn btn btn-success  "
              onClick={(e) => handleSave(e)}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn btn-danger m-2"
              onClick={(e) => handleClear(e)}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
