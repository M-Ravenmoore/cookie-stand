'useStrict';
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE');

// temp for posible feature
// var storeLocationsArr = [seattle,tokyo,dubai,paris,lima];

// Global Variables
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var allStores = [];
var parentElement = document.getElementById('table');


// lets make some Objects with a constructor
function StoreLocation(locationName,minCustomers,maxCustomers,avgCookieBuy){
  this.location = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieBuy = avgCookieBuy;
  this.dailyCookieCount = [];
  this.guestCookiesArr = [];
  allStores.push(this);
}


// Prototypes for Location

//get guests per hour
StoreLocation.prototype.calcGuestCookies = function(){
  var cookiesPerHourArr = [];
  var dailyCount = 0;
  var guestCount = [];
  // loops through store hours
  for(var i=0; i < storeHoursArr.length; i++){
    // attaches store hours to variable guestsPerHour
    var generateGuestCount = getRandom(this.minCustomers,this.maxCustomers);
    guestCount.push(generateGuestCount);
    var cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
    cookiesPerHourArr.push(cookiesPerHour);
    dailyCount += cookiesPerHour;
    this.guestCookiesArr.push([storeHoursArr[i], cookiesPerHourArr[i]]);
  }
  this.dailyCookieCount.push(dailyCount);
};

// make row of data from cookie hour total and hours of the day
StoreLocation.prototype.renderData = function(){
  var tableRow = document.createElement('tr');
  parentElement.appendChild(tableRow);
  var cookiearrayholder = this.guestCookiesArr;
  for(var i=0;i<cookiearrayholder.length;i++) {
    var tableData = document.createElement('td');
    tableData.textContent = cookiearrayholder[i][1];
    tableRow.appendChild(tableData);
  }
};
var seattle = new StoreLocation('Seattle', 23,65,6.3);
var tokyo = new StoreLocation('Tokyo',3,24,1.2);
var dubai = new StoreLocation('Dubai',11,38,3.7);
var paris = new StoreLocation('Paris',20,38,2.3);
var lima = new StoreLocation('Lima',2,16,4.6);

// helper functions
function getRandom(minCust,maxCust){
  return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
}

function buildChart(){
  var tableRow = document.createElement('tr');
  for(var i=0 ;i < storeHoursArr.length; i++){
    var tableHead = document.createElement('th');
    tableHead.textContent = `${storeHoursArr[i]}`;
    console.log(allStores[i]);
    allStores[i].calcGuestCookies();
    allStores[i].renderData();
    tableRow.appendChild(tableHead);
  }
  parentElement.appendChild(tableRow);
}
var locationFormE1 = document.getElementById('location-form');
locationFormE1.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
  event.preventDefault();
  if(event.target){
    console.log('the event.target is ', event.target);
    console.log('the event.target.loctationName is', event.target.locationName);
    console.log('the event.target.locationName.value is', event.target.locationName.value);
    locationName =event.target.locationName.value;
  }
}
function buildStoreContent(){
  buildChart();
}

// PUT IT ON PAGE
buildStoreContent();
