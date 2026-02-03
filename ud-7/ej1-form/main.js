const pin = document.getElementById('pin')

async function validarPin(pin){
    const result = document.getElementById('result')

    try {
        const response = await fetch("https://validate-pin.fly.dev/validate", {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({ pin })
        }).then(
            res => console.log(res)
        )


    } catch (e) {
        result.innerText = "Errooooor"
    }

}

pin.addEventListener( 'change', (e) => {
    console.log('ay')
    let value = e.target.value
    if (value.length == 5) validarPin(pin)
} )

console.log('funciona')