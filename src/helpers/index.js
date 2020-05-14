const findFalseValue = (obj) => {
    let value = false;
    for (var key in obj) {
      if (obj[key] === true) {
        value = true;
      }
    }
    return value;
  };
  
  const sortByPrice = (a, b) => {
    return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
  };
  
  const sortByDuration = (a, b) => {
    return a.summDuration() < b.summDuration()
      ? -1
      : a.summDuration() > b.summDuration()
      ? 1
      : 0;
  };
  
  export { findFalseValue, sortByPrice, sortByDuration };
  