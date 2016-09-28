function in_words(input){
	var arrayInti = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

  var magic = 0;
	if(input > 0 && input < 100){//1 - 99
		magic = 10;
		if(input < 10 ){//1 - 9 DONE
			for(var i = 0 ; i < arrayInti.length ; i++){
				if(i == input){
					return arrayInti[i];
				}
			}
		}else if(input >= 10 && input < 20){//11 - 19 DONE
			if(input == 10){
				return "sepuluh";
			}else if(input == 11){
				return "sebelas";
			}else{
				var satuan = Math.floor(input / magic) * magic;
				input -= satuan;
				for(var i = 0 ; i < arrayInti.length ; i++){
					if(input == i){
						return arrayInti[i] + " belas";
					}
				}
			}
		}else if(input >= 20 && input < 100){
			return controller(input, arrayInti, 10);
		}
	}else if(input >= 100 && input < 1000){//100 - 999
		return controller(input, arrayInti, 100);
	}else if(input >= 1000 && input < 100000){//1.000 - 100.000
		return controller(input, arrayInti, 1000);
	}
}

function controller(input, arrayInti, magic){
  var pengurang = 0;
  var hasilKurang = 0;
	if(input % magic != 0 ){
		pengurang = Math.floor(input / magic) * magic;
		hasilKurang = input - pengurang;
    //console.log("a");
	}
	//console.log(input);
	var pembilang;
	if(magic == 10){
		pembilang = " puluh ";
	}else if(magic == 100){
		pembilang = " ratus ";
	}else if(magic == 1000){
		pembilang = " ribu ";
	}

  if(magic <= 100){//1 - 100
    if(hasilKurang >= 1 && hasilKurang < 100){
      if(pengurang == 100){
        return "seratus " + in_words(hasilKurang);
      }else{
        for(var i = 0 ; i < arrayInti.length ; i++){
          if(pengurang == (i*magic) ){
            return arrayInti[i] + pembilang + in_words(hasilKurang);
          }
        }
      }
    }else{
      if(input == 100){
  			return "seratus";
  		}else{
  			for(var i = 0 ; i < arrayInti.length ; i++){
  				if(input == (i*magic) ){
  					return arrayInti[i] + pembilang;
  				}
  			}
  		}
    }
  }if(magic == 1000){//1.000 - 100.000
    console.log(input);
    console.log(pengurang);
    console.log(hasilKurang);
    if(hasilKurang >= 1 && hasilKurang < 1000){
      //console.log(pengurang);
      if(pengurang == 1000){
        //console.log(hasilKurang);
        return "seribu " + in_words(hasilKurang);
      }else{
        console.log(hasilKurang);
        for(var i = 0 ; i < arrayInti.length ; i++){
          if(hasilKurang == i ){
            //console.log(pengurang/1000);
              console.log(input);
              return in_words(pengurang/1000) + pembilang + in_words(hasilKurang);
          }
        }
      }
    }else{
      //console.log(input/1000);
      if(input == 1000){
  			return "seribu";
  		}else{
        //console.log(input);
  			for(var i = 0 ; i < arrayInti.length ; i++){//1000 2000 3000 4000
  				if(input == (i*magic) ){
  					return in_words(input/1000) + pembilang;
  				}
  			}
  		}
    }
  }
}

// Driver code
//console.log(in_words(4));
//console.log(in_words(27));
console.log(in_words(1202));//2100, 1500, 9900, 
//console.log(in_words(38079));
//console.log(in_words(82102713));
