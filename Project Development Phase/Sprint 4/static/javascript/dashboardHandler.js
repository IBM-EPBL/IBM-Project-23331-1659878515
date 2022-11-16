let medform = document.forms['medform'];
let fields = [medform['gender'], medform['bgroup'], medform['rh']];
let counter = 0;

fields.forEach(function(field){

    for(let i=0; i < field.options.length; i++)
        if(field.options[i].value == fnames[counter])
            field.selectedIndex = i;
    counter+=1;

});

medform.addEventListener('submit', e => {
    fields.forEach(function(field){
        if(field.selectedIndex == 0){
            field.focus();
            e.preventDefault();
        }
    });
});


let headers = new Headers();
headers.append("X-CSCAPI-KEY", "QWhITWNrZktqcjJGQzhQb1BXY2tPclRnNkxxWmZvUU5hNlF6Tmp6bA==");

let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

let state_select = medform['st'], city_select = medform['city'];    //state and city dropdowns
let selected_code, st_data;

state_select.addEventListener('change', function(){
    initCity();
});

fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions) //fetch list of states and union territories
    .then(response => response.json())
    .then(state_vals => init(state_vals))
    .catch(error => console.log('error', error));


function init(state_vals) {  //populate state dropdown with the fetched values
    st_data = state_vals;

    st_data.sort((x, y) => {     //sort states in alphabetical order
        let a = x['name'], b = y['name'];
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    })

    for (let i = 0; i < st_data.length; i++) {
        state_select.innerHTML += '<option value="' + st_data[i]['name'] + '">' + st_data[i]['name'] + '</option>';
    }

    selectDefault(state_select, 0);
}


function populate(cities) {  //populate list with the fetched states
    
    city_select.innerHTML = '<option value="..." hidden selected>...</option>'; //initiate dropdown before filling new city values

    for (let i = 0; i < cities.length; i++)
        city_select.innerHTML += '<option value="' + cities[i]['name'] + '">' + cities[i]['name'] + '</option>';

    selectDefault(city_select, 1);
}

function selectDefault(field, c){

    for(let i=0; i < field.options.length; i++)
        if(field.options[i].value == def_names[c])
            field.selectedIndex = i;

    if(field == state_select)
        initCity();

}

function initCity() {     //listen to changes in the state dropdown list
    
    if(state_select.selectedIndex == 0) //return if state list is still empty or being fetched from the api
        return;

    for (let i = 0; i < st_data.length; i++) 
        if (st_data[i]['name'] == state_select.value)
            selected_code = st_data[i]['iso2'];     //find the two letter code of the currently selected state

    fetch("https://api.countrystatecity.in/v1/countries/IN/states/" + selected_code + "/cities", requestOptions)    //fetch cities in the selected state
        .then(response => response.json())
        .then(cities => populate(cities))
        .catch(error => console.log('error', error));
}