
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
      console.log(bookings)
  }

prod.createCards()

  //eventlistener for the tablebooking
  document.getElementById("tableform").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  })