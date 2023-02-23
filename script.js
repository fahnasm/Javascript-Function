var a = 8;
var b = 3;
var volumeTotal
var total;

function jumlahVolumeDuaKubus (a, b) {
    var total; 
    var volumeA;
    var volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}


alert('Hasil dari volume dua kubus adalah ' + jumlahVolumeDuaKubus(8,5));

alert('Hasil dari volume dua kubus adalah ' + jumlahVolumeDuaKubus(3,9));