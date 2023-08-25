import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

const MoreDetails = () => {

  const [details, setDetails] = useState({});
  const {id} = useParams();
  const [ok, setok] = useState(false);

  useEffect(() => {
    const fetchAllDetailsByID = async(id) =>{
        try {
          const res = await axios.get("http://localhost:8800/resources/" + id);
          // res.data checks not null or undefined
          // res.data.length checks length property of res.data is greater than 0.
          if (res.data && res.data.length > 0) {
            setDetails(res.data[0]);
            console.log(res.data[0]);
            setok(true);
          }
        } catch (error) {
          console.log(error);
          console.log("HEllo error")
        }
    };
    fetchAllDetailsByID(id);
  }, []);

  const navigate = useNavigate();
  const handleDelete = (e,id)=>{
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleIsConfirmed(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleIsConfirmed = async (id) =>{
    
    try {
      const res = await axios.delete("http://localhost:8800/resources/" + id);
      console.log("Resourse is deleted!");
      navigate("/");

      
    } catch (error) {
      console.log(error)
    }
  }
  
 
  
  return (
    <div>
      {ok ? (
        <div>
          <h1 className="text-center">More Details</h1>
          <div className="container">
            <div className="row">
              <div className="col-md6 mx-auto">
                <button type="button" className="btn btn-primary btn-sm ">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm m-2"
                  onClick={(e) => handleDelete(e, id)}
                >
                  Delete
                </button>
                <table className="table table-success table-hover table-sm">
                  <thead>
                    <tr>
                      <th>Attribute</th>
                      <th>Info</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* <tr>
                  <td>Resource ID</td> <td> {details.Resource_ID}</td>
                </tr>
                <tr>
                  <td>Name</td> <td> {details.Name}</td>
                </tr>
                <tr>
                  <td>Resource Type</td> <td> {details.Resource_Type}</td>
                </tr>
                <tr>
                  <td>Model</td> <td> {details.Model}</td>
                </tr>
                <tr>
                  <td>Serial Number</td> <td> {details.Serial_Number}</td>
                </tr>
                 */}
                    {Object.entries(details).map(([key, value]) => (
                      <tr>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            ;
          </div>
        </div>
      ) : (
        <div className="container text-center p-5">
          <p className="display-6 ">
            The asset with resource id {id} does not exist!
          </p>
        </div>
      )}
    </div>
  );
}

export default MoreDetails;