const cardContainer = document.querySelector('.featured-grid')
const  btn = document.getElementsByTagName('button');
const tableform = document.querySelector('tableform')
const bookings = [];
//create object products
let orderproducts = new products(db);
//takes 2 parameters 1 for db one for drinks,bbq,exc
orderproducts.createCards(6,cardContainer);
orderproducts.eventHandler(btn);

//get id from products clicked do calculations in product class
function getProduct(product){
  console.log(product.parentNode.getAttribute('id'))
  orderproducts.calcPrice(product.parentNode.getAttribute('id'))
  for(book in bookings){
    console.log(bookings);
  }

 } 
// get data from the form, move to table class?
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




  
