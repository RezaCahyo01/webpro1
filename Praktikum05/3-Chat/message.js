function kirimin() {
    let kotak = document.getElementById('chatbox')
    let pesan =document.getElementById('text')

    if(!pesan == ''){
        kotak.innerHTML += `<p>${pesan.value}</p>`
    }
    return false
}