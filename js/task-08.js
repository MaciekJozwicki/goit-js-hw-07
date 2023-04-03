const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const {
        elements: {email, password}
    } = e.currentTarget
    
    if (email.value === "" || password.value === "") {
        return alert("Wszystkie pola powinny być wypełnione!")
    } 

    console.log(`Email: ${email.value} Password: ${password.value}`)
    e.currentTarget.reset()
})



console.log(formEl)
