let tblmenu = [
         {idmenu:1, idkategori:1, menu:"Apel Manalagi", gambar:"apple.png", harga:3000},
         {idmenu:2, idkategori:1, menu:"Pisang Raja", gambar:"banana.png", harga:5000},
         {idmenu:3, idkategori:2, menu:"Nasi Padang", gambar:"nasi-padang.png", harga:20000},
         {idmenu:4, idkategori:2, menu:"Nasi Ayam Bawang", gambar:"nasi-ayam-bawang.png", harga:15000},
         {idmenu:5, idkategori:3, menu:"Es Teh", gambar:"ice-tea.png", harga:5000},
         {idmenu:6, idkategori:3, menu:"Es Jeruk", gambar:"ice-orange.png", harga:7000},
]

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
    <div class="images">
      <img src="Images/${kolom.gambar}" alt="" />
    </div>
    <div class="title">
      <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
      <h2>IDR. ${kolom.harga}</h2>
    </div>
    <div class="btn-beli">
      <button data-idmenu="${kolom.idmenu}">Beli</button>
    </div>
  </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);
        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    }
}

// console.log(cart);
