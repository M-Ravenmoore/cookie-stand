console.log('I AM A DRAGON AND I AM ALIVE')
function numOfGuests(min, max){
return Math.ceil(Math.random() * (max - min) + min)
}

// store hours
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']

// objects of each store
var seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookieBuy: 6.3,
}

var Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieBuy: 1.2
}

var Dubia = {
  minCust: 11,
  maxCust: 38,
  avgCookieBuy: 3.7,
}

var Paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieBuy: 2.3,
}

var Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookieBuy: 4.6,

}


// random num of customers

console.log(numOfGuests(23, 65));

