var kalimat = "";
var j = 0;

function in_words(angka) {
    var strAngka = String(angka);
    if (strAngka.length > 13) {
        return "Diluar Batas 'Max 9 Triliun'"
    } else if (angka <= 0) {
        kalimat = kalimat.replace("Satu Ribu", "Seribu");
        kalimat = kalimat.replace("Juta Ribu", "Juta");
        kalimat = kalimat.replace("Milyar Juta", "Milyar");
        kalimat = kalimat.replace("Triliun Milyar", "Triliun");
        var hasil = kalimat;
        j = 0;
        kalimat = "";
        return hasil;
    } else {
        var arrAngka = strAngka.split("")
        var kata = ['', 'Satu ', 'Dua ', 'Tiga ', 'Empat ', 'Lima ', 'Enam ', 'Tujuh ', 'Delapan ', 'Sembilan '];
        var tingkat = ['', 'Ribu ', 'Juta ', 'Milyar ', 'Triliun '];
        var ratusan = "";
        var puluhan = "";
        var satuanBelasan = "";
        var value1 = arrAngka[arrAngka.length - 1];
        var value2 = arrAngka[arrAngka.length - 2];
        var value3 = arrAngka[arrAngka.length - 3];
        var panjang = arrAngka.length;

        //Satuan dan Belasan
        if (value1 != "0" && value2 != "1") {
            satuanBelasan = kata[value1]
        } else if (value1 == "0" && value2 == "1") {
            satuanBelasan = "Sepuluh "
        } else if (value1 == "1" && value2 == "1") {
            satuanBelasan = "Sebelas "
        } else if (value2 == "1" && value1 != "0" && value1 != "1") {
            satuanBelasan = kata[value1] + " Belas "
        }

        //Puluhan
        if (value2 != "1" && value2 != "0" && panjang != "1") {
            puluhan = kata[value2] + " Puluh "
        }

        //Ratusan
        if (value3 == "1") {
            ratusan = "Seratus "
        } else if (value3 != "1" && panjang != "2" && panjang != "1" && value3 != "0") {
            ratusan = kata[value3] + " Ratus "
        }

        kalimat = (ratusan + puluhan + satuanBelasan + tingkat[j]) + kalimat
        j++;
        var str = String(angka)
        var arrSlice = str.substring(0, str.length - 3)
        var num = Number(arrSlice)
        return in_words(angka = num)
    }
}

console.log(in_words(1))
console.log(in_words(99))
console.log(in_words(100))
console.log(in_words(1000))
console.log(in_words(1000003))
console.log(in_words(1000000))
console.log(in_words(1000000009))
console.log(in_words(1000000000))
console.log(in_words(1001009000000))
