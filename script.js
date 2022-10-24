let reg = document.forms.reg
let ent = document.forms.ent

let email = localStorage.getItem("email")
let name1 = localStorage.getItem("name")
let surname = localStorage.getItem("surname")
let password = localStorage.getItem("password")


reg.onsubmit = (e) => {
    e.preventDefault()
    
    let user = {}
    
    let fm = new FormData(reg)

    fm.forEach((value, key) => {
        user[key] = value
    })
    
    
    localStorage.email = user.email
    localStorage.name = user.name
    localStorage.surname = user.surname
    localStorage.password = user.password
    
    location.reload()
    
}
if (
    email.length !== 0 && 
    name1.length !== 0 && 
    surname.length !== 0 && 
    password.length !== 0
    ) {
    window.open("./home.html")

} else {
    window.open("./index.html")
}