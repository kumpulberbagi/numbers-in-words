var bahasa = ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var satuan = [" " ,"belas", "puluh", "ratus", "ribu"];
var khusus =["sepuluh", "sebelas","seratus","seribu"]
var tampung = [];

function in_words(n){
  var stringAngka = n.toString();

  if(stringAngka.length ==  4){
    if(n === 1000){
      tampung.push(khusus[3])
    } else if(n>1000 && n < 2000){
      tampung.push( khusus[3]);
      var arr = stringAngka.split("");
      arr.shift();
      var x = Number(arr.join(""));
      in_words(x);
    } else {
      tampung.push( bahasa [ (angka.indexOf(parseInt(stringAngka[0]))) ] + " " + satuan[4]);
      var arr = stringAngka.split("");
      arr.shift();
      var x = Number(arr.join(""));
      in_words(x);
    }

  }

  if(stringAngka.length ==  3){
    if(n === 100){
      tampung.push(khusus[2]);
    }else if( n > 100 && n < 200){
      tampung.push( khusus[2]);
      var arr = stringAngka.split("");
      arr.shift();
      var x = Number(arr.join(""));
      in_words(x);
    }else{
      tampung.push( bahasa [ (angka.indexOf(parseInt(stringAngka[0]))) ] + " " + satuan[3]);
      var arr = stringAngka.split("");
      arr.shift();
      var x = Number(arr.join(""));
      in_words(x);
    }


  }

  if(stringAngka.length ==  2){

    if(n === 10){
      tampung.push(khusus[0]);
    }else if(n == 11){
        tampung.push(khusus[1]);
    }else if(n > 11 && n < 20){
      tampung.push( bahasa [ (angka.indexOf(parseInt(stringAngka[1]))) ] + " " + satuan[1]);
      var arr = stringAngka.split("");
      arr.shift();
      var x = Number(arr.join(""));
    }else{
      tampung.push( bahasa [ (angka.indexOf(parseInt(stringAngka[0]))) ] + " " + satuan[2]);
      var arr = stringAngka.split("");
      arr.shift();
      var x = Number(arr.join(""));
      in_words(x);
    }
  }

  if(stringAngka.length ==  1){
    tampung.push( bahasa [ (angka.indexOf(parseInt(stringAngka[0]))) ] );
    var arr = stringAngka.split("");
    arr.shift();
    var x = Number(arr.join(""));
  }

  if(stringAngka.length ==  0){

  }

  console.log(tampung.join(" "));
}


in_words(8519)
