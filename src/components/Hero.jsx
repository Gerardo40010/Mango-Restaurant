import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Array of image URLs for the carousel
  const images = [
    'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudGV8ZW58MHx8MHx8fDA%3D',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Función para scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Función para reservar mesa (puede abrir un modal o WhatsApp)
  const handleReservation = () => {
    // Opción 1: Abrir WhatsApp
    const phoneNumber = "+59172993326"; // Reemplaza con tu número
    const message = "Hola, me gustaría reservar una mesa en Mango Restaurant";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Opción 2: Abrir modal de reserva (si quieres implementarlo después)
    // setShowReservationModal(true);
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-20"
      >
        &larr;
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all z-20"
      >
        &rarr;
      </button>

      {/* Content Overlay with More Transparent Background */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8 py-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl border border-white border-opacity-30">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          Bienvenido a <span className="text-orange-300">Mango</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md">
          Donde cada bocado es una experiencia tropical única
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Ver Menú
          </button>
          <button 
            onClick={handleReservation}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105"
          >
            Reservar Mesa
          </button>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage 
                ? 'bg-orange-500 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          ></button>
        ))}
      </div>

      {/* Flecha indicadora para scroll */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('menu')}
          className="text-white text-4xl cursor-pointer hover:text-orange-300 transition-colors"
        >
          
        </button>
      </div>
    </section>
  );
};

export default Hero;