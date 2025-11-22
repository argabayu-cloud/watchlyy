import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, children }) => {
  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Hero;
