// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (arrayOfDrivers){
    return arrayOfDrivers.slice(0,2);
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function (multiplier){
        return integer * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler  = createFareMultiplier(3)
// console.log(fareDoubler, fareTripler);  //Function anonymus

function selectDifferentDrivers (drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);

}