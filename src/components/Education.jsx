const Education = () => {
    return (
        <section id="education" className="py-24 bg-white">
            <div className="container">
                <h2 className="section-title">Pendidikan</h2>
                <p className="section-subtitle">
                    Latar belakang pendidikan formal yang telah saya tempuh
                </p>

                <div className="max-w-3xl mx-auto">
                    <div className="glass rounded-3xl p-8 shadow-pink">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center text-4xl">
                                🎓
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-1">Sekolah Tinggi Ilmu Ekonomi Kusuma Negara</h3>
                                        <p className="text-[#F6B1CE] font-medium">S1 Manajemen - Manajemen Sumber Daya Manusia</p>
                                    </div>
                                    <div className="mt-2 md:mt-0 text-right">
                                        <span className="px-4 py-2 text-sm font-medium bg-[#FFE4EF] text-[#2D2D2D] rounded-full">
                                            2020 - 2024
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-[#FFE4EF] rounded-full">
                                        <span className="text-lg">📍</span>
                                        <span className="text-sm font-medium">Jakarta, Indonesia</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-[#FFE4EF] rounded-full">
                                        <span className="text-lg">📊</span>
                                        <span className="text-sm font-medium">IPK: 3.68 / 4.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
