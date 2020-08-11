var seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookieBuy: 6.3,
  guestCookiesArr: [],
  dailyCookieCount: [],
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

}
seattle.guestsCookies();