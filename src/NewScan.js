import * as React from "react";
import "./NewScan.css";

const NewScan = props => {
  return (
    <div>
      <table>
        <tbody className="Label">
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
            <td>
              <select>
                {props.users.map((user) => {
                 return ( <option
                    value={user.id}
                    onSelect={e =>
                      props.onChangeHandler("user")(e.target.value)
                    }
                  >
                    {user.name}
                  </option>
                  );
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <button
                className="btn btn-primary"
                onClick={props.onAddNewScanHandler}
              >
                Save
              </button>
              {"   "}
              <button
                className="btn btn-primary"
                onClick={() => this.props.onSetNewScanMode(false)}
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

/**
 
 
      
 */
