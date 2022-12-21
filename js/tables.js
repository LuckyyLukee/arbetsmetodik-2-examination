class table {
    constructor(name, tablenumber) {
        this.name = name;
        this.tablenumber = tablenumber;
        this.orders = [];
        this.sum;
    }
    getTable() {
        console.log(this.name, this.tablenumber)
        return this.name + this.tablenumber;
    }
    getOrders(products, price) {
        const product = [products, parseInt(price)]
        this.orders.push(product);
    }
    showOrders(maincontainer) {
        document.querySelectorAll(".info").forEach(el => el.remove());
        for (let i = 0; i < this.orders.length; i++) {
            let info = this.createDom();
            info[1].addEventListener('click', e => this.removeOrder(e, i));
            info[0].innerHTML = this.orders[i]
            maincontainer.append(info[0]);
            info[0].append(info[1])
            this.totalSum();
        }
    }
    showName() {
        let info = this.createDom();
        let name = info[2].innerhtml = this.name;
        return name;
    }
    showTable() {
        let info = this.createDom();
        let table = info[3].innerhtml = this.tablenumber;
        return table;
    }
    createDom() {
        let btn = document.createElement("BUTTON");
        btn.className = 'btninfo'
        btn.innerHTML = "X";
        let info = document.createElement("div");
        info.className = "info"
        let bookingName = document.createElement("div");
        bookingName.className = "booking-name"
        let bookingTable = document.createElement("div");
        bookingTable.className = "booking-table"
        return [info, btn, bookingName, bookingTable];
    }

    totalSum() {
        var sum = 0;
        for (const item of this.orders) {
            sum = sum += item[1];
        }
        this.sum = this.calcMoms(sum, 1.25);
        sumTotal.innerText = this.calcMoms(sum, 1.25) + " :-";
    }
    sendOrder() {
        this.orders.splice(0, this.orders.length)
        orders.style.visibility = 'hidden';
        return this.sum;
    }
    removeOrder(e, x) {
        this.orders.splice(x, 1)
        this.showOrders(order);
        if (this.orders.length == 0) {
            sumTotal.innerText = '';
            orders.style.visibility = 'hidden';
        }
    }
    calcMoms(sum, moms) {
        let sumWithMoms = sum * moms;
        return sumWithMoms
      }
      

}