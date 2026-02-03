const btn = document.querySelector("#todo-btn")
const todo = document.querySelector("#todo")
const listContainer = document.querySelector(".list-container")
const list = document.createElement("ul")

const saveBtn = document.querySelector(".save")
const deleteBtn = document.querySelector(".delete")
const storageMessage = document.querySelector("#storageMessage")

listContainer.appendChild(list)

loadList()

function addToDo(){
  

  console.log("boton")

  let value = todo.value

  const listNode = document.createElement("li")
  listNode.textContent = value

  list.appendChild(listNode)

  todo.value = ""
  storageMessage.textContent = ""

}

function saveList(){
  localStorage.setItem('data', JSON.stringify(list.innerHTML))
}

function loadList(){
  if (localStorage.getItem('data')){
    const savedList = JSON.parse(localStorage.getItem('data'))
    list.innerHTML = savedList
  storageMessage.textContent = "Lista cargada"

    
  }
}

function deleteList(){
  localStorage.setItem('data', '')
  list.innerHTML = ""
}

btn.addEventListener( 'click', () => { addToDo() } )
todo.addEventListener( 'keydown', (e) => {
  if (e.key === "Enter") addToDo()
} )

saveBtn.addEventListener( 'click', () => { 
  saveList()
  storageMessage.textContent = "Lista guardada"
} )
deleteBtn.addEventListener( 'click', () => { 
  deleteList()
  storageMessage.textContent = "Lista borrada"
 } )

