import React from 'react'

const SelectLIst = (props) => {
  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
            <select
              className="form-select"
              value={props.options.lab}
              name="lab"
              onChange={(e) => props.onChange(e)}
            >
              <option disabled selected>
                Select a lab
              </option>
              <option value="All">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              value={props.options.availability}
              name="availability"
              onChange={(e) => props.onChange(e)}
            >
              <option disabled selected>
                Select availability
              </option>
              <option value="All">All</option>

              <option value="available">Available</option>
              <option value="not_available">Not Available</option>
            </select>
          </div>
          <div className="col">
            <button
              className="btn btn-primary btn-sm"
              onClick={(e) => props.onSearch(e)}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SelectLIst