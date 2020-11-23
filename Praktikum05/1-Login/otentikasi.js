function validation() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
 
    if (username == "rezacw" && password == 'reza01'){
        window.location = "sukses.html";
        alert("Login Anda Sukses")
        return false
    }else{
        alert ('Login Anda Gagal')
        return false
    }
}