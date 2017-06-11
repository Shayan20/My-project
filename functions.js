function incrementItem(index) {
    var i = cars[index];
    var elementPosition = carlistitems.map(function (item) {
        return item.id
    }).indexOf(i.id);
    elementPosition > -1 ? carlistitems[elementPosition].quantity++ : (i.quantity++ , carlistitems.push(i));
    countTotalItems();
    console.log(carlistitems);
    localStorage.setItem("countitems", JSON.stringify(carlistitems));
}

function decrementItem(index) {
    var i = cars[index];
    var elementPosition = carlistitems.map(function (cars) {
        return cars.id
    }).indexOf(i.id);
    elementPosition > -1 && carlistitems[elementPosition].quantity > 0 ? carlistitems[elementPosition].quantity-- : elementPosition > -1 && carlistitems[elementPosition].quantity == 0 ? carlistitems.splice(elementPosition, 1) : false;
    countTotalItems();
    console.log(carlistitems);
    carlistitems.length > 0 ? localStorage.setItem("countitems", JSON.stringify(carlistitems)) : localStorage.removeItem("countitems");
}
function countTotalItems() {
    totalItems = 0;
    carlistitems.forEach(function (cars) {
        totalItems += cars.quantity;
    })

    document.getElementById("countitems").innerHTML = "<i class='fa fa-shopping-cart' aria-hidden='true'></i><div class='count'>" + totalItems + "</div>";
}