const Skills = () => {
    const skillCategories = [
        {
            title: 'Kompetensi Administrasi',
            icon: '📋',
            skills: [
                { name: 'Manajemen Dokumen & Pengarsipan', level: 90 },
                { name: 'Administrasi Umum', level: 88 },
                { name: 'Manajemen Data & Pelaporan', level: 85 },
                { name: 'Koordinasi & Komunikasi', level: 90 },
                { name: 'Manajemen Waktu', level: 85 },
            ],
        },
        {
            title: 'Keterampilan Teknis',
            icon: '💻',
            skills: [
                { name: 'Microsoft Word', level: 90 },
                { name: 'Microsoft Excel', level: 85 },
                { name: 'Microsoft PowerPoint', level: 88 },
                { name: 'Google Suite', level: 85 },
                { name: 'Digital Marketing', level: 75 },
            ],
        },
        {
            title: 'Soft Skills',
            icon: '🤝',
            skills: [
                { name: 'Ketelitian & Detail Oriented', level: 92 },
                { name: 'Kepemimpinan', level: 85 },
                { name: 'Kerja Tim', level: 90 },
                { name: 'Komunikasi Efektif', level: 88 },
                { name: 'Adaptasi', level: 85 },
            ],
        },
    ];

    const certifications = [
        { name: 'Brevet A & B', icon: '📜' },
        { name: 'Digital Marketing', icon: '📱' },
        { name: 'Microsoft Office', icon: '💼' },
        { name: 'Google Suite', icon: '☁️' },
        { name: 'Indonesia (Native)', icon: '🇮🇩' },
        { name: 'English (Passive)', icon: '🇬🇧' },
    ];

    return (
        <section id="skills" className="py-24 bg-white">
            <div className="container">
                <h2 className="section-title">Keahlian Saya</h2>
                <p className="section-subtitle">
                    Keterampilan dan kompetensi yang saya miliki untuk mendukung karir profesional
                </p>

                {/* Certifications & Languages */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2.5 px-6 py-3.5 glass rounded-full shadow-pink transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-pink hover:bg-[#FFE4EF] animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="text-xl">{cert.icon}</span>
                            <span className="font-medium text-[0.95rem]">{cert.name}</span>
                        </div>
                    ))}
                </div>

                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass rounded-3xl p-8 shadow-pink transition-all hover:-translate-y-2 hover:shadow-pink-lg">
                            <div className="flex items-center gap-4 mb-7 pb-4 border-b border-[#F6B1CE]/30">
                                <span className="text-3xl w-[60px] h-[60px] flex items-center justify-center gradient-primary rounded-2xl">{category.icon}</span>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>
                            <div className="flex flex-col gap-5">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-[0.95rem]">{skill.name}</span>
                                            <span className="text-sm text-[#6B6B6B] font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-[#FFE4EF] rounded-full overflow-hidden">
                                            <div
                                                className="h-full gradient-primary rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
