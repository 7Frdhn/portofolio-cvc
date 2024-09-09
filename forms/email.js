const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_gn9mkqo', 'template_64dpvlh', '#contact-form', 'mmaR7bmmUfIcVN2Z7')
    .then(() => {
        // Tampilkan pesan berhasil
        contactMessage.textContent = 'Pesan Berhasil Di Kirim✅'

        // Hapus pesan setelah 5 detik
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Reset form
        contactForm.reset()
    }, (error) => {
        // Tampilkan pesan error jika terjadi kesalahan
        contactMessage.textContent = 'Gagal Mengirim Pesan. Coba Lagi!❌'
    });
}

contactForm.addEventListener('submit', sendEmail);


