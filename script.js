function openWhatsApp() {
    const phone = "6283189483134";
    const message = "Halo C-TECH, saya ingin konsultasi desain.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}
