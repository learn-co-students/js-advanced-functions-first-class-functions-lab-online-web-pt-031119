// Code your solution in this file!

const returnFirstTwoDrivers = function(driverArray) {
  return driverArray.slice(0, 2);
};

const returnLastTwoDrivers = function(driverArray) {
  return driverArray.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(someValue) {
  return function(fare) {
    return fare * someValue;
  };
}

const fareDoubler = function(fare) {
  const multiplyByTwo = createFareMultiplier(2);
  return multiplyByTwo(fare);
};
/**
 * Above and below are basically the same.
 * Above is redundant in that it is assigned an anonymous function. createFareMultiplier already does that.
 */
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, driverSelector) {
  return driverSelector(driverArray);
}
