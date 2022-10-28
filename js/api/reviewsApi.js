Promise.all([
    fetch('https://smuknu.webmcdm.dk/reviews/', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (reviewData) {
            let number = 0
            let test
            let review = "";
            for (let i = 0; i < reviewData.length; i++) {
                if (number == 0) {
                    test = 'content-left'

                    number++
                } else {
                    test = 'content-right'

                    number--
                }

                review += `
                <div class='review-content ${test}'>    
                <img class='review-image'src='${reviewData[i].image}'>
                <p class='review'>${reviewData[i].description}</p>
                <p class='name'> <strong>${reviewData[i].name}</strong></p>
                <p class='byline'>${reviewData[i].byline}</p>
                <br>
                <hr>
                <br>
                </div>
                `

                console.log(test);
            }

            document.querySelector('#review-container').innerHTML = review;
        }
        ),
]);