import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative h-[75vh] overflow-hidden">
      <ImageWithFallback 
        src="https://images.unsplash.com/photo-1506619928596-bb8c201545cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBtaW5pbWFsfGVufDF8fHx8MTc2NDM2MzI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Nueva colección"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4">
        <div className="text-center text-white space-y-3 w-full">
          <p className="tracking-[0.4em] uppercase text-[10px]">Nueva temporada</p>
          <h2 className="uppercase tracking-wider text-2xl">Colección<br/>Otoño-Invierno</h2>
          <button className="mt-6 bg-white dark:bg-white text-black px-10 py-3 uppercase tracking-[0.2em] text-xs active:bg-gray-100 transition-colors w-full max-w-xs">
            Descubrir
          </button>
        </div>
      </div>
    </section>
  );
}
