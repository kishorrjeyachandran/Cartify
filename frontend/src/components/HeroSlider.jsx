import {
  useEffect,
  useState,
} from "react";

import {
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

const slides = [
  {
    id: 1,

    title:
      "Premium Fashion Collection",

    subtitle:
      "Discover luxury streetwear and modern essentials crafted for everyday style.",

    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: 2,

    title:
      "Next Generation Electronics",

    subtitle:
      "Explore smart devices and premium gadgets built for modern living.",

    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: 3,

    title:
      "Minimal Lifestyle Products",

    subtitle:
      "Beautifully designed products that elevate your everyday experience.",

    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
  },
];

const HeroSlider = () => {
  const [current,
    setCurrent] =
    useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval =
      setInterval(() => {
        setCurrent(
          (prev) =>
            (prev + 1) %
            slides.length
        );
      }, 5000);

    return () =>
      clearInterval(
        interval
      );
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden rounded-[40px] border border-[#1F1F22]">
      
      {/* SLIDES */}
      {slides.map(
        (slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              current ===
              index
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center">
              
              <div className="max-w-7xl mx-auto px-6 w-full">
                
                <div className="max-w-2xl">
                  
                  <p className="text-sm uppercase tracking-[0.3em] text-zinc-300 mb-6">
                    Cartify Collection
                  </p>

                  <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-8">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-zinc-300 leading-8 mb-10">
                    {slide.subtitle}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    
                    <Link
                      to="/shop"
                      className="h-14 px-8 rounded-2xl bg-white text-black font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
                    >
                      Shop Now

                      <ArrowRight
                        size={18}
                      />
                    </Link>

                    <Link
                      to="/wishlist"
                      className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        
        {slides.map(
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrent(
                  index
                )
              }
              className={`transition-all rounded-full ${
                current ===
                index
                  ? "w-10 h-3 bg-white"
                  : "w-3 h-3 bg-white/40"
              }`}
            />
          )
        )}
      </div>
    </section>
  );
};

export default HeroSlider;