import React from "react";
import ScanList from "./ScanList";
import { createScanData, createUserData } from "./data";
import { compareValues, getFlattenData } from "./sort";

class ScanContainer extends React.Component {
  state = {
    scans: createScanData(),
    users: createUserData(),
    sortedArray: getFlattenData(createScanData(), createUserData()),
    editData: {
      scanIndex: "",
      name: "",
      elevationMax: "",
      elevationMin: "",
      scannedByUserId: "",
      username: ""
    },
    editMode: false,
    newScan: false,
  };
  onSortHandler = sortBy => {
    this.setState({
      ...this.state,
      sortedArray: getFlattenData(this.state.scans, this.state.users).sort(
        compareValues(sortBy)
      ),
      sortedBy: sortBy,
    });
  };
  onEditHandler = id => {
     const editRecord = this.state.sortedArray.find(
      data => data.scanIndex === id
    );
    this.setState({
      ...this.state,
      editData: editRecord,
      editMode: true
    });
  };

  onChangeHandler = fieldName => value => {
    this.setState({
      ...this.state,
      editData: {
        ...this.state.editData,
        [fieldName]: value
      }
    });
  };
  onSaveHandler = () => { 
    const updatedScans = [
      ...this.state.scans.slice(0, this.state.editData.scanIndex),
      {
        name: this.state.editData.name,
        elevationMax: this.state.editData.elevationMax,
        elevationMin: this.state.editData.elevationMin,
        scannedByUserId: this.state.editData.scannedByUserId
      },
      ...this.state.scans.slice(this.state.editData.scanIndex + 1)
    ];
    const updatedUsers = [
      ...this.state.users.slice(0, this.state.editData.scannedByUserId),
      {
        id: this.state.editData.scannedByUserId,
        name: this.state.editData.username
      },
      ...this.state.users.slice(this.state.editData.scannedByUserId + 1)
    ];
    const newSortedArray = getFlattenData(updatedScans, updatedUsers);
    this.setState({
      ...this.state,
      scans: updatedScans,
      users: updatedUsers,
      sortedArray: newSortedArray,
      editMode: false,
      editData: {
        scanIndex: "",
        name: "",
        elevationMax: "",
        elevationMin: "",
        scannedByUserId: "",
        username: ""}
    });
  };
  onSetNewScanMode = (mode) => {   
    this.setState({
      ...this.state,
      newScan: mode
    });
   };

  onAddNewScanHandler = () => {
    alert(this.state.editData.scannedByUserId);
    const currScans = this.state.scans;    
    const updatedScans = currScans.concat([
      {
        name: this.state.editData.name,
        elevationMax: this.state.editData.elevationMax,
        elevationMin: this.state.editData.elevationMin,
        scannedByUserId: 0
      }
    ]);
    const newSortedArray = getFlattenData(updatedScans, this.state.users);
    this.setState({
      ...this.state,
      scans: updatedScans,
      editData: {},
      sortedArray: newSortedArray,
      newScan: false
    })

  };

  render() {
    return (
      <div>
        <ScanList
          users={this.state.users}
          sortedArray={
            this.state.sortedArray.length > 0
              ? this.state.sortedArray
              : this.getFlattenData()
          }
          onSortHandler={this.onSortHandler}
          onEditHandler={this.onEditHandler}
          editData={this.state.editData}
          editMode={this.state.editMode}
          onChangeHandler={this.onChangeHandler}
          onSaveHandler={this.onSaveHandler}
          newScan={this.state.newScan}
          onSetNewScanMode={this.onSetNewScanMode}         
          onAddNewScanHandler={this.onAddNewScanHandler}
        />
      </div>
    );
  }
}

export default ScanContainer;
