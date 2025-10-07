import { useEffect, useRef, useState } from 'react';
import { Briefcase, UserCheck, Star } from 'lucide-react';

const Careers = () => {
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

  const jobOpenings = [
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: 'Senior Developer',
      description: 'Join our team as a Senior Developer and help us build innovative banking solutions with cutting-edge technology.',
    },
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: 'Senior Product Specialist',
      description: 'Lead product strategy and delivery with your deep expertise and passion for financial technology.',
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: 'Pre-Sales Solutioning Lead',
      description: 'Bring 18+ years of experience to guide our pre-sales efforts and shape customer engagements.',
    },
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: 'Lead Product Consultant',
      description: 'Drive high-impact banking transformation projects and mentor our consulting teams to success.',
    },
  ];

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="scroll-mt-24 py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1B365D] mb-6">
            Careers at Avenza
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our passionate team driving innovation in banking technology. Apply now to be part of our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {jobOpenings.map((job, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-[#0066CC] to-[#00A3E0] text-white w-20 h-20 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-6 transition-transform duration-300">
                {job.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1B365D] mb-4">{job.title}</h3>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
              <button
                className="mt-6 bg-[#0066CC] hover:bg-[#004A99] text-white font-semibold px-6 py-3 rounded-lg transition"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Apply Now
              </button>
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
              Be Part Of Our Mission
            </div>
            <p className="text-2xl lg:text-3xl font-light leading-relaxed">
              We believe in flat hierarchies, clear communication, and a culture of ownership and accountability. Join us to make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
