
let bookings = [];
// get data from the form
function getData(form) {
    let formData = new FormData(form);
    let tablebooking = Object.fromEntries(formData);
    console.log(tablebooking);
    let booking = new table(tablebooking.name, tablebooking.selectTable);
    bookings.push(booking);
    for(booking in bookings){
        if(bookings.length > 1){
        if(bookings[booking].tablenumber == tablebooking.selectTable){
            console.log("finns redan")
            bookings.splice(booking,3)
        }else{
            console.log("finns inte")
        }
    }
    }
    console.log(bookings);
  }













  //eventlistener for the tablebooking
  document.getElementById("tableform").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  })