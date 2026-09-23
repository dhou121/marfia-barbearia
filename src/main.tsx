import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const whatsappNumber = '5500000000000';
const whatsappMessage = encodeURIComponent('Olá, Marfia Barbearia! Quero agendar um horário.');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

type IconName = 'scissors' | 'phone' | 'calendar' | 'clock' | 'star' | 'shield' | 'crown' | 'sparkles' | 'check' | 'map' | 'users' | 'quote' | 'menu' | 'x';

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    scissors: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" /></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11L8.09 9.64a16 16 0 0 0 6.27 6.27l1.2-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92Z" /></>,
    calendar: <><path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    star: <><path d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z" /></>,
    shield: <><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" /><path d="m9 12 2 2 4-4" /></>,
    crown: <><path d="m2 6 5 5 5-9 5 9 5-5-2 13H4L2 6Z" /><path d="M4 19h16" /></>,
    sparkles: <><path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M19 17v4" /><path d="M17 19h4" /></>,
    check: <><circle cx="12" cy="12" r="10" /><path d="m8 12 2.5 2.5L16 9" /></>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    quote: <><path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-2 6-4 8Z" /><path d="M14 21c3 0 7-1 7-8V5h-7v8h4c0 4-2 6-4 8Z" /></>,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

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
        <Icon name="phone" size={22} />
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
          <span className="brand-mark"><Icon name="scissors" size={22} /></span>
          <span><strong>Marfia</strong><small>Barbearia</small></span>
        </a>

        <div className="desktop-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>

        <a className="nav-cta" href={whatsappLink} target="_blank" rel="noreferrer">Agendar agora</a>

        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          <Icon name={menuOpen ? 'x' : 'menu'} size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
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
          <div className="eyebrow"><Icon name="crown" size={16} /> Barbearia premium para homens de atitude</div>
          <h1>Corte alinhado, barba impecável e presença de respeito.</h1>
          <p className="hero-text">Na Marfia Barbearia, cada detalhe é pensado para você sair mais confiante: degradê bem feito, barba na navalha, acabamento preciso e atendimento profissional.</p>
          <div className="hero-actions">
            <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer"><Icon name="calendar" size={20} /> Agendar pelo WhatsApp</a>
            <a className="secondary-button" href="#servicos">Ver serviços</a>
          </div>
          <div className="hero-proof" aria-label="Destaques da barbearia">
            <span><Icon name="star" size={17} /> Atendimento 5 estrelas</span>
            <span><Icon name="shield" size={17} /> Profissionais experientes</span>
            <span><Icon name="clock" size={17} /> Horário marcado</span>
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
            <div><strong>Agenda aberta hoje</strong><p>Reserve seu horário em poucos segundos.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services: Array<{ icon: IconName; title: string; text: string }> = [
    { icon: 'scissors', title: 'Corte masculino', text: 'Corte sob medida para seu estilo, com acabamento limpo e moderno.' },
    { icon: 'sparkles', title: 'Barba na navalha', text: 'Modelagem, hidratação e finalização para uma barba bem alinhada.' },
    { icon: 'crown', title: 'Combo Marfia', text: 'Corte + barba para quem quer sair completo e com presença.' },
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container">
        <SectionTitle eyebrow="Serviços" title="O essencial para elevar seu visual" text="Escolha o atendimento ideal e fale direto no WhatsApp para reservar seu horário." />
        <div className="cards-grid">
          {services.map((service) => (
            <article className="glass-card service-card" key={service.title}>
              <div className="icon-box"><Icon name={service.icon} size={26} /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href={whatsappLink} target="_blank" rel="noreferrer">Agendar serviço</a>
            </article>
          ))}
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
          <a className="primary-button compact" href={whatsappLink} target="_blank" rel="noreferrer"><Icon name="phone" size={19} /> Chamar no WhatsApp</a>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => <div className="benefit-item" key={benefit}><Icon name="check" size={20} /><span>{benefit}</span></div>)}
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
          {testimonials.map((item) => <article className="glass-card testimonial-card" key={item.name}><Icon name="quote" size={28} /><p>{item.text}</p><strong>{item.name}</strong></article>)}
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
          <div className="eyebrow"><Icon name="map" size={16} /> Localização e horário</div>
          <h2>Venha cuidar do visual na Marfia Barbearia</h2>
          <p>Agende seu horário pelo WhatsApp e confirme o melhor momento para ser atendido.</p>
        </div>
        <div className="info-grid">
          <div className="info-item"><Icon name="clock" size={22} /><div><strong>Horários</strong><span>Segunda a sábado, com agendamento</span></div></div>
          <div className="info-item"><Icon name="map" size={22} /><div><strong>Endereço</strong><span>Confirme a localização pelo WhatsApp</span></div></div>
          <div className="info-item"><Icon name="users" size={22} /><div><strong>Atendimento</strong><span>Corte, barba e combos masculinos</span></div></div>
        </div>
      </div>
    </section>
  );
}

function FinalCall() {
  return (
    <section className="section-padding final-call">
      <div className="container final-card">
        <span className="eyebrow"><Icon name="sparkles" size={16} /> Seu próximo visual começa agora</span>
        <h2>Garanta seu horário e saia com presença de respeito.</h2>
        <p>Fale com a Marfia Barbearia pelo WhatsApp e marque seu atendimento de forma rápida.</p>
        <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer"><Icon name="calendar" size={20} /> Quero agendar agora</a>
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
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{text}</p></div>;
}

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
