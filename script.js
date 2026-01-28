function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  function sendMessage() {
    const userInput = document.getElementById('user-input').value;
  
    if (!userInput) {
      alert("Por favor ingresá una fecha");
      return;
    }
  
    const message = `Hola! te consulto por el turno del día ${userInput}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/542944587498?text=${encodedMessage}`;
  
    window.open(whatsappLink, '_blank');
  }
  