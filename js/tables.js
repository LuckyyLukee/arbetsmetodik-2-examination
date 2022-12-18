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
            let info = document.createElement("div");
            info.innerHTML = this.orders;
            maincontainer.append('table number: ' + this.tablenumber + ' ' , this.name)
            maincontainer.append(info);
    }
    
}