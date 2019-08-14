import * as React from 'react';

const EditPanel = (props) => {
    return (        
        <div>
             <input
            type="text"
            placeholder="Scan name"
            onChange={e => props.onChangeHandler("name")(e.target.value)}
            value={props.editData.name}
          />
          {"   "}
          <input
            type="text"
            placeholder="User"
            onChange={e =>
              props.onChangeHandler("username")(e.target.value)
            }
            value= {props.editData.username}
            />
            {"   "} 
          <button
            className="btn btn-primary"
            id="saveButton"
            onClick={() => props.onSaveHandler()}
          >
            Save
          </button>
        </div>
    );
}

export default EditPanel;