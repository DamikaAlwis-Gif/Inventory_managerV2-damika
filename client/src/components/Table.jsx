import React from 'react'

const Table = (props) => {
    const {resources, onClickMore} = props;
    const handleAvailability = (availability) => {
      if (availability === "available") {
        return <p style={{ color: "green", fontWeight: "bold" }}>{availability}</p>;
      } else {
        return (
          <p style={{ color: "red", fontWeight: "bold" }}>{availability}</p>
        );
      }
    }
    
  return (
    <div>
      
      <table className="table table-primary table-hover">
        <thead>
          <tr>
            <th>Resource ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Lab</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource) => (
            <tr
              key={resource.Resource_ID}
              onClick={(e) => onClickMore(e, resource.Resource_ID)}
            >
              <td>{resource.Resource_ID}</td>
              <td>{resource.Name}</td>
              <td>{resource.Resource_Type}</td>
              <td>{resource.Lab_ID}</td>
              <td>{handleAvailability(resource.Availability)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table