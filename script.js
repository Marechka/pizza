const orderButton = document.querySelector('#order');
let order  = {
    toppings: [],
    crust: 'thin',
    basePrice: 10,
    toppingPrice: 2.50
}
orderButton.addEventListener('click', () => {
    //console.log("You clocked me!")
    //let topping = document.querySelector('.topping').value;
    for (let i = 1; i <= 3; i++) {
        if (document.querySelector(`#topping${i}`).checked) {
            let val = document.querySelector(`#topping${i}`).value
             //document.querySelector(`#topping${i}`).onclick = () =>  {
        order.toppings.push(val);
        }
    }
    for (let i = 1; i <= 2; i++) {
        if (document.querySelector(`#crust${i}`).checked) {
            let val = document.querySelector(`#crust${i}`).value
            order.crust = val;
        }
    }
    //console.log(order)
    orderForm.classList.toggle('disable');
    document.querySelector('#orderSummary').classList.toggle('unable');
   // let val = order.crust
    document.querySelector('#selectedCrust').innerText = order.crust;
    document.querySelector('#selectedToppings').innerText = order.toppings.join(", ");
})

// document.querySelector('#order').onclick = function () {
//     //alert("You clocked me!");
//     orderForm.classList.toggle('disable');
// }


