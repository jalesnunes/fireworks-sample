import { bestProducts } from "../data/products";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BestProductsCarousel() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Best Sellers</h2>

      <div className="w-full max-w-6xl overflow-hidden relative"> {/* Garantir que o overflow não gere rolagem */}
        <Carousel className="w-full">
          <CarouselContent>
            {bestProducts.map((product) => (
              <CarouselItem key={product.id} className="flex justify-center">
                <div className="w-[300px] h-[400px] bg-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col items-center justify-center text-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover mb-4"
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl text-[var(--color-secondary)]">
                    {product.price}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controles do carrossel */}
          <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-white text-3xl p-2" />
          <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-white text-3xl p-2" />
        </Carousel>
      </div>
    </section>
  );
}
