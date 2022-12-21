const food = document.getElementsByClassName('card');
const searchFoods = [];
const input = document.querySelector(".search-bar");
let query;

input.addEventListener("keydown", (e) => {
    if (input.value != "") {
    query = input.value;
    search(e);
    }
})

function search(e){
for (var i = 0; i < food.length; i++) {
searchFoods.push({name: food[i].id.toLocaleLowerCase()});
}
  let search = searchFoods.filter(option => option.name.startsWith(query.toLowerCase()));
  for(var a = 0; a < search.length; a++){
    for (var i = 0; i < food.length; i++){  
          if(search[a].name != food[i].id.toLocaleLowerCase()){
        cardContainer.appendChild(food[i]);
          }else{
           
          }
      }
  }
  search.splice(0,search.length)
  searchFoods.splice(0, searchFoods.length)
}