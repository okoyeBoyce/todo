const input = document.querySelector("input")
const button = document.querySelector(".ri-add-box-fill")
const errorAlert = document.querySelector(".error")
const errorMessage = document.querySelector(".msg")
const bodyE = document.querySelector(".bodyE")


button.addEventListener("click", function(){
    console.log(input.value)
    if(input.value ===""){
        errorAlert.style.display = "flex"
        errorMessage.textContent = "Please fill in the field"

        setTimeout(function(){
            errorAlert.style.display = "none"
            errorMessage.textContent = ""
        },4000)
    }
    // else if()
}

)

