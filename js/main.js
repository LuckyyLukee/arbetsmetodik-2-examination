const cardContainer = document.querySelector('.featured-grid');

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
  //create object products
  let product = new products(db);
  //takes 2 parameters 1 for db one for drinks,bbq,exc
    product.createCards(db,6,cardContainer);

  //eventlistener for the tablebooking
  document.getElementById("tableform").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  })


// Open cart and show products in cart
document.querySelector(".cart-icon").addEventListener('click', function() {
  document.getElementById('cart').classList.toggle('hide');
});
