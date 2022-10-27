const onSubmit = (event) => {

    event.preventDefault();

    let resultElement = document.querySelector('.valid');
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
.then((res) => {
    console.log('--->', res, res.ok)
    
    return res.json()
})
.then(res => {
    console.log('--->hey') 
    // GET THE RESPONSE MESSAGE BOTH SUCCES AND ERROR 
    if(res.result.name !== undefined){

        getFormName.innerHTML = res.result.name

    }else{
        resultElement.innerHTML = `<h1 class='bad-response-txt' style='font-size: 30px;'>${res.result}</h1>`
    }
    // GET THE RESPONSE MESSAGE BOTH SUCCES AND ERROR 

    // SHOW VALIDATION MESSAGE START 
        document.querySelector('.valid').style.display = 'block';
    // SHOW VALIDATION MESSAGE END 
})
}
const contactForm = document.querySelector('.medlem-form-section');
contactForm.addEventListener('submit', onSubmit)