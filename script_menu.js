const pizzaMenuItems = 2;
const drinkMenuItems = 2;
const totalMenuItems = 4;
const menu = {
    // pizza: ["pepperoni", "hawaiian"],
    // pizzaPrice: [15.99, 13.99],
    Pepperoni : 15.25,
    Hawaiian: 13.25,
    basePrice: 5,
    toppingPrice: 2.50,
    drink: ["Coke", "Sprite"],
    sodaPrice: 2.50,
    coffee: 3.50,
    juice: 4.00
}
let orderMenu = {
    drinks: [],
    drinkQty: [0],
    pizza: [],
    pizzaQty: [0],
    total: 0
}

// add1
const qty1 = document.getElementById('Qty1');
        qty1.addEventListener('change', function handleChange(event) {
        if (event.target.value === '1') {
            orderMenu.pizzaQty[0] = 1;
        } else if (event.target.value === '2') {
            orderMenu.pizzaQty[0] = 2;
        } else {
            orderMenu.pizzaQty[0] = 3;
        }
     })

const pepperButtonAdd = document.querySelector('#add1');
pepperButtonAdd.addEventListener('click', () => {
    orderMenu.pizza.push(pepperButtonAdd.value);
    //console.log(orderMenu.total)
   // console.log(Math.round(menu.Pepperoni))
    //console.log(`typeof ${typeof orderMenu.pizzaQty[0]}`)
    orderMenu.total += menu.Pepperoni * orderMenu.pizzaQty[0];
})

// add1
const qty3 = document.getElementById('Qty3');
        qty3.addEventListener('change', function handleChange(event) {
        if (event.target.value === '1') {
            orderMenu.drinkQty[0] = 1;
        } else if (event.target.value === '2') {
            orderMenu.drinkQty[0] = 2;
        } else {
            orderMenu.drinkQty[0] = 3;
        }
     })

const CokeButtonAdd = document.querySelector('#add3');
pepperButtonAdd.addEventListener('click', () => {
    orderMenu.drinks.push(CokeButtonAdd.value);
   // console.log(orderMenu.total)
   // console.log(orderMenu.drinkQty[0])
   orderMenu.total += menu.sodaPrice * orderMenu.drinkQty[0];
})

const menuOrderSub = document.querySelector('#orderMenuSum');
menuOrderSub.addEventListener('click', () => {
 document.querySelector('#menu').classList.toggle('disable');  // added class

     document.querySelector('#orderMenuSummary').classList.toggle('disable'); //removed class
     document.querySelector('#selectedPizzas').innerText = orderMenu.pizza.join(", ");
     document.querySelector('#selectedMenuDrinks').innerText = orderMenu.drinks.join(", ");
     //let total = ;
     //total = Math.round (total * 100) / 100
     document.querySelector('#totalMenuOrder').innerText = `$${orderMenu.total}`;
})

const finalMenuOrder = document.querySelector('#finMenuOrder');
finalMenuOrder.addEventListener('click', () => {
    orderMenuSummary.classList.toggle('disable'); // removed class
    customInfoMenu.classList.toggle('disable');
    customInfoMenu.classList.toggle('customInfo');

})

const submOrder = document.querySelector('#submitMenuOrder');

submOrder.addEventListener('click', () => {
    thankYou.classList.toggle('unable'); // add class
    customInfoMenu.classList.toggle('customInfo');
    customInfoMenu.classList.toggle('disable'); //remove class
})
//console.log(orderMenu)
//console.log(orderMenu.pizzaQty[0])