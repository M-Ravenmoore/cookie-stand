cookiesPerHour: function() {
  let cookiesPerHourArr = [];
  let totalCount = 0;
  let random;
  let cookieTotalPerHour;
  for (let i = 0; i < 14; i++) {
    random = Math.ceil(Math.random() * (this.maxCustHour - this.minCustHour) + this.minCustHour);
    cookieTotalPerHour = Math.ceil(random * this.avgCookieSale);
    totalCount += cookieTotalPerHour;
    if (i + 6 < 13) {
      cookiesPerHourArr.push(i + 6 + 'am: ' + cookieTotalPerHour + ' cookies');
    }
    else {
      cookiesPerHourArr.push(i - 6 + 'pm: ' + cookieTotalPerHour + ' cookies');
    }
  }
  cookiesPerHourArr.push('Total: ' + totalCount + ' cookies');
  return cookiesPerHourArr;
},