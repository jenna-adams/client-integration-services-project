function buttonClicked(){
    location.assign('https://jenna-client-services-integration.onrender.com/api/users');
}

function userButton(){
    const userValue = document.getElementById('token').value;
    console.log(userValue)
}

function loadButton(){
    const loadValue = document.getElementById('loadID').value;
    console.log(loadValue)
}