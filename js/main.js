//All the queryselectors
const cardContainer = document.querySelector('.featured-grid')
const btn = document.getElementsByClassName('add-to-cart');
const checkoutbtn = document.getElementsByClassName('checkout-btn');
const tableform = document.querySelector('tableform')
const listmenu = document.querySelectorAll('li');
const order = document.querySelector('.orders');
const sumTotal = document.querySelector('.sum-total');
const orders = document.querySelector('.ordersection');
const bookName = document.querySelector('.booking-name');
const bookTable = document.querySelector('.booking-table');
const carticon = document.querySelector('.cart-icons');
const bookings = [];
const food = document.getElementsByClassName('card');
const bookVisibility = document.querySelector('.landing-page');
const featuresVisibility = document.querySelector('.featured > h1')
const languagePage = document.querySelector('.language-container');
const englishbutton = document.querySelector(".english")
const swedishButton = document.querySelector(".swedish");

//Create eventhandlers for btns and menu for products
let orderproducts = new products(db);
orderproducts.eventHandlerBtns(btn);
orderproducts.eventHandlerMenu(listmenu);
orderproducts.eventHandlerCheckout(checkoutbtn);


//Get the orders, do methods from table class
function getProduct(product) {
  bookings[0].getOrders(product.parentNode.getAttribute('id'), product.parentNode.getAttribute('price'));
  bookings[0].showOrders(order)
}

// get data from the form, create a object table in bookings array
function getData(form) {
  let formData = new FormData(form);
  let tablebooking = Object.fromEntries(formData);
  let booking = new table(tablebooking.name, tablebooking.selectTable);
  if (bookings.some(e => e.tablenumber === tablebooking.selectTable)) {
    alert("booked");
  } else {
    bookings.push(booking);
  }
}

function styleCart() {
  bookVisibility.style.visibility = "hidden";
  featuresVisibility.style.visibility = "visible";
  bookName.append(bookings[0].showName())
  bookTable.append(bookings[0].showTable())
}

//eventlistener for the tablebooking
document.getElementById("tableform").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
  styleCart();
})

//translate
swedishButton.addEventListener("click", function() {
  cardContainer.classList.add("swe");
  
  document.getElementById('Drinks').innerHTML = "Dryck";
  document.getElementById('Foods').innerHTML = "Mat";
  document.getElementById('Snacks').innerHTML = "Fika";
  document.getElementById('name-lbl').innerHTML = "Namn*";
  document.getElementById('table-lbl').innerHTML = "Välj bord*";
  document.getElementById('features-lbl').innerHTML = "Dagens Val";
  document.getElementById('name').placeholder = "Sätt in namn";
  input.placeholder = "Sök";
  document.getElementsByClassName('in-cart').innerHTML = "Ordrar";
  document.getElementsByClassName('checkout-btn').innerHTML = "Beställ";
  document.getElementsByClassName('footer-lbl').innerHTML = "Bilder från Pixabay";
  const languagePage = document.querySelector('.language-container');
  languagePage.style.visibility = "hidden";
  languagePage.style.zIndex = "29";

  input.placeholder = "sök"

});

englishbutton.addEventListener("click", function() {
  const languagePage = document.querySelector('.language-container');
  languagePage.style.visibility = "hidden";
  languagePage.style.zIndex = "29";
});

