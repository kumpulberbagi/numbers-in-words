function in_words(angka) {
  // Your code here
  var word = ["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
  var selipan = ["puluh","ratus"];
  var arr = [];
    // for (var i = 0; i < angka.length; i++){
    // }
    angka = angka.toString();
  var pecah = angka.split("");
  pecah = pecah.reverse();
  var arr = [];
  for (var i = 0; i < angka.length; i++){
    if (angka[1] === 1){
      arr.push(word[angka[i-1]+"belas"]);
    }
    arr.push(word[angka[i]]);
    if (i === 1){
      arr.splice(i,0,selipan[0]);
    }
  }
 var hasil = arr.join(" ");
 console.log(hasil);
}

// Driver code
//.log(in_words(1000000));
in_words(34);
in_words(4325);
