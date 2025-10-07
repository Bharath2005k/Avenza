import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, TestTube2, Database, Settings } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <TestTube2 className="w-10 h-10" />,
      title: 'Managed Testing',
      description: 'Comprehensive testing services ensuring quality and reliability',
      features: [
        'End-to-end test automation frameworks',
        'Functional and non-functional testing',
        'Performance and load testing',
        'User acceptance testing (UAT) support',
        'Continuous integration and testing',
        'Defect management and reporting',
      ],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Managed Migration',
      description: 'Seamless data migration with zero data loss',
      features: [
        'Data mapping and transformation',
        'Migration planning and strategy',
        'Data quality assessment and cleansing',
        'Parallel run and reconciliation',
        'Cutover planning and execution',
        'Post-migration support and validation',
      ],
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'Run & Change the Bank',
      description: 'Ongoing support and continuous improvement',
      features: [
        'Application maintenance and support',
        'Production monitoring and incident management',
        'Regular updates and enhancements',
        'Regulatory compliance updates',
        'Performance optimization',
        'Business-as-usual (BAU) operations',
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B365D] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive banking technology services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#0066CC] transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-[#0066CC] to-[#00A3E0] text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0066CC] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
