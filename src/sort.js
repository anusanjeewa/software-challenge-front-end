export const compareValues = fieldName => {
  return function(a, b) {
    if (!a.hasOwnProperty(fieldName) || !b.hasOwnProperty(fieldName)) {
      return 0;
    }
    const tempA = typeof a[fieldName] === "string" ? a[fieldName].toUpperCase() : a[fieldName];
    const tempB = typeof b[fieldName] === "string" ? b[fieldName].toUpperCase() : b[fieldName];

    let compareValue = 0;
    if (tempA > tempB) {
      compareValue = 1;
    } else if (tempA < tempB) {
      compareValue = -1;
    }
    return compareValue;
  };
};

export const getFlattenData = (scans, users) => {
  const flattenArray = scans.map((scan, i) => {
      const user = users.find(u => u.id === scan.scannedByUserId);
      return {
        scanIndex: i,
        name: scan.name,
        elevationMax: scan.elevationMax,
        elevationMin: scan.elevationMin,
        scannedByUserId: scan.scannedByUserId,
        username: user.name
      };
    });
    return flattenArray;
};