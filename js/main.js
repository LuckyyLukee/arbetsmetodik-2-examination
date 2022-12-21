//random variabels
const cardContainer = document.querySelector('.featured-grid')
const  btn = document.getElementsByTagName('button');
const tableform = document.querySelector('tableform')
const listmenu = document.querySelectorAll('li');
const order = document.querySelector('.orders');
const sumTotal = document.querySelector('.sum-total');
const orders = document.querySelector('.ordersection');
const bookName = document.querySelector('.booking-name');
const bookTable = document.querySelector('.booking-table')
const bookings = [];

//create object orderproducts
let orderproducts = new products(db);
//takes 2 parameters 1 for db one for drinks,bbq,exc


//Create eventhandlers for btns and menu for products
orderproducts.eventHandlerBtns(btn);
orderproducts.eventHandlerMenu(listmenu);
//remove orders
//remove orders

function calcMoms(sum,moms){
  let sumWithMoms = sum * moms;
  return sumWithMoms
}

function removeOrder(e, x){
  bookings[0].orders.splice(x, 1)
      bookings[0].showOrders(order);

  if (bookings[0].orders.length == 0) {
    sumTotal.innerText = '';
    orders.style.visibility = 'hidden';
  }
}

//to switch items in menu
function createprodcuts(e){
  
  document.querySelectorAll(".card").forEach(el => el.remove());
  if(e.target.id == 'Food'){
    orderproducts.createCards(0,cardContainer);
}
if(e.target.id == 'Snacks'){
  orderproducts.createCards(5,cardContainer);
}
if(e.target.id == 'Drinks'){
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
    } else{
        console.log("finns inte")
        bookings.push(booking);
      }
  }

function styleCart() {
  const bookVisibility = document.querySelector('.landing-page');
  const featuresVisibility = document.querySelector('.featured > h1')
  bookVisibility.style.visibility = "hidden";
  featuresVisibility.style.visibility = "visible";
  bookName.append(bookings[0].showName())
  console.log(bookings[0].showName());
  bookTable.append(bookings[0].showTable())
  console.log(bookings[0].showTable());

}


  //eventlistener for the tablebooking
document.getElementById("tableform").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
  styleCart();
})




const swedishButton = document.querySelector(".swedish");
swedishButton.addEventListener("click", function() {
  document.getElementById('Drinks').innerHTML = "Dryck";
  document.getElementById('Food').innerHTML = "Mat";
  document.getElementById('Snacks').innerHTML = "Fika";
  document.getElementById('name-lbl').innerHTML = "Namn*";
  document.getElementById('table-lbl').innerHTML = "Välj bord*";
  document.getElementById('features-lbl').innerHTML = "Dagens Val";
  document.getElementById('name').placeholder = "Sätt in namn";
  document.getElementsByClassName('search-bar').placeholder = "Sök";
  document.getElementsByClassName('in-cart').innerHTML = "Ordrar";
  document.getElementsByClassName('checkout-btn').innerHTML = "Till Kassan";
  document.getElementsByClassName('footer-lbl').innerHTML = "Bilder från Pixabay";
  const languagePage = document.querySelector('.language-container');
  languagePage.style.visibility = "hidden";
  languagePage.style.zIndex = "29";
});

const englishbutton = document.querySelector(".english")
englishbutton.addEventListener("click", function() {
  const languagePage = document.querySelector('.language-container');
  languagePage.style.visibility = "hidden";
  languagePage.style.zIndex = "29";
});

