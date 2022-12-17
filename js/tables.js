class table{
    constructor(name, tablenumber, isbooked = false){
        this.name = name;
        this.tablenumber = tablenumber;
        this.isbooked = isbooked;
    }
    getTable(){
        return this.name + this.tablenumber;
    }
    
}