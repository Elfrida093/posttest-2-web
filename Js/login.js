const form = document.getElementById("form").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const tombol = document.getElementById('tombol')
tombol.onclick = login

function login(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        alert(`Selamat Datang ${user.username}, Anda berhasil login`);
        window.location.href = "../html/Beranda.html";
    }else{
        alert("Gagal masuk");
    }
    }


