document.addEventListener("DOMContentLoaded", function() {
    const amount = document.getElementById("amount");
    const originCurrency = document.getElementById("originCurrency");
    const targetCurrency = document.getElementById("targetCurrency");
    const convert = document.getElementById("convert");
    const result = document.getElementById("result");
    const closeButton = document.getElementById("closeButton");

    const apiKey= "MdANcUS3Q4meavVL2BqEbQ==jYijBPbvHQrCi72W";

    if (convert) {
        convert.addEventListener('click', () => {
            const amountTotal = amount.value;
            const origin = originCurrency.value;
            const target = targetCurrency.value;
            const url = `https://api.api-ninjas.com/v1/convertcurrency?have=${origin}&want=${target}&amount=${amountTotal}`;
        
            fetch(url, {
                headers: {
                    "X-API-KEY": apiKey
                }
            })
            .then(
                response => response.json()
            )
            .then(data => {
                result.innerHTML = `${amountTotal} ${origin} = ${data.new_amount} ${target}`;
            })
            .catch(error => {
                console.error("Request failed:", error);
                result.innerHTML = "An error occured please try again later";
            })
        })
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            window.close();
        })
    }
})

