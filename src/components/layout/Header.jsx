import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false, // agar animasi muncul berulang kali saat scroll
            easing: 'ease-in-out',
        });
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Our Services', href: '/services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActiveLink = (href) => {
        return location.pathname === href;
    };

    return (
        <header className='bg-white shadow-lg sticky top-0 z-50' data-aos="fade-down">
            <div className='bg-blue-600 text-white py-2'>
                <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex justify-between items-center py-4'>
                        <div className='flex items-center' data-aos="fade-right">
                            <Link to='/' className='text-2xl font-bold text-white'>
                                Tech Service
                            </Link>
                        </div>

                        <div className='hidden md:flex items-center space-x-8' data-aos="fade-down">
                            {navigation.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                        isActiveLink(item.href)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-white hover:text-blue-200'
                                    }`}
                                    data-aos="fade-down"
                                    data-aos-delay={index * 100}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className='hidden md:block' data-aos="fade-left">
                            <Link
                                to='/contact'
                                className='bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
                            >
                                Hubungi Kami
                            </Link>
                        </div>

                        <div className='md:hidden'>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className='text-white hover:text-blue-200 transition-colors'
                                data-aos="fade-left"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className='md:hidden py-4 border-t border-blue-300' data-aos="fade-up">
                            <div className='flex flex-col space-y-2'>
                                {navigation.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                                            isActiveLink(item.href)
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-white hover:text-blue-200'
                                        }`}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <Link
                                    to='/contact'
                                    onClick={() => setIsMenuOpen(false)}
                                    className='bg-white text-blue-600 px-3 py-2 rounded-md text-sm font-medium text-center mt-2'
                                    data-aos="fade-up"
                                    data-aos-delay={navigation.length * 100}
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
