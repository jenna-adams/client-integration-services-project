function buttonClicked(){
    location.assign('https://jenna-client-services-integration.onrender.com/api/users');
}

const thisForm = document.getElementById('userForm');
thisForm.addEventListener('click', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    console.log(formData)
    const response = await fetch('https://jenna-client-services-integration.onrender.com/api/users/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});