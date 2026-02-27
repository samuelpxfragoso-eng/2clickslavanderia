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
  ChevronDown,
  Footprints,
  Box,
  Smartphone,
  ClipboardList,
  Search,
  PackageOpen,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const VIDEO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20lav%20hero%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgbGF2IGhlcm8gdmlkZW8ubXA0IiwiaWF0IjoxNzcyMTIwMjkyLCJleHAiOjE4MDM2NTYyOTJ9.qTOyylmOAlNrLD4no3joWZsW3EZPzL_chjxPV693DWc";
const ESTRUTURA_VIDEO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20estrutrura%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgZXN0cnV0cnVyYSB2aWRlby5tcDQiLCJpYXQiOjE3NzIxMjE0NjMsImV4cCI6MTgwMzY1NzQ2M30.BkyQ9VERBxoEi3_dUJwErFgB6gdLjzbvf-9l3_IIoCo";
const TOTEM_VIDEO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2%20c%20maquina.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMiBjIG1hcXVpbmEubXA0IiwiaWF0IjoxNzcyMTIzNDU2LCJleHAiOjE4MDM2NTk0NTZ9.47-mlOZDSt2WycyCiSmdI5NGTkQgPiEyAIMFgr0m-2I";
const SNEAKERS_VIDEO_URL = "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/grok%20video%202%20click%20snakers.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvZ3JvayB2aWRlbyAyIGNsaWNrIHNuYWtlcnMubXA0IiwiaWF0IjoxNzcyMjI2OTEyLCJleHAiOjE4OTgzNzA5MTJ9.zAUa7GuHMKgoQNsUfC8c9nnpHgtGPQa4D1kcNJkMg8c";

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
    a: "Sim! Nossas máquinas de 'Dois Cestos' possuem capacidade industrial, sendo perfeitas para edredons, cobertores pesados e grandes volumes de roupa."
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
    a: "É nosso programa de fidelidade: ao acumular R$ 160,00 em gastos, você recebe automaticamente R$ 16,00 de crédito para utilizar em uma lavagem extra de um cesto."
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/20 text-white">2C</div>
            <span className="text-xl font-bold tracking-tight hidden sm:block text-blue-600">2 Clicks</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Sobre', 'Como Funciona', 'Benefícios', 'Preços', 'Unidades'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="https://wa.me/message/4LRPJ3HSDEXXB1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Sobre', 'Como Funciona', 'Benefícios', 'Preços', 'Unidades'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-2xl font-bold text-slate-900 text-left"
                >
                  {item}
                </button>
              ))}
              <a 
                href="https://wa.me/message/4LRPJ3HSDEXXB1" 
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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Referência em Mogi das Cruzes
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-slate-900">
              Lavanderia Self-Service em Mogi das Cruzes – <span className="text-blue-600">Rápida, Moderna e com Benefícios Exclusivos</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
              Na 2 Clicks Lavanderia você lava e seca suas roupas em aproximadamente 1 hora, com máquinas profissionais, esterilização UV, estacionamento exclusivo e vantagens para clientes cadastrados.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('unidades')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20 group"
              >
                Ver Unidades
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all shadow-sm"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('benefícios')}
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-600/10"
              >
                Quero Ganhar Benefícios
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl aspect-square md:aspect-auto md:h-[550px]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src={VIDEO_URL} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                      <Zap size={24} className="text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-black">2 Clicks Lavanderia</p>
                      <p className="text-slate-600 text-sm font-medium">Sua roupa pronta em aproximadamente 1 hora</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre a 2 Clicks Section */}
      <section id="sobre" className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                Sobre a 2 Clicks
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-slate-900">
                DEVOLVENDO <span className="text-blue-600">TEMPO</span> PARA VOCÊ
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A 2 Clicks Lavanderia nasceu com um propósito simples: devolver tempo para as pessoas.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Somos referência em lavanderia self-service em Mogi das Cruzes, oferecendo uma estrutura moderna, ambiente seguro e equipamentos de alta performance que garantem mais eficiência e cuidado com suas roupas.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium">
                Aqui você encontra praticidade, economia, autonomia e tecnologia para resolver tudo em cerca de 1 hora — sem burocracia e sem esperar dias para retirar suas peças.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl aspect-video md:aspect-[4/5]">
                <video 
                  autoPlay 
                  loop 
                  muted={isMuted}
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src={ESTRUTURA_VIDEO_URL} type="video/mp4" />
                </video>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-900 hover:bg-white transition-all z-10"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">NOSSOS <span className="text-blue-600">DIFERENCIAIS</span></h2>
            <p className="text-slate-600">Na 2 Clicks você tem eficiência, segurança e comodidade no mesmo lugar.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Alta Performance", desc: "Máquinas industriais de última geração." },
              { icon: ShieldCheck, title: "Esterilização UV", desc: "Máxima higiene em todas as lavagens." },
              { icon: MapPin, title: "Estacionamento", desc: "Vagas exclusivas para nossos clientes." },
              { icon: Clock, title: "Ambiente 24h", desc: "Monitorado e seguro a qualquer hora." },
              { icon: Maximize2, title: "Conforto", desc: "Estrutura organizada e climatizada." },
              { icon: CheckCircle2, title: "Intuitivo", desc: "Processo rápido e sem burocracia." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <item.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Economia e Sustentabilidade Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6">
                  🌱 Economia e Sustentabilidade
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
                  TECNOLOGIA QUE ECONOMIZA ÁGUA, ENERGIA E O SEU DINHEIRO.
                </h2>
                <p className="text-xl text-blue-50 leading-relaxed mb-8">
                  As máquinas profissionais da 2 Clicks Lavanderia utilizam ciclos otimizados que reduzem o consumo de água e energia quando comparados a lavagens domésticas tradicionais.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  Ao escolher a lavanderia self-service, você contribui para um uso mais inteligente de recursos naturais, além de reduzir o desgaste da sua máquina de casa. Mais eficiência. Menos desperdício. Mais economia para você e para o planeta.
                </p>
              </div>
              <div className="space-y-8">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 aspect-video md:aspect-square">
                  <img 
                    src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20eco.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgZWNvLmpwZWciLCJpYXQiOjE3NzIyMjYxNDIsImV4cCI6MTg2NjgzNDE0Mn0.GlpKEQgtx5GsCUvavCLjHcj6T444OQog2IqrV7kIUWI" 
                    alt="Economia e Sustentabilidade 2 Clicks" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent pointer-events-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
                    <div className="text-3xl font-black mb-1">-40%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Consumo de Água</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
                    <div className="text-3xl font-black mb-1">-30%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Energia Elétrica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clube de Benefícios Section */}
      <section id="benefícios" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">CLUBE DE <span className="text-blue-600">BENEFÍCIOS</span></h2>
            <p className="text-slate-600">Aqui você lava e ainda ganha. Vantagens exclusivas para nossos clientes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Coins, 
                title: "Cashback", 
                desc: "A cada R$ 160,00 gastos no mês, você recebe automaticamente R$ 16,00 de crédito para usar no próximo mês." 
              },
              { 
                icon: Gift, 
                title: "Aniversariantes", 
                desc: "No mês do seu aniversário, você recebe um benefício exclusivo para comemorar com roupa limpa e renovada." 
              },
              { 
                icon: Sparkles, 
                title: "Cupons", 
                desc: "Clientes cadastrados recebem promoções e condições especiais. O cadastro é feito presencialmente em nossas unidades." 
              },
              { 
                icon: Star, 
                title: "Promoções", 
                desc: "Campanhas especiais divulgadas em nossas redes sociais e unidades. Venha nos visitar para participar." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <item.icon size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button 
              onClick={() => scrollToSection('unidades')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20"
            >
              Ver Unidades e Como Chegar
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-slate-900">
                COMO <span className="text-blue-600">FUNCIONA</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Lavar suas roupas na 2 Clicks é simples, rápido e intuitivo. Você resolve tudo no seu tempo, sem burocracia.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: "1", title: "Traga suas roupas", desc: "Não precisa agendar. Venha quando for melhor para você." },
                  { step: "2", title: "Escolha a máquina", desc: "Selecione a máquina ideal para o volume de roupas (Um ou Dois Cestos)." },
                  { step: "3", title: "Pague no Totem", desc: "Realize o pagamento diretamente no painel via Cartão ou Pix." },
                  { step: "4", title: "Lave e Seque", desc: "Em aproximadamente 1 hora suas roupas estarão limpas e secas." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl aspect-square">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src={TOTEM_VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl">
                  <p className="text-slate-900 font-bold text-center">Passo a passo no Totem</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="preços" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">NOSSOS <span className="text-blue-600">CICLOS</span></h2>
            <p className="text-slate-600">Escolha a capacidade ideal para sua necessidade. Sabão e amaciante inclusos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { 
                name: "Um Cesto", 
                lavar: "16,00", 
                secar: "16,00", 
                lavarTime: "35 min",
                secarTime: "45 min",
                desc: "Ideal para roupas do dia a dia e volumes moderados.",
                popular: false
              },
              { 
                name: "Dois Cestos", 
                lavar: "34,00", 
                secar: "34,00", 
                lavarTime: "35 min",
                secarTime: "45 min",
                desc: "Capacidade industrial para grandes volumes e edredons.",
                popular: true
              }
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative p-10 rounded-[2.5rem] border-2 bg-white ${plan.popular ? 'border-blue-500 shadow-2xl shadow-blue-600/10' : 'border-slate-100 shadow-sm'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Mais Potente
                  </div>
                )}
                <h3 className="text-2xl font-black mb-2 text-slate-900">{plan.name}</h3>
                <p className="text-sm mb-8 text-slate-500">{plan.desc}</p>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Lavar (~{plan.lavarTime})</span>
                      <span className="text-2xl font-black text-slate-900">R$ {plan.lavar}</span>
                    </div>
                    <CheckCircle2 className="text-blue-500" size={24} />
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Secar (~{plan.secarTime})</span>
                      <span className="text-2xl font-black text-slate-900">R$ {plan.secar}</span>
                    </div>
                    <CheckCircle2 className="text-blue-500" size={24} />
                  </div>
                </div>

                <a 
                  href="https://wa.me/message/4LRPJ3HSDEXXB1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                >
                  Quero Ganhar Benefícios
                  <ChevronRight size={18} />
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-white border border-slate-100 p-8 rounded-[2.5rem] max-w-4xl mx-auto shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-600" />
              Regras de Uso e Segurança
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  Respeite a capacidade indicada em cada máquina.
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  Utilize o cesto auxiliar como medidor.
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  Centrifugue 2x peças lavadas em máquinas domésticas.
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Proibido lavar tapetes pesados ou peças com areia.
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Proibido peças com resíduos químicos ou graxa.
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                  Não utilize produtos próprios (sabão/amaciante).
                </li>
              </ul>
            </div>
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
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">PERGUNTAS <span className="text-blue-600">FREQUENTES</span></h2>
            <p className="text-slate-600">Tire suas dúvidas sobre o funcionamento da 2 Clicks.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Precisa agendar horário?", a: "Não. O sistema é totalmente self-service, basta chegar e usar." },
              { q: "Quanto tempo demora?", a: "Em média 1 hora entre lavagem e secagem. A lavagem dura aprox. 35min e a secagem 45min." },
              { q: "Tem estacionamento?", a: "Sim! Oferecemos estacionamento exclusivo para nossos clientes em nossas unidades." },
              { q: "Como funciona o cashback?", a: "É o nosso programa de fidelidade: a cada R$ 160,00 gastos no mês, você recebe automaticamente R$ 16,00 de crédito para usar no próximo mês." },
              { q: "Posso vir apenas para secar minhas roupas?", a: "Sim! Você pode trazer suas roupas já lavadas de casa. Para garantir a eficiência da secagem e evitar ciclos extras, recomendamos que as peças tenham sido centrifugadas duas vezes em sua máquina doméstica antes de serem colocadas em nossas secadoras profissionais." }
            ].map((faq, i) => (
              <div 
                key={i}
                className="rounded-3xl border border-slate-100 bg-slate-50 overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-lg md:text-xl pr-8 text-slate-900">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-slate-200 transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-blue-600 border-blue-600 text-white' : 'text-slate-400'}`}>
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
                      <div className="px-6 md:px-8 pb-8 text-slate-600 leading-relaxed">
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
      <section id="unidades" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">NOSSAS <span className="text-blue-600">UNIDADES</span></h2>
            <p className="text-slate-600">Encontre a 2 Clicks mais próxima de você em Mogi das Cruzes.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                name: "Unidade Alto do Ipiranga", 
                address: "Av. Japão – Mogi das Cruzes",
                desc: "Estrutura moderna, estacionamento exclusivo, ambiente monitorado, espaço kids e Alexa.",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123456789!2d-46.187654321!3d-23.523456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd8456789abcd%3A0x1234567890abcdef!2sAlto%20do%20Ipiranga%2C%20Mogi%20das%20Cruzes%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              },
              { 
                name: "Unidade Mogi Moderno", 
                address: "Bairro Mogi Moderno – Mogi das Cruzes",
                desc: "Espaço confortável, máquinas profissionais e atendimento prático.",
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
                <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-6 group hover:shadow-md transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <MapPin size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-slate-900">{loc.name}</h4>
                      <p className="text-blue-600 text-sm font-bold mb-1">{loc.address}</p>
                      <p className="text-slate-500 text-xs">{loc.desc}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-xl text-sm font-bold text-center transition-all"
                    >
                      Como Chegar
                    </a>
                    <a 
                      href="https://wa.me/message/4LRPJ3HSDEXXB1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl text-sm font-bold text-center transition-all"
                    >
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
                <div className="rounded-3xl overflow-hidden border border-slate-200 h-64 shadow-xl">
                  <iframe 
                    src={loc.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
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
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">PROVA <span className="text-blue-600">SOCIAL</span></h2>
            <p className="text-slate-600 max-w-lg">A 2 Clicks é reconhecida pelos clientes pela praticidade, limpeza do ambiente e qualidade das máquinas.</p>
          </div>
          <a 
            href="https://wa.me/message/4LRPJ3HSDEXXB1" 
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
                className="w-80 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between shrink-0 hover:border-blue-500/30 transition-all shadow-sm"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <Quote size={32} className="text-blue-500/10 mb-4" />
                  <p className="text-slate-600 text-sm leading-relaxed italic">"{item.text}"</p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Cliente Verificado</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2 Clicks Sneakers Section */}
      <section id="sneakers" className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 rotate-12"><Footprints size={120} className="text-white" /></div>
          <div className="absolute bottom-10 right-10 -rotate-12"><Footprints size={120} className="text-white" /></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-black uppercase tracking-widest mb-8">
                <Sparkles size={14} />
                Cuidado Especializado em Calçados
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.9] mb-8">
                2 CLICKS <br /><span className="text-blue-200">SNEAKERS</span>
              </h2>
              <p className="text-xl text-blue-50 font-medium mb-8 leading-relaxed">
                Não é apenas uma lavagem, é um protocolo técnico de restauração. Unimos tecnologia industrial com finalização manual detalhada para preservar a vida útil do seu par.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: ShieldCheck, title: "Processo Controlado", desc: "Higienização que respeita materiais delicados como couro e camurça." },
                  { icon: Zap, title: "Esterilização UV", desc: "Elimina 99,9% de fungos e bactérias, acabando com odores." },
                  { icon: Maximize2, title: "Preservação", desc: "Foco em preservar a estrutura e prolongar a vida útil." },
                  { icon: Box, title: "Sistema Lockers", desc: "Praticidade total com nossos armários dentro da lavanderia." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{item.title}</h4>
                      <p className="text-blue-100 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://2clicks-sneakers.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all shadow-xl"
                >
                  Visitar Site Sneakers
                  <ChevronRight size={20} />
                </a>
                <a 
                  href="https://wa.me/message/4LRPJ3HSDEXXB1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800/40 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-800/60 transition-all"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>

            <div className="space-y-8">
              {/* Sneakers Video */}
              <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl aspect-video">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src={SNEAKERS_VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent pointer-events-none" />
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[3rem]">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Box className="text-blue-200" />
                  Sistema de Armários (Lockers)
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Deixe o tênis", desc: "Vá até uma unidade, use um armário e deposite a chave." },
                    { icon: Smartphone, title: "Avise no WhatsApp", desc: "Informe o número da porta utilizada." },
                    { icon: ClipboardList, title: "Cadastro e Triagem", desc: "Link para cadastro e análise técnica da equipe." },
                    { icon: PackageOpen, title: "Retirada", desc: "Avisamos assim que seu par estiver pronto." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
                        <step.icon size={20} />
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm">{step.title}</h5>
                        <p className="text-blue-100 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[3rem]">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <MapPin className="text-blue-200" />
                  Onde encontrar (Unidades em Mogi)
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-1">Mogi Moderno</p>
                    <p className="text-sm text-white">Rua Dr. Deodato Wertheimer, 2220</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-1">Alto do Ipiranga</p>
                    <p className="text-sm text-white">Av. Japão, 1941</p>
                  </div>
                  <p className="text-xs text-blue-100 italic mt-4">*(Os armários ficam dentro da 2 Clicks Lavanderia)*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl text-white">2C</div>
              <span className="text-xl font-black tracking-tighter text-slate-900">2 CLICKS <span className="text-blue-600 uppercase">Lavanderia</span></span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/2clickslavanderia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/message/4LRPJ3HSDEXXB1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>

            <p className="text-slate-400 text-sm font-medium">
              © 2026 2 Clicks Lavanderia. Todos os direitos reservados.
            </p>
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
