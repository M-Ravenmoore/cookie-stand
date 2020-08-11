'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')


// testing array and info

var minArr = [23,3,11,20,2]
var maxArr = [65,24,38,38,16]
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']

// shoul become a Reusable funtion and or template for opject literal mehtod?
// function guestsTotalPerHour(){

//   for(var i=0; i < storeHoursArr.length; i++){
//     var guestsPerHour = storeHoursArr[i];
//     function guestCount(minArr, maxArr){
//       for(var j = 0; j < 4 ; j++){
//         var guestCount = [Math.ceil(Math.random() * (maxArr[j] - minArr[j]) + min)];
//         console.log(guestCount)
//         return [guestCount];  
//       }
//     var guestsPerHour = guestCount;
//     console.log(guestsPerHour , storeHoursArr[i])
//     return guestsPerHour;
//   }
// }
// console.log(numberOfCookies());

// objects of each store

var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookieBuy: 6.3,
    seattleGuests: function(){
      // loops through store hours
      for(var i=0; i < storeHoursArr.length; i++){
        // attaches store hours to variable guestsPerHour
        var guestsPerHour = storeHoursArr[i];
        // take min and max guests and generates randome num between the 2
        function guestCount(min, max){
          for(var j = 0; j < 4 ; j++){
            var guestCount = [Math.ceil(Math.random() * (max - min) + min)];
            console.log(guestCount)
            return guestCount;  
          }
          var guestsPerHour = guestCount;
          console.log(guestsPerHour , storeHoursArr[i])
          return guestsPerHour;
        } 
        guestCount(this.minCust, this.maxCust);
      } 
    },

}
seattle.seattleGuests();

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
