'useStrict'
// proof of life
console.log('I AM A DRAGON AND I AM ALIVE')

// Hours of opperation
var storeHoursArr = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm']

// Locations of stores as objects


//  Designers Question : for later work can i put this (12-end of citys) in to an object ie:salmonCookiesGlobalInfo? then instead of rendering in the citys creat one render that loops throuught the citys for the information?

var seattle = {
  location: seattle,
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
  },
  renderCity: function(){
    // put name on page
    var storeName = document.getElementById('seattle');
    storeName.textContent = this.location;

    // put info on page
    var storeData = document.getElementById('seattleData');
    storeData.textContent = this.dailyCookieCount[0],[1];
  }
}
var tokyo = {
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
var dubai = {
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
var paris = {
  minCust: 20,
  maxCust: 38,
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
var lima = {
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
tokyo.guestsCookies();
dubai.guestsCookies();
paris.guestsCookies();
lima.guestsCookies();
console.log([seattle,tokyo,dubai,paris,lima]);
seattle.renderCity();
