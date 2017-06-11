var carlistitems = localStorage.getItem("countitems") || [];
carlistitems.length > 0 ? carlistitems = JSON.parse(carlistitems) : false;
console.log(carlistitems);
var totalItems = 0;
submitvalue();
countTotalItems();