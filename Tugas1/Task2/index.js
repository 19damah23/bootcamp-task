// Nilai
let bahasaIndonesia = 100,
    bahasaInggris = 88,
    matematika = 93,
    ipa = 80

// Kondisi
if (!bahasaIndonesia || !bahasaInggris || !matematika || !ipa) {
  console.error("Semua nilai harus terisi");
} else if (typeof(bahasaIndonesia) != "number" || typeof(bahasaInggris) != "number" || typeof(matematika) != "number" || typeof(ipa) != "number") {
  console.error("Nilai harus berupa angka");
} else {
  let rataRata = (bahasaIndonesia + bahasaInggris + matematika + ipa) / 4
  console.log(`Rata-rata = ${rataRata}`);
  if (rataRata >= 90) {
    console.log("Grade = A")
  } else if (rataRata >= 80) {
    console.log("Grade = B")
  } else if (rataRata >= 70) {
    console.log("Grade = C")
  } else if (rataRata >= 60) {
    console.log("Grade = D")
  } else {
    console.log("Grade = E")
  }
}