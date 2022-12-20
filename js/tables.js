class table{
    constructor(name, tablenumber){
        this.name = name;
        this.tablenumber = tablenumber;
        this.orders = [];
    }
    getTable(){
        console.log(this.name, this.tablenumber)
        return this.name + this.tablenumber;
    }
    
    getOrders(products,price){
        const product = [products, price]
        this.orders.push(product);
        console.log(this.orders)
    }
    showOrders(maincontainer){
            document.querySelectorAll(".info").forEach(el => el.remove());
            for(let i = 0; i < this.orders.length; i++){
                let info = document.createElement("div");
                info.className = "info"
                info.innerHTML = this.orders[i]
                maincontainer.append(info);
            }
      
    }
    
}