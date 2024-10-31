function contatoWhatsApp(message) {
    const phoneNumber = '5543984410082'; // Substitua pelo número de contato de Gabriel Morais
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
