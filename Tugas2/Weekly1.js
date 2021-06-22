function arkFood(price, distance, promo, tax) {
  // Total
  let total = 0;

  if (price == "" || !distance) {
    return "Parameter kurang";
  } else if (typeof price != "number" || typeof distance != "number") {
    return "Harga dan jarak harus berupa angka";
  } else {
    let diskon = 0;
    let jarak = 0;

    // Jarak
    if (distance > 2) {
      jarak = (distance - 2) * 3000 + 5000;
    }

    // Promo
    if (promo == "DITRAKTIRDEMY") {
      if (price >= 25000) {
        diskon = (price * 60) / 100;
        if (diskon >= 30000) {
          total = price + jarak - 30000;
        } else {
          total = price + jarak - diskon;
        }
      } else {
        return "Kode promo dapat digunakan jika transaksi diatas 25.000";
      }
    } else if (promo == "ARKAFOOD5") {
      if (price >= 50000) {
        diskon = (price * 50) / 100;
        if (diskon > 50000) {
          total = price + jarak - 50000;
        } else {
          total = price + jarak - diskon;
        }
      } else {
        return "Kode promo dapat digunakan jika transaksi diatas 50.000";
      }
    } else {
      total = price + jarak;
    }

    // Pajak
    if (tax == true) {
      total = total + (total * 5) / 100;
    }
  }

  return total;
}

console.log(arkFood(50000, 5, 'DITRAKTIRDEMY',true));

/**
 * 1 Promo 'ARKAFOOD5' dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50% dengan maksimal potongan sebesar 50rb
 * 2 Promo 'DITRAKTIRDEMY' dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60% dengan potongan maksimal 30rb
 * 3 Jika tidak menggunakan kode promo 'false'
 * Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap 1 km selanjutnya dikenakan penambahan 3rb
 * Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan(true), jika tidak dikenakan pajak(false)
 */
