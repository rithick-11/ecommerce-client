import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Heart, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCoursel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel Data
  const carouselItems = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSazo07-DxH3kJ4ZfyvzxmIU7lDn9fgBf5l7g&s',
      title: 'Mens Collection',
      description: 'Discover our latest Mens styles',
      buttonText: 'Shop Now'
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8vtM-LzoiA0rhdThn-W-CVi1K3aneLDcHQ&s",
      title: 'Womens Arrivals',
      description: 'Be the first to wear our newest designs',
      buttonText: 'Explore'
    },
    {
      id: 3,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwWzTPMGzuixPMp0LLfbrc_k0OxFcHfAtWQ&s',
      title: 'Kids Offers',
      description: 'Up to 50% off on selected items',
      buttonText: 'View Deals'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  // ... (previous header code remains the same)

  return (
    <div className="mt-3 shadow-lg">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="min-w-full relative">
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
                    <p className="text-xl mb-6">{item.description}</p>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCoursel;