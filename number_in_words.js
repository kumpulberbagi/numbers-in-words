function in_words(n) {
    var tampungRoman = []
    var angka = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]

    var ratusJuta = Math.floor((n%1000000000)/100000000)
    var puluhJuta = Math.floor((n%100000000)/10000000)
    var jutaan = Math.floor((n%10000000)/1000000)
    var ratusRibu = Math.floor((n%1000000)/100000)
    var puluhRibuan = Math.floor((n%100000)/10000)
    var ribuan = Math.floor((n%10000)/1000)
    var ratusan = Math.floor((n%1000)/100)
    var puluhan = Math.floor((n%100)/10)
    var satuan = Math.floor((n%10)/1)

    // push puluhan
    if(puluhJuta>1){
      tampungRoman.push(" " +angka[puluhJuta] + " puluh ")
      if(jutaan>0){
      tampungRoman.push(" " +angka[jutaan]+ " juta ")
      }
    }
    else if(puluhJuta==1){
      if(jutaan>1){
      tampungRoman.push(" "+angka[jutaan] + " belas juta ")
      }
      else if(jutaan==1){
      tampungRoman.push(" "+"sebelas juta ")
      }

    }
    // push puluhRibuan
    else if(puluhRibuan==0){
      tampungRoman.push(angka[jutaan])
    }

    // push ratusRibuan
    if(ratusRibu==1){
      tampungRoman.push("seratus ")
    }
    else if(ratusRibu>0){
    tampungRoman.push(angka[ratusRibu] + " ratus ")
    }

    // push puluhRibuan
    if(puluhRibuan>0){
    tampungRoman.push(angka[puluhRibuan] + " puluh ")
    }
    // push ribuan
      if(ribuan>0){
      tampungRoman.push(angka[ribuan] + " ribu")
      }
    // push ratusan
    if(ratusan==1){
      tampungRoman.push("seratus ")
    }

    else if(ratusan>0){
      tampungRoman.push(" " +angka[ratusan] + " ratus")
    }
    // push puluhan
    if(puluhan>1){
      tampungRoman.push(" " +angka[puluhan] + " puluh")
      if(satuan>0){
      tampungRoman.push(" " +angka[satuan])
      }
    }
    else if(puluhan==1){
      if(satuan>1){
      tampungRoman.push(" "+angka[satuan] + " belas")
      }
      else if(satuan==1){
      tampungRoman.push(" "+"sebelas")
      }

    }
    // push satuan
    else if(puluhan==0){
      tampungRoman.push(angka[satuan])
    }


    return tampungRoman.join("");
}

console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
