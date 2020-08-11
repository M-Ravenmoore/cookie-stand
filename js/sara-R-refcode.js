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

renderH2: function() {
  let parent = document.getElementById('section');
  let subHeader = document.createElement('h2');
  subHeader.setAttribute('id', this.location);
  subHeader.textContent = `${this.location}`;
  parent.appendChild(subHeader);
},
renderUL: function() {
  let parent = document.getElementById(this.location);
  let unorderedList = document.createElement('ul');
  unorderedList.setAttribute('id', this.location+'ul');
  parent.appendChild(unorderedList);
},
renderLI: function() {
  let parent = document.getElementById(this.location+'ul');
  let listItem;
  for (let i = 0; i < this.cookiesPerHour().length; i++) {
    listItem = document.createElement('li');
    listItem.textContent= this.cookiesPerHour()[i];
    parent.appendChild(listItem);
  }