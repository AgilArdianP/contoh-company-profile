// src/pages/About.jsx
import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
      AOS.init({
        duration: 700,
        once: false,
      });
    }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div data-aos="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-sans text-gray-900 mb-6">Tentang Kami</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TechService adalah perusahaan yang bergerak di bidang teknologi dengan fokus 
            pada pelayanan servis dan maintenance perangkat teknologi
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">Sejarah Perusahaan</h2>
              <p data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150"
                className="text-gray-600 mb-4">
                  TechService didirikan dengan visi untuk menjadi solusi terpercaya dalam 
                  bidang teknologi. Kami memahami betapa pentingnya perangkat teknologi 
                  dalam kehidupan sehari-hari dan bisnis modern.
              </p>
              <p data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="text-gray-600 mb-4">
                Dengan pengalaman bertahun-tahun, kami telah melayani ribuan pelanggan 
                dari berbagai kalangan, mulai dari pengguna rumahan hingga perusahaan besar.
              </p>
              <p data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="text-gray-600">
                Komitmen kami adalah memberikan pelayanan terbaik dengan teknisi 
                yang berpengalaman dan profesional.
              </p>
            </div>
            <div data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Company Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Visi Kami</h3>
              <p className="text-gray-600">
                Menjadi perusahaan teknologi terdepan yang memberikan solusi 
                komprehensif dan terpercaya untuk semua kebutuhan teknologi 
                pelanggan di Indonesia.
              </p>
            </div>
            <div data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Misi Kami</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Memberikan pelayanan berkualitas tinggi</li>
                <li>• Menggunakan teknologi terdepan</li>
                <li>• Membangun kepercayaan pelanggan</li>
                <li>• Memberikan solusi yang tepat waktu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-center mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">P</span>
              </div>
              <h3 data-aos="fade-right" className="text-xl font-semibold mb-3">Profesional</h3>
              <p data-aos="fade-right" className="text-gray-600">
                Kami selalu menjaga standar profesionalitas dalam setiap layanan
              </p>
            </div>
            <div className="text-center">
              <div data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">T</span>
              </div>
              <h3 data-aos="fade-up" className="text-xl font-semibold mb-3">Terpercaya</h3>
              <p data-aos="fade-up" className="text-gray-600">
                Kepercayaan pelanggan adalah prioritas utama kami
              </p>
            </div>
            <div className="text-center">
              <div data-aos="fade-left"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-offset="150" className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">I</span>
              </div>
              <h3 data-aos="fade-left" className="text-xl font-semibold mb-3">Inovatif</h3>
              <p data-aos="fade-left" className="text-gray-600">
                Kami terus berinovasi untuk memberikan solusi terbaik
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;