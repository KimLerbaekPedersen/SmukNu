Promise.all([
    fetch('https://smuknu.webmcdm.dk/products/', {
        headers: {
            Accept: 'application/json'
        }
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(productData) {

            let product = "";
            for (let i = 0; i < productData.length; i++) {
                if (recommended == true){   
                product += `
                    <div class='product-api-container'>
                        <img class='product-image' src='${productData[i].image}'>
                            <div class='product'>
                                <h1>${productData[i].title}</h1>
                                <p class='product-headline'>${productData[i].price}</p>
                            </div>
                    </div>
                  `
                }
            }
            document.querySelector('#product-container').innerHTML = product;
        }
    ),
]);