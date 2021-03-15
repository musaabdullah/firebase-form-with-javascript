const form = document.querySelector("form");
const list = document.querySelector(".items");
var template = ``;

const create = (data) => {


    
     template += `<div>
    <span>${data.first_name}</span>
    <span>${data.last_name}</span>
    <span>${data.email_name}</span>
    <span>${data.password}</span>
    </div>`;


    list.innerHTML = template;

}




form.addEventListener("submit", (e) => {
  e.preventDefault();

    db.collection("users").add({
        first_name:form.first_name.value,
        last_name: form.last_name.value,
        email: form.email.value,
        password: form.password.value,
    }).then(res => {
        console.log("user added");
        form.first_name.value = "";
        form.last_name.value = "";
        form.email.value = "";
        form.password.value = "";
    })

})

db.collection("users").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        create(doc.data());
    })
})

