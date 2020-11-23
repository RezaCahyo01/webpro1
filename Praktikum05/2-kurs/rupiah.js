function kurs(){
    let nilai= document.getElementById('nilai').value;
    let nilai= document.getElementById('valas').value;
    let nilai= document.getElementById('rupiah').value;

    if (select == 'Dollar US'){
        rupiah.value = nilai * 9915;
    }else if(select == 'Ringgit Malaysia'){
        rupiah.value = nilai * 874;
    }else if(select == 'Dollar Singapore'){
        rupiah.value = nilai * 13472;
    }else if(select == 'Yen Jepang'){
        rupiah.value = nilai * 120;
    }else if(select == 'Riyal Arab Saudi'){
        rupiah.value = nilai * 3592;
    }else if(select == 'Euro'){
        rupiah.value = nilai * 15888;
    }
}
