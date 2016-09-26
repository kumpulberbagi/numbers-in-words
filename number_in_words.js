function in_words(angka) {
  // Your code here
  var satuan = ['', 'satu', 'dua', 'tiga' ,'empat' ,'lima' ,'enam' ,'tujuh' ,'delapan', 'sembilan', 'sepuluh',
                'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  var puluhan = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
  var ratusan = ['', 'seratus', 'dua ratus', 'tiga ratus', 'empat ratus', 'lima ratus', 'enam ratus', 'tujuh ratus', 'delapan ratus', 'sembilan ratus'];
  var jutaan = ['', 'satu juta', 'dua juta', 'tiga juta', 'empat juta', 'lima juta', 'enam juta', 'tujuh juta', 'delapan juta', 'sembilan juta'];

  var n = ('000000000' + angka).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  //console.log(n);
  var result = '';

  if (n[1] != 0) {
    result += (satuan[(n[1])] || puluhan[n[1][0]] + ' ' + satuan[n[1][1]]) + 'puluh ';
  }

  if (n[2] != 0) {
    result += (satuan[(n[2])] || jutaan[n[2][0]] + ' ' + ratusan[n[2][1]]) + 'ratus ';
  }

  if (n[3] != 0) {
    if (n[3] == 1) {
      result += 'seribu ';
    } else {
      result += (satuan[(n[3])] || puluhan[n[3][0]] + ' ' + satuan[n[3][1]]) + 'ribu ';
    }
  }

  if (n[4] != 0) {
    if (n[4] == 1) {
      result += 'seratus ';
    } else {
      result += (satuan[(n[4])] || satuan[n[4][0]] + ' ' + satuan[n[4][1]]) + 'ratus ';
    }
  }

  if(n[5] != 0){
      result += '' + (satuan[(n[5])] || puluhan[n[5][0]] + ' ' + satuan[n[5][1]]);
  }

  return result;
}

// Driver code
console.log(in_words(4));
console.log(in_words(27));
console.log(in_words(102));
console.log(in_words(38079));
console.log(in_words(82102713));
