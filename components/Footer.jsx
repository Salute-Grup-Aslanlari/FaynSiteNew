'use client';

import React from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import { LINKS } from '../data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    e.target,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  ).then(
    () => {
      toast.success('Mesajınız başarıyla gönderildi!');
    },
    () => {
      toast.error('Mesaj gönderilirken hata oluştu.');
    }
  );

  e.target.reset();
};

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-start">
            <Image 
              src="/assets/FAYNLOGOBEYAZ.png" 
              alt="Şirket Logosu" 
              width={240} 
              height={100} 
              className="w-36 h-auto lg:w-60"
            />
            <div className="mt-4 text-white text-4xl text-left" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>
              <span className="block">Eat Fine</span>
              <span className="block">Drink Fine</span>
              <span className="block">Feel Fayn</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-32">
            {LINKS.map(({ title, items }) => (
              <div key={title}>
                <h6 className="mb-3 text-3xl" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>{title}</h6>
                <ul>
                  {items.map(({ name, url }) => (
                    <li key={name}>
                      <Link href={url} className="text-gray-400 text-2xl hover:text-white transition">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h6 className="mb-3 text-3xl" style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}>Bize Ulaşın</h6>
            <form onSubmit={sendEmail} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                required
                className="w-full p-2 bg-[#dbdbdb] transition-transform duration-300 ease-in-out hover:scale-105 text-black border border-gray-600 rounded-md focus:outline-none"
              />
              <input
                type="email"
                name="reply_to"
                placeholder="E-posta"
                required
                className="w-full p-2 bg-[#dbdbdb] transition-transform duration-300 ease-in-out hover:scale-105 text-black border border-gray-600 rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                required
                className="w-full p-2 bg-[#dbdbdb] transition-transform duration-300 ease-in-out hover:scale-105 text-black border border-gray-600 rounded-md focus:outline-none"
                rows="3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#dbdbdb] transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#dbdbdb] text-black py-2 rounded-md"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>

        <div className="mt-2 mb-2 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Fayn. Tüm Hakları Saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.instagram.com/fayncocktailsandmore/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
              <FaInstagram />
            </Link>
            <Link href="mailto:info@salutegroup.com.tr" className="text-gray-400 hover:text-white transition text-2xl">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
