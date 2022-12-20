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
            return item.name.startsWith(search)|| item.id.includes(search)
        }))
    } if (search && search.trim().length > 0){
        search = search.toLowerCase();
        setList(db.bbqs.filter(item => {
            return item.name.startsWith(search) || item.id.includes(search)
        }))
    } if (search && search.trim().length > 0){
        search = search.toLowerCase();
        setList(db.desserts.filter(item => {
            return item.name.startsWith(search) || item.id.includes(search)
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

// input.addEventListener('input', (e) => {
//     let input = e.target.value; 
//     console.log(input)
//     return input;
// })

// input.addEventListener('input', search);

// function search(){
// for (var i = 0; i < food.length; i++) {
// searchFoods.push({name: food[i].id.toLocaleLowerCase()});
// }
// //your input from search bar

// //   let query = input; 
//   //create a search from querry
//   let search = searchFoods.filter(option => option.name.startsWith(input.toLowerCase()));

  
//   for(var a = 0; a < search.length; a++){

//     for (var i = 0; i < food.length; i++){  
//           if(search[a].name === food[i].id.toLocaleLowerCase()){
//           food[i].style.visibility='hidden';
//           console.log(search[a].name) 
         
//           }
//       }
//   }
  
// }

