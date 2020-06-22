const sortByPrice = (a, b) => a.price - b.price;

const sortByDuration = (a, b) => {
  const getDurationSum = ({segments}) => segments.reduce((sum, {duration}) =>  sum + duration, 0);
  return getDurationSum(a) - getDurationSum(b);
};

export { sortByPrice, sortByDuration };
