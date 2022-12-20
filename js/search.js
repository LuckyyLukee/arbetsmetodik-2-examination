const food = document.getElementsByClassName('card')
const searchFoods = [];
const input = document.querySelector(".search-bar");
let query;
console.log(input)

input.addEventListener("keydown", (e) => {
    query = input.value;
    search(e);
})

function search(e){
for (var i = 0; i < food.length; i++) {
searchFoods.push({name: food[i].id.toLocaleLowerCase()});
}
//your input from search bar
  let query = 'New';
  //create a search from querry
  let search = searchFoods.filter(option => option.name.startsWith(query.toLowerCase()));
  for(var a = 0; a < search.length; a++){
    console.log(search[a].name) 
    for (var i = 0; i < food.length; i++){  
          if(search[a].name != food[i].id.toLocaleLowerCase()){
          food[i].remove();
          }
      }
  }
}