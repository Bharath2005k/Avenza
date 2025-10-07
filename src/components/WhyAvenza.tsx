import { useEffect, useRef, useState } from 'react';
import { Award, Users, Lightbulb, Rocket } from 'lucide-react';

const WhyAvenza = () => {
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

  const reasons = [
    {
      number: '01',
      icon: <Award className="w-12 h-12" />,
      title: 'Credentials',
      description: 'Certified Temenos partner with proven track record across multiple tier-1 banking implementations. Our team holds the highest level of certifications and has successfully delivered complex transformations across continents.',
      stats: '50+ successful implementations',
    },
    {
      number: '02',
      icon: <Users className="w-12 h-12" />,
      title: 'Talent Pool',
      description: 'Access to a global pool of 500+ certified banking technology professionals with deep expertise in Temenos, core banking, and digital transformation. Our consultants bring an average of 10+ years of industry experience.',
      stats: '500+ certified professionals',
    },
    {
      number: '03',
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Thought Leadership',
      description: 'At the forefront of banking technology innovation, we actively contribute to industry forums, publish white papers, and share best practices. Our thought leadership helps shape the future of banking technology.',
      stats: 'Industry-leading insights',
    },
    {
      number: '04',
      icon: <Rocket className="w-12 h-12" />,
      title: 'Accelerators',
      description: 'Proprietary tools and frameworks that reduce implementation time by up to 40%. Our accelerators include automated testing frameworks, migration utilities, and pre-configured templates based on industry best practices.',
      stats: '40% faster implementation',
    },
  ];

  return (
    <section
      id="why-avenza"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-[#1B365D] via-[#2C4F7C] to-[#0066CC] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Avenza?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Four compelling reasons to partner with us for your banking transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-10 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="text-6xl font-bold text-[#FFB800] opacity-50">
                    #{reason.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gradient-to-br from-[#FFB800] to-[#FFA000] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {reason.description}
                  </p>
                  <div className="inline-block bg-[#FFB800] text-[#1B365D] px-4 py-2 rounded-lg font-semibold text-sm">
                    {reason.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-white/10 backdrop-blur-lg rounded-3xl p-10 lg:p-12 border border-white/20 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Banking Technology?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join leading banks worldwide who trust Avenza for their core banking transformation
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#FFB800] text-[#1B365D] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#FFA000] transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyAvenza;
