export const formatNumber = (value, nbDigitAfterDecimal = 2) =>
  parseFloat(value.toFixed(nbDigitAfterDecimal));
