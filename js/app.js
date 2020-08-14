'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')

// Hours of opperation
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']
var storeLocationsNameArr = ['seattle','tokyo','dubai','paris','lima']
var storeObjectsArr = [seattle,tokyo,dubai,paris,lima]
// city object litterals
var seattle = {
  location: 'seattle',
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
      generateGuestCount = getRandom(this.minCust,this.maxCust);
      console.log(`this is guestcout ${generateGuestCount}`)
      guestCount.push(generateGuestCount);
      cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
      cookiesPerHourArr.push(cookiesPerHour);
      dailyCount += cookiesPerHour;
      this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
    } 
    this.dailyCookieCount.push(dailyCount);
  },
  renderCity: function(){
    // put name on page
    var storeName = document.getElementById(`${this.location}`);
    storeName.textContent = this.location;

    var parentElement = document.getElementById(`${this.location}`);
    for(var i=0; i< this.guestCookiesArr[1].length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.guestCookiesArr[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    
    var totalCookiesSold = document.getElementById(`${this.location}Total`);
    totalCookiesSold.textContent = `Total cookies ${this.dailyCookieCount}`
  }
}
var tokyo = {
  location: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBuy: 1.2,
  dailyCookieCount: [],
  guestCookiesArr: [],
  guestsCookies: function(){
    var cookiesPerHourArr = [];
    var dailyCount = 0;
    var guestCount = [];
    // loops through store hours
    for(var i=0; i < storeHoursArr.length; i++){
      // attaches store hours to variable guestsPerHour
      generateGuestCount = getRandom(this.minCust,this.maxCust);
      guestCount.push(generateGuestCount);
      cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
      cookiesPerHourArr.push(cookiesPerHour);
      dailyCount += cookiesPerHour;
      this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
    } 
    this.dailyCookieCount.push(dailyCount);
  },
  renderCity: function(){
    // put name on page
    var storeName = document.getElementById(`${this.location}`);
    storeName.textContent = this.location;

    var parentElement = document.getElementById(`${this.location}`);
    for(var i=0; i< this.guestCookiesArr[1].length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.guestCookiesArr[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    
    var totalCookiesSold = document.getElementById(`${this.location}Total`);
    totalCookiesSold.textContent = `Total cookies ${this.dailyCookieCount}`
  }
}
var dubai = {
  location: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBuy: 3.7,
  dailyCookieCount: [],
  guestCookiesArr: [],
  guestsCookies: function(){
    var cookiesPerHourArr = [];
    var dailyCount = 0;
    var guestCount = [];
    // loops through store hours
    for(var i=0; i < storeHoursArr.length; i++){
      // attaches store hours to variable guestsPerHour
      generateGuestCount = getRandom(this.minCust,this.maxCust);
      guestCount.push(generateGuestCount);
      cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
      cookiesPerHourArr.push(cookiesPerHour);
      dailyCount += cookiesPerHour;
      this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
    } 
    this.dailyCookieCount.push(dailyCount);
  },
  renderCity: function(){
    // put name on page
    var storeName = document.getElementById(`${this.location}`);
    storeName.textContent = this.location;

    var parentElement = document.getElementById(`${this.location}`);
    for(var i=0; i< this.guestCookiesArr[1].length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.guestCookiesArr[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    
    var totalCookiesSold = document.getElementById(`${this.location}Total`);
    totalCookiesSold.textContent = `Total cookies ${this.dailyCookieCount}`
  }
}
var paris = {
  minCust: 20,
  maxCust: 38,
  location: 'paris',
  avgCookieBuy: 2.3,
  dailyCookieCount: [],
  guestCookiesArr: [],
  guestsCookies: function(){
    var cookiesPerHourArr = [];
    var dailyCount = 0;
    var guestCount = [];
    // loops through store hours
    for(var i=0; i < storeHoursArr.length; i++){
      // attaches store hours to variable guestsPerHour
      generateGuestCount = getRandom(this.minCust,this.maxCust);
      guestCount.push(generateGuestCount);
      cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
      cookiesPerHourArr.push(cookiesPerHour);
      dailyCount += cookiesPerHour;
      this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
    } 
    this.dailyCookieCount.push(dailyCount);
  },
  renderCity: function(){
    // put name on page
    var storeName = document.getElementById(`${this.location}`);
    storeName.textContent = this.location;

    var parentElement = document.getElementById(`${this.location}`);
    for(var i=0; i< this.guestCookiesArr[1].length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.guestCookiesArr[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    
    var totalCookiesSold = document.getElementById(`${this.location}Total`);
    totalCookiesSold.textContent = `Total cookies ${this.dailyCookieCount}`
  }
}
var lima = {
  location: 'lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBuy: 4.6,
  dailyCookieCount: [],
  guestCookiesArr: [],
  guestsCookies: function(){
    var cookiesPerHourArr = [];
    var dailyCount = 0;
    var guestCount = [];
    // loops through store hours
    for(var i=0; i < storeHoursArr.length; i++){
      // attaches store hours to variable guestsPerHour
      generateGuestCount = getRandom(this.minCust,this.maxCust);
      guestCount.push(generateGuestCount);
      cookiesPerHour = Math.ceil(generateGuestCount * this.avgCookieBuy);
      cookiesPerHourArr.push(cookiesPerHour);
      dailyCount += cookiesPerHour;
      this.guestCookiesArr.push(`${storeHoursArr[i]} : ${cookiesPerHourArr[i]}`,)
    } 
    this.dailyCookieCount.push(dailyCount);
  },
  renderCity: function(){
    // put name on page
    var storeName = document.getElementById(`${this.location}`);
    storeName.textContent = this.location;

    var parentElement = document.getElementById(`${this.location}`);
    for(var i=0; i< this.guestCookiesArr[1].length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = `${this.guestCookiesArr[i]} cookies`;
      parentElement.appendChild(listItem);
    }
    
    var totalCookiesSold = document.getElementById(`${this.location}Total`);
    totalCookiesSold.textContent = `Total cookies ${this.dailyCookieCount}`
  }
}

function getRandom(minCustomers,maxCustomers){
  Math.ceil(Math.random() * (maxCustomers - minCustomers) + minCustomers)
}



seattle.guestsCookies();
tokyo.guestsCookies();
dubai.guestsCookies();
paris.guestsCookies();
lima.guestsCookies();
console.log([seattle,tokyo,dubai,paris,lima]);
seattle.renderCity();
tokyo.renderCity();
dubai.renderCity();
paris.renderCity();
lima.renderCity();