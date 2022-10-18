const button = document.querySelector(".create-account-button")
const firstNameForm = document.querySelector("#first-name")
const lastNameForm = document.querySelector("#last-name")
const emailForm = document.querySelector("#email")
const phoneForm = document.querySelector("#phone-number")
const passwordForm = document.querySelector("#password")
const confirmPasswordForm = document.querySelector("#confirm-password")
const passMatch = document.querySelector("#pass-match")
const cover = document.querySelector(".cover")
const result=document.querySelector("#result")
const closeBtn=document.querySelector(".close")


const nameResult=document.querySelector(".name-res")
const lastNameResult=document.querySelector(".last-name-res")
const emailResult=document.querySelector(".email-res")
const phoneResult=document.querySelector(".phone-res")

let users=[]

cover.style.display="none"
result.style.display="none"

/*
    button.addEventListener('click',()=>{
        if(passwordForm.value==confirmPasswordForm.value){
            passMatch.textContent="Passwords matches"
            passMatch.classList.remove("invalid-pass")
            passMatch.classList.add("valid-pass")
            
        }else{
            passMatch.textContent="Passwords do not match"
            passMatch.classList.remove("valid-pass")
            passMatch.classList.add("invalid-pass")
        }


    })
    */

    passwordForm.addEventListener('blur',passwordMatchCheck)
    confirmPasswordForm.addEventListener('blur',passwordMatchCheck)

    button.addEventListener('click',()=>{
        showData()
    })


    closeBtn.addEventListener('click',()=>{
        cover.style.display="none"
        result.style.display="none"
    })




    function passwordMatchCheck(){
        if(passwordForm.value==confirmPasswordForm.value){
            passMatch.textContent="Passwords matches"
            passMatch.classList.remove("invalid-pass")
            passMatch.classList.add("valid-pass")
            
            
        }else{
            passMatch.textContent="Passwords do not match"
            passMatch.classList.remove("valid-pass")
            passMatch.classList.add("invalid-pass")
        }

    }


    function showData(){
        cover.style.display="block"
        result.style.display="block"

        nameResult.innerText = firstNameForm.value
        lastNameResult.innerText = lastNameForm.value
        emailResult.innerText = emailForm.value
        phoneResult.innerText = phoneForm.value



    }