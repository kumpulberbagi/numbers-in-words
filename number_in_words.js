

function in_words(angka) {
  var result ="";
  var arrAngka = angka.toString().split("");
  var satuan = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  var angkaLen = arrAngka.length;
  // var pow = ["ribu","juta","miliar","triliun"];
  var pow = ["puluh","ratus","ribu","puluh ribu","ratus ribu","juta", "puluh juta","ratus juta", "miliar", "puluh miliar","ratus miliar","triliun","puluh triliun","ratus triliun"];

  if (angka<10) {
   result+=satuan[arrAngka[0]];
  }
  else if (angka === 10) {
    return "sepuluh"
  }
  else if (angka%10 === 0 && angka<100 && angka!==10) {
    return result = satuan[arrAngka[0]]+" puluh";
  }
  else if (angka>10&&angka<20) {
    return result=satuan[arrAngka[1]]+" belas";
  }
  else if (angka>=20 ) {
    result += satuan[arrAngka[0]]+ " " + pow[angkaLen-2]+" "+in_words(angka-(Math.pow(10,angkaLen-1))*arrAngka[0]);
  }
  // else if(angka >= 10000){
  //   if (angkaLen%3===1) {
  //     result+=
  //   }
  //}
  return result
}


// Driver code
// console.log(in_words(1000000));
console.log(in_words(9871));
console.log(in_words(5));         `    `
console.log(in_words(7));
console.log(in_words(10));
console.log(in_words(919));
// console.log(in_words(12));
