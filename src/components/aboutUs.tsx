// src/components/AboutUs.tsx
import { Card, CardContent } from "@/components/ui/card";

export function AboutUs() {
  return (
    <section id="about" className="w-full flex flex-col items-center justify-center px-4 py-20 bg-black">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        About Us
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/about-fireworks.jpg"
            alt="About our fireworks company"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Text */}
        <Card className="w-full md:w-1/2 bg-neutral-800 text-white p-8 rounded-2xl shadow-lg">
          <CardContent className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed">
              At FireBlast, we believe every celebration deserves a moment of magic. 
              With years of experience lighting up the sky, we specialize in providing 
              high-quality fireworks for events of all sizes — from backyard parties to 
              grand city shows.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission is simple: create unforgettable memories with safe, 
              spectacular fireworks. Trust us to bring the spark that transforms 
              your event into a dazzling experience!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
