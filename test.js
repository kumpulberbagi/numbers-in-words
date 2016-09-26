function in_words(angkaToWord){
var result = []
var satuanAngka = ["satu", "dua", "tiga","empat",'lima','enam','tujuh','delapan','sembilan'];
var angkaSatuan = [1,2,3,4,5,6,7,8,9]
var angkaInWordPuluhan = ['sepuluh','sebelas','belas','puluh']
var angkaInWordRatusan = ['seratus','ratus']
var angkaInWordRibuan = ['seribu','ribu']


var ratusJuta = Math.floor((angkaToWord%1000000000)/100000000)
var puluhJuta = Math.floor((angkaToWord%100000000)/10000000)
var jutaan = Math.floor((angkaToWord%10000000)/1000000)
var ratusRibu = Math.floor((angkaToWord%1000000)/100000)
var puluhRibuan = Math.floor((angkaToWord%100000)/10000)
var ribuan = Math.floor((angkaToWord%10000)/1000)
var ratusan = Math.floor((angkaToWord%1000)/100)
var puluhan = Math.floor((angkaToWord%100)/10)
var satuan = Math.floor((angkaToWord%10)/1)

console.log(puluhJuta+" "+jutaan+" "+ratusRibu+" "+puluhRibuan+" "+ribuan+" "+ratusan+" "+puluhan+" "+satuan);



for(var i=0;i<satuanAngka.length+1;i++){
  if( i === puluhJuta)
  {
    if(puluhJuta===0)break
    result.push(satuanAngka[i-1] + " puluh")
  }
}


for(var i=0;i<satuanAngka.length+1;i++){
  if( i === jutaan)
  {
    if(jutaan===0)break
    result.push(satuanAngka[i-1] + " juta")
  }
}


for(var i=0;i<satuanAngka.length+1;i++){
  if( i === ratusRibu)
  {
    if(ratusRibu===0)break
    result.push(satuanAngka[i-1] + " ratus ribu")
  }
}

for(var i=0;i<satuanAngka.length+1;i++){
  if( i === puluhRibuan)
  {
    if(puluhRibuan===0)break
    result.push(satuanAngka[i-1] + " puluh")
  }
}


for(var i=0;i<satuanAngka.length+1;i++){
  if( i === ribuan)
  {
    if(ribuan===0)break
    result.push(satuanAngka[i-1] + " ribu")
  }
}

for(var i=0;i<satuanAngka.length+1;i++){
  if(i === ratusan)
  {
    if(ratusan===0)break
    result.push(satuanAngka[i-1]+ " ratus")
  }
}

for(var i=0;i<satuanAngka.length+1;i++){
  if(angkaToWord > 10 && angkaToWord <= 19)
  {
    if(angkaToWord===11)
    {
    result.push("sebelas")
    break
  }else if(angkaToWord > 11)
  {
    if(angkaToWord === 12){
    result.push(satuanAngka[i+1]+" belas")
    break
  } else if(angkaToWord === 13){
    result.push(satuanAngka[i+2]+" belas")
    break
  }else if(angkaToWord === 14){
    result.push(satuanAngka[i+3]+" belas")
    break
  }
  else if(angkaToWord === 15){
    result.push(satuanAngka[i+4]+" belas")
    break
  }else if(angkaToWord === 16){
    result.push(satuanAngka[i+5]+" belas")
    break
  }else if(angkaToWord === 17){
    result.push(satuanAngka[i+6]+" belas")
    break
  }else if(angkaToWord === 18){
    result.push(satuanAngka[i+7]+" belas")
    break
  }else if(angkaToWord === 19){
    result.push(satuanAngka[i+8]+" belas")
    break
  }
  }
    if(i===satuan)
    {
      if(satuan===0)break
      result.push(satuanAngka[i-1])
   }
  }else if(angkaToWord>=20){
  if(i===puluhan)
  {
    if(puluhan===0)break
     result.push(satuanAngka[i-1]+ " puluh")
  }
}
}

for(var i=0;i<satuanAngka.length+1;i++){
  if(angkaToWord > 10 && angkaToWord <= 19){
    if(i===puluhan)
    {
      if(puluhan===0)break
       //result.push(satuanAngka[i-1]+ " puluh")
    }
  }else if(angkaToWord >= 20){
   if(i===satuan)
   {
     if(satuan===0)break
     result.push(satuanAngka[i-1])
  }
}
else if(angkaToWord >= 1 && angkaToWord < 10){
 if(i===satuan)
 {
   if(satuan===0)break
   result.push(satuanAngka[i-1])
}
}else if(angkaToWord === 10)
{
  result.push("sepuluh")
  break
}
}
console.log(result.join(' '));
}

in_words(2)
in_words(23)
in_words(234)
in_words(2345)
in_words(23457)
in_words(234578)
in_words(2345782)
in_words(23457828)
