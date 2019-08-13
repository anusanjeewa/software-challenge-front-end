export const compareValues = fieldName => {
  return function(a, b) {
    if (!a.hasOwnProperty(fieldName) || !b.hasOwnProperty(fieldName)) {
      return 0;
    }
    const tempA = typeof a[fieldName] === "string" ? a[fieldName].toUpperCase() : a[fieldName];
    const tempB = typeof b[fieldName] === "string" ? b[fieldName].toUpperCase() : b[fieldName];

    let comparison = 0;
    if (tempA > tempB) {
      comparison = 1;
    } else if (tempA < tempB) {
      comparison = -1;
    }
    return comparison;
  };
};