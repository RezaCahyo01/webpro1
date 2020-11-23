function esports() {
    let kotak = document.getElementById('gambar');
    let Esports = document.getElementById('Esports');

    if (!Esports.value == ' '){
        kotak.innerHTML = `<img src="${Esports.value}.jpg"></img>`
        alert(`Ini TIM ${Esports.value}`)
    }
    return false;
}
