export function Hero() {
    return (
      <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] mt-24">
        {/* Vídeo de fundo */}
        <video
          src="/videos/fireworkvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Texto sobre o vídeo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-bebas text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 mt-14">
            THE BEST FIREWORKS THAT YOU CAN FIND IN UTAH
          </h1>
          <h2 className="font-bebas text-8xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6">
            Celebrate with Us!
          </h2>
          <a
            href="#location"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--link-default)] hover:text-[var(--link-hover)] mb-6"
          >
            Find us
          </a>
          <a
            href="#location"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--link-default)] hover:text-[var(--link-hover)]"
          >
            Contact us
          </a>
        </div>
      </section>
    );
  }
  