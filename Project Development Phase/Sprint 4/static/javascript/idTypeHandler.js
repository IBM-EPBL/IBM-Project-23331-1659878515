function changeIdType() {
    let idType = document.querySelector('input[name="uid"]');
    console.log(idType);
    if (this.value == 'mail') {
        idType.type = 'email';
        idType.setAttribute('placeholder', 'Email address');
        idType.removeAttribute('pattern');
    }
    else {
        idType.type = 'tel';
        idType.setAttribute('pattern', '[0-9]{10}')
        idType.setAttribute('placeholder', 'Phone Number');
    }
}

document.querySelector('select[name="utype"]').addEventListener('change', changeIdType);