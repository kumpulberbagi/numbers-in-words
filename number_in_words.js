function in_words(n) {

    var dalamKata = []
    var angka = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]

    var ratusjuta = Math.floor((n % 1e9) / 1e8)
    var puluhjuta = Math.floor((n % 1e8)/1e7)
    var juta = Math.floor((n%1e7)/1e6)
    var ratusribu = Math.floor((n%1e6)/1e5)
    var puluhribu = Math.floor((n % 1e5) / 1e4)
    var ribu = Math.floor((n % 1e4) / 1e3)
    var ratus = Math.floor((n % 1e3) / 1e2)
    var puluh = Math.floor((n % 1e2) / 10)
    var satuan = Math.floor((n % 10) / 1)

    // push ratusan juta
    if(ratusjuta==1){
    	dalamKata.push("seratus ")
    }
    else if(ratusjuta>0){
    	dalamKata.push(angka[ratusjuta] + " ratus ")
    }

    // push puluhan juta
    if(puluhjuta==1){
    	if(juta===0){
    		dalamKata.push("sepuluh ")
    	}
    	else if(juta==1){
    		dalamKata.push("sebelas ")
    	}
    	else if(juta>1){
    		dalamKata.push(angka[juta] + " belas ")
    	}
    }
	else if(puluhjuta>0){
	   	dalamKata.push(angka[puluhjuta] + " puluh ")
    }

	// push juta
	if(juta>0 && puluhjuta!=1){
		dalamKata.push(angka[juta] + " juta ")
	}
	else if(ratusjuta>0 || puluhjuta>0 || juta>0){
    	dalamKata.push("juta ")
    }

	// push ratusan ribu
	if(ratusribu==1){
    	dalamKata.push("seratus ")
    }
    else if(ratusribu>0){
    	dalamKata.push(angka[ratusribu] + " ratus ")
    }

    // push puluhan ribu
    if(puluhribu==1){
    	if(ribu===0){
    		dalamKata.push("sepuluh ")
    	}
    	else if(ribu==1){
    		dalamKata.push("sebelas ")
    	}
    	else if(ribu>1){
    		dalamKata.push(angka[ribu] + " belas ")
    	}
    }
	else if(puluhribu>0){
	   	dalamKata.push(angka[puluhribu] + " puluh ")
	}

    // push ribu
    if(ribu>0 && puluhribu!=1){
		dalamKata.push(angka[ribu] + " ribu ")
	}
	else if(ratusribu>0 || puluhribu>0 || ribu>0){
    	dalamKata.push("ribu ")
    }

    // push ratusan
    if(ratus==1){
    	dalamKata.push("seratus ")
    }
    else if(ratus>0){
    	dalamKata.push(angka[ratus] + " ratus ")
    }

    // push puluhan
    if(puluh==1){
    	if(satuan===0){
    		dalamKata.push("sepuluh ")
    	}
    	else if(satuan==1){
    		dalamKata.push("sebelas ")
    	}
    	else if(satuan>1){
    		dalamKata.push(angka[satuan] + " belas ")
    	}
    }
	else if(puluh>0){
	   	dalamKata.push(angka[puluh] + " puluh ")
	}

    // push satuan
    if(satuan>0 && puluh!=1){
		dalamKata.push(angka[satuan] + " ")
	}

	// hasil angka ke kata
    return dalamKata.join("");


}
console.log(in_words(1000000));
console.log(in_words(1802501));
console.log(in_words(912000218));
console.log(in_words(50011));
console.log(in_words(898989996));
