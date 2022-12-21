class products {
    constructor(db) {
        this.db = db;
        this.filter = [
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
    createCards(number, maincontainer) {
        this.db[this.filter[number]].slice(0, 12).forEach(element => {
            let card = document.createElement("div");
            card.classList.add("card")
            let { id, img, name, dsc, price, rate } = element;
            card.setAttribute("data-product", id,)
            card.setAttribute("id", name,)
            card.setAttribute("price", price)
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
    eventHandlerBtns(btns) {
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", function (e) {
                getProduct(e.target);
                orders.style.visibility = "visible";
            })
        }
    }
    eventHandlerMenu(listmenu) {
        for (let i = 0; i < listmenu.length; i++) {
            listmenu[i].addEventListener('click', e => this.createprodcuts(e));
        }
    }
    createprodcuts(e) {
        document.querySelectorAll(".card").forEach(el => el.remove());
        if (e.target.id == 'Foods') {
            this.createCards(0, cardContainer);
        }
        if (e.target.id == 'Snacks') {
            this.createCards(5, cardContainer);
        }
        if (e.target.id == 'Drinks') {
            this.createCards(6, cardContainer);
        }
        this.eventHandlerBtns(btn);
        this.eventHandlerMenu(listmenu);
    }
    eventHandlerCheckout(checkout) {
        var sum = 0;
        for (let i = 0; i < checkout.length; i++) {
            checkout[i].addEventListener("click", function (e) {
                document.querySelectorAll(".p-total").forEach(el => el.remove());
                sum = sum += bookings[0].sendOrder();
                let p = document.createElement("p");
                p.classList.add('p-total')
                p.innerHTML = sum;
                carticon.appendChild(p);
            })
        }
    }
    

}