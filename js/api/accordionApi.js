Promise.all([
    fetch('https://smuknu.webmcdm.dk/questions', {
        headers: {
            Accept: 'application/json'
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (accordionData) {

            let acc = "";
            for (let i = 0; i < accordionData.length; i++) {
                acc += `
                <button class="accordion acc-border border-top"><p>${accordionData[i].question}</p></button>
                <div class="panel">
                    <p>${accordionData[i].answer}</p>
                </div>
        
                `
            }
            document.querySelector('#accordion').innerHTML = acc;

            // OPEN AND CLOSE ACCORDION START
            let openAcc = document.querySelectorAll(".accordion");

            for (i = 0; i < openAcc.length; i++) {
                openAcc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    let panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }
            // OPEN AND CLOSE ACCORDION END
        }
        ),
]);

