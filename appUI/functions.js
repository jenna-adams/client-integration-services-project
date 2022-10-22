function buttonClicked(){
    location.assign('https://jenna-client-services-integration.onrender.com/api/users');
}

function userButton(){
    const userValue = document.getElementById('token').value;
    console.log(userValue)
    location.assign('https://jenna-client-services-integration.onrender.com/api/user/' + String(userValue));
}

function loadButton(){
    const loadValue = document.getElementById('loadID').value;
    console.log(loadValue)
    location.assign('https://jenna-client-services-integration.onrender.com/api/loads/' + String(loadValue));
}