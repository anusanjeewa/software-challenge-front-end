import React from "react";
import ScanList from "./ScanList";
import { createScanData, createUserData } from "./data";
import {compareValues} from './sort';

class ScanContainer extends React.Component {
  state = {
    scans: createScanData(),
    users: createUserData(),
    sortedArray: [],
  };

  getFlattenData = () => {
    const flattenArray = this.state.scans.map((scan, i) => {
        const user = this.state.users.find(u => u.id === scan.scannedByUserId);
        return {
          id: i,
          name: scan.name,
          elevationMax: scan.elevationMax,
          elevationMin: scan.elevationMin,
          scannedByUserId: scan.scannedByUserId,
          username: user.name
        };
      });
      return flattenArray;
  };

  onSortHandler = sortBy => {
    this.setState({
      ...this.state,
      sortedArray: this.getFlattenData().sort(compareValues(sortBy))
    });
  };

  render() {
    return (
      <div>
        <ScanList
          scans={this.state.scans}
          users={this.state.users}  
          sortedArray={
            this.state.sortedArray.length > 0
              ? this.state.sortedArray
              : this.getFlattenData()
          }
          onSortHandler={this.onSortHandler}
        />
      </div>
    );
  }
}

export default ScanContainer;
