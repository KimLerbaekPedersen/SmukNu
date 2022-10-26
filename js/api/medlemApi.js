const onSubmit = (e) => {

    e.preventDefault();

    let resultElement = document.querySelector('.valid');
    const getFormName = document.querySelector('.form-name');

    let postObj = {
        "name" : e.target.elements.name.value,
        "email" : e.target.elements.email.value,
        "message" : e.target.elements.message.value,
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
    if(response.result.name !== undefined){

    getFormName.innerHTML = response.result.name

    }else{
        resultElement.innerHTML = `<h1 class='bad-response-txt' style='font-size: 30px;'>${response.result}</h1>`
    }
    // SHOW VALIDATION MESSAGE START 
        document.querySelector('.valid').style.display = 'block';
    // SHOW VALIDATION MESSAGE END 
})

}
  
const contactForm = document.querySelector('.medlem-form-section');
contactForm.addEventListener('submit', onSubmit)


