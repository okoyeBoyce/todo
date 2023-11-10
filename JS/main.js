const input = document.querySelector("input")
const button = document.querySelector(".ri-add-box-fill")
const deleteBtn = document.querySelector(".ri-delete-bin-7-fill")
const errorAlert = document.querySelector(".error")
const errorMessage = document.querySelector(".msg")
const todoContainer = document.querySelector(".todoContainer")
const today = document.querySelector(".todaysDate")
const todoItems = document.querySelector(".todo-items")
const todoItemsArray = JSON.parse(localStorage.getItem("todos")) || []


today.textContent = new Date().toString().split('').splice(0, 10).join("")

button.addEventListener("click", function(){
    console.log(input.value)
    if(input.value ===""){
        errorAlert.style.display = "block"
        errorMessage.textContent = "Please fill in the field!"

        setTimeout(function(){
            errorAlert.style.display = "none"
            errorMessage.textContent = ""
        },4000)
    }else{
        let todoObject = {
            id:Math.random()*10,
            task: input.value
        }

        todoItemsArray.push(todoObject)
        localStorage.setItem("todos", JSON.stringify(todoItemsArray))

        const todoItem =
        `
            <h4>${input.value}</h4>
            <i class="ri-delete-bin-7-fill"></i>
        `
        const divElement = document.createElement("div")
        divElement.classList.add("bodyB")
        divElement.innerHTML = todoItem //DOM Manipulation
        todoContainer.appendChild(divElement)
        input.value = ""
        todoItems.textContent = todoItemsArray.length
    }
})

function loadDataFromStorage(){
    todoItemsArray.forEach(function(todo){
        const todoItem = 
        `
        <h4>${todo.task}</h4>
        <i class="ri-delete-bin-7-fill"></i>
        `
        const divElement = document.createElement("div")
        divElement.classList.add("bodyB")
        divElement.innerHTML = todoItem //DOM Manipulation
        todoContainer.appendChild(divElement)
        console.log(todoItem.task)
    })
    todoItems.textContent = todoItemsArray.length
}

loadDataFromStorage()

document.querySelector("button").addEventListener("click", ()=>{
    localStorage.clear()
    location.reload()
})

todoContainer.addEventListener("click", function(){
    console.log("hello")
})






// const age = 10

// console.log("frank is "+age+" years old")
// console.log(`frank is ${age} years old`)

{/*  */}

// Objects are created by wrapping the properties inside of a curly braces

// const userObject = 
// {
//     name: "Frank",
//     age: 10,
//     email: "frank@gmail.com"
// }

// console.log(userObject.name)

// if u want to call a method or a function, you must ()

// let myName= "FRANK"

// console.log(myName.charAt(4))