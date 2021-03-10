function verify() {
    var valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    var pw = document.getElementById("pw1");
    if (pw.value.match(valid)) {
        alert('Success')
        return true;
    } else {
        alert('Password does not contain a lowercase letter, an uppercase letter, or a numeric digit.')
        return false;
    }
}