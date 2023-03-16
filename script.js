// NO 1.
function cetakFunction(a){
    return `Nama` + a;
}

console.log(cetakFunction(" Allam"));


//NO 2.
let angka1 = 20;
let angka2 = 7;

function myFunction(a, b){
    return a + b;
}
let output = myFunction(angka1, angka2);
console.log(output);

//NO 3.
let hallo=() =>{
    return "Hello";
}
console.log();
//NO 4.
let object = {
    nama: "John",
    umur : 22,
    bahasa : "Indonesia"
}
console.log(object.bahasa);

// NO 5.
let arrayDaftarPeserta = ["John Doe", "Laki-laki", "Baca buku", 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    jenis_kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    Tahun_lahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);

//NO 6.
const buah = [{
    nama: 'Nanas',
    warna: 'Kuning',
    ada_bijinya: 'tidak',
    harga: 9000
},
{
    nama: 'Jeruk',
    warna: 'Oranye',
    ada_bijinya: 'ada',
    harga: 8000
},
{
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    ada_bijinya: 'ada',
    harga: 10000
},
{
    nama: 'Pisang',
    warna: 'Kuning',
    ada_bijinya: 'tidak',
    harga: 4000
}
]

const bijiBuah = buah.filter((bijiii) => bijiii.ada_bijinya === 'tidak');
console.log(bijiBuah);