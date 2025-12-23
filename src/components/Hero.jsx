import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center py-[120px] pb-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-[500px] h-[500px] bg-[#F6B1CE] rounded-full blur-[80px] opacity-60 -top-[150px] -right-[100px] animate-float"></div>
                <div className="absolute w-[350px] h-[350px] bg-[#FFE4EF] rounded-full blur-[80px] opacity-60 bottom-0 -left-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-[200px] h-[200px] bg-[#F6B1CE] rounded-full blur-[80px] opacity-40 top-1/2 left-1/2 animate-pulse-blob" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="animate-slide-left order-2 lg:order-1 text-center lg:text-left">
                    <p className="text-lg text-[#6B6B6B] mb-2">Hello, I'm</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">Winah Aulya Indriana</h1>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6B6B6B] mb-6">
                        <span className="gradient-text">Management</span> Fresh Graduate
                    </h2>
                    <p className="text-lg text-[#6B6B6B] max-w-[480px] mb-8 leading-relaxed mx-auto lg:mx-0">
                        Sarjana Manajemen dengan spesialisasi Manajemen Sumber Daya Manusia.
                        Memiliki kemampuan organisasi yang kuat, administrasi yang teliti,
                        dan komunikasi yang efektif.
                    </p>
                    <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
                        <a href="#experience" className="btn-primary">
                            Lihat Pengalaman
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Hubungi Saya
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div className="relative flex justify-center items-center animate-slide-right order-1 lg:order-2">
                    <div className="relative w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-full gradient-primary p-2 shadow-pink-lg">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#F6B1CE] overflow-hidden relative">
                            <Image
                                src="/assets/image/IMG_20240709_101849_732_2.webp"
                                alt="Winah Aulya Indriana"
                                fill
                                sizes="(max-width: 1024px) 280px, 350px"
                                className="rounded-full object-cover"
                                priority
                                fetchPriority="high"
                                quality={85}
                            />
                        </div>
                    </div>

                    {/* Floating Cards */}
                    <div className="absolute top-5 right-0 lg:right-[-20px] flex items-center gap-3 px-6 py-4 glass rounded-2xl shadow-pink animate-float">
                        <span className="text-2xl">🎓</span>
                        <p className="font-medium text-sm">S1 Manajemen</p>
                    </div>
                    <div className="absolute bottom-5 left-0 lg:left-[-20px] flex items-center gap-3 px-6 py-4 glass rounded-2xl shadow-pink animate-float" style={{ animationDelay: '1.5s' }}>
                        <span className="text-2xl">📊</span>
                        <p className="font-medium text-sm">IPK 3.68</p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up hidden md:flex" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                <span className="text-xs text-[#6B6B6B] uppercase tracking-widest">Scroll Down</span>
                <div className="w-0.5 h-10 gradient-primary rounded-full relative overflow-hidden">
                    <div className="absolute w-full h-1/2 bg-[#2D2D2D] animate-[scroll-down_2s_ease-in-out_infinite]" style={{ top: '-50%' }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
