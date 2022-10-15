const container = document.querySelector('.container');
selectBtn = container.querySelector('.select-btn');
searchInput = container.querySelector('input');
options = container.querySelector('.options');

let countries = [ "Algeria", "Argentina", "Australia",
    "Austria", "Belgium", "Brazil", "Bulgaria", "Canada",
    "China", "Colombia", "Cuba", "Czech Republic", "Denmark",
    "Egypt", "Finland", "France", "Germany", "Greece",
    "Hong Kong", "Hungary", "India", "Indonesia", "Iran", "Iraq"] ;


function AddCountry(SelectedCountry){
    options.innerHTML = "";
    countries.forEach(country => {
        //adding each country to a list tag and inserting
        // the list into the options class
        options.innerHTML += `<li onClick="updateName(this)">${country}</li>`;

        // let list = '<li>${country}</li>' ;
        // options.insertAdjacentHTML("beforeend", list);
    });
}
AddCountry();

//update name of country selected on search bar
function  updateName(selectedlist){
    container.classList.remove('active');
   selectBtn.firstElementChild.innerText = selectedlist.innerText;
}

//search country functionality

searchInput.addEventListener('keyup',() =>{
    let searchItem = [];
    let searchValue = searchInput.value.toLowerCase();

    searchItem = countries.filter(item => {
        return item.toLowerCase().startsWith(searchValue);

    }).map(item => '<li>${item}</li>').join("");
    options.innerHTML = searchItem ? searchItem : '<p> country not found!!</p>';


});

//toggle active class

selectBtn.addEventListener('click', () => {
    container.classList.toggle('active');

});



