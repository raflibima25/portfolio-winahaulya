'use client';

import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: 'Email',
            value: 'winaha08@gmail.com',
            link: 'mailto:winaha08@gmail.com',
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            label: 'Lokasi',
            value: 'Ciracas, Jakarta Timur',
            link: null,
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            label: 'Telepon',
            value: '+62 895 6359 04822',
            link: 'tel:+6289563590482',
        },
    ];

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            link: 'https://linkedin.com/in/winah-aulia-indriana-078713248/',
        },
        {
            name: 'Email',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            link: 'mailto:winaha08@gmail.com',
        },
        {
            name: 'WhatsApp',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            ),
            link: 'https://wa.me/6289563590482',
        },
    ];

    return (
        <section id="contact" className="relative py-24 bg-[#FFE4EF] overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 -z-0 pointer-events-none">
                <div className="absolute w-[400px] h-[400px] bg-[#F6B1CE] rounded-full blur-[80px] opacity-40 -top-[100px] -left-[100px]"></div>
                <div className="absolute w-[300px] h-[300px] bg-white rounded-full blur-[80px] opacity-40 -bottom-[100px] -right-[100px]"></div>
            </div>

            <div className="container relative z-10">
                <h2 className="section-title">Hubungi Saya</h2>
                <p className="section-subtitle">
                    Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
                    {/* Info Section */}
                    <div className="lg:pr-10 text-center lg:text-left">
                        <h3 className="text-2xl font-semibold mb-4">Mari Terhubung!</h3>
                        <p className="text-[#6B6B6B] leading-relaxed mb-8">
                            Saya siap bekerja full-time dan dapat bergabung segera. Jika Anda memiliki
                            kesempatan kerja atau ingin berdiskusi lebih lanjut, silakan hubungi saya
                            melalui kontak di bawah ini.
                        </p>

                        <div className="flex flex-col gap-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-5 flex-col lg:flex-row">
                                    <div className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl text-[#F6B1CE] shadow-pink">
                                        {info.icon}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs text-[#6B6B6B] uppercase tracking-wider">{info.label}</span>
                                        {info.link ? (
                                            <a href={info.link} className="font-medium text-[#2D2D2D] hover:text-[#F6B1CE] transition-colors">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span className="font-medium text-[#2D2D2D]">{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-[#2D2D2D] shadow-pink transition-all hover:gradient-primary hover:-translate-y-1 hover:shadow-pink"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <form className="bg-white p-10 rounded-3xl shadow-pink" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="name" className="font-medium text-[#2D2D2D]">Nama Anda</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full px-5 py-4 text-base border-2 border-[#FFE4EF] rounded-2xl bg-white outline-none transition-all focus:border-[#F6B1CE] focus:shadow-[0_0_0_4px_rgba(246,177,206,0.2)]"
                                />
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <label htmlFor="email" className="font-medium text-[#2D2D2D]">Email Anda</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full px-5 py-4 text-base border-2 border-[#FFE4EF] rounded-2xl bg-white outline-none transition-all focus:border-[#F6B1CE] focus:shadow-[0_0_0_4px_rgba(246,177,206,0.2)]"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 mb-6">
                            <label htmlFor="subject" className="font-medium text-[#2D2D2D]">Subjek</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Kesempatan Kerja"
                                required
                                className="w-full px-5 py-4 text-base border-2 border-[#FFE4EF] rounded-2xl bg-white outline-none transition-all focus:border-[#F6B1CE] focus:shadow-[0_0_0_4px_rgba(246,177,206,0.2)]"
                            />
                        </div>
                        <div className="flex flex-col gap-2.5 mb-6">
                            <label htmlFor="message" className="font-medium text-[#2D2D2D]">Pesan</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tulis pesan Anda di sini..."
                                rows="5"
                                required
                                className="w-full px-5 py-4 text-base border-2 border-[#FFE4EF] rounded-2xl bg-white outline-none transition-all resize-y min-h-[140px] focus:border-[#F6B1CE] focus:shadow-[0_0_0_4px_rgba(246,177,206,0.2)]"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">
                            Kirim Pesan
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
