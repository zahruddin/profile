"use client";

import { motion } from "framer-motion";
import { Server, MonitorSmartphone, Bot, Wrench, Mail, ChevronDown } from "lucide-react";

export default function Home() {
  // Variasi Animasi Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Inline SVG untuk GitHub agar 100% aman
  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.48c0 5.56 3.35 6.65 6.5 7.02a4.8 4.8 0 0 0-1 3.02V22"></path>
      <path d="M9 20.02 4 15.5"></path>
    </svg>
  );

  return (
    <main className="min-h-screen bg-[#060B19] text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[50%] translate-x-[-50%] w-[800px] h-[600px] bg-cyan-900/15 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            <span className="text-slate-400 text-sm font-medium">Bukan Rockstar, Cuma Orang Biasa</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 mb-6 tracking-tight">
            Zahruddin.
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
            Saya bisa bikin website, ngurusin server dari kamar, benerin printer kantor, sampai ngajarin robot jalan. 
            <br className="hidden md:block" /> 
            <span className="italic text-slate-500 text-base md:text-lg mt-4 inline-block">
              (Intinya, kalau ada yang colokannya ke listrik, biasanya saya disuruh benerin).
            </span>
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-12 text-cyan-500/50 hover:text-cyan-400 transition-colors cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={36} />
        </motion.div>
      </section>

      {/* 2. SERVICES / "WHAT I DO" SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1: Web Dev */}
          <motion.div variants={fadeUp} className="group bg-[#0A132B] border border-slate-800/80 hover:border-cyan-500/30 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,0.2)]">
            <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
              <MonitorSmartphone size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 mb-3">Tukang Koding</h3>
            <p className="text-slate-400 leading-relaxed">
              Menulis baris kode dengan Laravel atau React. Kadang bikin sistem untuk kerjaan, kadang cuma proyek iseng. Yang penting kodenya dirapikan supaya besoknya tidak pusing sendiri pas baca ulang.
            </p>
          </motion.div>

          {/* Card 2: Home Server */}
          <motion.div variants={fadeUp} className="group bg-[#0A132B] border border-slate-800/80 hover:border-cyan-500/30 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,0.2)]">
            <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Server size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 mb-3">Home Server Enthusiast</h3>
            <p className="text-slate-400 leading-relaxed">
              Punya server sendiri di rumah. Listrik bulanan naik sedikit, tapi kepuasan batin saat merasa seperti "Hacker di film-film" meningkat drastis. Deploy pakai Docker biar aman.
            </p>
          </motion.div>

          {/* Card 3: IT Support */}
          <motion.div variants={fadeUp} className="group bg-[#0A132B] border border-slate-800/80 hover:border-cyan-500/30 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,0.2)]">
            <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Wrench size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 mb-3">IT Support (Pawang Kantor)</h3>
            <p className="text-slate-400 leading-relaxed">
              Spesialis menyelesaikan masalah rumit dengan mantra sakti: <span className="italic text-slate-300">"Udah dicoba matiin terus nyalain lagi belum?"</span> Penyelamat saat internet ngambek.
            </p>
          </motion.div>

          {/* Card 4: Guru Robotic */}
          <motion.div variants={fadeUp} className="group bg-[#0A132B] border border-slate-800/80 hover:border-cyan-500/30 p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(34,211,238,0.2)]">
            <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
              <Bot size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-200 mb-3">Guru Robotik</h3>
            <p className="text-slate-400 leading-relaxed">
              Mengajari mikrokontroler (Arduino/ESP) cara bergerak dan berpikir. Saya sadar, mengajari mesin ternyata seringkali lebih mudah daripada mengajari manusia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. FUN FACTS SECTION (Optional Vibe Enhancer) */}
      <section className="py-20 px-6 border-y border-slate-800/50 bg-[#080E21]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-slate-300 font-light italic leading-relaxed">
            "Website ini saya buat agar terlihat sangat profesional, padahal aslinya di-hosting dari laptop tua di pojokan kamar yang menyala 24/7."
          </p>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B19] to-transparent -z-10"></div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Mari Bertukar Cerita
          </h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            Saya tidak sedang menawarkan jasa atau mencari klien. Tapi kalau Anda butuh teman ngobrol soal home server, koding, atau sekadar sambat soal error yang tidak ketemu-ketemu, pintu selalu terbuka.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a href="mailto:emailanda@gmail.com" 
               className="w-full sm:w-auto flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3.5 rounded-2xl transition-all duration-300 font-medium shadow-lg shadow-cyan-900/20 hover:-translate-y-0.5">
              <Mail size={20} /> 
              Sapa Lewat Email
            </a>
            <a href="https://github.com/zahruddin" target="_blank" 
               className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#0F172A] hover:bg-[#1E293B] border border-slate-700 hover:border-cyan-500/50 text-slate-200 px-8 py-3.5 rounded-2xl transition-all duration-300 font-medium hover:-translate-y-0.5">
              <span className="text-slate-400 group-hover:text-cyan-400">
                <GithubIcon />
              </span>
              Mampir ke GitHub
            </a>
          </div>
        </motion.div>
      </section>

    </main>
  );
}