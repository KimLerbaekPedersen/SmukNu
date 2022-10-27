const onSubmit = (event) => {

    event.preventDefault();

    let resultElement = document.querySelector('.valid-message');
    const getFormName = document.querySelector('.form-name');

    let postObj = {
        "name" : event.target.elements.name.value,
        "email" : event.target.elements.email.value,
        "message" : event.target.elements.message.value,
    } 

fetch('https://smuknu.webmcdm.dk/subscribe', {
    method: 'POST',
    body: JSON.stringify(postObj),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    }   
})
.then((response) => {
    console.log('--->', response, response.ok)
    
    return response.json()
})
.then(response => {
    console.log('--->hey') 
    // GET THE RESPONSE MESSAGE BOTH SUCCES AND ERROR 
    if(response.result.name !== undefined){

        getFormName.innerHTML = response.result.name

    }else{
        resultElement.innerHTML = `<h1 class='bad-response-txt' style='font-size: 30px;'>${response.result}</h1>`
    }
    // GET THE RESPONSE MESSAGE BOTH SUCCES AND ERROR 

    // SHOW VALIDATION MESSAGE START 
        document.querySelector('.valid-message').style.display = 'block';
    // SHOW VALIDATION MESSAGE END 
})
}
const creatForm = document.querySelector('.medlem-form-section');
creatForm.addEventListener('submit', onSubmit)