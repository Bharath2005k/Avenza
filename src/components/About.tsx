import { useEffect, useRef, useState } from 'react';
import { Cpu, Zap, Target, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Core Banking Transformation',
      description: 'Partner with us for seamless, timely, and risk-minimized core banking transformations. We bring decades of implementation experience across global tier-1 banks, ensuring your transition is smooth and successful.',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Temenos Expertise',
      description: 'As a certified Temenos partner, we deliver comprehensive solutions across the entire Temenos suite—T24/Transact, Infinity, and Payments Hub. Our expertise ensures optimal configuration and maximum value from your Temenos investment.',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Proprietary Solutions',
      description: 'Leverage our innovative accelerators and testing frameworks designed specifically for core banking implementations. These proven solutions significantly reduce time-to-market while enhancing quality and reliability.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'AI-Powered Implementation',
      description: 'Experience next-generation banking transformation with our AI-driven tools and automation frameworks. We combine human expertise with artificial intelligence to deliver faster, more accurate implementations.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B365D] mb-6">
            About Avenza
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming banking technology through innovation, expertise, and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-[#0066CC] to-[#00A3E0] text-white w-20 h-20 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-br from-[#1B365D] to-[#0066CC] rounded-3xl p-10 lg:p-16 text-white text-center shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-sm font-semibold text-[#FFB800] mb-4 uppercase tracking-wider">
              Our Value Proposition
            </div>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed">
              avenza blends temenos expertise with AI, digital, and advanced analytics to deliver future-proof core banking solutions, creating a unique value proposition for customers worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
