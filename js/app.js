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
var storeLocationsArr = ['Seattle','Tokyo','Dubai','Paris','Lima']
var allStores = [];
var parentElement = document.getElementById("table");

// lets make a constructor
function Location(locationName,minCustomers,maxCustomers,avgCookieBuy){
  this.location = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieBuy = avgCookieBuy;
  this.dailyCookieCount = [];
  this.guestCookiesArr = [];
  allStores.push(this);
}
Location.prototype.calcGuestCookies = function(){
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
    this.guestCookiesArr.push([storeHoursArr[i], cookiesPerHourArr[i]])
  } 
  this.dailyCookieCount.push(dailyCount);
  console.log(cookiesPerHourArr)
} 

var seattle = new Location('Seattle', 23,65,6.3);
var tokyo = new Location('Tokyo',3,24,1.2);
var dubai = new Location('Dubai',11,38,3.7);
var paris = new Location('Paris',20,38,2.3);
var lima = new Location('Lima',2,16,4.6);


// WIP creating data chart on html

Location.prototype.renderData = function(){
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  var cookiearrayholder = this.guestCookiesArr;

  for(var i=0;i<cookiearrayholder.length;i++) {
    var tableData = document.createElement('td');
    tableData.textContent = cookiearrayholder[i][1]
    tableRow.appendChild(tableData);
  }
}

// helper functions

function buildHeader(){
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  

  for(var i=0;i <storeHoursArr.length; i++){
    var tableHead = document.createElement('th')
    tableRow.appendChild(tableHead);
   
    tableHead.textContent = `${storeHoursArr[i]}`; 
    tableRow.appendChild(tableHead);
  }
}


function printPageTest(){
  for(var i=0; i<allStores.length;i++) {
    allStores[i].calcGuestCookies();
  }
}
// PUT IT ON PAGE
buildHeader();
printPageTest();
seattle.renderData();
