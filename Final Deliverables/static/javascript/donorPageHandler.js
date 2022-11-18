let links = document.querySelectorAll('.show-medcert');
let link_list = [].slice.call(links), child;

let loop_len = document.querySelectorAll('.extVars div')[0].innerHTML;
let session_bgroup = document.querySelectorAll('.extVars div')[1].innerHTML;    //get variables defined in jinja

link_list.forEach(function (item) {     //check if user has uploaded medical certificate
    item.addEventListener('click', function () {
        let data_id = item.getAttribute('data-id');

        //display in appropriate manner based on the file extension of the user uploaded file
        document.querySelector('.modal-body').innerHTML = data_id == "None" ?
            '<p>Medical Certificate was not provided by the donor</p>'
            :
            `<${data_id.includes('.pdf') ? 'iframe' : 'img'} 
                                                            width=${data_id.includes('.pdf') ? "100%" : "auto"} class="h-100 overflow-scroll"
                                                        src="${data_id}">
                                                    </${data_id.includes('.pdf') ? 'iframe' : 'img'}>`;
    })
});

let uname_list = [], uid_list = [], reqbtn = [];

for (let i = 0; i < loop_len; i++) {    //listen for click events in plasma request buttons
    reqbtn[i] = document.getElementById('reqbtn-' + i)
    reqbtn[i].addEventListener('click', function () {
        callRequest(i);
    })
    uname_list.push(document.getElementById('uname-' + i));
    uid_list.push(document.getElementById('uid-' + i));
}


function callRequest(i) {   //post a request to app.py in order to generate Email/WhatsApp alerts
    let username = uname_list[i].innerHTML, userid = uid_list[i].innerHTML;
    const req = new XMLHttpRequest()
    req.open('POST', `/processRequestPlasma/${JSON.stringify({ "uname": username, "uid": userid })}`);
    req.send();
    reqbtn[i].setAttribute('disabled', 'true');
    reqbtn[i].innerHTML += "ed";
}


function card_handler(card_children, val, hide) {   //show or hide donors based on the selected filters

    card_children.forEach(function (card_child, index) {

        if (card_child.innerHTML == val)
            if (hide)
                donor_card[index].classList.add('d-none');
            else
                donor_card[index].classList.remove('d-none');

    });
}


let bgfilter = document.querySelectorAll('#bgfilter div input');
let donor_card = document.querySelectorAll('.donor-card');
let card_bgroup = document.querySelectorAll('.card .card-body div .bgroup span');


bgfilter.forEach(function (item) {  //call card_handler() based on the blood group filter
    item.addEventListener('change', function () {
        card_handler(card_bgroup, item.value, !item.checked);
    })
});


let bgradio = document.querySelectorAll('input[name="bg-radio"]');
let allGroups = ['O +ve', 'A +ve', 'B +ve', 'AB +ve', 'O -ve', 'A -ve', 'B -ve', 'AB -ve'];

bgradio.forEach(function (item) {   //handle the radio group to switch between all and matching donors
    item.addEventListener('change', function () {
        handleBgRadio();
    })
});

function handleBgRadio() {
    if (bgradio[1].checked)  //if user wants matching donors
        matchBlood(session_bgroup); //pass patient's blood group as argument to find matching donors

    else                    //if users wants to see all donors
        filterCheckHandler(allGroups);  //show all groups
}

function matchBlood(patbg) { //filter eligible donors based on blood group compatibility for plasma

    if (patbg == 'A')
        filterCheckHandler(['A +ve', 'A -ve', 'AB +ve', 'AB -ve']);

    else if (patbg == 'B')
        filterCheckHandler(['B +ve', 'B -ve', 'AB +ve', 'AB -ve']);

    else if (patbg == 'AB')
        filterCheckHandler(['AB +ve', 'AB -ve']);

    else if (patbg == 'O')
        filterCheckHandler(allGroups);  //accepts plasma from all blood groups
}

function filterCheckHandler(arr) {  //auto check or uncheck blood group toggles based on radio group selection

    for (let i = 0; i < 8; i++) {
        bgfilter[i].checked = arr.includes(allGroups[i]);
        card_handler(card_bgroup, bgfilter[i].value, !bgfilter[i].checked);
    }
}