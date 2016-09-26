console.log("ES6 compiler is starting");
let toWords = n => {
  let tampungRoman = []
  let angka = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]

  let ratusJuta = Math.floor((n%1000000000)/100000000)
  let puluhJuta = Math.floor((n%100000000)/10000000)
  let jutaan = Math.floor((n%10000000)/1000000)
  let ratusRibu = Math.floor((n%1000000)/100000)
  let puluhRibuan = Math.floor((n%100000)/10000)
  let ribuan = Math.floor((n%10000)/1000)
  let ratusan = Math.floor((n%1000)/100)
  let puluhan = Math.floor((n%100)/10)
  let satuan = Math.floor((n%10)/1)

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
    else if(satuan==0){
      tampungRoman.push(" sepuluh")
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

console.log(toWords(4));
console.log(toWords(27));
console.log(toWords(102));
console.log(toWords(38079));
console.log(toWords(82102713));
