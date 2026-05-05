// Ejercicio siguiendo el articulo "Implementing Promise based API" de MDN:
// In this example we'll implement a promise-based alarm API, called alarm(). It will take as 
// arguments the name of the person to wake up and a delay in milliseconds to wait before waking 
// the person up. After the delay, the function will send a "Wake up!" message, including the name 
// of the person we need to wake up.

const btn = document.querySelector('#alarm-btn')
const output = document.querySelector('#output')
const delay = document.querySelector('#delay')
const name = document.querySelector('#name')

function startAlarm( delay = 3000 , name = 'everybody' ) {
    return new Promise( (resolve, reject) => {
        if (delay < 0) reject("Alarm delay must be higher than 0")
        
        setTimeout( () => {
            resolve( `Wake up ${name} !!!` )
        }, delay )
    } )
}

btn.addEventListener('click', () => {
    startAlarm( delay.value*1000, name.value ).then( res => {
        output.textContent = res

    })
})
