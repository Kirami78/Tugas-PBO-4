class Orang {

    constructor(nama, alamat, tukangRombeng) {



        this.nama = nama;

        this.alamat = alamat;

        this.tukangRombeng = tukangRombeng;

    }

    tampilkanInformasi() {

        console.log(`Nama: ${this.nama}Alamat: ${this.alamat}`)

    }

}

// Definisi kelas turunan

class Mahasiswa extends Orang {

    constructor(nama, alamat, nim) {

        super(nama, alamat); // Memanggil konstruktor kelas induk

        this.nim = nim;

    }

    tampilkanInformasi() {

        super.tampilkanInformasi(); // Memanggil metode dari kelas induk

        console.log(`NIM: ${this.nim}`);

    }

}

class Pedagang extends Orang {

    constructor(nama, alamat, pekerjaan) {

        super(nama, alamat); // Memanggil konstruktor kelas induk

        this.pekerjaan = pekerjaan;

    }

    tampilkanInformasi() {

        super.tampilkanInformasi(); // Memanggil metode dari kelas induk

        console.log(`pekerjaan: ${this.pekerjaan}`);

    }

}

// Penggunaan kelas turunan

const mahasiswa1 = new Mahasiswa("Tanzil Kirami\n","Jl. jalan","202301110047\n");

mahasiswa1.tampilkanInformasi();



const pedagang1 = new Pedagang("Mang Acan\n","Jl. Rusak","Tukang martabak");

pedagang1.tampilkanInformasi();
