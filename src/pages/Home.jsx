import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className="text-center">
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-6">
              Solusi Teknologi Terpercaya
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Kami menyediakan layanan servis printer, laptop, komputer, elektronik, 
              pemasangan WiFi dan CCTV dengan kualitas terbaik
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Hubungi Kami
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-sans text-center mb-12" data-aos="fade-up">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Servis Printer',
              'Servis Laptop',
              'Servis Komputer',
              'Servis Elektronik',
              'Pemasangan WiFi',
              'Pemasangan CCTV'
            ].map((service, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-600">
                  Layanan {service.toLowerCase()} profesional dengan teknisi berpengalaman
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Teknis?</h2>
            <p className="text-xl mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
            </p>
            <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Hubungi Kami
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
