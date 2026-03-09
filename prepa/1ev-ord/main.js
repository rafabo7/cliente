// ==================================================

import { formatTime } from "./utils.js"

let isTimerActive = false
let intervalID
let startTime
let elapsed = 0


function handleStartPause() {
    isTimerActive 
        ? handlePause()
        : handleStart()
}

function handleStart() {
    isTimerActive = true
    reset.setAttribute('disabled', 'true')
    save.removeAttribute('disabled')
    startPause.textContent = 'Pausar'
    startTime = performance.now() - elapsed
    cronoTiming()
}

function handlePause() {
    isTimerActive = false
    
    clearInterval(intervalID)
    
    reset.removeAttribute('disabled')
    startPause.textContent = 'Iniciar'
}

function handleReset() {
    isTimerActive = false
    elapsed = 0
    save.setAttribute('disabled', 'true')
    time.textContent = '00:00:00'
    historyList.innerHTML = ''
}

function handleSave() {

    let timeToSave = time.textContent

    let listItem = document.createElement('li')
    listItem.textContent = timeToSave
    historyList.append(listItem)

}

function cronoTiming() {   
    
    intervalID = setInterval( () => {
            elapsed = performance.now() - startTime
            time.textContent = formatTime(elapsed)
        } , 75)

}



// ==================================================

const container = document.createElement('div')
container.className = 'container'

const time = document.createElement('div')
time.className = 'time'
time.textContent =  '00:00:00'

// Controles div y botones 

const controls = document.createElement('div')
controls.className = 'controls'

const startPause = document.createElement('button')
startPause.className = 'start-pause'
startPause.textContent = isTimerActive ? 'Pausar' : 'Iniciar'
startPause.addEventListener('click', handleStartPause)


const reset = document.createElement('button')
reset.className = 'reset'
reset.textContent = 'Reiniciar'
reset.addEventListener('click' , handleReset)

const save = document.createElement('button')
save.className = 'save'
save.textContent = 'Guardar'

if (elapsed === 0) {
    save.setAttribute('disabled', true)
}

save.addEventListener('click', handleSave)

controls.append(startPause, reset, save)

// ----------------------


const history = document.createElement('div')
history.className = 'history'

const historyTitle = document.createElement('div')
historyTitle.className = 'history-title'
historyTitle.textContent = 'Historial de tiempos guardados'

const historyList = document.createElement('ol')
historyList.id = 'history-list'

history.append(historyTitle, historyList)
const body = document.body

container.append(time, controls,  history)

body.append(container)
