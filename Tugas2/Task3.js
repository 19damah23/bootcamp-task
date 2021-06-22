// Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
// Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
// Fungsi tersebut akan mencari data didalam dataArray yang memiliki
// nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil
// pencarian dan menampilkannya ke layar/console.

function seleksiNilai(first, last, data) {
  if (data.length < 5) {
    return "masukkan data lebih dari 5"
  } else if (first > last) {
    return "Nilai awal harus lebih kecil dari nilai akhir"
  } else if (typeof first != 'number' || typeof last != 'number') {
    return "Nilai awal dan nilai akhir harus berupa angka"
  } else {
    // mengurutkan data dari yang terkecil
    data.sort((a, b) => a-b)

    // variabel tampung sementara
    let temp = []

    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] > first && data[i] < last) {
        temp.push(data[i])
      }
    }

    if (temp.length > 0) {
      return temp
    } else {
      return "Jumlah angka dalam dataArray tidak ada"
    }
  }
  
}

let data = [2, 25, 4, 14, 17, 30, 8]

console.log(seleksiNilai(9.5, 20, data));