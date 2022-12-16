const cardContainer = document.querySelector('.featured-grid')

filter = [
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

db[filter[0]].forEach(element => {
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
            <p>${rate}</p>
            <p>
            ${dsc}
            </p>
            <span class="card-price">${price}</span>
        </div>
        <button class="add-to-cart">Add to cart</button>
        `;
    cardContainer.appendChild(card)
});

