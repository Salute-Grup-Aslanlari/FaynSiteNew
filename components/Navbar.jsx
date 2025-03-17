'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import i18n from '../translate/i18n';
import Image from 'next/image';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleCloseMenu = (e) => {
    if (e.target.closest('.mobile-menu') === null) {
      setMobileMenuOpen(false);
    }
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-black text-white shadow-md sticky top-0 z-50 font-sans">
        <div className="max-w-5sm mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center justify-start space-x-6 pl-7">
            <Image src="/assets/FAYNLOGOBEYAZ.png" alt="Fayn Logo" width={128} height={32} priority />
          </div>
          
          <ul className="hidden lg:flex space-x-8 mx-auto mr-20">
            <li><Link href="/" className="hover:text-gray-300 text-lg mr-10">{t('home')}</Link></li>
            <li><Link href="/About" className="hover:text-gray-300 text-lg mr-10">{t('about')}</Link></li>
            <li><Link href="/Locations" className="hover:text-gray-300 text-lg mr-10">{t('locations')}</Link></li>
            <li><Link href="/Products" className="hover:text-gray-300 text-lg mr-10">{t('products')}</Link></li>
          </ul>

          <div className="hidden lg:flex space-x-4 ml-auto">
            <button onClick={() => changeLanguage('tr')} className="hover:text-gray-300 text-lg">TR</button>
            <span>/</span>
            <button onClick={() => changeLanguage('en')} className="hover:text-gray-300 text-lg">EN</button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 w-2/5 h-full bg-black text-white py-6 px-6 z-50 flex flex-col items-center justify-center space-y-6 transition-transform duration-500 transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden mobile-menu`}
        >
          <div className="flex justify-center mb-6">
            <Image src="/assets/FAYNLOGOBEYAZ.png" alt="Fayn Logo" width={128} height={32} priority />
          </div>

          <ul className="flex flex-col items-center space-y-6">
            <li><Link href="/" className="hover:bg-stone-950 px-6 py-3 rounded-lg text-2xl w-full text-center" onClick={handleMenuItemClick}>{t('home')}</Link></li>
            <li><Link href="/About" className="hover:bg-stone-950 px-6 py-3 rounded-lg text-2xl w-full text-center" onClick={handleMenuItemClick}>{t('about')}</Link></li>
            <li><Link href="/Locations" className="hover:bg-stone-950 px-6 py-3 rounded-lg text-2xl w-full text-center" onClick={handleMenuItemClick}>{t('locations')}</Link></li>
            <li><Link href="/Products" className="hover:bg-stone-950 px-6 py-3 rounded-lg text-2xl w-full text-center" onClick={handleMenuItemClick}>{t('products')}</Link></li>
          </ul>
          
          <div className="mt-6 flex space-x-4 justify-center">
            <button onClick={() => changeLanguage('tr')} className="hover:text-gray-300 text-xl">TR</button>
            <button onClick={() => changeLanguage('en')} className="hover:text-gray-300 text-xl">EN</button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={handleCloseMenu}></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;