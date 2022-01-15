document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
    let url = "js/tblmenu.json"
    fetch(url)
    // .then(response => response.json())
    .then(function (res) {
        return res.json();
    })
    // .then(json => console.log(json))
    .then(function (data) {
        let output = "<h1>Data Menu</h1> <table> <th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(element => {
            output += `<tr>
            <td>${element.menu}</td>
            <td>${element.harga}</td>
            <td>${element.warna}</td>
            </tr>`
        });
        output += "</table>";
        document.querySelector("#isi").innerHTML = output;
    })
}


// let tblmenu = [{
//     "idmenu": 1,
//     "idkategori": 1,
//     "menu": "Apel Manalagi",
//     "harga": 3000,
//     "warna": ["merah", "kuning", "hijau"],
//     "stok": true,
//     "keterangan": null
// },
// {
//     "idmenu": 2,
//     "idkategori": 1,
//     "menu": "Jeruk",
//     "harga": 4000,
//     "warna": ["biru", "hijau"],
//     "stok": false,
//     "keterangan": null
// }]

// console.log(tblmenu[0].menu);
