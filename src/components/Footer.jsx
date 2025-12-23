const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2D2D2D] text-white pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16 mb-10 pb-10 border-b border-white/10">
                    {/* Brand */}
                    <div className="max-w-[300px] mx-auto md:mx-0">
                        <a href="#home" className="text-2xl font-bold text-white inline-block mb-4">
                            Winah<span className="text-[#F6B1CE]">.</span>
                        </a>
                        <p className="text-white/60 leading-relaxed">
                            Sarjana Manajemen dengan spesialisasi Manajemen SDM. Siap bekerja full-time dan dapat bergabung segera.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-5 text-white">Menu</h4>
                        <nav className="flex flex-col gap-3">
                            <a href="#home" className="text-white/60 hover:text-[#F6B1CE] transition-colors">Home</a>
                            <a href="#about" className="text-white/60 hover:text-[#F6B1CE] transition-colors">Tentang</a>
                            <a href="#education" className="text-white/60 hover:text-[#F6B1CE] transition-colors">Pendidikan</a>
                            <a href="#experience" className="text-white/60 hover:text-[#F6B1CE] transition-colors">Pengalaman</a>
                            <a href="#skills" className="text-white/60 hover:text-[#F6B1CE] transition-colors">Keahlian</a>
                            <a href="#contact" className="text-white/60 hover:text-[#F6B1CE] transition-colors">Kontak</a>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-5 text-white">Kontak</h4>
                        <p className="text-white/60 mb-2">winaha08@gmail.com</p>
                        <p className="text-white/60 mb-2">+62 895 6359 04822</p>
                        <p className="text-white/60">Jakarta Timur, Indonesia</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-white/50 text-sm">
                        © {currentYear} Winah Aulya Indriana. All rights reserved.
                    </p>
                    <p className="text-white/50 text-sm">
                        Built with <span className="text-[#F6B1CE] animate-[heartbeat_1.5s_ease-in-out_infinite]">♥</span> using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
