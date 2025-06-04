// src/pages/Services.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const services = [
    {
      title: 'Servis Printer',
      description: 'Perbaikan dan maintenance printer semua merk',
      features: ['Cleaning head printer', 'Ganti cartridge', 'Perbaikan paper jam', 'Kalibrasi warna'],
      icon: '🖨️'
    },
    {
      title: 'Servis Laptop',
      description: 'Perbaikan laptop untuk semua kerusakan hardware dan software',
      features: ['Ganti LCD/LED', 'Upgrade RAM/SSD', 'Cleaning keyboard', 'Install OS'],
      icon: '💻'
    },
    {
      title: 'Servis Komputer',
      description: 'Perbaikan PC desktop dan workstation',
      features: ['Ganti komponen', 'Upgrade hardware', 'Optimasi performa', 'Troubleshooting'],
      icon: '🖥️'
    },
    {
      title: 'Servis Elektronik',
      description: 'Perbaikan perangkat elektronik rumah tangga',
      features: ['TV LED/LCD', 'Speaker aktif', 'Perangkat audio', 'Elektronik lainnya'],
      icon: '📺'
    },
    {
      title: 'Pemasangan WiFi',
      description: 'Instalasi dan konfigurasi jaringan WiFi',
      features: ['Setup router', 'Konfigurasi jaringan', 'Optimasi sinyal', 'Keamanan WiFi'],
      icon: '📶'
    },
    {
      title: 'Pemasangan CCTV',
      description: 'Instalasi sistem keamanan CCTV',
      features: ['Camera IP/Analog', 'DVR/NVR setup', 'Remote monitoring', 'Maintenance berkala'],
      icon: '📹'
    }
  ];

  const serviceTypes = [
    {
      type: 'Home Service',
      description: 'Kami datang ke lokasi Anda',
      features: ['Tidak perlu repot datang ke toko', 'Teknisi berpengalaman', 'Peralatan lengkap']
    },
    {
      type: 'Antar Jemput',
      description: 'Layanan antar jemput gratis',
      features: ['Free pickup & delivery', 'Area Nganjuk dan sekitarnya', 'Garansi keamanan barang']
    },
    {
      type: 'Cek Berkala',
      description: 'Maintenance rutin perangkat',
      features: ['Jadwal maintenance', 'Laporan kondisi', 'Pencegahan kerusakan']
    },
    {
      type: 'Emergency Service',
      description: 'Layanan darurat 24/7',
      features: ['Respon cepat', 'Prioritas tinggi', 'Solusi sementara']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Solusi lengkap untuk semua kebutuhan teknologi Anda dengan layanan profesional 
            dan berkualitas tinggi
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Jenis Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Tipe Pelayanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceTypes.map((serviceType, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-bold mb-3 text-blue-600">{serviceType.type}</h3>
                <p className="text-gray-600 mb-4">{serviceType.description}</p>
                <ul className="space-y-1">
                  {serviceType.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Proses Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Konsultasi', desc: 'Hubungi kami untuk konsultasi gratis' },
              { step: '2', title: 'Diagnosa', desc: 'Teknisi akan menganalisa masalah' },
              { step: '3', title: 'Perbaikan', desc: 'Proses perbaikan dengan spare part original' },
              { step: '4', title: 'Garansi', desc: 'Garansi untuk hasil perbaikan' }
            ].map((process, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Membantu Anda</h2>
          <p className="text-xl mb-8">
            Hubungi kami sekarang untuk mendapatkan layanan terbaik
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Hubungi Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
