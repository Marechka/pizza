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
let orderManual  = {
    toppings: [],
    drinks: [],
    crust: 'thin',
    total: 0
}

let orderMenu = {
    drinks: [],
    drinkQty: [],
    pizza: [],
    pizzaQty: [],
    total: 0
}

const orderButton = document.querySelector('#cont');
//if (orderButton.clicked) {
//orderButton.onclick = () => {
 //orderButton.addEventListener('click', () => {
    //console.log("You clocked me!")
    //let topping = document.querySelector('.topping').value;
    
    function w (clicked) {
    for (let i = 1; i <= 3; i++) {
        if (document.querySelector(`#topping${i}`).checked) {
            let val = document.querySelector(`#topping${i}`).value
            orderManual.toppings.push(val);
            orderManual.total += menu.toppingPrice;
        }
    }
    orderManual.total += menu.basePrice;
    for (let i = 1; i <= 2; i++) {
        if (document.querySelector(`#crust${i}`).checked) {
            let val = document.querySelector(`#crust${i}`).value
            orderManual.crust = val;
        }
    }
    for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`#drink${i}`).checked) {
            let val = document.querySelector(`#drink${i}`).value
            orderManual.drinks.push(val);
            orderManual.total += menu.sodaPrice;
        }
    }

    //console.log(order)
    document.querySelector('#orderForm').classList.toggle('disable'); // added class
    document.querySelector('#orderSummary').classList.toggle('unable'); //added class
    document.querySelector('#selectedCrust').innerText = orderManual.crust;
    document.querySelector('#selectedToppings').innerText = orderManual.toppings.join(", ");
    document.querySelector('#selectedDrinks').innerText = orderManual.drinks.join(", ");
    total.innerText = `$${orderManual.total}`;
    
}//})

const finalOrder = document.querySelector('#finOrder');

finalOrder.addEventListener('click', () => {
    orderSummary.classList.toggle('unable'); // removed class
    customInfo.classList.toggle('disable');
    customInfo.classList.toggle('customInfo');

})

const submOrder = document.querySelector('#submitOrder');

submOrder.addEventListener('click', () => {
    thankYou.classList.toggle('unable'); // add class
    customInfo.classList.toggle('customInfo');
    customInfo.classList.toggle('disable'); //remove class
})