// Buatlah program searching nama yang dapat dibatasi jumlah outputnya
// yang menerapkan  callback function dengan data sebagai berikut:
const names = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function myLoop(str, out) {
  let temp = [];

  for (let i = 0; i < names.length; i++) {
    let namesLow = names[i].toLowerCase();
    console.log(namesLow);
    str = str.toLowerCase()

    if (namesLow.includes(str) && temp.length < out) {
      temp.push(names[i]);
    }
  }
  if (temp.length == 0) {
    return "Nama tidak ditemukan"
  }else {
    return temp;
  }
}

function searchName(str, out, callback) {
  if (typeof str != "string" || !str) {
    return "karakter harus berupa string";
  } else if (out < 1 || typeof out != "number") {
    return "jumlah harus lebih besar dari 0 dan berupa angka";
  } else {
    return callback(str, out);
  }
}

console.log(searchName('a', 5, myLoop));
