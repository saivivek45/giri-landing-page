import React from "react";
import Image from "next/image";
import { CheckCircle, ShieldCheck, Smile, Zap, Package, Sliders, Star, Tag } from "lucide-react";

const features = [
  { title: "Smart Automation", description: "Helps in your everyday tasks", icon: Zap },
  { title: "Reliable", description: "Easy to carry", icon: CheckCircle },
  { title: "Secure", description: "Not hackable", icon: ShieldCheck },
  { title: "User-Friendly", description: "Your best friend", icon: Smile },
  { title: "Energy Efficient", description: "Saves power", icon: Star },
  { title: "Compact Design", description: "Fits anywhere", icon: Package },
  { title: "Customizable", description: "Adapts to you", icon: Sliders },
  { title: "Affordable", description: "Great value", icon: Tag },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="w-full md:w-100 mb-8 md:mb-0 md:mr-12">
        <Image 
          src="/images/giri.png" 
          alt="Robot" 
          width={600} 
          height={600} 
          className="w-full h-auto animate-bounce-slow"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-500 ease-in-out hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-2">
                <Icon className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-bold text-base">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
