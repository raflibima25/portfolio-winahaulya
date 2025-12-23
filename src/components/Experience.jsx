const Experience = () => {
    const workExperience = [
        {
            id: 1,
            title: 'Cook Helper',
            company: 'S2 Banquet Jakarta',
            period: 'November 2022 - Desember 2024',
            type: 'work',
            description: [
                'Memastikan standar kualitas dan higienitas bahan makanan sesuai prosedur perusahaan',
                'Mengelola inventaris peralatan masak dan memastikan kebersihan area produksi',
                'Mendukung proses penyajian dengan memastikan kualitas produk sesuai standar',
                'Berkoordinasi dengan tim untuk memastikan efisiensi operasional',
            ],
        },
        {
            id: 2,
            title: 'Packing Staff',
            company: 'PT Monde Mahkota Biscuits',
            period: 'September 2019 - April 2020',
            type: 'work',
            description: [
                'Melaksanakan proses pengemasan produk sesuai SOP perusahaan',
                'Melakukan quality control dengan memeriksa kualitas pengemasan',
                'Mendukung pencapaian target produksi melalui manajemen waktu yang efektif',
            ],
        },
    ];

    const organizationExperience = [
        {
            id: 3,
            title: 'Sekretaris',
            company: 'Karang Taruna',
            period: 'Januari 2013 - Januari 2024',
            type: 'organization',
            description: [
                'Mencatat dan menyusun notulen rapat serta mendokumentasikan keputusan organisasi',
                'Melakukan koordinasi dengan anggota dan pihak eksternal untuk kelancaran program',
                'Bertanggung jawab atas pengelolaan arsip, dokumentasi, dan administrasi organisasi selama 11 tahun',
            ],
        },
        {
            id: 4,
            title: 'Ketua Paskibra',
            company: 'SMK Era Pembangunan Umat',
            period: 'Januari 2017 - Januari 2018',
            type: 'organization',
            description: [
                'Memimpin dan mengkoordinasikan seluruh kegiatan anggota Paskibra',
                'Mengawasi dan memastikan kelancaran pelaksanaan kegiatan serta administrasi organisasi',
                'Mengelola jadwal latihan, dokumentasi kegiatan, dan koordinasi dengan pihak sekolah',
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 bg-[#FFE4EF]">
            <div className="container">
                <h2 className="section-title">Pengalaman</h2>
                <p className="section-subtitle">
                    Perjalanan karir dan pengalaman organisasi yang telah saya tempuh
                </p>

                {/* Work Experience */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-center mb-10 flex items-center justify-center gap-3">
                        <span className="text-3xl">💼</span> Pengalaman Kerja
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {workExperience.map((exp) => (
                            <div key={exp.id} className="bg-white rounded-3xl p-8 shadow-pink transition-all hover:-translate-y-2 hover:shadow-pink-lg">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                                        <p className="text-[#F6B1CE] font-medium">{exp.company}</p>
                                    </div>
                                    <span className="px-4 py-2 text-sm font-medium bg-[#FFE4EF] text-[#2D2D2D] rounded-full whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.description.map((item, index) => (
                                        <li key={index} className="text-[#6B6B6B] text-sm leading-relaxed flex gap-2">
                                            <span className="text-[#F6B1CE]">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Organization Experience */}
                <div>
                    <h3 className="text-2xl font-semibold text-center mb-10 flex items-center justify-center gap-3">
                        <span className="text-3xl">🏆</span> Pengalaman Organisasi
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {organizationExperience.map((exp) => (
                            <div key={exp.id} className="bg-white rounded-3xl p-8 shadow-pink transition-all hover:-translate-y-2 hover:shadow-pink-lg">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                                        <p className="text-[#F6B1CE] font-medium">{exp.company}</p>
                                    </div>
                                    <span className="px-4 py-2 text-sm font-medium bg-[#FFE4EF] text-[#2D2D2D] rounded-full whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.description.map((item, index) => (
                                        <li key={index} className="text-[#6B6B6B] text-sm leading-relaxed flex gap-2">
                                            <span className="text-[#F6B1CE]">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Award */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 px-8 py-4 glass rounded-full shadow-pink">
                        <span className="text-3xl">🏅</span>
                        <div className="text-left">
                            <p className="font-semibold">Penghargaan</p>
                            <p className="text-sm text-[#6B6B6B]">Purna Paskibraka Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
