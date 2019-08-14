import React from "react";
import "./ScanList.css";
import EditPanel from "./EditPanel";
import NewScan from "./NewScan";

class ScanList extends React.Component {
  render() {
    return (
      <div className="ScanContainer">
        <div className="Header">Scans</div>
        <div className="ScanList">
          <div>
            <table>
              <thead className="Table-Header">
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
                  <tbody>
                    <tr key={i}>
                      <td>{scan.name}</td>
                      <td className="ScanListItem">{scan.elevationMax}</td>
                      <td className="ScanListItem">{scan.elevationMin}</td>
                      <td>{scan.username}</td>
                      <td>
                        <div>
                          <button
                            className="button"
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
        <div />
        {!this.props.editMode && (
          <div className="ScanList">
            <button
              className="button"
              onClick={() => this.props.onSetNewScanMode(true)}
            >
              {" "}
              Add new Record{" "}
            </button>
          </div>
        )}
        <div className="SpaceBetween" />
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
        <div className="SpaceBetween" />
        {this.props.editMode && (
          <div className="EditPanel">
            <div>
              <EditPanel
                editData={this.props.editData}
                editMode={this.props.editMode}
                onChangeHandler={this.props.onChangeHandler}
                onSaveHandler={this.props.onSaveHandler}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default ScanList;
