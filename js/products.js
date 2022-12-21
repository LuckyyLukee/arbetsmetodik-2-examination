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
    }
    createCards(number,maincontainer){

        let selectedTwelwe = this.db[this.filter[number]].slice(0, 12)

        selectedTwelwe.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card")
        let {id, img, name, dsc, price, rate} = element;
        card.setAttribute("id", name,)
        card.setAttribute("price" , price)
            card.innerHTML = `
        <img
            class="card-img"
            src=${img}
            alt=${name}
        />
        <div class="card-text">
            <h2>${name}</h2>
            <p>rating: ${rate}</p>
            <p>
            ${dsc}
            </p>
            <span class="card-price">${price} Sek</span>
        </div>
        <button class="add-to-cart">Add to cart</button>
        `;
        cardContainer.appendChild(card)
          });
    }
    eventHandlerBtns(btns){
        for (let i = 0; i < btns.length; i++) {
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

}