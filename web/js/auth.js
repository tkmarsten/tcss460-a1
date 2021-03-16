$(document).ready(function () {
    $("#bttn").click(sign_in)
})

$(document).ready(function () {
    $("#verifybttn").click(verify)
})

// Verifies that the password matches the regex. Calls the register endpoint if it's a valid password.
async function verify(event) {

    event.preventDefault()

    var valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var pw = document.getElementById("pw1");

    if (pw.value.match(valid)) {
        await register()
        return true;
    } else {
        alert('Password does not contain a lowercase letter, an uppercase letter, a numeric digit, or is not 6-20 characters in length.')
        return false;
    }
}

// Signs the user in by callign the GET endpoint in /auth
async function sign_in(event) {

    event.preventDefault();

    let encoded = window.btoa($("#uname").val() + ':' + $("#pwd").val())

    console.log($("#uname").val() + ':' + $("#pwd").val())
    console.log(encoded)

    let response = await fetch("/auth", {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + encoded
        }
    })

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json()
        console.log(json)

        if (json.success) {
            $("#exampleModal").modal('toggle')
            console.log(document.cookie)
        }
    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}

// Registers the user and stores them in the Members SQL table
async function register() {
    let email = $("#email").val()
    let password = $("#pw1").val()

    let response = await fetch("/auth", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    if (response.ok) {
        let json = await response.json()
        console.log(json)

        if (json.success) {
            alert('Success')
            console.log(document.cookie)
        }
    } else {
        alert("HTTP-Error: " + response.status)
        console.log(response.status)
        let json = await response.json()
        console.log(json)
    }
}