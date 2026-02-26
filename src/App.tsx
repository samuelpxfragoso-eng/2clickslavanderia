/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Clock, 
  ShieldCheck, 
  Maximize2, 
  MapPin, 
  Zap, 
  Gift, 
  Coins, 
  CheckCircle2, 
  MessageCircle,
  ChevronRight,
  Menu,
  X,
  Volume2,
  VolumeX,
  Instagram,
  Star,
  Quote,
  Plus,
  Minus,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const VIDEO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20lav%20hero%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgbGF2IGhlcm8gdmlkZW8ubXA0IiwiaWF0IjoxNzcyMTIwMjkyLCJleHAiOjE4MDM2NTYyOTJ9.qTOyylmOAlNrLD4no3joWZsW3EZPzL_chjxPV693DWc";
const ESTRUTURA_VIDEO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20estrutrura%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgZXN0cnV0cnVyYSB2aWRlby5tcDQiLCJpYXQiOjE3NzIxMjE0NjMsImV4cCI6MTgwMzY1NzQ2M30.BkyQ9VERBxoEi3_dUJwErFgB6gdLjzbvf-9l3_IIoCo";
const TOTEM_VIDEO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2%20c%20maquina.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMiBjIG1hcXVpbmEubXA0IiwiaWF0IjoxNzcyMTIzNDU2LCJleHAiOjE4MDM2NTk0NTZ9.47-mlOZDSt2WycyCiSmdI5NGTkQgPiEyAIMFgr0m-2I";

const INSTAGRAM_IMAGES = [
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130849.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwODQ5LnBuZyIsImlhdCI6MTc3MjEyMjIzMiwiZXhwIjoxODAzNjU4MjMyfQ.sSuKlVlyJ9f7ObNCArUM-NkboA_8T-lJUjj8BF0usws",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130825.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwODI1LnBuZyIsImlhdCI6MTc3MjEyMjI1MywiZXhwIjoxODAzNjU4MjUzfQ.5eVMoRiks7naQYL7R0EaaYWYUFO8Fc8Mi_vGTyLcYWE",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130757.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNzU3LnBuZyIsImlhdCI6MTc3MjEyMjI2OSwiZXhwIjoxODAzNjU4MjY5fQ.gfNpOGdUYOaTLSh3DzVdFegjCpvAQtTMEi5kmTk25UM",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130739.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNzM5LnBuZyIsImlhdCI6MTc3MjEyMjI4MiwiZXhwIjoxODAzNjU4MjgyfQ.xnL8v61CD87PEDJv7T1futQY9FYgjszjzpzdAxOn8ZI",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130717.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNzE3LnBuZyIsImlhdCI6MTc3MjEyMjMxOSwiZXhwIjoxODAzNjU4MzE5fQ.A2lRm5V6JbHy4lNn2ChN-dnKVyPbPGAoIGrbZU6WO0o",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130648.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNjQ4LnBuZyIsImlhdCI6MTc3MjEyMjMzMiwiZXhwIjoxODAzNjU4MzMyfQ.1OmScxyz2MntpCuK9W3lWy2Fn3Jmk78n5qmZWXJwFvk",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20130621.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTMwNjIxLnBuZyIsImlhdCI6MTc3MjEyMjM1OSwiZXhwIjoxODAzNjU4MzU5fQ.8y_68dyKVNRLIQzn3vQu0588Z8xp9wr93QXfz83KHOA"
];

const TESTIMONIALS = [
  { name: "Ricardo Santos", text: "Melhor lavanderia de Mogi! Máquinas super rápidas e roupas saem cheirosas.", rating: 5 },
  { name: "Ana Paula Silva", text: "Praticidade total. O sistema de cashback realmente funciona e ajuda muito.", rating: 5 },
  { name: "Marcos Oliveira", text: "Ambiente limpo e seguro. Lavo meus edredons aqui e ficam perfeitos.", rating: 5 },
  { name: "Juliana Costa", text: "O cesto é gigante mesmo! Coube toda a roupa da semana em um ciclo só.", rating: 5 },
  { name: "Felipe Almeida", text: "Excelente custo-benefício. O atendimento pelo WhatsApp é muito ágil.", rating: 5 },
  { name: "Carla Souza", text: "Adoro a esterilização UV, me sinto muito mais segura com as roupas do bebê.", rating: 5 },
  { name: "Bruno Ferreira", text: "24 horas de verdade! Já precisei lavar roupa de madrugada e foi super tranquilo.", rating: 5 },
  { name: "Patrícia Lima", text: "As instruções são bem claras, fácil de usar mesmo para quem nunca foi.", rating: 5 },
  { name: "Thiago Rocha", text: "Lugar moderno e tecnológico. Recomendo a todos na região.", rating: 5 },
  { name: "Fernanda Dias", text: "Ganhei minha lavagem de aniversário! Atendimento nota 10.", rating: 5 }
];

const FAQS = [
  {
    q: "Como funciona o sistema da 2 Clicks?",
    a: "É muito simples: você chega, coloca suas roupas no cesto medidor, realiza o pagamento no totem (Cartão ou Pix) e seleciona a máquina correspondente. O sabão e amaciante são liberados automaticamente."
  },
  {
    q: "Preciso levar meus próprios produtos?",
    a: "Não! Nossas máquinas já são equipadas com dosagem automática de sabão e amaciante profissionais de alta qualidade, garantindo a melhor limpeza e perfume para suas roupas."
  },
  {
    q: "Quanto tempo leva para lavar e secar?",
    a: "O ciclo de lavagem dura aproximadamente 30 minutos e o de secagem cerca de 45 minutos. Em pouco mais de uma hora, você tem suas roupas prontas para uso."
  },
  {
    q: "Posso lavar edredons de casal ou king?",
    a: "Sim! Nossas máquinas de 'Dois Sextos' possuem capacidade industrial, sendo perfeitas para edredons, cobertores pesados e grandes volumes de roupa."
  },
  {
    q: "Quais as formas de pagamento aceitas?",
    a: "Aceitamos cartões de débito, crédito e Pix. Tudo é feito de forma rápida e segura diretamente no nosso totem de autoatendimento."
  },
  {
    q: "A lavanderia realmente funciona 24 horas?",
    a: "Sim! Estamos abertos todos os dias da semana, incluindo domingos e feriados, 24 horas por dia, para que você lave suas roupas no horário que for melhor para você."
  },
  {
    q: "O que é a esterilização UV?",
    a: "É uma tecnologia de ponta que utiliza luz ultravioleta para eliminar 99.9% de ácaros, fungos e bactérias das suas roupas durante o processo, garantindo máxima higiene."
  },
  {
    q: "Como funciona o sistema de cashback?",
    a: "É nosso programa de fidelidade: ao acumular R$ 160,00 em gastos, você recebe automaticamente R$ 16,00 de crédito para utilizar em uma lavagem extra de um sexto."
  },
  {
    q: "Posso utilizar apenas o ciclo de secagem?",
    a: "Com certeza! Você pode trazer suas roupas já lavadas de casa e utilizar apenas nossas secadoras profissionais para deixá-las macias e prontas para guardar."
  },
  {
    q: "Qual o limite de roupas por máquina?",
    a: "Para garantir a qualidade da lavagem, você deve respeitar a marca de limite indicada no cesto medidor. Não aperte as roupas; elas devem ficar soltas para que a água e os produtos circulem."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/20">2C</div>
            <span className="text-xl font-bold tracking-tight hidden sm:block text-blue-500">Lavanderia</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Sobre', 'Preços', 'Unidades', 'Benefícios'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              <MessageCircle size={18} />
              WhatsApp
              <ChevronRight size={16} />
            </a>
          </div>

          <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020617] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Sobre', 'Preços', 'Unidades', 'Benefícios'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-semibold text-slate-300 text-left"
                >
                  {item}
                </button>
              ))}
              <a 
                href="https://wa.me/5511999999999" 
                className="bg-blue-600 text-white p-4 rounded-2xl text-center font-bold text-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Tecnologia Profissional • Cuidado Especializado
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              SUA ROUPA <span className="text-blue-500">LIMPA</span>,<br />
              HIGIENIZADA E<br />
              <span className="text-blue-500">PRESERVADA</span>.
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
              Lavagem técnica especializada com esterilização UV e máquinas industriais de alta capacidade. O maior cesto da região para o seu conforto.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/5511999999999" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20 group"
              >
                Agendar pelo WhatsApp
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => scrollToSection('preços')}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all"
              >
                Ver preços
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square md:aspect-auto md:h-[500px]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src={VIDEO_URL} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                    <Zap size={24} className="text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold">2 Clicks</p>
                    <p className="text-white/60 text-sm">Lavanderia Especializada</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estrutura Section */}
      <section id="estrutura" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                ESTRUTURA DE <span className="text-blue-500">PONTA</span>
              </h2>
              <p className="text-xl text-slate-300 font-semibold mb-6">
                Tecnologia industrial para o cuidado das suas roupas.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                A 2 Clicks Lavanderia foi projetada para oferecer a melhor experiência de lavagem self-service. Nossa estrutura conta com máquinas industriais de última geração, sistema de esterilização UV e um ambiente confortável e seguro 24 horas por dia. Utilizamos produtos de alta qualidade que garantem a limpeza profunda sem agredir as fibras dos tecidos.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    <CheckCircle2 className="text-blue-500" size={20} />
                  </div>
                  <span className="text-sm font-bold">Máquinas Pro</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    <CheckCircle2 className="text-blue-500" size={20} />
                  </div>
                  <span className="text-sm font-bold">Ambiente 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    <CheckCircle2 className="text-blue-500" size={20} />
                  </div>
                  <span className="text-sm font-bold">Produtos Premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    <CheckCircle2 className="text-blue-500" size={20} />
                  </div>
                  <span className="text-sm font-bold">Segurança Total</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-1 md:order-2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video md:aspect-[4/5]">
                <video 
                  autoPlay 
                  loop 
                  muted={isMuted}
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src={ESTRUTURA_VIDEO_URL} type="video/mp4" />
                </video>
                
                {/* Sound Toggle Button */}
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-all z-10"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600/20 blur-2xl rounded-full" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefícios" className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-8">VANTAGENS <br />EXCLUSIVAS</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                    <Coins size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">10% de Cashback</h4>
                    <p className="text-blue-100 leading-relaxed">A cada R$ 160,00 em gastos, você recebe R$ 16,00 de volta para usar em uma lavagem extra.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                    <Gift size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Presente de Aniversário</h4>
                    <p className="text-blue-100 leading-relaxed">No mês do seu aniversário, ganhe um ciclo de um sexto (lavar ou secar) totalmente gratuito.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[3rem]">
              <h3 className="text-2xl font-bold text-white mb-6">Instruções de Uso</h3>
              <ul className="space-y-6">
                {[
                  "Não apertar as peças no cesto.",
                  "Respeitar o limite de capacidade do cesto.",
                  "Utilizar um cesto por máquina."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-blue-600" />
                    </div>
                    <span className="text-white font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="sobre" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24 Horas", desc: "Funcionamento ininterrupto para sua conveniência." },
              { icon: ShieldCheck, title: "Esterilização UV", desc: "Eliminação de 99.9% de bactérias e fungos." },
              { icon: Maximize2, title: "Maior Cesto", desc: "O maior cesto da região para grandes volumes." },
              { icon: Zap, title: "Industrial", desc: "Máquinas de alta performance (Dois Sextos)." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon size={28} className="text-blue-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Totem Usage Section */}
      <section id="como-usar" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video md:aspect-square">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src={TOTEM_VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/20 blur-2xl rounded-full" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                COMO USAR O <span className="text-blue-500">TOTEM</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10">
                Pagar e lavar nunca foi tão fácil. Nosso totem de autoatendimento é intuitivo e aceita as principais formas de pagamento. Siga os passos abaixo:
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Selecione o Serviço", desc: "Escolha entre Lavar ou Secar diretamente na tela." },
                  { step: "02", title: "Escolha o Cesto", desc: "Selecione o tamanho ideal (Um ou Dois Sextos)." },
                  { step: "03", title: "Realize o Pagamento", desc: "Use seu cartão de débito, crédito ou pague via Pix." },
                  { step: "04", title: "Inicie a Máquina", desc: "A máquina será liberada automaticamente para uso." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-3xl font-black text-blue-500/30 group-hover:text-blue-500 transition-colors shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preços" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">NOSSOS <span className="text-blue-500">CICLOS</span></h2>
            <p className="text-slate-400">Escolha a capacidade ideal para sua necessidade.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Um Sexto", 
                lavar: "16,00", 
                secar: "16,00", 
                desc: "Ideal para roupas do dia a dia e volumes moderados.",
                popular: false
              },
              { 
                name: "Dois Sextos", 
                lavar: "34,00", 
                secar: "34,00", 
                desc: "Capacidade industrial para grandes volumes e edredons.",
                popular: true
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-[2.5rem] border ${plan.popular ? 'bg-blue-600 border-blue-500 shadow-2xl shadow-blue-600/20' : 'bg-white/5 border-white/10'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-white text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Mais Potente
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 ${plan.popular ? 'text-blue-100' : 'text-slate-400'}`}>{plan.desc}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className={plan.popular ? 'text-blue-100' : 'text-slate-400'}>Lavar</span>
                    <span className="text-2xl font-black">R$ {plan.lavar}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={plan.popular ? 'text-blue-100' : 'text-slate-400'}>Secar</span>
                    <span className="text-2xl font-black">R$ {plan.secar}</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5511999999999"
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${plan.popular ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
                >
                  Começar agora
                  <ChevronRight size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-slate-900/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-blue-500 mb-4">
              <Instagram size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Instagram</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">SIGA A <span className="text-blue-500">2 CLICKS</span></h2>
            <p className="text-slate-400 max-w-lg">Fique por dentro das novidades, promoções e dicas para cuidar melhor das suas roupas.</p>
          </div>
          <a 
            href="https://instagram.com/2clickslavanderia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-200 transition-all shrink-0"
          >
            Seguir no Instagram
            <ChevronRight size={20} />
          </a>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group">
          <motion.div 
            className="flex gap-4 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Double the images for seamless loop */}
            {[...INSTAGRAM_IMAGES, ...INSTAGRAM_IMAGES].map((img, i) => (
              <div 
                key={i} 
                className="relative w-64 md:w-80 aspect-square rounded-3xl overflow-hidden border border-white/5 shrink-0"
              >
                <img 
                  src={img} 
                  alt={`Instagram post ${i}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-900/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">PERGUNTAS <span className="text-blue-500">FREQUENTES</span></h2>
            <p className="text-slate-400">Tire suas dúvidas sobre o funcionamento da 2 Clicks.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div 
                key={i}
                className="rounded-3xl border border-white/5 bg-white/5 overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl pr-8">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/10 transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-blue-600 border-blue-600' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-slate-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="unidades" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">NOSSAS <span className="text-blue-500">UNIDADES</span></h2>
            <p className="text-slate-400">Encontre a 2 Clicks mais próxima de você.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                name: "Alto do Ipiranga", 
                address: "Rua Exemplo, 123 - Alto do Ipiranga, Mogi das Cruzes",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123456789!2d-46.187654321!3d-23.523456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd8456789abcd%3A0x1234567890abcdef!2sAlto%20do%20Ipiranga%2C%20Mogi%20das%20Cruzes%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              },
              { 
                name: "Mogi Moderno", 
                address: "Av. Exemplo, 456 - Mogi Moderno, Mogi das Cruzes",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.987654321!2d-46.198765432!3d-23.534567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd9876543210a%3A0x0987654321fedcba!2sMogi%20Moderno%2C%20Mogi%20das%20Cruzes%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000001!5m2!1spt-BR!2sbr"
              }
            ].map((loc, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-6 group hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <MapPin size={32} className="text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{loc.name}</h4>
                    <p className="text-slate-400 text-sm">{loc.address}</p>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden border border-white/10 h-64 shadow-xl">
                  <iframe 
                    src={loc.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-24 bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">O QUE DIZEM NOSSOS <span className="text-blue-500">CLIENTES</span></h2>
            <p className="text-slate-400 max-w-lg">A satisfação de quem já utiliza a 2 Clicks Lavanderia é o nosso maior orgulho.</p>
          </div>
          <a 
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20 shrink-0"
          >
            Avaliar no Google
            <Star size={20} fill="currentColor" />
          </a>
        </div>

        {/* Testimonials Marquee */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex gap-6 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
              <div 
                key={i} 
                className="w-80 p-8 rounded-[2rem] bg-white/5 border border-white/5 flex flex-col justify-between shrink-0 hover:border-blue-500/30 transition-all"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <Quote size={32} className="text-blue-500/20 mb-4" />
                  <p className="text-slate-300 text-sm leading-relaxed italic">"{item.text}"</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Cliente Verificado</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">2C</div>
                <span className="text-xl font-bold tracking-tight">2 Clicks <span className="text-blue-500">Lavanderia</span></span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                A revolução do self-service em Mogi das Cruzes. Tecnologia industrial, praticidade e o melhor custo-benefício para suas roupas.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Links Rápidos</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Sobre nós</button></li>
                <li><button onClick={() => scrollToSection('preços')} className="hover:text-white transition-colors">Preços</button></li>
                <li><button onClick={() => scrollToSection('unidades')} className="hover:text-white transition-colors">Unidades</button></li>
                <li><button onClick={() => scrollToSection('benefícios')} className="hover:text-white transition-colors">Benefícios</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Contato</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-2"><MessageCircle size={16} /> (11) 99999-9999</li>
                <li className="flex items-center gap-2"><Clock size={16} /> Aberto 24 Horas</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
            <p>© 2024 2 Clicks Lavanderia Self Service. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 hover:scale-110 transition-transform z-50"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}
