function buttonClicked(){
    location.assign('https://jenna-client-services-integration.onrender.com/api/users');
}

const thisForm = document.getElementById('form');
console.log(thisform)
formData = new FormData(thisForm).entries()
console.log(formData)
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    consolelog(fromEntries)
    const response = await fetch('https://jenna-client-services-integration.onrender.com/api/users/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    const result = await response.json();
    console.log(result)
});