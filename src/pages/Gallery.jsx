import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'printer', name: 'Printer' },
    { id: 'laptop', name: 'Laptop' },
    { id: 'computer', name: 'Komputer' },
    { id: 'wifi', name: 'WiFi' },
    { id: 'cctv', name: 'CCTV' }
  ];

  const galleryItems = [
    { id: 1, category: 'printer', title: 'Servis Printer Canon', image: '/api/placeholder/400/300', description: 'Perbaikan printer canon yang mengalami paper jam' },
    { id: 2, category: 'laptop', title: 'Ganti LCD Laptop', image: '/api/placeholder/400/300', description: 'Penggantian LCD laptop yang pecah' },
    { id: 3, category: 'computer', title: 'Upgrade RAM PC', image: '/api/placeholder/400/300', description: 'Upgrade RAM komputer untuk performa lebih baik' },
    { id: 4, category: 'wifi', title: 'Instalasi WiFi Kantor', image: '/api/placeholder/400/300', description: 'Pemasangan sistem WiFi untuk kantor' },
    { id: 5, category: 'cctv', title: 'Pemasangan CCTV Rumah', image: '/api/placeholder/400/300', description: 'Instalasi sistem CCTV untuk keamanan rumah' },
    { id: 6, category: 'printer', title: 'Maintenance Printer HP', image: '/api/placeholder/400/300', description: 'Maintenance rutin printer HP di kantor' },
    { id: 7, category: 'laptop', title: 'Servis Laptop Gaming', image: '/api/placeholder/400/300', description: 'Perbaikan laptop gaming yang overheat' },
    { id: 8, category: 'computer', title: 'Rakit PC Gaming', image: '/api/placeholder/400/300', description: 'Perakitan PC gaming custom' },
    { id: 9, category: 'wifi', title: 'Setup WiFi Mesh', image: '/api/placeholder/400/300', description: 'Instalasi sistem WiFi mesh untuk coverage luas' },
    { id: 10, category: 'cctv', title: 'CCTV IP Camera', image: '/api/placeholder/400/300', description: 'Pemasangan IP camera dengan monitoring online' },
    { id: 11, category: 'laptop', title: 'Cleaning Laptop', image: '/api/placeholder/400/300', description: 'Deep cleaning laptop yang berdebu' },
    { id: 12, category: 'computer', title: 'Servis Motherboard', image: '/api/placeholder/400/300', description: 'Perbaikan motherboard yang rusak' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Gallery Pekerjaan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat hasil kerja profesional kami dalam berbagai jenis servis dan instalasi teknologi
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image Placeholder</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="mt-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pencapaian Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div data-aos="zoom-in">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Perangkat Diperbaiki</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">WiFi Terpasang</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">CCTV Terpasang</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Kepuasan Pelanggan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before After Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Before & After</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="flip-left">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Printer Paper Jam</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-600 mb-2">Before</h4>
                    <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Before Image</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Printer sering macet dan hasil cetak buram</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-2">After</h4>
                    <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">After Image</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Printer normal, hasil cetak berkualitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
