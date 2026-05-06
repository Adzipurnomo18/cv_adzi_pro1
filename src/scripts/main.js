(function () {
      var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var whatsappNumber = "6282281388718";
      var languageButtons = Array.prototype.slice.call(document.querySelectorAll("[data-lang-switch]"));
      var currentLang = localStorage.getItem("cv_lang") || "id";
      var brandLogo = document.getElementById("brandLogo");
      var themeToggleBtn = document.getElementById("themeToggleBtn");
      var currentTheme = document.documentElement.getAttribute("data-theme") || localStorage.getItem("cv_theme") || "dark";
      var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));
      var anchorLinks = Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]'));
      var sections = navLinks
        .map(function (link) {
          var id = link.getAttribute("href");
          return document.querySelector(id);
        })
        .filter(Boolean);
      var topbar = document.querySelector(".topbar");
      var translations = {
        id: {
          title: "Adzi Purnomo | Dashboard CV",
          ops: [
            { selector: ".brand-copy span", text: "IT Programmer / System Support" },
            { selector: '.nav-link[href="#dashboard"] span', text: "Dashboard" },
            { selector: '.nav-link[href="#experience"] span', text: "Pengalaman" },
            { selector: '.nav-link[href="#systems"] span', text: "Sistem" },
            { selector: '.nav-link[href="#projects"] span', text: "Proyek" },
            { selector: '.nav-link[href="#skills"] span', text: "Keahlian" },
            { selector: '.nav-link[href="#education"] span', text: "Pendidikan" },
            { selector: '.nav-link[href="#contact"] span', text: "Kontak" },
            { selector: ".sidebar-note strong", text: "Ringkasan Profesional" },
            { selector: ".sidebar-note p", text: "IT Programmer dan System Support yang fokus pada operasional aplikasi, troubleshooting, dan pengembangan web." },
            { selector: "#scrollTopBtn", html: '<i class="fa-solid fa-arrow-up"></i> Atas' },
            { selector: ".topbar-copy strong", text: "Dashboard CV" },
            { selector: ".topbar-copy span", text: "Profil profesional yang menampilkan pengalaman kerja, sistem yang ditangani, dan proyek unggulan." },
            { selector: '.topbar-actions .btn[href="#contact"]', html: '<i class="fa-solid fa-paper-plane"></i> Hubungi Saya' },
            { selector: "#dashboard .dashboard-copy p", text: "IT Programmer yang berfokus pada pengembangan, pemeliharaan, dan dukungan sistem bisnis operasional. Saat ini menangani aplikasi POS dan Mitrasoft HRD di PT Surya Pratama Keramindo dengan pendekatan kerja yang menekankan stabilitas, analisis masalah, dan efektivitas proses user internal." },
            { selector: '.dashboard-actions .btn[href="#projects"]', html: '<i class="fa-solid fa-folder-open"></i> Lihat Proyek' },
            { selector: '.dashboard-actions .btn-secondary[href="#contact"]', html: '<i class="fa-solid fa-paper-plane"></i> Hubungi Saya' },
            { selector: '.hero-panel-focus h3', text: "Fokus Utama" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(1) span', text: "Pengembangan Aplikasi" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(2) span', text: "Pemeliharaan Sistem" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(3) span', text: "Analisis Masalah" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(4) span', text: "Dukungan User Internal" },
            { selector: '.hero-panel-skills h3', text: "Keahlian Inti" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(1) .hero-panel-skill-row span:first-child', text: "Backend Development" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(2) .hero-panel-skill-row span:first-child', text: "Database Management" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(3) .hero-panel-skill-row span:first-child', text: "Analisis Sistem" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(4) .hero-panel-skill-row span:first-child', text: "Problem Solving" },
            { selector: "#dashboard .dashboard-metric:nth-child(1) span", text: "Tahun Pengalaman" },
            { selector: "#dashboard .dashboard-metric:nth-child(2) span", text: "Sistem Inti" },
            { selector: "#dashboard .dashboard-metric:nth-child(3) span", text: "Domain Portofolio" },
            { selector: "#dashboard .dashboard-metric:nth-child(4) span", text: "Durasi Peran Saat Ini" },
            { selector: ".dashboard-overview-head h3", text: "Gambaran Kapabilitas Profesional" },
            { selector: ".dashboard-overview-head span", text: "Tahun Ini" },
            { selector: ".line-chart-labels span:nth-child(1)", text: "Dukungan" },
            { selector: ".line-chart-labels span:nth-child(2)", text: "Analisis" },
            { selector: ".line-chart-labels span:nth-child(3)", text: "Sistem" },
            { selector: ".line-chart-labels span:nth-child(4)", text: "Pengiriman" },
            { selector: ".line-chart-labels span:nth-child(5)", text: "Perkembangan" },
            { selector: ".dashboard-overview-side .dashboard-side-stat:nth-child(1) span", text: "Sistem inti yang aktif ditangani pada peran saat ini." },
            { selector: ".dashboard-overview-side .dashboard-side-stat:nth-child(2) span", text: "Durasi saat ini dalam mendukung aplikasi operasional." },
            { selector: ".dashboard-overview-side .dashboard-side-stat:nth-child(3) span", text: "Area teknis yang konsisten tercermin di pekerjaan dan portofolio." },
            { selector: '#experience .eyebrow', text: "Pengalaman" },
            { selector: '#experience .section-head h2', text: "Perjalanan kerja yang relevan" },
            { selector: '#experience .section-head p', text: "Pengalaman profesional yang membentuk kekuatan di bidang troubleshooting, penanganan sistem, dukungan operasional, dan pengembangan aplikasi berbasis web." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-role', text: "Staff IT Programmer - 2025 - Sekarang" },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(1)', text: "Menangani aplikasi POS untuk kebutuhan transaksi dan operasional harian agar alur kerja tetap berjalan stabil." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(2)', text: "Mendukung penggunaan Mitrasoft HRD pada proses internal, termasuk penanganan kendala aplikasi dan verifikasi alur data." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(3)', text: "Melakukan troubleshooting, analisis masalah berulang, serta koordinasi tindak lanjut teknis pada sistem yang dipakai user internal." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(4)', text: "Menghubungkan kebutuhan operasional dengan solusi teknis yang realistis, bukan sekadar tampilan antarmuka." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-meta-block:nth-child(1) span', text: "Sistem inti yang ditangani" },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-meta-block:nth-child(2) span', text: "Durasi aktif saat ini" },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-role', text: "Teknisi Elektronik Konsumen - 2017 - 2025" },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(1)', text: "Melakukan diagnosa dan perbaikan perangkat elektronik konsumen dengan pendekatan troubleshooting yang sistematis." },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(2)', text: "Menghadapi kasus teknis lapangan, edukasi pengguna, dan penanganan masalah berbasis analisis gejala serta akar masalah." },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(3)', text: "Pengalaman ini memperkuat kemampuan problem solving, ketelitian teknis, dan konsistensi layanan." },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-meta-block span', text: "Tahun pengalaman" },
            { selector: '#systems .eyebrow', text: "Sistem" },
            { selector: '#systems .section-head h2', text: "Sistem yang sedang ditangani" },
            { selector: '#systems .section-head p', text: "Ringkasan area sistem yang saat ini ditangani dalam operasional perusahaan, mencakup dukungan aplikasi, analisis kendala, dan koordinasi kebutuhan user." },
            { selector: '#systems .grid-4 .metric-card:nth-child(1) span', text: "Sistem inti yang ditangani pada peran saat ini." },
            { selector: '#systems .grid-4 .metric-card:nth-child(2) span', text: "Durasi aktif menangani sistem operasional saat ini." },
            { selector: '#systems .grid-4 .metric-card:nth-child(3) span', text: "Tahun fondasi teknis yang menopang problem solving sistem." },
            { selector: '#systems .grid-4 .metric-card:nth-child(4) span', text: "Domain portofolio yang mendukung perspektif penanganan sistem." },
            { selector: '#systems .surface-card:nth-of-type(1) .system-title p', text: "Sistem operasional untuk transaksi dan proses harian." },
            { selector: '#systems .surface-card:nth-of-type(1) .mini-badge', text: "Saat Ini" },
            { selector: '#systems .surface-card:nth-of-type(1) .system-kpi:nth-child(1) span', text: "Bagian dari dua sistem inti yang saat ini ditangani." },
            { selector: '#systems .surface-card:nth-of-type(1) .system-kpi:nth-child(2) span', text: "Periode dukungan aktif dalam peran saat ini." },
            { selector: '#systems .surface-card:nth-of-type(1) .system-kpi:nth-child(3) span', text: "Basis pengalaman teknis untuk troubleshooting." },
            { selector: '#systems .surface-card:nth-of-type(1) .clean-list li:nth-child(1)', text: "Membantu identifikasi error operasional dan memastikan kendala tidak berhenti di laporan verbal saja." },
            { selector: '#systems .surface-card:nth-of-type(1) .clean-list li:nth-child(2)', text: "Memeriksa alur penggunaan sistem dari sisi transaksi, input data, dan masalah yang berdampak ke workflow harian." },
            { selector: '#systems .surface-card:nth-of-type(1) .clean-list li:nth-child(3)', text: "Menjaga komunikasi antara kebutuhan user dan tindakan teknis agar penyelesaian masalah lebih cepat dan jelas." },
            { selector: '#systems .surface-card:nth-of-type(2) .system-title p', text: "Sistem HR internal untuk data dan proses karyawan." },
            { selector: '#systems .surface-card:nth-of-type(2) .mini-badge', text: "Saat Ini" },
            { selector: '#systems .surface-card:nth-of-type(2) .system-kpi:nth-child(1) span', text: "Bagian dari dua sistem inti yang saat ini ditangani." },
            { selector: '#systems .surface-card:nth-of-type(2) .system-kpi:nth-child(2) span', text: "Periode dukungan aktif dalam peran saat ini." },
            { selector: '#systems .surface-card:nth-of-type(2) .system-kpi:nth-child(3) span', text: "Basis pengalaman teknis untuk analisis issue." },
            { selector: '#systems .surface-card:nth-of-type(2) .clean-list li:nth-child(1)', text: "Menangani kendala penggunaan aplikasi HRD dari sisi praktik lapangan dan kebutuhan user." },
            { selector: '#systems .surface-card:nth-of-type(2) .clean-list li:nth-child(2)', text: "Membantu pengecekan masalah terkait data, proses, atau langkah penggunaan yang menghambat pekerjaan internal." },
            { selector: '#systems .surface-card:nth-of-type(2) .clean-list li:nth-child(3)', text: "Mengandalkan kombinasi analisis teknis dan komunikasi operasional agar perbaikan tidak salah sasaran." },
            { selector: '#systems > .surface-card .section-head h2', text: "Arah kemampuan saat ini" },
            { selector: '#systems > .surface-card .section-head p', text: "Kombinasi web development, troubleshooting, data flow awareness, dan operational support membentuk profil kerja yang adaptif untuk kebutuhan sistem internal." },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(1)', text: "Dukungan" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(2)', text: "Troubleshooting" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(3)', text: "Alur Data" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(4)', text: "Web Dev" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(5)', text: "Kombinasi Saat Ini" },
            { selector: '#projects .eyebrow', text: "Proyek" },
            { selector: '#projects .section-head h2', text: "Proyek dari source yang sekarang" },
            { selector: '#projects .section-head p', text: "Tiga proyek berikut mewakili pendekatan pada desain antarmuka, alur layanan, dan presentasi data yang pernah dikerjakan." },
            { selector: '#projects .project-card:nth-child(1) p', text: "Landing page jasa pembuatan website dengan pendekatan modern, toggle bilingual, dark mode, dan presentasi layanan yang diarahkan ke konversi." },
            { selector: '#projects .project-card:nth-child(2) p', text: "Interface layanan service yang menonjolkan katalog hasil pengerjaan, CTA komunikasi, dan struktur informasi yang cepat dipahami user." },
            { selector: '#projects .project-card:nth-child(3) p', text: "Platform arsip dan dokumentasi angkatan Teknik Informatika UNH dengan struktur publik, mode bilingual, dan penekanan pada data kolektif." },
            { selector: '#skills .eyebrow', text: "Keahlian" },
            { selector: '#skills .section-head h2', text: "Keahlian yang lebih sinkron dengan posisi sekarang" },
            { selector: '#skills .section-head p', text: "Keahlian utama mencakup pengembangan web, analisis masalah teknis, penanganan aplikasi operasional, serta dukungan sistem untuk kebutuhan user internal." },
            { selector: '#skills .skill-row:nth-child(1) .skill-meta span:first-child', text: "HTML / CSS / Implementasi UI" },
            { selector: '#skills .skill-row:nth-child(1) .skill-meta span:last-child', text: "Inti" },
            { selector: '#skills .skill-row:nth-child(2) .skill-meta span:last-child', text: "Inti" },
            { selector: '#skills .skill-row:nth-child(3) .skill-meta span:last-child', text: "Inti" },
            { selector: '#skills .skill-row:nth-child(4) .skill-meta span:first-child', text: "MySQL / Pengelolaan Data SQL" },
            { selector: '#skills .skill-row:nth-child(4) .skill-meta span:last-child', text: "Aktif" },
            { selector: '#skills .skill-row:nth-child(5) .skill-meta span:first-child', text: "Troubleshooting Sistem" },
            { selector: '#skills .skill-row:nth-child(5) .skill-meta span:last-child', text: "Inti" },
            { selector: '#skills .skill-row:nth-child(6) .skill-meta span:first-child', text: "Dukungan Aplikasi Operasional" },
            { selector: '#skills .skill-row:nth-child(6) .skill-meta span:last-child', text: "Inti" },
            { selector: '#skills .focus-card:nth-child(1) strong', text: "Pemahaman Operasional" },
            { selector: '#skills .focus-card:nth-child(1) p', text: "Memahami alur kerja aplikasi operasional, mengidentifikasi kendala penggunaan, dan menyesuaikan solusi dengan kebutuhan lapangan." },
            { selector: '#skills .focus-card:nth-child(2) strong', text: "Troubleshooting Teknis" },
            { selector: '#skills .focus-card:nth-child(2) p', text: "Mampu menganalisis akar masalah, menelusuri penyebab error, dan mengarahkan tindak lanjut teknis secara sistematis." },
            { selector: '#skills .focus-card:nth-child(3) strong', text: "Mindset Dukungan Sistem" },
            { selector: '#skills .focus-card:nth-child(3) p', text: "Menggabungkan kemampuan programming dengan pendekatan support yang berorientasi stabilitas sistem, kejelasan proses, dan efektivitas kerja user." },
            { selector: '#education .eyebrow', text: "Pendidikan" },
            { selector: '#education .section-head h2', text: "Latar belakang pendidikan" },
            { selector: '#education .section-head p', text: "Pendidikan formal yang mendukung dasar pemrograman, analisis sistem, IoT, dan troubleshooting teknis." },
            { selector: '#education .education-card:nth-child(1) h3', html: 'Sarjana Teknik Informatika<br>Universitas Nurdin Hamzah Jambi' },
            { selector: '#education .education-card:nth-child(1) p', html: '<strong>IPK:</strong> 3.78 / 4.00' },
            { selector: '#education .education-card:nth-child(1) .clean-list li:nth-child(1)', text: "Fokus pembelajaran pada software development, analisis data, IoT, dan sistem informasi." },
            { selector: '#education .education-card:nth-child(1) .clean-list li:nth-child(2)', text: "Skripsi: Prototype Sistem Smart Garden Berbasis IoT." },
            { selector: '#education .education-card:nth-child(2) h3', html: 'SMK Negeri 1 Natar Lampung Selatan<br>Teknik Elektronika Industri' },
            { selector: '#education .education-card:nth-child(2) p', text: "Fondasi awal di bidang elektronika industri dan sistem kendali yang kemudian memperkuat cara berpikir troubleshooting sampai sekarang." },
            { selector: '#contact .eyebrow', text: "Kontak" },
            { selector: '#contact .section-head h2', text: "Kontak dan koneksi profesional" },
            { selector: '#contact .section-head p', text: "Terbuka untuk diskusi profesional, kolaborasi proyek, dan peluang kerja di bidang IT, system support, maupun pengembangan aplikasi." },
            { selector: '#contact .contact-card:nth-child(1) > p', text: "Silakan hubungi melalui email atau profil profesional berikut untuk komunikasi lebih lanjut." },
            { selector: '#contactForm .field-row .field:nth-child(1) span', text: "Nama" },
            { selector: '#contactForm .field-row .field:nth-child(2) span', text: "Email" },
            { selector: '#contactForm > .field:nth-child(2) span', text: "Subjek" },
            { selector: '#contactForm > .field:nth-child(3) span', text: "Pesan" },
            { selector: '#contactForm button[type="submit"]', html: '<i class="fa-solid fa-paper-plane"></i> Kirim ke WhatsApp' },
            { selector: ".footer-note > span", text: "© 2026 Adzi Purnomo. Hak cipta dilindungi." }
          ],
          placeholders: [
            { selector: 'input[name="name"]', value: "Nama Anda" },
            { selector: 'input[name="email"]', value: "email@domain.com" },
            { selector: 'input[name="subject"]', value: "Tujuan kontak" },
            { selector: 'textarea[name="message"]', value: "Tulis pesan Anda di sini..." }
          ],
          attrs: [
            { selector: ".lang-switch", name: "aria-label", value: "Pilih bahasa" },
            { selector: "nav.nav-group", name: "aria-label", value: "Navigasi Bagian" },
            { selector: "#lightboxClose", name: "aria-label", value: "Tutup pratinjau" }
          ],
          whatsapp: {
            intro: "Halo Adzi, saya ingin menghubungi Anda melalui website CV.",
            name: "Nama",
            email: "Email",
            subject: "Subjek",
            message: "Pesan"
          }
        },
        en: {
          title: "Adzi Purnomo | CV Dashboard",
          ops: [
            { selector: ".brand-copy span", text: "IT Programmer / System Support" },
            { selector: '.nav-link[href="#dashboard"] span', text: "Dashboard" },
            { selector: '.nav-link[href="#experience"] span', text: "Experience" },
            { selector: '.nav-link[href="#systems"] span', text: "Systems" },
            { selector: '.nav-link[href="#projects"] span', text: "Projects" },
            { selector: '.nav-link[href="#skills"] span', text: "Skills" },
            { selector: '.nav-link[href="#education"] span', text: "Education" },
            { selector: '.nav-link[href="#contact"] span', text: "Contact" },
            { selector: ".sidebar-note strong", text: "Professional Summary" },
            { selector: ".sidebar-note p", text: "IT Programmer and System Support focused on application operations, troubleshooting, and web development." },
            { selector: "#scrollTopBtn", html: '<i class="fa-solid fa-arrow-up"></i> Top' },
            { selector: ".topbar-copy strong", text: "CV Dashboard" },
            { selector: ".topbar-copy span", text: "A professional profile highlighting work experience, managed systems, and selected projects." },
            { selector: '.topbar-actions .btn[href="#contact"]', html: '<i class="fa-solid fa-paper-plane"></i> Contact Me' },
            { selector: "#dashboard .dashboard-copy p", text: "An IT Programmer focused on building, maintaining, and supporting operational business systems. Currently handling POS and Mitrasoft HRD applications at PT Surya Pratama Keramindo with a work approach centered on stability, issue analysis, and internal user process effectiveness." },
            { selector: '.dashboard-actions .btn[href="#projects"]', html: '<i class="fa-solid fa-folder-open"></i> View Projects' },
            { selector: '.dashboard-actions .btn-secondary[href="#contact"]', html: '<i class="fa-solid fa-paper-plane"></i> Contact Me' },
            { selector: '.hero-panel-focus h3', text: "Primary Focus" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(1) span', text: "Application Development" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(2) span', text: "System Maintenance" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(3) span', text: "Issue Analysis" },
            { selector: '.hero-panel-focus .hero-panel-list li:nth-child(4) span', text: "Internal User Support" },
            { selector: '.hero-panel-skills h3', text: "Core Expertise" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(1) .hero-panel-skill-row span:first-child', text: "Backend Development" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(2) .hero-panel-skill-row span:first-child', text: "Database Management" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(3) .hero-panel-skill-row span:first-child', text: "System Analysis" },
            { selector: '.hero-panel-skills .hero-panel-skill:nth-child(4) .hero-panel-skill-row span:first-child', text: "Problem Solving" },
            { selector: "#dashboard .dashboard-metric:nth-child(1) span", text: "Years of Experience" },
            { selector: "#dashboard .dashboard-metric:nth-child(2) span", text: "Core Systems" },
            { selector: "#dashboard .dashboard-metric:nth-child(3) span", text: "Portfolio Domains" },
            { selector: "#dashboard .dashboard-metric:nth-child(4) span", text: "Current Role Duration" },
            { selector: ".dashboard-overview-head h3", text: "Professional Capability Overview" },
            { selector: ".dashboard-overview-head span", text: "This Year" },
            { selector: ".line-chart-labels span:nth-child(1)", text: "Support" },
            { selector: ".line-chart-labels span:nth-child(2)", text: "Analysis" },
            { selector: ".line-chart-labels span:nth-child(3)", text: "Systems" },
            { selector: ".line-chart-labels span:nth-child(4)", text: "Delivery" },
            { selector: ".line-chart-labels span:nth-child(5)", text: "Growth" },
            { selector: ".dashboard-overview-side .dashboard-side-stat:nth-child(1) span", text: "Core systems actively handled in the current role." },
            { selector: ".dashboard-overview-side .dashboard-side-stat:nth-child(2) span", text: "Current duration supporting operational applications." },
            { selector: ".dashboard-overview-side .dashboard-side-stat:nth-child(3) span", text: "Technical areas consistently represented across work and portfolio." },
            { selector: '#experience .eyebrow', text: "Experience" },
            { selector: '#experience .section-head h2', text: "Relevant Professional Journey" },
            { selector: '#experience .section-head p', text: "Professional experience that shaped strengths in troubleshooting, system handling, operational support, and web-based application development." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-role', text: "Staff IT Programmer - 2025 - Present" },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(1)', text: "Handling POS applications for transaction needs and daily operations so workflows remain stable." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(2)', text: "Supporting Mitrasoft HRD usage in internal processes, including application issue handling and data flow verification." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(3)', text: "Performing troubleshooting, recurring issue analysis, and follow-up technical coordination for systems used by internal users." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-list li:nth-child(4)', text: "Connecting operational needs with realistic technical solutions, not just interface presentation." },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-meta-block:nth-child(1) span', text: "Core systems handled" },
            { selector: '#experience .timeline-item:nth-child(1) .timeline-meta-block:nth-child(2) span', text: "Current active duration" },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-role', text: "Consumer Electronics Technician - 2017 - 2025" },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(1)', text: "Diagnosed and repaired consumer electronic devices using a systematic troubleshooting approach." },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(2)', text: "Handled field technical cases, user education, and issue resolution based on symptom analysis and root causes." },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-list li:nth-child(3)', text: "This experience strengthened problem solving, technical accuracy, and service consistency." },
            { selector: '#experience .timeline-item:nth-child(2) .timeline-meta-block span', text: "Years of experience" },
            { selector: '#systems .eyebrow', text: "Systems" },
            { selector: '#systems .section-head h2', text: "Systems Currently Handled" },
            { selector: '#systems .section-head p', text: "A concise view of the systems currently handled in company operations, covering application support, issue analysis, and user-need coordination." },
            { selector: '#systems .grid-4 .metric-card:nth-child(1) span', text: "Core systems handled in the current role." },
            { selector: '#systems .grid-4 .metric-card:nth-child(2) span', text: "Active duration supporting current operational systems." },
            { selector: '#systems .grid-4 .metric-card:nth-child(3) span', text: "Technical foundation years supporting system problem solving." },
            { selector: '#systems .grid-4 .metric-card:nth-child(4) span', text: "Portfolio domains supporting a system-handling perspective." },
            { selector: '#systems .surface-card:nth-of-type(1) .system-title p', text: "Operational system for transactions and daily processes." },
            { selector: '#systems .surface-card:nth-of-type(1) .mini-badge', text: "Current" },
            { selector: '#systems .surface-card:nth-of-type(1) .system-kpi:nth-child(1) span', text: "One of the two core systems currently handled." },
            { selector: '#systems .surface-card:nth-of-type(1) .system-kpi:nth-child(2) span', text: "Active support period in the current role." },
            { selector: '#systems .surface-card:nth-of-type(1) .system-kpi:nth-child(3) span', text: "Technical experience base for troubleshooting." },
            { selector: '#systems .surface-card:nth-of-type(1) .clean-list li:nth-child(1)', text: "Helping identify operational errors and ensuring issues do not stop at verbal reports only." },
            { selector: '#systems .surface-card:nth-of-type(1) .clean-list li:nth-child(2)', text: "Reviewing system usage flow from transactions, data input, and issues affecting daily workflows." },
            { selector: '#systems .surface-card:nth-of-type(1) .clean-list li:nth-child(3)', text: "Maintaining communication between user needs and technical action so resolution is faster and clearer." },
            { selector: '#systems .surface-card:nth-of-type(2) .system-title p', text: "Internal HR system for employee data and processes." },
            { selector: '#systems .surface-card:nth-of-type(2) .mini-badge', text: "Current" },
            { selector: '#systems .surface-card:nth-of-type(2) .system-kpi:nth-child(1) span', text: "One of the two core systems currently handled." },
            { selector: '#systems .surface-card:nth-of-type(2) .system-kpi:nth-child(2) span', text: "Active support period in the current role." },
            { selector: '#systems .surface-card:nth-of-type(2) .system-kpi:nth-child(3) span', text: "Technical experience base for issue analysis." },
            { selector: '#systems .surface-card:nth-of-type(2) .clean-list li:nth-child(1)', text: "Handling HR application issues from practical field usage and internal user needs." },
            { selector: '#systems .surface-card:nth-of-type(2) .clean-list li:nth-child(2)', text: "Helping verify issues related to data, processes, or usage steps that block internal work." },
            { selector: '#systems .surface-card:nth-of-type(2) .clean-list li:nth-child(3)', text: "Relying on a combination of technical analysis and operational communication so fixes stay on target." },
            { selector: '#systems > .surface-card .section-head h2', text: "Current Capability Direction" },
            { selector: '#systems > .surface-card .section-head p', text: "A combination of web development, troubleshooting, data flow awareness, and operational support shapes an adaptive profile for internal system needs." },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(1)', text: "Support" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(2)', text: "Troubleshooting" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(3)', text: "Data Flow" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(4)', text: "Web Dev" },
            { selector: '#systems > .surface-card .line-chart-labels span:nth-child(5)', text: "Current Blend" },
            { selector: '#projects .eyebrow', text: "Projects" },
            { selector: '#projects .section-head h2', text: "Projects from the Current Source" },
            { selector: '#projects .section-head p', text: "These three projects represent approaches to interface design, service flow, and data presentation that have been built before." },
            { selector: '#projects .project-card:nth-child(1) p', text: "A website-service landing page with a modern approach, bilingual toggle, dark mode, and service presentation designed for conversion." },
            { selector: '#projects .project-card:nth-child(2) p', text: "A service interface highlighting work-result catalogs, communication CTAs, and an information structure that users can grasp quickly." },
            { selector: '#projects .project-card:nth-child(3) p', text: "An archive and documentation platform for UNH Informatics cohorts with a public structure, bilingual mode, and emphasis on collective data." },
            { selector: '#skills .eyebrow', text: "Skills" },
            { selector: '#skills .section-head h2', text: "Skills Better Aligned with the Current Role" },
            { selector: '#skills .section-head p', text: "Core skills cover web development, technical issue analysis, operational application handling, and system support for internal user needs." },
            { selector: '#skills .skill-row:nth-child(1) .skill-meta span:first-child', text: "HTML / CSS / UI Implementation" },
            { selector: '#skills .skill-row:nth-child(1) .skill-meta span:last-child', text: "Core" },
            { selector: '#skills .skill-row:nth-child(2) .skill-meta span:last-child', text: "Core" },
            { selector: '#skills .skill-row:nth-child(3) .skill-meta span:last-child', text: "Core" },
            { selector: '#skills .skill-row:nth-child(4) .skill-meta span:first-child', text: "MySQL / SQL Data Handling" },
            { selector: '#skills .skill-row:nth-child(4) .skill-meta span:last-child', text: "Working" },
            { selector: '#skills .skill-row:nth-child(5) .skill-meta span:first-child', text: "System Troubleshooting" },
            { selector: '#skills .skill-row:nth-child(5) .skill-meta span:last-child', text: "Core" },
            { selector: '#skills .skill-row:nth-child(6) .skill-meta span:first-child', text: "Operational App Support" },
            { selector: '#skills .skill-row:nth-child(6) .skill-meta span:last-child', text: "Core" },
            { selector: '#skills .focus-card:nth-child(1) strong', text: "Operational Understanding" },
            { selector: '#skills .focus-card:nth-child(1) p', text: "Understanding operational application flows, identifying usage constraints, and aligning solutions with real field needs." },
            { selector: '#skills .focus-card:nth-child(2) strong', text: "Technical Troubleshooting" },
            { selector: '#skills .focus-card:nth-child(2) p', text: "Able to analyze root causes, trace error sources, and direct technical follow-up systematically." },
            { selector: '#skills .focus-card:nth-child(3) strong', text: "System Support Mindset" },
            { selector: '#skills .focus-card:nth-child(3) p', text: "Combining programming capability with a support approach oriented toward system stability, process clarity, and user effectiveness." },
            { selector: '#education .eyebrow', text: "Education" },
            { selector: '#education .section-head h2', text: "Educational Background" },
            { selector: '#education .section-head p', text: "Formal education supporting programming fundamentals, system analysis, IoT, and technical troubleshooting." },
            { selector: '#education .education-card:nth-child(1) h3', html: 'Bachelor of Informatics Engineering<br>Nurdin Hamzah University Jambi' },
            { selector: '#education .education-card:nth-child(1) p', html: '<strong>GPA:</strong> 3.78 / 4.00' },
            { selector: '#education .education-card:nth-child(1) .clean-list li:nth-child(1)', text: "Study focus on software development, data analysis, IoT, and information systems." },
            { selector: '#education .education-card:nth-child(1) .clean-list li:nth-child(2)', text: "Thesis: IoT-Based Smart Garden System Prototype." },
            { selector: '#education .education-card:nth-child(2) h3', html: 'SMK Negeri 1 Natar, South Lampung<br>Industrial Electronics Engineering' },
            { selector: '#education .education-card:nth-child(2) p', text: "An early foundation in industrial electronics and control systems that later strengthened the troubleshooting mindset I still use today." },
            { selector: '#contact .eyebrow', text: "Contact" },
            { selector: '#contact .section-head h2', text: "Contact and Professional Reach" },
            { selector: '#contact .section-head p', text: "Open to professional discussions, project collaboration, and job opportunities in IT, system support, or application development." },
            { selector: '#contact .contact-card:nth-child(1) > p', text: "Feel free to reach out through email or the following professional profiles for further communication." },
            { selector: '#contactForm .field-row .field:nth-child(1) span', text: "Name" },
            { selector: '#contactForm .field-row .field:nth-child(2) span', text: "Email" },
            { selector: '#contactForm > .field:nth-child(2) span', text: "Subject" },
            { selector: '#contactForm > .field:nth-child(3) span', text: "Message" },
            { selector: '#contactForm button[type="submit"]', html: '<i class="fa-solid fa-paper-plane"></i> Send to WhatsApp' },
            { selector: ".footer-note > span", text: "© 2026 Adzi Purnomo. All rights reserved." }
          ],
          placeholders: [
            { selector: 'input[name="name"]', value: "Your name" },
            { selector: 'input[name="email"]', value: "email@domain.com" },
            { selector: 'input[name="subject"]', value: "Contact purpose" },
            { selector: 'textarea[name="message"]', value: "Write your message here..." }
          ],
          attrs: [
            { selector: ".lang-switch", name: "aria-label", value: "Choose language" },
            { selector: "nav.nav-group", name: "aria-label", value: "Section Navigation" },
            { selector: "#lightboxClose", name: "aria-label", value: "Close preview" }
          ],
          whatsapp: {
            intro: "Hello Adzi, I would like to contact you through your CV website.",
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message"
          }
        }
      };

      function updateCountLabels() {
        var activeLang = document.documentElement.getAttribute("data-lang") || "id";
        var countElements = document.querySelectorAll(".count-up");
        countElements.forEach(function (item) {
          var target = parseInt(item.getAttribute("data-target") || "0", 10);
          if (isNaN(target)) {
            return;
          }
          var suffix = item.getAttribute("data-suffix-" + activeLang) || item.getAttribute("data-suffix") || "";
          item.setAttribute("data-active-suffix", suffix);
          if (reduceMotion || item.dataset.counted === "true") {
            item.textContent = String(target) + suffix;
          } else {
            item.textContent = "0" + suffix;
          }
        });
      }

      function parseLocalDate(value) {
        if (!value) {
          return null;
        }

        var parts = value.split("-");
        if (parts.length !== 3) {
          return null;
        }

        var year = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10);
        var day = parseInt(parts[2], 10);
        if (isNaN(year) || isNaN(month) || isNaN(day)) {
          return null;
        }

        return new Date(year, month - 1, day);
      }

      function getFullMonthDiff(startDate, endDate) {
        if (!startDate || !endDate || endDate < startDate) {
          return 0;
        }

        var months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        if (endDate.getDate() < startDate.getDate()) {
          months -= 1;
        }

        return Math.max(0, months);
      }

      function updateDynamicDurations() {
        var today = new Date();
        document.querySelectorAll(".count-up[data-duration-start]").forEach(function (item) {
          var startDate = parseLocalDate(item.getAttribute("data-duration-start"));
          var unit = item.getAttribute("data-duration-unit") || "months";
          var target = 0;

          if (unit === "months") {
            target = getFullMonthDiff(startDate, today);
          }

          item.setAttribute("data-target", String(target));
        });
      }

      function applyLanguage(lang) {
        var pack = translations[lang] || translations.id;
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.setAttribute("data-lang", lang);
        document.title = pack.title;

        pack.ops.forEach(function (entry) {
          document.querySelectorAll(entry.selector).forEach(function (node) {
            if (entry.html !== undefined) {
              node.innerHTML = entry.html;
            } else {
              node.textContent = entry.text;
            }
          });
        });

        pack.placeholders.forEach(function (entry) {
          document.querySelectorAll(entry.selector).forEach(function (node) {
            node.setAttribute("placeholder", entry.value);
          });
        });

        pack.attrs.forEach(function (entry) {
          document.querySelectorAll(entry.selector).forEach(function (node) {
            node.setAttribute(entry.name, entry.value);
          });
        });

        languageButtons.forEach(function (button) {
          button.classList.toggle("is-active", button.getAttribute("data-lang-switch") === lang);
        });

        updateDynamicDurations();
        updateCountLabels();
        localStorage.setItem("cv_lang", lang);
        updateThemeToggleButton();
      }

      function getThemeButtonState() {
        var isLight = currentTheme === "light";
        if (currentLang === "en") {
          return isLight
            ? { icon: "fa-moon", label: "Switch to dark mode" }
            : { icon: "fa-sun", label: "Switch to light mode" };
        }

        return isLight
          ? { icon: "fa-moon", label: "Beralih ke mode gelap" }
          : { icon: "fa-sun", label: "Beralih ke mode terang" };
      }

      function updateThemeToggleButton() {
        if (!themeToggleBtn) {
          return;
        }

        var state = getThemeButtonState();
        var icon = themeToggleBtn.querySelector("i");
        if (icon) {
          icon.className = "fa-solid " + state.icon;
        }

        themeToggleBtn.setAttribute("aria-label", state.label);
        themeToggleBtn.setAttribute("title", state.label);
      }

      function updateBrandLogo() {
        if (!brandLogo) {
          return;
        }

        var darkSrc = brandLogo.getAttribute("data-dark-src") || "public/brand/logo.png";
        var lightSrc = brandLogo.getAttribute("data-light-src") || darkSrc;
        brandLogo.setAttribute("src", currentTheme === "light" ? lightSrc : darkSrc);
      }

      function applyTheme(theme) {
        currentTheme = theme === "light" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", currentTheme);
        localStorage.setItem("cv_theme", currentTheme);
        updateBrandLogo();
        updateThemeToggleButton();
      }

      function getAnchorOffset() {
        var isMobile = window.innerWidth <= 760;
        var fallback = isMobile ? 18 : 108;
        if (isMobile) {
          return fallback;
        }

        if (!topbar) {
          return fallback;
        }

        return topbar.offsetHeight + 20;
      }

      function scrollToSection(target) {
        if (!target) {
          return;
        }

        var offset = getAnchorOffset();
        var top = window.pageYOffset + target.getBoundingClientRect().top - offset;
        window.scrollTo({
          top: Math.max(0, top),
          behavior: reduceMotion ? "auto" : "smooth"
        });
      }

      applyLanguage(currentLang);
      applyTheme(currentTheme);

      languageButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          var lang = button.getAttribute("data-lang-switch");
          if (!lang || lang === currentLang) {
            return;
          }
          applyLanguage(lang);
        });
      });

      if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
          applyTheme(currentTheme === "light" ? "dark" : "light");
        });
      }

      anchorLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          var href = link.getAttribute("href");
          if (!href || href === "#") {
            return;
          }

          var target = document.querySelector(href);
          if (!target) {
            return;
          }

          event.preventDefault();
          scrollToSection(target);

          if (history.replaceState) {
            history.replaceState(null, "", href);
          }
        });
      });

      if ("IntersectionObserver" in window && sections.length) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            }

            var id = "#" + entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle("is-active", link.getAttribute("href") === id);
            });
          });
        }, {
          rootMargin: "-32% 0px -52% 0px",
          threshold: 0
        });

        sections.forEach(function (section) {
          observer.observe(section);
        });
      }

      var scrollTopBtn = document.getElementById("scrollTopBtn");
      if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      var lightbox = document.getElementById("lightbox");
      var lightboxImage = document.getElementById("lightboxImage");
      var lightboxClose = document.getElementById("lightboxClose");
      var previewCards = document.querySelectorAll("[data-preview]");
      var contactForm = document.getElementById("contactForm");

      function closeLightbox() {
        if (!lightbox || !lightboxImage) {
          return;
        }
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        lightboxImage.setAttribute("src", "");
      }

      previewCards.forEach(function (preview) {
        preview.addEventListener("click", function () {
          var src = preview.getAttribute("data-preview");
          if (!src || !lightbox || !lightboxImage) {
            return;
          }
          lightboxImage.setAttribute("src", src);
          lightbox.classList.add("is-open");
          lightbox.setAttribute("aria-hidden", "false");
        });
      });

      if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
      }

      if (lightbox) {
        lightbox.addEventListener("click", function (event) {
          if (event.target === lightbox) {
            closeLightbox();
          }
        });
      }

      if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
          event.preventDefault();

          var formData = new FormData(contactForm);
          var name = (formData.get("name") || "").toString().trim();
          var email = (formData.get("email") || "").toString().trim();
          var subject = (formData.get("subject") || "").toString().trim();
          var message = (formData.get("message") || "").toString().trim();
          var whatsappPack = translations[currentLang] ? translations[currentLang].whatsapp : translations.id.whatsapp;

          var whatsappMessage = [
            whatsappPack.intro,
            "",
            whatsappPack.name + ": " + name,
            whatsappPack.email + ": " + email,
            whatsappPack.subject + ": " + subject,
            whatsappPack.message + ":",
            message
          ].join("\n");

          var whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);
          window.open(whatsappUrl, "_blank", "noopener");
        });
      }

      function formatCountValue(target, suffix) {
        return String(target) + (suffix || "");
      }

      function animateCount(element) {
        if (!element || element.dataset.counted === "true") {
          return;
        }

        var target = parseInt(element.getAttribute("data-target") || "0", 10);
        var suffix = element.getAttribute("data-active-suffix") || "";
        if (isNaN(target)) {
          return;
        }

        if (reduceMotion) {
          element.textContent = formatCountValue(target, suffix);
          element.dataset.counted = "true";
          return;
        }

        var duration = 1100;
        var startTime = null;

        function tick(timestamp) {
          if (!startTime) {
            startTime = timestamp;
          }

          var progress = Math.min((timestamp - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var value = Math.round(target * eased);
          element.textContent = formatCountValue(value, suffix);

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          } else {
            element.textContent = formatCountValue(target, suffix);
            element.dataset.counted = "true";
          }
        }

        element.textContent = formatCountValue(0, suffix);
        window.requestAnimationFrame(tick);
      }

      var interactiveCards = document.querySelectorAll(".metric-card, .surface-card, .project-card, .contact-card, .timeline-body, .timeline-meta, .education-card, .focus-card");
      interactiveCards.forEach(function (card) {
        card.classList.add("interactive-card");
      });

      var countItems = document.querySelectorAll(".count-up");
      countItems.forEach(function (item) {
        var target = parseInt(item.getAttribute("data-target") || "0", 10);
        var suffix = item.getAttribute("data-active-suffix") || "";
        if (!isNaN(target)) {
          item.textContent = reduceMotion ? formatCountValue(target, suffix) : formatCountValue(0, suffix);
        }
      });

      var motionItems = document.querySelectorAll(".timeline-list li, .clean-list li");
      motionItems.forEach(function (item, index) {
        item.classList.add("motion-item");
        item.style.transitionDelay = Math.min(index * 70, 280) + "ms";
      });

      var chart = document.querySelector(".line-chart");
      if (chart) {
        var polylines = chart.querySelectorAll("polyline");
        var circles = chart.querySelectorAll("circle");

        polylines.forEach(function (line, index) {
          line.classList.add("chart-line");
          if (index > 0) {
            line.classList.add("chart-line-secondary");
          }
        });

        circles.forEach(function (dot, index) {
          dot.classList.add("chart-dot");
          if (index > 0) {
            dot.classList.add("chart-dot-secondary");
          }
        });
      }

      var skillRows = document.querySelectorAll(".skill-row");
      skillRows.forEach(function (row) {
        var fill = row.querySelector(".skill-fill");
        if (!fill) {
          return;
        }

        var targetWidth = fill.style.width || "0%";
        fill.style.setProperty("--target-width", targetWidth);
        row.style.setProperty("--target-width", targetWidth);

        if (reduceMotion) {
          row.classList.add("is-visible");
        }
      });

      if ("IntersectionObserver" in window) {
        var motionObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            if (entry.target.classList.contains("count-up")) {
              animateCount(entry.target);
            }
            observer.unobserve(entry.target);
          });
        }, {
          threshold: 0.05,
          rootMargin: "0px 0px -2% 0px"
        });

        motionItems.forEach(function (item) {
          motionObserver.observe(item);
        });

        skillRows.forEach(function (row) {
          motionObserver.observe(row);
        });

        if (chart) {
          motionObserver.observe(chart);
        }

        countItems.forEach(function (item) {
          motionObserver.observe(item);
        });
      } else {
        motionItems.forEach(function (item) {
          item.classList.add("is-visible");
        });

        skillRows.forEach(function (row) {
          row.classList.add("is-visible");
        });

        if (chart) {
          chart.classList.add("is-visible");
        }

        countItems.forEach(function (item) {
          animateCount(item);
        });
      }

      if (!reduceMotion) {
        interactiveCards.forEach(function (card) {
          card.addEventListener("pointermove", function (event) {
            var rect = card.getBoundingClientRect();
            var px = (event.clientX - rect.left) / rect.width;
            var py = (event.clientY - rect.top) / rect.height;
            var rotateY = (px - 0.5) * 6;
            var rotateX = (0.5 - py) * 6;
            card.style.transform = "perspective(1000px) rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg) translateY(-4px)";
          });

          card.addEventListener("pointerleave", function () {
            card.style.transform = "";
          });
        });
      }

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeLightbox();
        }
      });
    })();
