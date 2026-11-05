// ===== DATA: label aspek perkembangan & saran stimulasi =====
const domainLabels = {
    fineMotor: "Gerak Halus",
    speech: "Bicara & Bahasa",
    social: "Sosialisasi & Kemandirian",
    grossMotor: "Gerak Kasar",
    sensoryMotor: "Terapi Okupasi & Sensori"
};

const defaultStimulations = {
    fineMotor: "Lakukan latihan meronce manik-manik, menggunting pola lurus, menggambar bentuk lingkaran/kotak/tanda tambah, menggambar bentuk orang, serta meremas lilin mainan (playdough) untuk melatih otot pincer grip.",
    speech: "Ajak anak bercerita, latih pemahaman posisi (di atas, di bawah, di depan, di samping, di belakang), kenalkan konsep warna, serta latih artikulasi dan kelancaran bicaranya.",
    social: "Latih anak mengancingkan baju sendiri, menggosok gigi tanpa dibantu, bereaksi sesuai aturan permainan kelompok (ular tangga, petak umpet), serta menjaga kemandirian sehari-hari.",
    grossMotor: "Ajak anak berdiri di atas 1 kaki tanpa berpegangan selama setidaknya 2 detik atau lebih, berjalan di atas papan titian lurus, serta melatih keseimbangan tubuh secara berkala.",
    sensoryMotor: "Lakukan aktivitas sensori integrasi seperti bermain beras/pasir kinetik (taktil), latihan keseimbangan papan titian/trampolin (vestibular), serta latihan mengangkat beban/meremas benda padat (proprioseptif)."
};

const motorikDatabase = [];
