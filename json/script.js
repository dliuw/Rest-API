// const personal = {
//   nama : "David Liuw",
//     umur : 22,
//     pekerjaan : "Web Developer",
//     bekerja : true,
//     perusahaan : {
//         nama : "PT. Abase",
//         lokasi : "Manado, Sulawesi Utara, Sulawesi, Indonesia"
//       },
//     hobby : [
//       "nonton", 
//       "bermain game"
//     ]
// }

// console.log(JSON.stringify(personal))

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange= function(){
//   if(xhr.readyState == 4 && xhr.status == 200){
//     let personal = JSON.parse(this.responseText);
//     console.log(personal)
//   }
// }
// xhr.open('GET', 'test.json', true);
// xhr.send();

$.getJSON('test.json', function(data){
console.log(data)
});