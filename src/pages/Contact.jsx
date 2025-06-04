// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, phone, service, message } = formData;
  const adminPhone = '6285175406291'; // Ganti dengan nomor admin tanpa +
  
  const text = `
    Halo Admin TechService, saya ingin menghubungi:

    Nama: ${name}
    Email: ${email}
    Telepon: ${phone}
    Layanan: ${service || 'Tidak disebutkan'}
    Pesan: ${message}
    `;

  const encodedText = encodeURIComponent(text);
  const waUrl = `https://wa.me/${adminPhone}?text=${encodedText}`;

  window.open(waUrl, '_blank'); // buka di tab baru (bisa juga pakai _self untuk di tab yang sama)
};


  const services = [
    'Servis Printer',
    'Servis Laptop',
    'Servis Komputer',
    'Servis Elektronik',
    'Pemasangan WiFi',
    'Pemasangan CCTV',
    'Home Service',
    'Lainnya'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Siap membantu Anda 24/7. Konsultasi gratis untuk semua kebutuhan teknologi Anda
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Telepon</h3>
              <p className="text-gray-600">+62 812-3456-7890</p>
              <p className="text-gray-600">+62 821-9876-5432</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@techservice.com</p>
              <p className="text-gray-600">support@techservice.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Alamat</h3>
              <p className="text-gray-600">Jl. Teknologi No. 123</p>
              <p className="text-gray-600">Nganjuk, Jawa Timur</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Jam Operasional</h3>
              <p className="text-gray-600">Senin - Sabtu</p>
              <p className="text-gray-600">08:00 - 17:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Layanan
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Pilih layanan</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Jelaskan masalah atau kebutuhan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6">Lokasi Kami</h2>

              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Google Maps Placeholder</p>
                  <p className="text-sm text-gray-400">Jl. Teknologi No. 123, Nganjuk</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4" data-aos="zoom-in" data-aos-delay="100">
                  <h3 className="font-semibold text-green-800 mb-2">WhatsApp</h3>
                  <p className="text-green-700 text-sm mb-3">Chat langsung untuk respon cepat</p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    Chat WhatsApp
                  </a>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4" data-aos="zoom-in" data-aos-delay="200">
                  <h3 className="font-semibold text-blue-800 mb-2">Emergency Service</h3>
                  <p className="text-blue-700 text-sm mb-3">Layanan darurat 24/7 untuk masalah urgent</p>
                  <a
                    href="tel:+6281234567890"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
                  >
                    <Phone size={18} className="mr-2" />
                    Call Emergency
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Sering Diajukan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div data-aos="fade-right">
                <h3 className="font-semibold mb-2">Berapa lama waktu perbaikan?</h3>
                <p className="text-gray-600 text-sm">Waktu perbaikan bervariasi tergantung jenis kerusakan. Umumnya 1-3 hari kerja.</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="100">
                <h3 className="font-semibold mb-2">Apakah ada garansi?</h3>
                <p className="text-gray-600 text-sm">Ya, kami memberikan garansi untuk semua perbaikan yang kami lakukan.</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="200">
                <h3 className="font-semibold mb-2">Apakah bisa home service?</h3>
                <p className="text-gray-600 text-sm">Ya, kami melayani home service untuk area Nganjuk dan sekitarnya.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div data-aos="fade-left">
                <h3 className="font-semibold mb-2">Bagaimana cara pembayaran?</h3>
                <p className="text-gray-600 text-sm">Kami menerima pembayaran tunai, transfer bank, dan e-wallet.</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="100">
                <h3 className="font-semibold mb-2">Apakah ada layanan antar jemput?</h3>
                <p className="text-gray-600 text-sm">Ya, kami menyediakan layanan antar jemput gratis untuk area tertentu.</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <h3 className="font-semibold mb-2">Berapa biaya konsultasi?</h3>
                <p className="text-gray-600 text-sm">Konsultasi awal gratis. Biaya hanya dikenakan jika melakukan perbaikan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
