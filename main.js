const password = document.querySelector('#password')
const rePassword = document.querySelector('#repassword')
const spans = document.querySelectorAll('.error')

let pass1 = ''
let pass2 = ''
password.addEventListener('change', e => {
    pass1 = password.value
    console.log(pass1)
})

rePassword.addEventListener('change', e => {
    pass2 = rePassword.value
    console.log(pass2)
    if(pass1 !== pass2){
        for(span of spans){
            span.textContent = '*password do not match' 
        } 
    }else{
        for(span of spans){
            span.textContent = '' 
        }    
    }
})
