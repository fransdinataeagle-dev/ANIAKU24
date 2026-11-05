// ===== DATA: bank soal KPSP per kelompok usia (48, 54, 60, 66, 72 bulan) =====
const kpspDatabase = {
    48: [
        { 
            id: 401, 
            domain: "fineMotor", 
            text: "Berikan contoh membuat jembatan dari 3 buah kubus yaitu dengan meletakkan 2 kubus dengan sedikit jarak (kira-kira satu jari), lalu letakkan balok ketiga di atas kedua kubus sehingga terbentuk seperti jembatan. Minta anak untuk melakukan. Dapatkah anak melakukannya?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <p class="font-bold text-emerald-700 text-[11px]">Jawaban 'Ya':</p>
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="ktk3.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold"></span>
                    </div>
                </div>
            `
        },
        { 
            id: 402, 
            domain: "fineMotor", 
            text: "Beri pensil dan kertas. Jangan membantu anak dan jangan menyebut lingkaran. Buatlah lingkaran di atas kertas tersebut. Minta anak menirunya. Dapatkah anak menggambar lingkaran?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="blt.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 403, 
            domain: "speech", 
            text: "Tunjukkan anak gambar di bawah ini dan tanyakan:",
            subQuestions: [
                "\"Yang mana yang dapat terbang?\"",
                "\"Yang mana yang dapat mengeong?\"",
                "\"Yang mana yang dapat bicara?\"",
                "\"Yang mana yang dapat mengembik?\"",
                "\"Yang mana yang dapat meringkik?\"",
                "Apakah anak dapat menunjuk 2 kegiatan yang sesuai?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="semua.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold"></span>
                    </div>
                </div>
            `
        },
        { 
            id: 404, 
            domain: "speech", 
            text: "Dapatkah anak menyebut nama lengkapnya tanpa dibantu? Jawab 'Tidak' jika ia menyebut sebagian namanya atau ucapannya sulit dimengerti." 
        },
        { 
            id: 405, 
            domain: "speech", 
            text: "Mengenal konsep angka satu: Letakkan 5 kubus di atas meja dan selembar kertas di samping kubus. Katakan kepada anak \"Ambil 1 kubus dan letakkan di atas kertas\". Setelah anak selesai meletakkan, tanyakan \"Ada berapa banyak kubus di atas kertas?\". Dapatkah anak melakukan dengan hanya mengambil satu kubus dan bisa menyebutkan \"Satu\"?" 
        },
        { 
            id: 406, 
            domain: "speech", 
            text: "Tanyakan kepada anak pertanyaan di bawah satu persatu:",
            subQuestions: [
                "\"Apa kegunaan kursi?\" (Jawaban: untuk duduk)",
                "\"Apa kegunaan cangkir?\" (Jawaban: untuk minum)",
                "\"Apa kegunaan pensil?\" (Jawaban: untuk mencoret/menulis)",
                "Apakah anak dapat menjawab 2 pertanyaan dengan benar?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { id: 407, domain: "grossMotor", text: "Dapatkah anak berdiri 1 kaki tanpa berpegangan selama setidaknya 2 detik?" },
        { id: 408, domain: "grossMotor", text: "Dapatkah anak melompat dengan kedua kaki bersamaan melewati selembar kertas?" },
        { id: 409, domain: "social", text: "Dapatkah anak mengenakan pakaian/kaos sendiri tanpa bantuan?" },
        { id: 410, domain: "social", text: "Dapatkah anak mencuci dan mengeringkan tangannya sendiri setelah buang air?" }
    ],
    54: [
        {
            id: 5401,
            domain: "fineMotor",
            text: "Jangan mengoreksi atau membantu anak. Jangan menyebut kata \"Lebih panjang\". Perlihatkan gambar kedua garis ini pada anak. Tanyakan: \"Mana garis yang lebih panjang?\" Minta anak menunjuk garis yang lebih panjang. Setelah anak menunjuk, putar lembar ini dan ulangi pertanyaan tersebut. Apakah anak dapat <strong>menunjuk garis yang lebih panjang sebanyak 3 kali</strong> dengan benar?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <p class="font-bold text-emerald-700 text-[11px]">Jawaban 'Ya':</p>
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="garis2.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        {
            id: 5402,
            domain: "fineMotor",
            text: "Jangan membantu anak dan jangan memberitahu nama gambar ini. Minta anak untuk menggambar seperti contoh di kertas kosong yang tersedia. Berikan 3 kali kesempatan. Apakah anak dapat <strong>menggambar +</strong> seperti contoh di bawah?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="gmbr-tambah.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                    </div>
                </div>
            `
        },
        {
            id: 5403,
            domain: "fineMotor",
            text: "Berikan anak pensil dan kertas lalu katakan kepada anak \"Buatlah gambar orang\" (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan, dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak <strong>menggambar orang dengan sedikitnya 3 bagian tubuh</strong>?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="gmbr.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                    </div>
                </div>
            `
        },
        {
            id: 5404,
            domain: "speech",
            text: "<strong>Memahami konsep 2 warna</strong><br>Minta anak untuk menyebutkan 2 warna. Dapatkah anak <strong>menyebut 2 warna</strong> dengan benar?",
            visual: `
               <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <p class="font-bold text-emerald-700 text-[11px]">Jawaban 'Ya':</p>
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="warna.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold"></span>
                    </div>
                </div>
            `
        },
        {
            id: 5405,
            domain: "speech",
            text: "Tanyakan kepada orang tua atau pengasuh, apakah <strong>bicara anak mampu dipahami seluruhnya oleh orang lain</strong> (yang tidak bertemu setiap hari)?"
        },
        {
            id: 5406,
            domain: "social",
            text: "Tanyakan kepada orang tua atau pengasuh, dapatkah anak <strong>mengikuti peraturan permainan</strong> saat bermain dengan teman-temannya (misal: ular tangga, petak umpet, dll)?"
        },
        {
            id: 5407,
            domain: "social",
            text: "Tanyakan kepada orang tua atau pengasuh, dapatkah anak <strong>menggosok gigi tanpa dibantu</strong>?"
        },
        {
            id: 5408,
            domain: "social",
            text: "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat <strong>mengancingkan bajunya atau pakaian boneka</strong>?"
        },
        {
            id: 5409,
            domain: "speech",
            text: "<strong>Mengenal konsep 2 kata depan</strong><br>Minta anak untuk mengikuti perintah di bawah, jangan memberi isyarat.<br>• \"Ambil benda (misalnya kertas, balok) dan letakkan di atas meja\"<br>• \"Ambil benda (misalnya kertas, balok) dan letakkan di bawah meja\"<br>• \"Ambil benda (misalnya kertas, balok) dan letakkan di depan ibu\"<br>• \"Ambil benda (misalnya kertas, balok) dan letakkan di samping ibu\"<br>• \"Ambil benda (misalnya kertas, balok) dan letakkan di belakang ibu\"<br>Dapatkah anak melakukan sedikitnya <strong>2 perintah (memahami 2 kata depan)</strong>?"
        },
        {
            id: 5410,
            domain: "grossMotor",
            text: "Minta anak untuk <strong>berdiri 1 kaki tanpa berpegangan</strong>. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu <strong>2 detik atau lebih</strong>?"
        }
    ],
   60: [
        { 
            id: 6001, 
            domain: "fineMotor", 
            text: "Perlihatkan gambar kedua garis ini pada anak. Tanyakan: \"Mana garis yang lebih panjang?\" Minta anak menunjuk garis yang lebih panjang. Setelah anak menunjuk, putar lembar ini dan ulangi pertanyaan tersebut. Apakah anak dapat menunjuk garis yang lebih panjang sebanyak 3 kali dengan benar?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <p class="font-bold text-emerald-700 text-[11px]">Jawaban 'Ya':</p>
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="garis.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 6002, 
            domain: "fineMotor", 
            text: "Berikan anak pensil dan kertas lalu katakan kepada anak \"Buatlah gambar orang\" (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan, dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak menggambar orang dengan sedikitnya 3 bagian tubuh?",
            visual: `
               <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="gmbrank.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 6003, 
            domain: "speech", 
            text: "Memahami konsep 4 warna. Minta anak untuk menyebutkan 4 warna. Dapatkah anak menyebut keempat warna tersebut dengan benar?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <p class="font-bold text-emerald-700 text-[11px]">Jawaban 'Ya':</p>
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="wrna.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 6004, 
            domain: "speech", 
            text: "Tanyakan kepada anak pertanyaan berikut ini satu persatu:",
            subQuestions: [
                "\"Apa yang kamu lakukan saat kedinginan?\" Jawaban: pakai jaket, pakai selimut",
                "\"Apa yang kamu lakukan saat kelelahan?\" Jawaban: tidur, berbaring, istirahat",
                "\"Apa yang kamu lakukan saat merasa lapar?\" Jawaban: makan",
                "\"Apa yang kamu lakukan saat merasa haus?\" Jawaban: minum",
                "Dapatkah anak menjawab 3 pertanyaan terkait?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { 
            id: 6005, 
            domain: "social", 
            text: "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat mengancingkan bajunya atau pakaian boneka?" 
        },
        { 
            id: 6006, 
            domain: "social", 
            text: "Tanyakan kepada orang tua atau pengasuh, apakah anak bereaksi dengan tenang dan tidak rewel (tanpa menangis atau menggelayut) pada saat ditinggal oleh orang tua atau pengasuh?" 
        },
        { 
            id: 6007, 
            domain: "social", 
            text: "Tanyakan kepada orang tua atau pengasuh, dapatkah anak sepenuhnya berpakaian sendiri tanpa dibantu?" 
        },
        { 
            id: 6008, 
            domain: "speech", 
            text: "Mengenal konsep 4 kata depan. Minta anak untuk mengikuti perintah di bawah, jangan memberi isyarat:",
            subQuestions: [
                "\"Ambil benda (misalnya kertas, balok) dan letakkan di atas meja\"",
                "\"Ambil benda (misalnya kertas, balok) dan letakkan di bawah meja\"",
                "\"Ambil benda (misalnya kertas, balok) dan letakkan di depan ibu\"",
                "\"Ambil benda (misalnya kertas, balok) dan letakkan di samping ibu\"",
                "\"Ambil benda (misalnya kertas, balok) dan letakkan di belakang ibu\"",
                "Dapatkah anak melakukan sedikitnya 4 perintah (memahami 4 kata depan)?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { 
            id: 6009, 
            domain: "grossMotor", 
            text: "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 4 detik atau lebih?" 
        },
        { 
            id: 6010, 
            domain: "grossMotor", 
            text: "Minta anak untuk melompat dengan 1 kaki beberapa kali tanpa berpegangan (lompatan dengan 2 kaki tidak ikut dinilai). Dapatkah anak melompat 2-3 kali dengan 1 kaki?" 
        }
    ],
   66: [
        { 
            id: 6601, 
            domain: "fineMotor", 
            text: "Menggambar +. Jangan membantu anak dan jangan memberitahu nama gambar ini. Minta anak untuk menggambar seperti contoh di kertas kosong yang tersedia. Berikan 3 kali kesempatan. Apakah anak dapat menggambar + dengan benar?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="tmbh.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 6602, 
            domain: "fineMotor", 
            text: "Menggambar kotak dengan dicontohkan. Berikan kepada anak pensil dan kertas. Tunjukkan kepada anak contoh gambar di bawah. Anda bisa mencontohkan cara membuat kotak. Dapatkah anak menggambar kotak seperti contoh di bawah?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="kotak.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 6603, 
            domain: "fineMotor", 
            text: "Menggambar orang dengan sedikitnya 6 bagian tubuh. Berikan anak pensil dan kertas lalu katakan kepada anak \"Buatlah gambar orang\" (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan, dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak menggambar orang dengan sedikitnya 6 bagian tubuh?",
            visual: `
                <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="ank.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 6604, 
            domain: "speech", 
            text: "Mengetahui konsep angka 5. Letakkan 8 kubus di atas meja dan selembar kertas di samping kubus. Katakan kepada anak \"Ambil 5 kubus dan letakkan di atas kertas\". Setelah anak selesai meletakkan, tanyakan \"Ada berapa banyak kubus di atas kertas?\". Dapatkah anak melakukannya?" 
        },
        { 
            id: 6605, 
            domain: "speech", 
            text: "Memahami/mengartikan 5 kata. Pastikan anak mendengar pemeriksa lalu katakan \"Saya akan mengucapkan 1 kata dan saya ingin kamu menyebutkan apa arti kata itu\". Setiap kata dapat diberikan sebanyak 3 kali bila perlu. Pemeriksa dapat mengatakan \"Beritahu saya sesuatu tentang itu\" tetapi jangan tanya apa kegunaannya. Tanyalah setiap kata dalam satu waktu:",
            subQuestions: [
                "\"Apakah bola itu?\"",
                "\"Apakah sungai itu?\"",
                "\"Apakah meja itu?\"",
                "\"Apakah mobil/motor itu?\"",
                "\"Apakah rumah itu?\"",
                "\"Apakah pisang itu?\"",
                "\"Apakah pintu itu?\"",
                "\"Apakah atap itu?\"",
                "Anak dikatakan dapat mengartikan jika anak mengartikan yang sesuai dalam istilah: 1) kegunaan, 2) bentuk, 3) terbuat dari apa, 4) kategori umum. Dapatkah anak mengartikan 5 kata yang sesuai?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { 
            id: 6606, 
            domain: "speech", 
            text: "Mengetahui konsep analogi berlawanan. Minta anak untuk melengkapi kalimat di bawah ini, jangan membantu kecuali mengulang pertanyaan:",
            subQuestions: [
                "\"Jika kuda besar, maka tikus...?\" Jawaban: kecil",
                "\"Jika api panas, maka es...?\" Jawaban: dingin",
                "\"Jika ibu seorang wanita, maka ayah seorang...?\" Jawaban: pria, laki-laki",
                "Apakah anak menjawab ketiga pertanyaan dengan benar?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { 
            id: 6607, 
            domain: "social", 
            text: "Tanyakan kepada orang tua atau pengasuh, apakah anak bereaksi dengan tenang dan tidak rewel (tanpa menangis atau menggelayut) pada saat ditinggal oleh orang tua atau pengasuh?" 
        },
        { 
            id: 6608, 
            domain: "social", 
            text: "Tanyakan kepada orang tua atau pengasuh, dapatkah anak sepenuhnya berpakaian sendiri tanpa dibantu?" 
        },
        { 
            id: 6609, 
            domain: "grossMotor", 
            text: "Minta anak untuk berdiri 1 kaki tanpa berpegangan. Jika perlu tunjukkan caranya dan beri anak kesempatan sebanyak 3 kali. Dapatkah ia mempertahankan keseimbangan dalam waktu 6 detik atau lebih?" 
        },
        { 
            id: 6610, 
            domain: "grossMotor", 
            text: "Apakah anak dapat menangkap bola kecil sebesar bola tenis atau bola kasti hanya dengan menggunakan kedua tangannya?" 
        }
    ],
    72: [
        { 
            id: 7201, 
            domain: "fineMotor", 
            text: "Menggambar kotak tanpa dicontohkan. Berikan kepada anak pensil dan kertas. Tunjukkan kepada anak contoh gambar di bawah. Tanpa menyebutkan nama dan tanpa mencontohkan atau menggerakkan jari telunjuk atau pensil untuk menunjukkan bagaimana cara menggambarnya, katakan kepada anak \"Gambarlah yang seperti gambar ini\". Lihat contoh di bawah untuk menilai gambar anak. Dapatkah anak menggambar kotak seperti contoh di bawah?",
            visual: `
               <div class="flex items-center justify-center gap-6 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-1.5">
                        <p class="font-bold text-emerald-700 text-[11px]">Jawaban 'Ya':</p>
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="ktk.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <span class="text-[10px] text-slate-400 font-bold">Contoh</span>
                    </div>
                </div>
            `
        },
        { 
            id: 7202, 
            domain: "fineMotor", 
            text: "Menggambar orang dengan sedikitnya 6 bagian tubuh. Berikan anak pensil dan kertas lalu katakan kepada anak \"Buatlah gambar orang\" (anak laki-laki, anak perempuan, papa, mama, dll). Jangan memberi perintah lebih dari itu. Jangan bertanya atau mengingatkan anak bila ada bagian yang belum tergambar. Dalam memberi nilai, hitunglah berapa bagian tubuh yang tergambar. Untuk bagian tubuh yang berpasangan seperti mata, telinga, lengan, dan kaki, setiap pasang dinilai 1 bagian. Pastikan anak telah menyelesaikan gambar sebelum memberikan penilaian. Dapatkah anak menggambar orang dengan sedikitnya 6 bagian tubuh?",
            visual: `
                <div class="flex items-center justify-center gap-4 my-3 p-4 bg-white rounded-2xl border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
                    <div class="text-center space-y-2">
                        <div class="p-2 bg-slate-50 rounded-xl border border-slate-100"><img src="org.jpeg" alt="" width="130" height="130" class="rounded-lg"></div>
                        <p class="font-bold text-emerald-700 text-[11px]">Contoh ≥ 6 Bagian:</p>
                    </div>
                </div>
            `
        },
        { 
            id: 7203, 
            domain: "speech", 
            text: "Mengetahui konsep analogi berlawanan. Minta anak untuk melengkapi kalimat di bawah ini, jangan membantu kecuali mengulang pertanyaan:",
            subQuestions: [
                "\"Jika kuda besar, maka tikus...?\" Jawaban: kecil",
                "\"Jika api panas, maka es...?\" Jawaban: dingin",
                "\"Jika ibu seorang wanita, maka ayah seorang...?\" Jawaban: pria, laki-laki",
                "\"Jika pagi ada matahari, malam ada...?\" Jawaban: bulan",
                "Apakah anak menjawab ketiga/keempat pertanyaan dengan benar?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { 
            id: 7204, 
            domain: "speech", 
            text: "Memahami/mengartikan 7 kata. Pastikan anak mendengar pemeriksa lalu katakan \"Saya akan mengucapkan 1 kata dan saya ingin kamu menyebutkan apa arti kata itu\". Setiap kata dapat diberikan sebanyak 3 kali bila perlu. Pemeriksa dapat mengatakan \"Beritahu saya sesuatu tentang itu\" tetapi jangan tanya apa kegunaannya. Tanyalah setiap kata dalam satu waktu:",
            subQuestions: [
                "\"Apakah bola itu?\"",
                "\"Apakah sungai itu?\"",
                "\"Apakah meja itu?\"",
                "\"Apakah mobil/motor itu?\"",
                "\"Apakah rumah itu?\"",
                "\"Apakah pisang itu?\"",
                "\"Apakah pintu itu?\"",
                "\"Apakah atap itu?\"",
                "Anak dikatakan dapat mengartikan jika anak mengartikan yang sesuai dalam istilah: 1) kegunaan, 2) bentuk, 3) terbuat dari apa, 4) kategori umum. Dapatkah anak mengartikan 7 kata yang sesuai?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { 
            id: 7205, 
            domain: "speech", 
            text: "Mengetahui komposisi benda. Isi titik-titik di bawah ini dengan jawaban anak. Jangan membantu kecuali mengulang pertanyaan sampai 3 kali bila anak menanyakannya:",
            subQuestions: [
                "\"Sendok dibuat dari apa?\" Jawaban: besi, baja, plastik, kayu",
                "\"Sepatu dibuat dari apa?\" Jawaban: kulit, karet, kain, plastik, kayu",
                "\"Pintu dibuat dari apa?\" Jawaban: kayu, besi, kaca",
                "Apakah anak dapat menjawab ketiga pertanyaan diatas dengan benar?"
            ],
            subTextClass: "list-disc pl-4 mt-2 space-y-1 text-xs text-slate-700 font-medium"
        },
        { 
            id: 7206, 
            domain: "social", 
            text: "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat menggosok giginya tanpa bantuan?" 
        },
        { 
            id: 7207, 
            domain: "social", 
            text: "Tanyakan kepada orang tua atau pengasuh, apakah anak dapat menyiapkan dan mengambil makanan tanpa bantuan, termasuk menggunakan mangkok, sendok, menuangkan makanan dan susu ke mangkok tanpa banyak tumpah? Jawab 'Ya' jika anak dapat melakukannya, termasuk menuangkan susu dari beberapa jenis kotak atau wadah makanan." 
        },
        { 
            id: 7208, 
            domain: "grossMotor", 
            text: "Apakah anak dapat menangkap bola kecil sebesar bola tenis atau bola kasti hanya dengan menggunakan kedua tangannya?" 
        },
        { 
            id: 7209, 
            domain: "grossMotor", 
            text: "Tunjukkan kepada anak bagaimana cara berjalan di garis lurus dengan menempatkan tumit dari 1 kaki di depan jari kaki lain. Berjalanlah 8 langkah, lalu minta anak melakukannya." 
        }
    ]
};
