const normalize = (value, min, mid, max) => {
  if (value === mid) return 0;
  if (value < mid) return (-100 * (mid - value)) / (mid - min);
  return (100 * (value - mid)) / (max - mid);
};
export default normalize;
