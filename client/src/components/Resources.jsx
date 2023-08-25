import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SelectLIst from './SelectLIst';
import Table from './Table';



const Resources = () => {
    const [resources, setResources] = useState([]);
    const [intialResources, setintialResources] = useState([]);

     const [options, setoptions] = useState({
       lab: "Select a lab",
       availability: "Select availability",
     });

     const handleChange = (e) => {
       setoptions((prev) => ({ ...prev, [e.target.name]: e.target.value }));

     };

    useEffect(() => {
      const fetchAllResources = async () => {
        try {
          const res = await axios.get("http://localhost:8800/resources");
          setResources(res.data);
          setintialResources(res.data);
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchAllResources();
    }, []);

    const navigate =useNavigate();

    const handleMore = (e,id) =>{
      console.log("more cliked");
      e.preventDefault();
      navigate(`/more/${id}`);
    } ;

    const handleSearch = (e) =>{
      e.preventDefault();
      
      const temp = intialResources.filter(
        (resource) =>{
          console.log(options.lab, resource.Lab_ID);
          return (
          (options.lab == resource.Lab_ID || options.lab === "All") &&
          (options.availability === resource.Availability ||
            options.availability === "All")
        );});
     setResources(temp);
    }
    const handleAdd = (e) =>{
      e.preventDefault();
      navigate("/add");
    }

    
  return (
    <div>
      <h1 className="text-center">Resources</h1>

      <div className="container">
        <SelectLIst onChange = {handleChange} onSearch = {handleSearch} 
        options = {options}></SelectLIst>
        <div className='my-2'> <button className='btn btn-sm btn-success' 
        onClick={(e) =>handleAdd(e)}>Add asset</button></div>
        <Table resources ={resources} onClickMore = {handleMore} ></Table>
      </div>
    </div>
  );
}

export default Resources