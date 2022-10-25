Promise.all([
    fetch('https://smuknu.webmcdm.dk/products/', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(prodoctData) {

            let portfolioPics = "";
            for (let i = 0; i < 4; i++) {
            portfolioPics += `
            `
            }
            document.querySelector('#portfolio-img').innerHTML = portfolioPics;
        }
    ),
]);