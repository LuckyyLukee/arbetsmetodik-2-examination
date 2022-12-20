const food = document.getElementsByClassName('card')
const searchFoods = [];

function search(){
for (var i = 0; i < food.length; i++) {
searchFoods.push({name: food[i].id.toLocaleLowerCase()});
}
//your input from search bar
  let query = 'New';
  //create a search from querry
  let search = searchFoods.filter(option => option.name.startsWith(query.toLowerCase()));

  
  for(var a = 0; a < search.length; a++){

    for (var i = 0; i < food.length; i++){  
          if(search[a].name === food[i].id.toLocaleLowerCase()){
          food[i].style.visibility='hidden';
          console.log(search[a].name) 
         
          }
      }
  }
  
}