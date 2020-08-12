'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')

// city object litterals  used for first day of project COMMENTED OUT SO I CAN REMEMBER IT
// function cityObjectLiterals(){
//   var seattle = {
//     location: 'seattle',
//     minCustomers: 23,
//     maxCustomers: 65,
//     avgCookieBuy: 6.3,
//     dailyCookieCount: [],
//     guestCookiesArr: [],
//     calcGuestsCookies: function(){
//       var cookiesPerHourArr = [];
//       var dailyCount = 0;
//       var guestCount = [];
//       // loops through store hours
//       for(var i=0; i < storeHoursArr.length; i++){
//         // attaches store hours to variable guestsPerHour
//         generateGuestCount = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
//         guestCount.push(generateGuestCount);
//         cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
//         cookiesPerHourArr.push(cookiesPerHour);
//         dailyCount += cookiesPerHour;
//         this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
//       } 
//       this.dailyCookieCount.push(dailyCount);
//     },
//     renderCity: function(){
//       // put name on page
//       var storeName = document.getElementById(`${this.location}`);
//       storeName.textContent = this.location;

//       var parentElement = document.getElementById(`${this.location}Data`);
//       for(var i=0; i< this.guestCookiesArr[1].length; i++){
//         var listItem = document.createElement('li');
//         listItem.textContent = `${this.guestCookiesArr[i]} cookies`;
//         parentElement.appendChild(listItem);
//       }
      
//       var totalCookiesSold = document.getElementById(`${this.location}Total`);
//       totalCookiesSold.textContent = `Total cookies ${this.dailyCookieCount}`
//     }
//   }
//   seattle.calcGuestsCookies();
//   console.log(seattle);
//   seattle.renderCity();
// }

// Hours of opperation and locations

var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']
var StoresArr = ['seattle','tokyo','dubai','paris','lima']
var allStores = [];

// lets make a constructor
function Stores(location,minCustomers,maxCustomers,avgCookieBuy){
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieBuy = avgCookieBuy;
  this.dailyCookieCount = [];
  this.guestCookiesArr = [];
  this.calcGuestCookies = function(){
    var cookiesPerHourArr = [];
    var dailyCount = 0;
    var guestCount = [];
    // loops through store hours
    for(var i=0; i < storeHoursArr.length; i++){
      // attaches store hours to variable guestsPerHour
      generateGuestCount = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
      guestCount.push(generateGuestCount);
      cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
      cookiesPerHourArr.push(cookiesPerHour);
      dailyCount += cookiesPerHour;
      this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
    } 
    this.dailyCookieCount.push(dailyCount);
  };
  this.render = function(){    
    var storeName = document.getElementById(`${this.location}`);
    storeName.textContent = this.location;

    var parentElement = document.getElementById(`${this.location}Data`);
    for(var i=0; i< this.guestCookiesArr[1].length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.guestCookiesArr[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    var totalCookiesSold = document.getElementById(`${this.location}Total`);
    totalCookiesSold.textContent = `Total cookies ${this.dailyCookieCount}`
  };
  allStores.push(this);
}

new Stores('Seattle', 23,65,6.3);
new Stores('Tokyo',3,24,1.2);
new Stores('Dubai',11,38,3.7);
new Stores('Paris',20,38,2.3);
new Stores('Lima',2,16,4.6);
console.log(allStores);