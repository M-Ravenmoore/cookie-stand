'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')

// Hours of opperation and locations

var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
var storeLocationsArr = ['Seattle','Tokyo','Dubai','Paris','Lima']
var allStores = [];
var parentElement = document.getElementById("table");

// lets make some Objects with a constructor
function Location(locationName,minCustomers,maxCustomers,avgCookieBuy){
  this.location = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieBuy = avgCookieBuy;
  this.dailyCookieCount = [];
  this.guestCookiesArr = [];
  allStores.push(this);
}
var seattle = new Location('Seattle', 23,65,6.3);
var tokyo = new Location('Tokyo',3,24,1.2);
var dubai = new Location('Dubai',11,38,3.7);
var paris = new Location('Paris',20,38,2.3);
var lima = new Location('Lima',2,16,4.6);

// Prototypes for Location

//get guests per hour
Location.prototype.calcGuestCookies = function(){
  var cookiesPerHourArr = [];
  var dailyCount = 0;
  var guestCount = [];
  // loops through store hours
  for(var i=0; i < storeHoursArr.length; i++){
    // attaches store hours to variable guestsPerHour
    generateGuestCount = getRandom(this.minCustomers,this.maxCustomers)
    guestCount.push(generateGuestCount);
    cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
    cookiesPerHourArr.push(cookiesPerHour);
    dailyCount += cookiesPerHour;
    this.guestCookiesArr.push([storeHoursArr[i], cookiesPerHourArr[i]])
  } 
  this.dailyCookieCount.push(dailyCount);
} 

// make row of data from cookie hour total and hours of the day
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
function getRandom(minCust,maxCust){
  return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
}

function buildHeader(){
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  

  for(var i=0;i <storeHoursArr.length; i++){
    var tableHead = document.createElement('th')
    tableHead.textContent = `${storeHoursArr[i]}`; 
    tableRow.appendChild(tableHead);
    allStores[i].calcGuestCookies();
    allStores[i].renderData();
  }
}






function buildStoreContent(){
  buildHeader();
}

// PUT IT ON PAGE
buildStoreContent();
