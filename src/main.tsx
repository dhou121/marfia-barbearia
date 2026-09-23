import React from 'react';
import { createRoot } from 'react-dom/client';
import { CalendarCheck, CheckCircle2, Clock, Crown, MapPin, Menu, Phone, Quote, Scissors, ShieldCheck, Sparkles, Star, Users, X } from 'lucide-react';
import './styles.css';

const whatsappNumber = '5500000000000';
const whatsappMessage = encodeURIComponent('Olá, Marfia Barbearia! Quero agendar um horário.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Hero />
      <Services />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Location />
      <FinalCall />
      <Footer />
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Agendar horário pelo WhatsApp">
        <Phone size={22} />
      </a>
    </main>
  );
}

function Header({ menuOpen, setMenuOpen, closeMenu }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void; closeMenu: () => void }) {
  const links = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Ambiente', href: '#ambiente' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <header className="header">
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Marfia Barbearia - início">
          <span className="brand-mark"><Scissors size={22} /></span>
          <span>
            <strong>Marfia</strong>
            <small>Barbearia</small>
          </span>
        </a>

        <div className="desktop-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Agendar agora
        </a>

        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="mobile-cta" href={whatsappLink} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar pelo WhatsApp</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-padding">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Crown size={16} /> Barbearia premium para homens de atitude</div>
          <h1>Corte alinhado, barba impecável e presença de respeito.</h1>
          <p className="hero-text">Na Marfia Barbearia, cada detalhe é pensado para você sair mais confiante: degradê bem feito, barba na navalha, acabamento preciso e atendimento profissional.</p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
              <CalendarCheck size={20} /> Agendar pelo WhatsApp
            </a>
            <a className="secondary-button" href="#servicos">Ver serviços</a>
          </div>
          <div className="hero-proof" aria-label="Destaques da barbearia">
            <span><Star size={17} /> Atendimento 5 estrelas</span>
            <span><ShieldCheck size={17} /> Profissionais experientes</span>
            <span><Clock size={17} /> Horário marcado</span>
          </div>
        </div>

        <div className="hero-card" aria-label="Resumo da experiência Marfia Barbearia">
          <div className="barber-visual">
            <div className="barber-photo barber-photo-main" />
            <div className="barber-photo barber-photo-small" />
            <div className="shine-line" />
          </div>
          <div className="appointment-card">
            <span className="status-dot" />
            <div>
              <strong>Agenda aberta hoje</strong>
              <p>Reserve seu horário em poucos segundos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Scissors, title: 'Corte masculino', text: 'Corte sob medida para seu estilo, com acabamento limpo e moderno.' },
    { icon: Sparkles, title: 'Barba na navalha', text: 'Modelagem, hidratação e finalização para uma barba bem alinhada.' },
    { icon: Crown, title: 'Combo Marfia', text: 'Corte + barba para quem quer sair completo e com presença.' },
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container">
        <SectionTitle eyebrow="Serviços" title="O essencial para elevar seu visual" text="Escolha o atendimento ideal e fale direto no WhatsApp para reservar seu horário." />
        <div className="cards-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="glass-card service-card" key={service.title}>
                <div className="icon-box"><Icon size={26} /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer">Agendar serviço</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = ['Acabamento preciso no espelho', 'Ambiente masculino, confortável e moderno', 'Atendimento com hora marcada', 'Produtos de qualidade profissional', 'Cuidado com higiene e detalhes', 'Experiência pensada para você voltar'];

  return (
    <section id="diferenciais" className="section-padding darker-section">
      <div className="container split-section">
        <div>
          <SectionTitle eyebrow="Diferenciais" title="Mais que cortar cabelo: é cuidar da sua imagem" text="A Marfia entrega uma experiência completa, do primeiro contato ao último detalhe do acabamento." />
          <a className="primary-button compact" href={whatsappLink} target="_blank" rel="noreferrer"><Phone size={19} /> Chamar no WhatsApp</a>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <CheckCircle2 size={20} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="ambiente" className="section-padding">
      <div className="container">
        <SectionTitle eyebrow="Ambiente" title="Visual urbano, confortável e feito para homens exigentes" text="Um espaço com personalidade, atendimento direto e clima de barbearia de verdade." />
        <div className="gallery-grid">
          <div className="gallery-card tall"><span>Degradê limpo</span></div>
          <div className="gallery-card"><span>Barba alinhada</span></div>
          <div className="gallery-card"><span>Acabamento premium</span></div>
          <div className="gallery-card wide"><span>Experiência Marfia</span></div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: 'Rafael M.', text: 'Atendimento pontual e corte muito bem finalizado. Virei cliente.' },
    { name: 'Bruno S.', text: 'A barba ficou alinhada do jeito que eu queria. Ambiente muito bom.' },
    { name: 'Diego L.', text: 'Profissionalismo de verdade. Dá para perceber o cuidado nos detalhes.' },
  ];

  return (
    <section className="section-padding darker-section">
      <div className="container">
        <SectionTitle eyebrow="Clientes" title="Quem passa pela Marfia percebe a diferença" text="Confiança se conquista no atendimento, no acabamento e na experiência." />
        <div className="cards-grid testimonials-grid">
          {testimonials.map((item) => (
            <article className="glass-card testimonial-card" key={item.name}>
              <Quote size={28} />
              <p>{item.text}</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="localizacao" className="section-padding">
      <div className="container location-card">
        <div>
          <div className="eyebrow"><MapPin size={16} /> Localização e horário</div>
          <h2>Venha cuidar do visual na Marfia Barbearia</h2>
          <p>Agende seu horário pelo WhatsApp e confirme o melhor momento para ser atendido.</p>
        </div>
        <div className="info-grid">
          <div className="info-item"><Clock size={22} /><div><strong>Horários</strong><span>Segunda a sábado, com agendamento</span></div></div>
          <div className="info-item"><MapPin size={22} /><div><strong>Endereço</strong><span>Confirme a localização pelo WhatsApp</span></div></div>
          <div className="info-item"><Users size={22} /><div><strong>Atendimento</strong><span>Corte, barba e combos masculinos</span></div></div>
        </div>
      </div>
    </section>
  );
}

function FinalCall() {
  return (
    <section className="section-padding final-call">
      <div className="container final-card">
        <span className="eyebrow"><Sparkles size={16} /> Seu próximo visual começa agora</span>
        <h2>Garanta seu horário e saia com presença de respeito.</h2>
        <p>Fale com a Marfia Barbearia pelo WhatsApp e marque seu atendimento de forma rápida.</p>
        <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer"><CalendarCheck size={20} /> Quero agendar agora</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Marfia Barbearia. Todos os direitos reservados.</p>
        <a href={whatsappLink} target="_blank" rel="noreferrer">Agendar pelo WhatsApp</a>
      </div>
    </footer>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
