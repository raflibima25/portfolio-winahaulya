const About = () => {
    const stats = [
        { number: '2+', label: 'Tahun Pengalaman' },
        { number: '3.68', label: 'IPK' },
        { number: '11+', label: 'Tahun Organisasi' },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="container">
                <h2 className="section-title">Tentang Saya</h2>
                <p className="section-subtitle">
                    Kenali lebih dekat tentang latar belakang dan keahlian saya
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
                    {/* Image Section */}
                    <div className="relative max-w-[400px] mx-auto lg:mx-0">
                        <div className="relative rounded-3xl overflow-hidden shadow-pink-lg">
                            <div className="w-full aspect-[4/5] gradient-primary flex items-center justify-center text-white">
                                <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white p-6 rounded-2xl shadow-pink-lg flex items-center gap-4">
                            <span className="text-5xl font-bold gradient-text">2+</span>
                            <span className="text-sm text-[#6B6B6B] leading-tight">Tahun<br />Pengalaman</span>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="lg:pl-5 text-center lg:text-left">
                        <h3 className="text-2xl lg:text-3xl font-semibold leading-snug mb-6">
                            Sarjana Manajemen dengan Spesialisasi
                            <span className="gradient-text"> Manajemen SDM</span>
                        </h3>

                        <p className="text-[#6B6B6B] mb-4 leading-relaxed">
                            Saya adalah lulusan S1 Manajemen dari Sekolah Tinggi Ilmu Ekonomi Kusuma Negara
                            dengan spesialisasi Manajemen Sumber Daya Manusia dan IPK 3.68. Memiliki pengalaman
                            kerja lebih dari 2 tahun di berbagai bidang.
                        </p>

                        <p className="text-[#6B6B6B] mb-8 leading-relaxed">
                            Memiliki kemampuan organisasi yang kuat, administrasi yang teliti, dan komunikasi
                            yang efektif. Mampu mengelola dokumen, koordinasi tim, dan mendukung operasional
                            perusahaan dengan baik. Terbiasa bekerja dengan target dan memiliki etos kerja tinggi.
                        </p>

                        <div className="flex gap-10 mb-8 justify-center lg:justify-start">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="text-3xl font-bold text-[#2D2D2D]">{stat.number}</span>
                                    <span className="text-sm text-[#6B6B6B]">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#contact" className="btn-primary">
                            Hubungi Saya
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
