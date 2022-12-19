//random variabels
const cardContainer = document.querySelector('.featured-grid')
const  btn = document.getElementsByTagName('button');
const tableform = document.querySelector('tableform')
const listmenu = document.querySelectorAll('li');
const order = document.querySelector('.orders')
const bookings = [];
let textLanguage = "english";
//create object orderproducts
let orderproducts = new products(db);
//takes 2 parameters 1 for db one for drinks,bbq,exc

//Create eventhandlers for btns and menu for products
orderproducts.eventHandlerBtns(btn);
orderproducts.eventHandlerMenu(listmenu);


//to switch items in menu
function createprodcuts(e){
  document.querySelectorAll(".card").forEach(el => el.remove());
  if(e.target.textContent == 'Food'){
    orderproducts.createCards(0,cardContainer);
}
if(e.target.textContent == 'Snacks'){
  orderproducts.createCards(5,cardContainer);
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


  //eventlistener for the tablebooking
  document.getElementById("tableform").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  })


