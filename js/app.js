'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')

var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']
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
  }
    allStores.push(this);
}


var parentElement = document.getElementById('table');

function header(){
  var tableRow = document.getElementById('tr');
  parentElement.appendChild(tableRow);

  for(var i =0 ;i > storeHoursArr.length; i++){
    var tableHead = document.getElementById('th');
    tableHead.textContent = `${storeHoursArr}` 
    parentElement.appendChild(tableHead);
  }


}
// got stuck at making the table apear and how to call things need to aquire help. search for 45 min on google and kept breaking things.

// cant seem to make it run function for calcGuestCookies.... HELP on wed!


new Stores('Seattle', 23,65,6.3);
new Stores('Tokyo',3,24,1.2);
new Stores('Dubai',11,38,3.7);
new Stores('Paris',20,38,2.3);
new Stores('Lima',2,16,4.6);
console.log(allStores);