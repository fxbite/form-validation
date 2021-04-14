function getValue(id){
    return document.getElementById(id).value.trim();
}

function validate(){

    var flag = true;
    var username = getValue('usname');
    
    if (username == '' || username.length <= 4) {
        flag = false;
        alert('Username must have longer than 4 characters')
    }
    
    var email = getValue('email')
    var cfemail = getValue('conemail')

    if (!/[@]/.test(email)) {
        flag = false;
        alert('Email must have "@" character')
    }

    if (email == '' || email != cfemail) {
        flag = false;
        alert('Confirm email does not match')

    }

    var password = getValue('pass')
    var cfpassword = getValue('conpass')

    if (password == '' || password != cfpassword) {
        flag = false;
        alert('Confirm password does not match')
    }

    if (flag === true) {
        alert('Sign up successfully')
    }
    return flag;
}