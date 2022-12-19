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
        db[this.filter[number]].forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card")
        let {id, img, name, dsc, price, rate} = element;
        card.setAttribute("id", id)
            card.innerHTML = `
        <img
            class="card-img"
            src=${img}
            alt=""
        />
        <div class="card-text">
            <h2>${name}</h2>
            <p>rating: ${rate}</p>
            <p>
            ${dsc}
            <p>Rating: ${rate}</p>
            <p>
            ${dsc}.
            </p>
            <span class="card-price">${price} Sek</span>
        </div>
        <button class="add-to-cart">Add to cart</button>
        `;
        cardContainer.appendChild(card)
          });
    }
    eventHandlerBtns(btns){
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function (e) {
            getProduct(e.target);
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