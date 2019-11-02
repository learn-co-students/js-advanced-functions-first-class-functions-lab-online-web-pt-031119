// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
   return array.slice(0,2)
}

const returnLastTwoDrivers = function(array){
   return array.slice([array.length - 2],[array.length])
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
   return function(fare){
      return multiplier * fare
   }

}

const fareDoubler = function createFareMultiplier(fare){
   return fare * 2
}

const fareTripler = function createFareMultiplier(fare){
   return fare * 3
}

const selectDifferentDrivers = function(array, job){
   return job(array)
}