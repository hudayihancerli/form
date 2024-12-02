document.addEventListener('DOMContentLoaded', function () {
    // Mocky.io API ile verileri çek
    fetch('https://run.mocky.io/v3/f8debdfe-9d64-43d0-ab36-0ed1e12cb56c')
        .then(response => response.json())
        .then(data => {
            populateDropdown('city', data.cities);
            populateDropdown('course', data.courses);
        });

    function populateDropdown(id, items) {
        const dropdown = document.getElementById(id);
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            dropdown.appendChild(option);
        });
    }

    function toggleMenu() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('show');
    }

    // Reklam kapatma
    document.getElementById('closeAd').addEventListener('click', function () {
        document.getElementById('ad').style.display = 'none';
    });

    // Form doğrulama
    document.getElementById('appointmentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;
    
        // Reset error messages
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(error => {
            error.style.visibility = 'hidden';
        });
    
        // Telefon Doğrulaması
        const phoneField = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        if (!/^[0-9]{3} [0-9]{3} [0-9]{4}$/.test(phoneField.value)) {
            phoneError.style.visibility = 'visible';
            phoneError.textContent = 'Geçerli bir Türk numarası giriniz.';
            valid = false;
        }
    
        // Email Doğrulaması
        const emailField = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
            emailError.style.visibility = 'visible';
            emailError.textContent = 'Geçerli bir e-posta adresi giriniz.';
            valid = false;
        }
    
        // Ad Soyad Doğrulaması
        const nameField = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameField.value.trim() === '') {
            nameError.style.visibility = 'visible';
            nameError.textContent = 'Ad ve soyad alanı boş olamaz.';
            valid = false;
        }
    
        // Şehir Seçimi Doğrulaması
        const cityField = document.getElementById('city');
        const cityError = document.getElementById('cityError');
        if (cityField.value === '') {
            cityError.style.visibility = 'visible';
            cityError.textContent = 'Lütfen bir şehir seçiniz.';
            valid = false;
        }
    
        // Kurs Türü Seçimi Doğrulaması
        const courseField = document.getElementById('course');
        const courseError = document.getElementById('courseError');
        if (courseField.value === '') {
            courseError.style.visibility = 'visible';
            courseError.textContent = 'Lütfen bir kurs türü seçiniz.';
            valid = false;
        }
    
        // Katılım Şartları Doğrulaması
        const termsField = document.getElementById('terms');
        const termsError = document.getElementById('termsError');
        if (!termsField.checked) {
            termsError.style.visibility = 'visible';
            termsError.textContent = 'Katılım şartlarını kabul etmelisiniz.';
            valid = false;
        }
    
        // Eğer form geçerliyse, teşekkür sayfasına yönlendirme
        if (valid) {
            window.location.href = 'thank-you.html';
        }
    });
    
});
