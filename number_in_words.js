function in_words(angka) {

    var strAngka = String(angka);
    var arrAngka = strAngka.split("")
    var kata = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
    //var tingkat = ['', 'Ribu', 'Juta', 'Milyar', 'Triliun'];

    // var i = 0;
    // while(i<=arrAngka.length){
    //
    // }

    //perulangan

    var triliun = "";
    var milyar = "";
    var juta = "";
    var ribuan = "";
    var ratusan = "";
    var puluhan = "";
    var satuanBelasan = "";

    var value1 = arrAngka[arrAngka.length - 1];
    var value2 = arrAngka[arrAngka.length - 2];
    var value3 = arrAngka[arrAngka.length - 3];
    var value4 = arrAngka[arrAngka.length - 4];
    var panjang = arrAngka.length;

    //Satuan dan Belasan
    if (value1 != "0" && value2 != "1") {
        satuanBelasan = kata[value1]
    } else if (value1 == "0" && value2 == "1") {
        satuanBelasan = "Sepuluh"
    } else if (value1 == "1" && value2 == "1") {
        satuanBelasan = "Sebelas"
    } else if (value2 == "1" && value1 != "0" && value1 != "1") {
        satuanBelasan = kata[value1] + " Belas"
    }

    //Puluhan
    if (value2 != "1" && value2 != "0" && panjang != "1") {
        puluhan = kata[value2] + " Puluh "
    }

    //Ratusan
    if (value3 == "1") {
        ratusan = "Seratus "
    } else if (value3 != "1" && panjang != "2" && panjang != "1") {
        ratusan = kata[value3] + " Ratus "
    }

    //Ribuan
    if (value4 == "1") {
        ribuan = "Seribu "
    } else if (value4 != "1" && panjang != "3" && panjang != "2" && panjang != "1") {
        ribuan = kata[value4] + " Ribu "
    }else if(){

    }



    console.log(ribuan + ratusan + puluhan + satuanBelasan);
}


in_words(4)         // "empat"
in_words(27)        // "dua puluh tujuh"
in_words(102)       // "seratus dua"
in_words(38079)     // "tiga puluh delapan ribu tujuh puluh sembilan"
in_words(82102713) // "delapan puluh dua juta seratus dua ribu tujuh ratus tiga belas"
