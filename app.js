const signUp = e =>{

    // creating an object
    let formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        pwd: document.getElementById('pwd').value
    }

    // setting an item and assigning formData object to the item
    localStorage.setItem('formData', JSON.stringify(formData));
    // to view the localStorage on console
    console.log(localStorage.getItem('formData'));
    // preventing user from submitting an empty form
    e.preventDefault();

}