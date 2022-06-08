const pizzaMenuItems = 2;
const drinkMenuItems = 2;
const totalMenuItems = 4;
const menu = {
    // pizza: ["pepperoni", "hawaiian"],
    // pizzaPrice: [15.99, 13.99],
    Pepperoni : 15.99,
    Hawaiian: 13.99,
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
 orderButton.addEventListener('click', () => {
    //console.log("You clocked me!")
    //let topping = document.querySelector('.topping').value;
    
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

})

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


// if (document.querySelector("#menuLink").clicked) {
// for (let i = 1; i <= totalMenuItems; i++) {
//     if (document.querySelector(`#add${i}`).clicked) {
//         if (i <= pizzaMenuItems) {
//             let item = document.querySelector(`#add${i}`);
//             let i = menu.pizza.indexOf(item.value);
//             let pizPrice = menu.pizzaPrice(i);
//             orderMenu.pizza.push(item.value);

//             console.log(orderMenu.total += (document.querySelector(`#Qty${i}`).value) * pizPrice)
//         }
//     }

// }
// console.log(document.querySelector(`#Qty${1}`).value)
// console.log(orderMenu.total += (document.querySelector(`#Qty${1}`).value) * 10)
// const addToCartBut = document.querySelector('.add');
// }

// const add1Button = document.querySelector('#add1');
// add1Button.addEventListener('click', () => {
//     //const el = document.getElementById('select');

//     const qty= document.getElementById('Qty1');
//     qty.addEventListener('change', function handleChange(event) {
//     if (event.target.value === '1') {
//        // box.style.display = 'block';
//     } else if (event.target.value === '2'){
//         //box.style.display = 'none';
//     }
//     });


//console.log(addToCartBut)

// document.querySelector('#order').onclick = function () {
//     //alert("You clocked me!");
//     orderForm.classList.toggle('disable');
// }
