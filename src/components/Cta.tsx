import React from "react";
import { Button } from "@/components/ui/button";

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-black text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to own GiRi?
      </h2>
      <p className="text-gray-400 mb-6">
        Experience cutting-edge AI — pre-order today.
      </p>
      <Button className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-transform duration-300">
        Pre-Order Now
      </Button>
    </section>
  );
};

export default CTA;
