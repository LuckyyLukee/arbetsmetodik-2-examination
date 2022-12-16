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
    createCards(db,number){
        db[this.filter[number]].forEach(element => {
            let {id, img, name, dsc, price, rate} = element;
            console.log(element)
          });
    }
}