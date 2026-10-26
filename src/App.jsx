import { useEffect, useRef, useState } from "react";
import {
  profile, skills, experience, projects, education, certifications,
} from "./data.js";

const GMAIL = (email, subject = "Hello Soniya", body = "") =>
  `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const WHATSAPP = (phoneHref) =>
  `https://wa.me/${phoneHref.replace(/\D/g, "")}?text=${encodeURIComponent("Hi Soniya, I found your portfolio and would like to connect.")}`;

function Photo() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="arch">
      {failed ? (
        <div className="arch-fallback" aria-label="Portrait placeholder">SC</div>
      ) : (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setFailed(true)} />
      )}
    </div>
  );
}

function HeroMeta() {
  return (
    <div className="hero-meta">
      <span>Dubai, UAE</span>
      <span className="avail"><i /> Available now</span>
    </div>
  );
}

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };
  return (
    <button type="button" className="copy-btn" onClick={copy}>
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}

function ContactForm({ email }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Enquiry from ${form.name}`;
    const body = `${form.message}\n\n-- \n${form.name}\n${form.email}`;
    window.open(GMAIL(email, subject, body), "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form className="enquiry" onSubmit={submit}>
      <h3>Send an enquiry</h3>
      <div className="row">
        <label>
          Name
          <input name="name" value={form.name} onChange={change} placeholder="Your name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={change} placeholder="you@company.com" required />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows="5" value={form.message} onChange={change} placeholder="Tell me about the role or project" required />
      </label>
      <button type="submit" className="btn primary send">Send message</button>
      {sent && <p className="sent">Opening your email to send it ✓</p>}
    </form>
  );
}

function WhatsAppFloat({ phoneHref }) {
  return (
    <a
      className="wa-float"
      href={WHATSAPP(phoneHref)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}

function SkillStream({ group, items }) {
  const ref = useRef(null);
  return (
    <div className="stream">
      <div className="stream-head">
        <h3>{group}</h3>
      </div>
      <div className="stream-track" ref={ref}>
        {items.map((i) => (
          <div className="s-card" key={i}>{i}</div>
        ))}
      </div>
    </div>
  );
}

const nav = [
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function App() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = document.querySelectorAll(".section, .contact");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          en.target.classList.toggle("in", en.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <header className="topbar">
        <a href="#top" className="brand">SC</a>
        <nav aria-label="Main">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-text">
              <HeroMeta />
              <p className="role">{profile.role}</p>
              <h1>{profile.name}</h1>
              <p className="headline">{profile.headline}</p>
              <p className="summary">{profile.summary}</p>

              <div className="cta">
                <a className="btn primary" href="#contact">Get in touch</a>
                <a className="btn ghost" href={profile.resume} download>Download CV</a>

                <div className="social">
                  {/* LinkedIn */}
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
                  </a>

                  {/* Email (opens Gmail compose) */}
                  <a href={GMAIL(profile.email)} target="_blank" rel="noreferrer" aria-label="Email" title="Email">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  </a>

                  {/* GitHub */}
                  <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <Photo />
          </div>
        </section>

        {/* ---------- SKILLS ---------- */}
        <section id="skills" className="section">
          <div className="wrap">
            <h2>Skills</h2>
            <div className="streams">
              {skills.map((s) => (
                <SkillStream key={s.group} group={s.group} items={s.items} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- EXPERIENCE ---------- */}
        <section id="experience" className="section alt">
          <div className="wrap">
            <h2>Experience</h2>
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.org}>
                  <span className="dot" aria-hidden="true" />
                  <div className="tl-head">
                    <h3>{e.role}</h3>
                    <span className="period">{e.period}</span>
                  </div>
                  <p className="org">{e.org}, {e.place}</p>
                  {e.note && <p className="note">{e.note}</p>}
                  <ul>
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section id="projects" className="section">
          <div className="wrap">
            <h2>Projects</h2>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article className={`project ${i === 1 ? "feature" : ""}`} key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  {p.metrics.length > 0 && (
                    <div className="metrics">
                      {p.metrics.map((m) => (
                        <div key={m.l}><strong>{m.v}</strong><span>{m.l}</span></div>
                      ))}
                    </div>
                  )}
                  <ul className="chips">
                    {p.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- EDUCATION ---------- */}
        <section id="education" className="section alt">
          <div className="wrap two-col">
            <div>
              <h2>Education</h2>
              {education.map((e) => (
                <div className="edu" key={e.title}>
                  <h3>{e.title}</h3>
                  <p>{e.place}</p>
                  <span className="period">{e.period}</span>
                </div>
              ))}
            </div>
            <div>
              <h2>Certifications</h2>
              {certifications.map((c) => (
                <div className="edu" key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CONTACT / GET IN TOUCH ---------- */}
        <section id="contact" className="contact">
          <div className="wrap">
            <h2>Get in touch</h2>
            <p className="contact-sub">
              Open to entry-level AI/ML Engineer roles. Send an enquiry below, or reach me directly.
            </p>

            <div className="contact-grid">
              <ContactForm email={profile.email} />

              <div className="contact-info">
                <h3>Contact details</h3>
                <a className="mail" href={GMAIL(profile.email)} target="_blank" rel="noreferrer">
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
                <div className="links">
                  <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
                  <a href={WHATSAPP(profile.phoneHref)} target="_blank" rel="noreferrer">WhatsApp</a>
                  <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>

      <WhatsAppFloat phoneHref={profile.phoneHref} />
    </>
  );
}