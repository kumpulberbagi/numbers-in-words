function in_words(input){
	var arrayInti = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

  var magic = 0;
	if(input > 0 && input < 100){//1 - 99 puluhan DONE
		magic = 10;
		if(input < 10 ){//1 - 9 DONE
			for(var i = 0 ; i < arrayInti.length ; i++){
				if(i == input){
					return arrayInti[i];
				}
			}
		}else if(input >= 10 && input < 20){//11 - 19 belasan DONE
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
	}else if(input >= 100 && input < 1000){//100 - 999 ratusan DONE
		return controller(input, arrayInti, 100);
	}else if(input >= 1000 && input < 1000000){//1.000 - 999.999 ribuan DONE
		return controller(input, arrayInti, 1000);
	}else if(input >= 1000000 && input < 1000000000){//1.000.000 - 999.999.999 jutaan DONE
		return controller(input, arrayInti, 1000000);
	}else if(input >= 1000000000 && input < 1000000000000){//1.000.000.000 - 999.999.999.999 milyaran DONE
		return controller(input, arrayInti, 1000000000);
	}else if(input >= 1000000000000 && input < 1000000000000000){//1.000.000.000.000 - 999.999.999.999.999 trilyunan DONE
		return controller(input, arrayInti, 1000000000000);
	}

}

function controller(input, arrayInti, magic){
  var pengurang = 0;
  var hasilKurang = 0;
	if(input % magic != 0 ){
		pengurang = Math.floor(input / magic) * magic;
		hasilKurang = input - pengurang;
	}
	var digit;
	if(magic == 10){
		digit = " puluh ";
	}else if(magic == 100){
		digit = " ratus ";
	}else if(magic == 1000){
		digit = " ribu ";
	}else if(magic == 1000000){
		digit = " juta ";
	}else if(magic == 1000000000){
		digit = " milyar ";
  }else if(magic == 1000000000000){
		digit = " trilyun ";
	}

  if(magic <= 100){//1 - 100 ratusan
    if(hasilKurang >= 1 && hasilKurang < magic){
      if(pengurang == 100){
        return "seratus " + in_words(hasilKurang);
      }else{
        for(var i = 0 ; i < arrayInti.length ; i++){
          if(pengurang == (i*magic) ){
            return arrayInti[i] + digit + in_words(hasilKurang);
          }
        }
      }
    }else{
      if(input == 100){
  			return "seratus";
  		}else{
  			for(var i = 0 ; i < arrayInti.length ; i++){
  				if(input == (i*magic) ){
  					return arrayInti[i] + digit;
  				}
  			}
  		}
    }
  }if(magic == 1000){//1.000 - 999.999 ribuan
    if(hasilKurang >= 1 && hasilKurang < magic){
      if(pengurang == 1000){
        return "seribu " + in_words(hasilKurang);
      }else{
        return in_words(pengurang/1000) + digit + in_words(hasilKurang);
      }
    }else{
      if(input == 1000){
  			return "seribu";
  		}else{
  			return in_words(input/1000) + digit;
  		}
    }
  }else if(magic == 1000000){//1.000.000 - 999.999.999 jutaan
    if(hasilKurang >= 1 && hasilKurang < magic){
      return in_words(pengurang/magic) + digit + in_words(hasilKurang);
    }else{
      return in_words(input/magic) + digit;
    }
  }else if(magic == 1000000000){//1.000.000.000 - 999.999.999.999 milyaran
    if(hasilKurang >= 1 && hasilKurang < magic){
      return in_words(pengurang/magic) + digit + in_words(hasilKurang);
    }else{
      return in_words(input/magic) + digit;
    }
  }else if(magic == 1000000000000){//1.000.000.000.000 - 999.999.999.999.999 trilyunan
    if(hasilKurang >= 1 && hasilKurang < magic){
      return in_words(pengurang/magic) + digit + in_words(hasilKurang);
    }else{
      return in_words(input/magic) + digit;
    }
  }

}

// Driver code
//console.log(in_words(4));
//console.log(in_words(27));
console.log(in_words(999999999999999));
//console.log(in_words(38079));
//console.log(in_words(82102713));
