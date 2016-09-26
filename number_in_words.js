

function in_words(angka) {
  var result ="";
  var arrAngka = angka.toString().split("");
  var satuan = ["","satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
  var angkaLen = arrAngka.length;
  var atas = ["ribu","juta","miliar","triliun"];
  var pow = ["puluh","ratus","ribu","puluh ribu","ratus ribu","juta", "puluh juta","ratus juta", "miliar", "puluh miliar","ratus miliar","triliun","puluh triliun","ratus triliun"];

  if (angka<10) {
   return result+=satuan[arrAngka[0]];
  }
  else if (angka === 10) {
    return "sepuluh"
  }
  else if (angka%10 === 0 && angka<100 && angka!==10) {
    result = satuan[arrAngka[0]]+" puluh";
  }
  else if (angka>10&&angka<20) {
    result=satuan[arrAngka[1]]+" belas";
  }
  else if (angka>=20 && angka <= 10999 ) {
    result += satuan[arrAngka[0]]+ " " + pow[angkaLen-2]+" "+in_words(angka-(Math.pow(10,angkaLen-1))*arrAngka[0]);
  }
  else if (angka > 10999 && angkaLen%3===1) {
    var awal = arrAngka.splice(0,1).join("");
    var akhir = arrAngka.length;
    result += in_words(awal) + " " + atas[(akhir/3) - 1] + " " + in_words(arrAngka.join(""));
  }
  else if(angka > 10999 && angkaLen%3===2){
    var awal = arrAngka.splice(0,2).join("");
    var akhir = arrAngka.length;
    result += in_words(awal) + " " + atas[(akhir/3) - 1] + " " + in_words(arrAngka.join(""));
    //result += satuan[arrAngka[0]] + " puluh " + atas[Math.floor(angka/10000)]+in_words(angka-(Math.pow(10,angkaLen-1))*arrAngka[0]);
  }
  else if (angka > 10999 && angkaLen%3===0) {
    var awal = arrAngka.splice(0,3).join("");
    var akhir = arrAngka.length;
    result += in_words(awal) + " " + atas[(akhir/3) - 1] + " " + in_words(arrAngka.join(""));
  }
  return result
}


// Driver code
// console.log(in_words(1000000));
console.log(in_words(199999));
console.log(in_words(99999));
// console.log(in_words(10999));
// console.log(in_words(168999));
console.log(in_words(12345));
console.log(in_words(1248634561239));
console.log(in_words(7));
console.log(in_words(10));
console.log(in_words(919));
console.log(in_words(9999));
// console.log(in_words(12));
