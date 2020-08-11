'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')
var minArr = [23,3,11,20,2]


// testing array and info

var maxArr = [65,24,38,38,16]
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']

// shoul become a Reusable funtion and or template for opject literal mehtod?
// function guestsTotalPerHour(){
  
  
  // objects of each store
  
  var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookieBuy: 6.3,
    guestsPerHour: function(){
      // loops through store hours
      for(var i=0; i < storeHoursArr.length; i++){
        // attaches store hours to variable guestsPerHour
        var guestsPerHour = storeHoursArr[i];
        // take min and max guests and generates randome num between the 2
        function guestTotal(min, max){
            var guestTotal = [Number([Math.ceil(Math.random() * (max - min) + min)])];
            console.log([guestTotal[0],guestsPerHour ])
            return guestTotal;
        } 
        guestTotal(this.minCust, this.maxCust);
      } 
    },
    cookiesPerHour: function(guestTotal,avgCookie){
      var guests = this.guestsPerHour();
      var cookies = this.avgCookieBuy;
      var totalCookies = [guests * cookies];
      console.log(totalCookies);
      return totalCookies;
    }
  }
seattle.guestsPerHour();
seattle.cookiesPerHour();

// var Tokyo = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBuy: 1.2,

//   },
  
// }

// var Dubia = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBuy: 3.7,
//   guestsPerHour: function(){
//     // loops through store hours
//     for(var i=0; i < storeHoursArr.length; i++){
//       // attaches store hours to variable guestsPerHour
//       var guestsPerHour = storeHoursArr[i];
//       // take min and max guests and generates randome num between the 2
//       function guestTotal(min, max){
//         for(var j = 0; j < 4 ; j++){
//           var guestTotal = [Math.ceil(Math.random() * (max - min) + min)];
//           console.log(guestTotal)
//           return guestTotal;  
//         }
//         var guestsHour = guestTotal;
//         console.log(guestsHour , storeHoursArr[i])
//         return guestsHour;
//       } 
//       guestTotal(this.minCust, this.maxCust);
//     } 
//   },
  
// }

// var Paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBuy: 2.3,
//   guestsPerHour: function(){
//     // loops through store hours
//     for(var i=0; i < storeHoursArr.length; i++){
//       // attaches store hours to variable guestsPerHour
//       var guestsPerHour = storeHoursArr[i];
//       // take min and max guests and generates randome num between the 2
//       function guestTotal(min, max){
//         for(var j = 0; j < 4 ; j++){
//           var guestTotal = [Math.ceil(Math.random() * (max - min) + min)];
//           console.log(guestTotal)
//           return guestTotal;  
//         }
//         var guestsHour = guestTotal;
//         console.log(guestsHour , storeHoursArr[i])
//         return guestsHour;
//       } 
//       guestTotal(this.minCust, this.maxCust);
//     } 
//   },
  
// }

// var Lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBuy: 4.6,
//   guestsPerHour: function(){
//     // loops through store hours
//     for(var i=0; i < storeHoursArr.length; i++){
//       // attaches store hours to variable guestsPerHour
//       var guestsPerHour = storeHoursArr[i];
//       // take min and max guests and generates randome num between the 2
//       function guestTotal(min, max){
//         for(var j = 0; j < 4 ; j++){
//           var guestTotal = [Math.ceil(Math.random() * (max - min) + min)];
//           console.log(guestTotal)
//           return guestTotal;  
//         }
//         var guestsHour = guestTotal;
//         console.log(guestsHour , storeHoursArr[i])
//         return guestsHour;
//       } 
//       guestTotal(this.minCust, this.maxCust);
//     } 
//   },
  
// }
