const tombol = document.getElementById('send');
tombol.onclick = simpan_data;


function simpan_data(e) {
    e.preventDefault();

    // ambil nilai dari setiap input
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked').value;
    var favorit = Array.from(document.querySelectorAll('input[name="Favorit"]:checked')).map(function(favorit) {
        return favorit.value;
    });
    var alamat = document.getElementById('alamat').value;

    // buat objek untuk menyimpan nilai dari setiap input
    var data = JSON.parse(sessionStorage.getItem('data')) || [];
    data.push({
        'Nama' : nama,
        'Email' : email,
        'Jenis Kelamin' : jeniskelamin,
        'Favorit' : favorit,
        'Alamat' : alamat,
    })

    // simpan objek ke dalam session storage
	alert('Anda Sudah Jadi Member');
    sessionStorage.setItem('data', JSON.stringify(data));
   	window.location.href = "../html/Tampilkan.html";

    // document.getElementById('myFrom').reset();
	
}