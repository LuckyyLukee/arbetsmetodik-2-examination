class products{
    constructor(db){
        this.db = Object.entries(db);
    }
    createCards(prod){
       //fix function to select drinks,bbq exc
        for(let i=0; i < this.db[15][1].drinks; i++){
            //LOOP FOR CARDS
            console.log(this.db[6][1][i].id)
            console.log(this.db[6][1][i].name)
            console.log(this.db[6][1][i].price)
          }
          
    }
    
}