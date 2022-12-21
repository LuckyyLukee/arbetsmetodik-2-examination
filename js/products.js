class products{
    constructor(db){
        this.db = db;
        this.filter =[
            "bbqs",
            "best-foods",
            "breads",
            "burgers",
            "chocolates",
            "desserts",
            "drinks",
            "fried-chicken",
            "ice-cream",
            "pizzas",
            "porks",
            "sandwiches",
            "sausages",
            "steaks",
            "our-foods"
        ]
        this.total;
    }
    createCards(number,maincontainer){
        let selectedTwelwe = this.db[this.filter[number]].slice(0, 12)
selectedTwelwe.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card")
        let {id, img, name, dsc, price, rate} = element;
        card.setAttribute("data-product", id,)
        card.setAttribute("id", name,)
        card.setAttribute("price" , price)
            card.innerHTML = `
        <img
            class="card-img"
            src=${img}
            alt=""
        />
        <div class="card-text">
            <h2>${name}</h2>
            <p>Rating: ${rate}</p>
            <p>
            ${dsc}.
            </p>
            <span class="card-price">${price} sek</span>
        </div>
        <button class="add-to-cart">Add to cart </button>
        `;
        cardContainer.appendChild(card)
          });
    }
    eventHandlerBtns(btns){
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function (e) {
            getProduct(e.target);
            // let orders = document.querySelector(".ordersection");
            orders.style.visibility = "visible";
            })
           }
        }
        eventHandlerMenu(listmenu){
            for (let i = 0; i < listmenu.length; i++) {
                listmenu[i].addEventListener("click", function (e) {
                createprodcuts(e);
              
                })
               }
            }
            eventHandlerCheckout(checkout){
                var sum  = 0;
                for (let i = 0; i < checkout.length; i++) {
                    checkout[i].addEventListener("click", function (e) {
                    sum = sum += bookings[0].sendOrder();
                    let p = document.createElement("p");
                    p.innerHTML = sum;
                    carticon.appendChild(p);
    
                    })
                   }
                }

}