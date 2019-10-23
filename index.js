// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

let selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(integer) {
  return function fareMultiplier(fare) {
    return fare*integer
  }
}


const fareDoubler = function(fare) {
  return fare*2
}
// const fairDoubler = function() {};
const fareTripler = function(fare) {
  return fare*3
}

const selectDifferentDrivers = function(drivers, someFunction) {
  return someFunction(drivers)
}
