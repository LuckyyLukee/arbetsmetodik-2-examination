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
        const product = [products, parseInt(price)]
        this.orders.push(product);
    } 
    showOrders(maincontainer){
            document.querySelectorAll(".info").forEach(el => el.remove());
            for(let i = 0; i < this.orders.length; i++){
                let info = this.createDom();
                info[1].addEventListener("click", function (e) {
                        removeOrder(e, i);     
                })
                info[0].innerHTML = this.orders[i]
                maincontainer.append(info[0]);
                info[0].append(info[1])
                this.totalSum();
            }
    }
    createDom(){
        let btn = document.createElement("BUTTON");
        btn.className = 'btninfo'
        btn.innerHTML = "X";
        let info = document.createElement("div");
        info.className = "info"
        return [info, btn];
    }

    totalSum(){
        var sum  = 0;
        for (const item of this.orders) {
            sum = sum += item[1];
          }
          console.log(sum); 
          sumTotal.innerText = sum + " :-";
    }
}