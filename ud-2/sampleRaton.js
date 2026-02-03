const body = document.body

// Donde esta el raton
const par = document.createElement('p')

par.textContent = 'Ahí está el ratón'

par.style.position = 'absolute'

function raton (event) {
    let x = event.clientX
    let y = event.clientY

    par.style.left = x + 'px'
    par.style.top = y + 'px'
    
    body.appendChild(par)


}

body.addEventListener( 'mousemove', raton )

// Autodestructibles

