import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Zap, Package, Star } from "lucide-react";

const models = [
  { 
    name: "Model X", 
    price: "$499", 
    image: "/images/giri.png",
    features: [
      { icon: Package, text: "Compact and lightweight" },
      { icon: Zap, text: "Energy efficient" },
      { icon: ShieldCheck, text: "Basic AI capabilities" },
    ]
  },
  { 
    name: "Model Y", 
    price: "$699", 
    image: "/images/giri2.png",
    features: [
      { icon: Star, text: "Advanced AI features" },
      { icon: Zap, text: "Fast performance" },
      { icon: ShieldCheck, text: "Enhanced security" },
    ]
  },
  { 
    name: "Model Pro", 
    price: "$999", 
    image: "/images/giri3.png",
    features: [
      { icon: Star, text: "Premium build and sensors" },
      { icon: Zap, text: "Top-tier performance" },
      { icon: ShieldCheck, text: "Ultra secure" },
    ]
  },
];

const ModelComparison: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-black">Compare Our Models</h2>
      
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {models.map((model, index) => (
          <Card 
            key={model.name}
            className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700 bg-gradient-to-br from-black to-gray-900 
                       transform transition duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,0,0,0.4)] animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="absolute inset-0 border border-white/10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)] pointer-events-none" />
            
            <CardContent className="p-8 relative z-10 flex flex-col items-center">
              <div className="mb-6">
                <Image
                  src={model.image}
                  alt={model.name}
                  width={220}
                  height={220}
                  className="object-contain rounded-xl shadow-lg"
                />
              </div>
              <h3 className="font-bold text-xl text-white mb-2">{model.name}</h3>
              <p className="text-blue-400 text-xl font-semibold mb-4">{model.price}</p>
              
              <div className="grid grid-cols-1 gap-2 w-full mb-4">
                {model.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <f.icon className="w-5 h-5 text-blue-400" />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-white text-black hover:bg-gray-200 w-full">
                Select {model.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ModelComparison;
