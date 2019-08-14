import * as React from "react";
import "./NewScan.css";

const NewScan = props => {
  return (
    <div>
      <table>
        <tbody> 
          <tr>
            <td>
              <label> Scan Name </label>
            </td>
            <td>
              <input
                type="text"
                onChange={e => props.onChangeHandler("name")(e.target.value)}
                value={props.editData.name}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Elevation Max </label>
            </td>
            <td>
              <input
                type="text"
                onChange={e =>
                  props.onChangeHandler("elevationMax")(e.target.value)
                }
                value={props.editData.elevationMax}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Elevation Min </label>
            </td>
            <td>
              <input
                type="text"
                onChange={e =>
                  props.onChangeHandler("elevationMin")(e.target.value)
                }
                value={props.editData.elevationMin}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> User </label>
            </td>
            <td className="dropdown">
              <select
              className="dropdown"
              onChange={e =>{
                e.preventDefault();
                props.onChangeHandler("scannedByUserId")(e.target.value)}
              }
              >
                {props.users.map((user, i) => {
                 return ( 
                 <option
                    key={i}
                    value={user.id}                    
                  >
                    {user.name}
                  </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td> 
                  
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <button
                className="button"
                onClick={props.onAddNewScanHandler}
              >
                Save
              </button>
              {"   "}
              <button
                className="button"
                onClick={() => props.onSetNewScanMode(false)}
              >
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewScan;

