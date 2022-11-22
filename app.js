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
    // console.log(localStorage.getItem('formData'));
    // function to display details
    displayData();
    // preventing user from submitting an empty form
    e.preventDefault();

}

// using a function to display data
function displayData(){
    // console.log(JSON.parse(localStorage.getItem('formData')));
    if(localStorage.getItem('formData')){
    // destructuring
        let {fname, lname, email, pwd} = JSON.parse(localStorage.getItem('formData'));
        var output = document.getElementById('output');
        output.innerHTML=`
            <table>
                <tbody>
                    <tr>
                        <td> First Name </td>
                        <td>${fname}</td>
                    </tr>
                    <tr>
                        <td> Last Name </td>
                        <td>${lname}</td>
                    </tr>
                    <tr>
                        <td> Email Address </td>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <td> Password </td>
                        <td>${pwd}</td>
                    </tr>
                </tbody>
            </table>
        `

    }
}
// to display details when the page loads
displayData();