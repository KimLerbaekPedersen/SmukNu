Promise.all([
    fetch('https://smuknu.webmcdm.dk/products/', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (recommendedData) {

            let product = "";
            for (let i = 0; i < recommendedData.length; i++) {
                    product += `
                    <div class='product-api-container'>
                    <div class='discount-container'>
                        ${recommendedData[i].discountInPercent == '' ? '' : `<p class='discount'>spar ${recommendedData[i].discountInPercent}%</p>`} 
                    </div>    
                        <img class='product-image'src='${recommendedData[i].image}'>
                            <div class='product-headline'>
                                <p class='title'>${recommendedData[i].title}</p>
                                <p class='product-price'>${recommendedData[i].price},00kr.</p>
                            </div>
                    </div>
                `
            }
            document.querySelector('#product-container').innerHTML = product;
        }
        ),
]);