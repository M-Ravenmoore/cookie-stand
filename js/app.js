'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')


// Hours of opperation
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']

// Locations of stores as objects
var seattle = {
    minCust: 23,
    maxCust: 65,
    avgCookieBuy: 6.3,
    dailyCookieCount: [],
    guestCookiesArr: [],
    guestsCookies: function(){
      var cookiesPerHourArr = [];
      var dailyCount = 0;
      var guestCount = [];
      // loops through store hours
      for(var i=0; i < storeHoursArr.length; i++){
        // attaches store hours to variable guestsPerHour
        generateGuestCount = Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust);
        guestCount.push(generateGuestCount);
        cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
        cookiesPerHourArr.push(cookiesPerHour);
        dailyCount += cookiesPerHour;
        this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
      } 
      this.dailyCookieCount.push(dailyCount);
    }
    
}
seattle.guestsCookies();
console.log(seattle);

// var tokyo = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBuy: 1.2
// }

// var dubia = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBuy: 3.7,
// }

// var paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBuy: 2.3,
// }

// var lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBuy: 4.6,
// }