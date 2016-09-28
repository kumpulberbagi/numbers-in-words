function in_words(angka) {
    // Your code here


    var satuan = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh ', 'sebelas ', 'dua belas ', 'tiga belas ', 'empat belas ', 'lima belas ', 'enam belas ', 'tujuh belas ', 'delapan belas ', 'sembilan belas '];
    var belasan = ['', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    var belasanribu = ['sepuluh ribu', 'sebelas ribu', 'dua belas ribu', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    var puluhan = ['', 'sepuluh', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
    var puluhanRibu = ['', 'satu ribu', 'dua puluh ribu', 'tiga puluh ribu', 'empat puluh ribu', 'lima puluh ribu', 'enam puluh ribu', 'tujuh puluh ribu', 'delapan puluh ribu', 'sembilan puluh ribu'];
    var ratusan = ['', 'satu ratus', 'dua ratus', 'tiga ratus', 'empat ratus', 'lima ratus', 'enam ratus', 'tujuh ratus', 'delapan ratus', 'sembilan ratus'];
    var ribuan = ['', 'satu ribu', 'dua ribu', 'tiga ribu', 'empat ribu', 'lima ribu', 'enam ribu', 'tujuh ribu', 'delapan ribu', 'sembilan ribu'];
    // var puluhanRibu = ['', 'satu ribu', 'dua puluh ribu', 'tiga puluh ribu', 'empat puluh ribu', 'lima puluh ribu', 'enam puluh ribu', 'tujuh puluh ribu', 'delapan puluh ribu', 'sembilan puluh ribu'];
    var jutaan = ['', 'satu juta', 'dua juta', 'tiga juta', 'empat juta', 'lima juta', 'enam juta', 'tujuh juta', 'delapan juta', 'sembilan juta'];
    var puluhanJuta = ['', 'satu puluh juta', 'dua puluh juta', 'tiga puluh juta', 'empat puluh juta', 'lima puluh juta', 'enam puluh juta', 'tujuh puluh juta', 'delapan puluh juta', 'sembilan puluh juta'];
    var milyar = ['', 'satu milyar', 'dua milyar', 'tiga milyar', 'empat milyar', 'lima milyar', 'enam milyar', 'tujuh milyar', 'delapan milyar', 'sembilan milyar'];
    var triliun = ['', 'satu triliun', 'dua triliun', 'tiga triliun', 'empat triliun', 'lima triliun', 'enam triliun', 'tujuh triliun', 'delapan triliun', 'sembilan triliun'];
    var n;

    n = ('000000000000000' + angka).substr(-15).match(/^(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})(\d{1})$/);
    // n = angka.toString().split("");
    // console.log("hasil: " + n);
    var str = '';


    console.log(n);



    if(n[1] != 0) {
        if(n[1] == 1) {
            if(n[2]==0 && n[3]==0) {
              str += " seratus triliun";
            }
            else {
              str += " seratus";
            }
        }
        else {
            if(n[2]==0 && n[3] ==0) {
              str += " " + ratusan[n[1]] + " triliun";
            }
            else {
              str += " " + ratusan[n[1]];
            }
        }
    }
    else {
        str += "";
    }

    if(n[2] !=0 ) {
        if(n[2] == 1) {
            if(n[3] == 0) {
                str += " sepuluh";
            }
            else {
                str += " " + belasan[n[3]] + " triliun";
            }
        }
        else if(n[2] >= 2) {
            str += " " + puluhan[n[2]];
            str += " " + triliun[n[3]];
        }
    }
    else {
        if(n[3] != 0) {
            str += " " + triliun[n[3]];
        }
        else {
            str += "";
        }
    }

    if(n[4] != 0) {
        if(n[3] == 0 || n[4] == 1) {
            if(n[5] == 0 && n[6]==0) {
              str += " seratus milyar";
            }
            else {
              if(n[4] == 1 && n[3] !=0) {
                str += " seratus";
              }
              else {
                str += " " + ratusan[n[4]];
              }
            }
        }
        else {
            str += " " + ratusan[n[4]];
        }
    }
    else {
        str += "";
    }

    if(n[5] !=0 ) {
        if(n[5] == 1) {
            if(n[6] == 0) {
                str += " sepuluh milyar";
            }
            else {
                str += " " + belasan[n[6]] + " milyar";
            }
        }
        else if(n[5] >= 2) {
            str += " " + puluhan[n[5]];
            if(n[6]==0) {
                str += " milyar";
            }
            str += " " + milyar[n[6]];
        }
    }
    else {
        if(n[6] != 0) {
            str += " " + milyar[n[6]];
        }
        else {
            str += "";
        }
    }

    if(n[7] != 0) {
        if((n[8] == 1 && n[7] == 0)) {
            str += " seratus juta";
        }
        else {
            if(n[9] == 1 && n[10] ==0) {
              str += " " + ratusan[n[7]];
            }
            else {
              if(n[10] == 1 && n[11]==0) {
                str += " seratus";
              }
              else {
                str += " " + ratusan[n[7]];
              }
            }
        }
    }
    else {
        str += "";
    }

    if(n[8] !=0 ) {
        if(n[8] == 1) {
            if(n[9] == 0) {
                str += " sepuluh juta";
            }
            else {
                str += " " + belasan[n[9]] + " juta";
            }
        }
        else if(n[8] >= 2) {
            str += " " + puluhan[n[8]];
            if(n[9] == 0) {
                str += " juta";
            }
            str += " " + jutaan[n[9]];
        }
    }
    else {
        if(n[9] != 0) {
            str += " " + jutaan[n[9]];
        }
        else {
            str += "";
        }
    }

    if(n[10] != 0) {
        if(n[10] == 1 && n[11] == 0) {
            str += " seratus ribu";
        }
        else {
            if(n[11] == 0) {
                str += " " + ratusan[n[10]] + " ribu";
            }
            else {
                if(n[10] == 1) {
                    str += " seratus";
                }
                else {
                    str += " " + ratusan[n[10]];
                }
            }
        }
    }
    else {
        str += "";
    }

    if(n[11] != 0) {
        if(n[12] == 0) {
            if(n[10] == 0 || n[9] == 0 || n[8] == 0 || n[7] == 0 || n[6] == 0 || n[5] == 0 || n[4] == 0 || n[3] == 0 || n[2] == 0 || n[1] == 0) {
                str += " sepuluh ribu";
            }
            else {
                if(n[11] == 1 && n[12] == 0) {
                  str += " sepuluh ribu";
                }
                else {
                  str += " " + puluhanRibu[n[11]];
                }
            }
        }
        else {
            if(n[11] == 1) {
                str += " " + belasan[n[12]];
            }
            else {
                str += " " + puluhan[n[11]];
            }
        }
    }
    else {
        str += "";
    }

    if(n[12] != 0) {
        if(n[11] == 0 && n[12] == 1) {
            str += " seribu";
        }
        else {
            if(n[11] == 1) {
                str += " ribu";
            }
            else {
                str += " " + ribuan[n[12]];
            }
        }
    }
    else {
        str += "";
    }

    if(n[13] != 0) {
        if(n[12] == 0 && n[13] == 1) {
            str += " seratus";
        }
        else {
            if(n[13] == 1 && n[14] == 0) {
              str += " seratus";
            }
            else {
              str += " " + ratusan[n[13]];
            }
        }
    }
    else {
        str += "";
    }

    if(n[14] !=0 ) {
        if(n[14] == 1) {
            if(n[15] == 0) {
                str += " sepuluh";
            }
            else {
                str += " " + belasan[n[15]];
            }
        }
        else if(n[14] >= 2) {
            str += " " + puluhan[n[14]];
            str += " " + satuan[n[15]];
        }
    }
    else {
        if(n[15] != 0) {
            str += " " + satuan[n[15]];
        }
        else {
            str += "";
        }
    }


    // if(n[13] != 0) {
    //     str += " " + satuan[n[13]];
    // }
    // else {
    //     str += "";
    // }

    return str;

}

// Driver code
console.log(in_words(222222222222222));
console.log(in_words(111111111111111));
// console.log(in_words(102));
// console.log(in_words(38079));
// console.log(in_words(82102713));
