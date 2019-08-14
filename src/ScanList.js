import React from "react";
import "./ScanList.css";
import EditPanel from "./EditPanel";
import NewScan from "./NewScan";

class ScanList extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">Scans</div>
        <div className="ScanList">
          <div className="ScanListItem">
            <table className="table ">
              <thead>
                <tr>
                  <th onClick={() => this.props.onSortHandler("name")}>Name</th>
                  <th onClick={() => this.props.onSortHandler("elevationMax")}>
                    Elevation Max{" "}
                  </th>
                  <th onClick={() => this.props.onSortHandler("elevationMin")}>
                    Elevation Min{" "}
                  </th>
                  <th onClick={() => this.props.onSortHandler("username")}>
                    User Name
                  </th>
                  <th />
                </tr>
              </thead>
              {this.props.sortedArray.map((scan, i) => {
                return (
                  <tbody className="ScanListRow">
                    <tr key={i}>
                      <td>{scan.name}</td>
                      <td>{scan.elevationMax}</td>
                      <td>{scan.elevationMin}</td>
                      <td>{scan.username}</td>
                      <td>
                        <div>
                          <button
                            className="btn btn-default "
                            id={"button" + i}
                            disabled={this.props.editMode}
                            onClick={() =>
                              this.props.onEditHandler(scan.scanIndex)
                            }
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
        <div>
          <button onClick={() => this.props.onSetNewScanMode(true)}>
            {" "}
            Add new Record{" "}
          </button>
        </div>
        {this.props.newScan && (
          <div className="ScanList">
            <NewScan
              users={this.props.users}
              editData={this.props.editData}
              onChangeHandler={this.props.onChangeHandler}
              onSetNewScanMode={this.props.onSetNewScanMode}
              onAddNewScanHandler={this.props.onAddNewScanHandler}
            />
          </div>
        )}
        <div>
          {this.props.editMode && (
            <div className="editList">
              <EditPanel
                editData={this.props.editData}
                editMode={this.props.editMode}
                onChangeHandler={this.props.onChangeHandler}
                onSaveHandler={this.props.onSaveHandler}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ScanList;

/**
 <div className="ScanList">
          {this.props.scans.map((scan, i) => {
            const user = this.props.users.find(
              u => u.id === scan.scannedByUserId
            );
            return (
              <div className="ScanListItem" key={i}>
                {scan.name}
                <div className="UserName">by {user.name}</div>
              </div>
            );
          })}
        </div>
 */
