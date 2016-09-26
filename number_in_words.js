function in_words(angka) {
  // Your code here


  var satuan = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ', 'sepuluh ', 'sebelas ', 'dua belas ', 'tiga belas ', 'empat belas ', 'lima belas ', 'enam belas ', 'tujuh belas ', 'delapan belas ', 'sembilan belas '];
  var puluhan = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
  var ratusan = ['', 'se', 'dua ratus', 'tiga ratus', 'empat ratus', 'lima ratus', 'enam ratus', 'tujuh ratus', 'delapan ratus', 'sembilan ratus'];
  var jutaan = ['', 'satu juta', 'dua juta', 'tiga juta', 'empat juta', 'lima juta', 'enam juta', 'tujuh juta', 'delapan juta', 'sembilan juta'];
  var n;

  n = ('000000000' + angka).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  // console.log("hasil: " + n + " | " + n[1] + " | " + n[2]);
  var str = '';

  if (n[1] != 0) {
    str += (satuan[(n[1])] || puluhan[n[1][0]] + ' ' + satuan[n[1][1]]) + 'puluh ';
  } else {
    str += '';
  }

  if (n[2] != 0) {
    str += (satuan[(n[2])] || jutaan[n[2][0]] + ' ' + ratusan[n[2][1]]) + 'ratus ';
  } else {
    str += '';
  }

  if (n[3] != 0) {
    if (n[3] == 1) {
      str += 'seribu ';
    } else {
      str += (satuan[(n[3])] || puluhan[n[3][0]] + ' ' + satuan[n[3][1]]) + 'ribu ';
    }
  } else {
    str += '';
  }

  if (n[4] != 0) {
    if (n[4] == 1) {
      str += 'seratus ';
    } else {
      str += (satuan[(n[4])] || satuan[n[4][0]] + ' ' + satuan[n[4][1]]) + 'ratus ';
    }

  } else {
    str += '';
  }

  if (n[5] != 0) {
    if (str != '') {
      str += '' + (satuan[(n[5])] || puluhan[n[5][0]] + ' ' + satuan[n[5][1]]);
    } else {
      str += '' + (satuan[(n[5])] || puluhan[n[5][0]] + ' ' + satuan[n[5][1]]);
    }
  } else {
    str += '';
  }

  return str;

}

// Driver code
console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
