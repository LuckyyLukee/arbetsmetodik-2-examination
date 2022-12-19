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

    if (search && search.trim().length > 0){
        search = search.toLowerCase();
        setList(db.breads.filter(item => {
            return item.name.includes(search)
        }))
    } else {
        clearList();
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

function updateList() {

}
