document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.getElementById('name');
    const imgProfileElement = document.getElementById('img-profile');
    const homeButton = document.getElementById('home-button');

    // Mengatur observasi untuk animasi saat elemen terlihat
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ketika elemen terlihat, tambahkan class visible
                nameElement.classList.add('fade-in', 'visible');
                imgProfileElement.classList.add('fade-in', 'visible');
            } else {
                // Ketika elemen tidak terlihat, hapus class visible
                nameElement.classList.remove('fade-in', 'visible');
                imgProfileElement.classList.remove('fade-in', 'visible');
            }
        });
    }, {
        threshold: 0.4 // Trigger animation when 40% of the element is visible
    });

    // Memulai pengamatan pada elemen
    observer.observe(nameElement);
    observer.observe(imgProfileElement);

    // Fungsi untuk mengulang animasi saat tombol Home diklik
    homeButton.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah perilaku default anchor

        // Menghapus kelas untuk memicu animasi ulang
        nameElement.classList.remove('fade-in', 'visible');
        imgProfileElement.classList.remove('fade-in', 'visible');

        // Menunggu sejenak sebelum menambahkan kelas kembali
        setTimeout(() => {
            nameElement.classList.add('fade-in', 'visible');
            imgProfileElement.classList.add('fade-in', 'visible');
        }, 10); // Delay yang kecil untuk memastikan animasi dapat dimulai kembali

        // Scroll ke bagian yang dituju
        document.querySelector('#jumbotron').scrollIntoView({ behavior: 'smooth' });
    });
});
 

document.addEventListener('DOMContentLoaded', function () {
    const aboutCard = document.querySelector('.about-card');
    const aboutImg = document.querySelector('.about-img');
    const aboutTexts = document.querySelectorAll('.about-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ketika elemen terlihat, tambahkan class visible
                aboutCard.classList.add('visible');
                aboutImg.classList.add('visible');
                aboutTexts.forEach(text => text.classList.add('visible'));
            } else {
                // Ketika elemen tidak terlihat, hapus class visible
                aboutCard.classList.remove('visible');
                aboutImg.classList.remove('visible');
                aboutTexts.forEach(text => text.classList.remove('visible'));
            }
        });
    }, {
        threshold: 0.4 // Trigger animation when 10% of the element is visible
    });

    observer.observe(aboutCard); // Start observing the about card
});

window.addEventListener('scroll', function () {
    const name = document.getElementById('name');
    const imgProfile = document.getElementById('img-profile');

    // Mendapatkan posisi elemen
    const namePosition = name.getBoundingClientRect().top;
    const imgPosition = imgProfile.getBoundingClientRect().top;

    // Jika elemen terlihat di viewport
    if (namePosition < window.innerHeight) {
        name.classList.add('visible');
    }
    if (imgPosition < window.innerHeight) {
        imgProfile.classList.add('visible');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 300); // Menyesuaikan waktu untuk masing-masing kartu
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skillCards = document.querySelectorAll('.card-hover'); // Pilih semua elemen kartu

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dapatkan indeks kartu
                const index = Array.from(skillCards).indexOf(entry.target);
                // Tambahkan class visible dengan penundaan
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 300); // Penundaan 300ms per kartu
            } else {
                // Ketika elemen tidak terlihat, hapus class visible
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.4 // Trigger animation when 40% of the element is visible
    });

    skillCards.forEach(card => {
        observer.observe(card); // Mulai mengamati setiap kartu
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skillCards = document.querySelectorAll('.card-portof'); // Pilih semua elemen kartu

    // Mengatur semua kartu ke posisi awal (tersembunyi)
    skillCards.forEach(card => {
        card.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dapatkan indeks kartu
                const index = Array.from(skillCards).indexOf(entry.target);
                // Tambahkan class visible dengan penundaan
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                }, index * 300); // Penundaan 300ms per kartu
            } else {
                // Ketika elemen tidak terlihat, hapus class visible dan tambahkan class hidden
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, {
        threshold: 0.4 // Trigger animation when 40% of the element is visible
    });

    skillCards.forEach(card => {
        observer.observe(card); // Mulai mengamati setiap kartu
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skillCards = document.querySelectorAll('.card-blog'); // Pilih semua elemen kartu

    // Mengatur semua kartu ke posisi awal (tersembunyi)
    skillCards.forEach(card => {
        card.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dapatkan indeks kartu
                const index = Array.from(skillCards).indexOf(entry.target);
                // Tambahkan class visible dengan penundaan
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                }, index * 300); // Penundaan 300ms per kartu
            } else {
                // Ketika elemen tidak terlihat, hapus class visible dan tambahkan class hidden
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, {
        threshold: 0.4 // Trigger animation when 40% of the element is visible
    });

    skillCards.forEach(card => {
        observer.observe(card); // Mulai mengamati setiap kartu
    });
});

// CONTACT
document.addEventListener('DOMContentLoaded', function () {
    const skillCards = document.querySelectorAll('.card-custom-contact'); // Pilih semua elemen kartu

    // Mengatur semua kartu ke posisi awal (tersembunyi)
    skillCards.forEach(card => {
        card.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Dapatkan indeks kartu
                const index = Array.from(skillCards).indexOf(entry.target);
                // Tambahkan class visible dengan penundaan
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('hidden');
                }, index * 500); // Penundaan 300ms per kartu
            } else {
                // Ketika elemen tidak terlihat, hapus class visible dan tambahkan class hidden
                entry.target.classList.remove('visible');
                entry.target.classList.add('hidden');
            }
        });
    }, {
        threshold: 0.4 // Trigger animation when 40% of the element is visible
    });

    skillCards.forEach(card => {
        observer.observe(card); // Mulai mengamati setiap kartu
    });
});



















