
//random variabels
const cardContainer = document.querySelector('.featured-grid')
const  btn = document.getElementsByTagName('button');
const tableform = document.querySelector('tableform')
const listmenu = document.querySelectorAll('li');
const order = document.querySelector('.orders')
const bookings = [];
//create object orderproducts
let orderproducts = new products(db);
//takes 2 parameters 1 for db one for drinks,bbq,exc

//Create eventhandlers for btns and menu for products
orderproducts.eventHandlerBtns(btn);
orderproducts.eventHandlerMenu(listmenu);

//remove orders
function removeOrder(e, x){

  bookings[0].orders.splice(x, 1)
      bookings[0].showOrders(order);
}

//to switch items in menu
function createprodcuts(e){
  document.querySelectorAll(".card").forEach(el => el.remove());
  if(e.target.textContent == 'Food'){
    orderproducts.createCards(8,cardContainer);
}
if(e.target.textContent == 'Snacks'){
  orderproducts.createCards(2,cardContainer);
}
if(e.target.textContent == 'Drinks'){
  orderproducts.createCards(6,cardContainer);
}
orderproducts.eventHandlerBtns(btn);
orderproducts.eventHandlerMenu(listmenu);
}
//Get the orders, do methods in table class
function getProduct(product){
  bookings[0].getOrders(product.parentNode.getAttribute('id'), product.parentNode.getAttribute('price'));
  bookings[0].showOrders(order)
 } 

// get data from the form, create a object table in bookings array

const cardContainer = document.querySelector('.featured-grid')
const bookings = [];
// get data from the form

function getData(form) {
    let formData = new FormData(form);
    let tablebooking = Object.fromEntries(formData);
    let booking = new table(tablebooking.name, tablebooking.selectTable);
    if (bookings.some(e => e.tablenumber === tablebooking.selectTable)) {
       console.log("finns redan")
       alert("booked");
      }else{
        console.log("finns inte")
        bookings.push(booking);
      }

  }

  }
  //create object products
  let product = new products(db);
  //takes 2 parameters 1 for db one for drinks,bbq,exc
    product.createCards(db,6,cardContainer);

  //eventlistener for the tablebooking
  document.getElementById("tableform").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  })




  
