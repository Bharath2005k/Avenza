import { useEffect, useRef, useState } from 'react';
import { Briefcase, Clock, TrendingUp } from 'lucide-react';

const Solutions = () => {
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

  const solutions = [
    {
      icon: <Briefcase className="w-16 h-16" />,
      title: 'Flexible Engagement',
      description: 'Whether you need a dedicated offshore team, onshore consultants, or a hybrid model, we adapt to your specific requirements. Our flexible engagement models ensure you get the right expertise at the right time.',
      benefits: ['Dedicated teams', 'Staff augmentation', 'Project-based delivery', 'Hybrid models'],
    },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B365D] mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored solutions designed to meet your unique business challenges
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#1B365D] to-[#0066CC] p-12 flex items-center justify-center">
                  <div className="text-white transform hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="text-3xl font-bold text-[#1B365D] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#FFB800] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div
            className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-gradient-to-br from-[#0066CC] to-[#00A3E0] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#1B365D] mb-3">Faster Time-to-Market</h4>
            <p className="text-gray-600">Accelerate your implementation with our proven methodologies</p>
          </div>

          <div
            className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-gradient-to-br from-[#0066CC] to-[#00A3E0] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#1B365D] mb-3">Reduced Costs</h4>
            <p className="text-gray-600">Optimize your investment with efficient delivery models</p>
          </div>

          <div
            className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="bg-gradient-to-br from-[#0066CC] to-[#00A3E0] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#1B365D] mb-3">Enterprise Quality</h4>
            <p className="text-gray-600">Bank-grade security and quality assurance standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
