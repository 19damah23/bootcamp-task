let printSegitiga = 5

if (!printSegitiga) {
  console.log("Silahkan input angka");
} else if (typeof printSegitiga != "number") {
  console.log("Input harus berupa angka");
} else {
  let str = '';
    for (let i = printSegitiga; i >= 1 ; i--) {
        for (let j = 1; j <= i; j++) {
          str += j + ' ';
        }
        str += '\n';
    }
    console.log(str);
}
