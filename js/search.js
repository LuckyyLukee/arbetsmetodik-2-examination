const input = document.querySelector(".search-bar");
const searchResults = document.querySelector(".search-results")
const list = document.querySelector(".list");
// const filter = input.value.toLowerCase();

function setList(results) {
    for (let item of results) {
        const resultItem = document.createElement('li')
        resultItem.classList.add('result-item');
        const text = document.createTextNode(item.name)
        resultItem.appendChild(text);
        list.appendChild(resultItem);
    }
    if (results.length === 0){
        noResultsFound();
    }
}

input.addEventListener("input", (e) => {
    let search = e.target.value;
    searchResults.style.visibility = 'visible';

   if (search && search.trim().length > 0){
        search = search.toLowerCase();
        setList(db.drinks.filter(item => {
            return item.name.startsWith(search)
        }))
    } if (search && search.trim().length > 0){
        search = search.toLowerCase();
        setList(db.bbqs.filter(item => {
            return item.name.includes(search)
        }))
    } if (search && search.trim().length > 0){
        search = search.toLowerCase();
        setList(db.desserts.filter(item => {
            return item.name.includes(search)
        }))
    } else {
        clearList();
        searchResults.style.visibility = 'hidden';
    }
}
)

function clearList(){
    while(list.firstChild){
        list.removeChild(list.firstChild)
    }
}

function noResultsFound() {
    const error = document.createElement('li');
    error.classList.add('error-message')

    const text = document.createTextNode('No results')

    error.appendChild(text);
    list.appendChild(error);
}

// const food = document.getElementsByClassName('card')
// const searchFoods = [];
// const input = document.querySelector(".search-bar");
// let query;
// console.log(input)

// input.addEventListener("keydown", (e) => {
//     query = input.value;
//     search(e);
// })

// function search(e){
// for (var i = 0; i < food.length; i++) {
// searchFoods.push({name: food[i].id.toLowerCase()});
// }
// //your input from search bar
//   let query = 'New';
//   //create a search from querry
//   let search = searchFoods.filter(option => option.name.startsWith(query.toLowerCase()));
//   for(var a = 0; a < search.length; a++){
//     console.log(search[a].name) 
//     for (var i = 0; i < food.length; i++){  
//           if(search[a].name != food[i].id.toLowerCase()){
//           food[i].remove();
//           }
//       }
//   }
// }
