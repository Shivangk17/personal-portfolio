import { useState } from "react";
import { profile, items, experience, education, skills } from "./data";

export default function App() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <div className="page">
      <a className="skip" href="#projects">Skip to content</a>

      <header className="bar">
        <a className="brand" href="#top">{profile.name}</a>
        <nav aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro">
          <div className="intro-text">
            {profile.bio.map((p) => <p key={p}>{p}</p>)}
          </div>
          {/* Put your photo at public/me.jpg and it shows up here automatically. */}
          {photoOk ? (
            <img className="photo" src="/me.png" alt={profile.name} onError={() => setPhotoOk(false)} />
          ) : (
            <div className="photo" aria-hidden="true">{profile.initials}</div>
          )}
        </section>

        <section id="projects" aria-labelledby="projects-h">
          <div className="section-head">
            <h2 id="projects-h">Latest</h2>
            <p className="note">Projects and systems I've built</p>
          </div>
          <ul className="timeline">
            {items.map((item) => (
              <li key={item.title}>
                <div className="line1">
                  <span className="title">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">{item.title} ↗</a>
                    ) : item.title}
                  </span>
                  <span className="date">{item.date}</span>
                </div>
                <div className="type">{item.type}</div>
                <p className="blurb">{item.blurb}</p>
                {item.stack && <p className="stack">{item.stack}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" aria-labelledby="exp-h">
          <div className="section-head"><h2 id="exp-h">Experience</h2></div>
          <ul className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.period}>
                <div className="line1">
                  <span className="title">{e.role}, {e.company}</span>
                  <span className="date">{e.period}</span>
                </div>
                {e.points.map((p) => <p className="blurb" key={p}>{p}</p>)}
              </li>
            ))}
            <li>
              <div className="line1">
                <span className="title">{education.degree}</span>
                <span className="date">{education.period}</span>
              </div>
              <p className="blurb">{education.school}. {education.note}.</p>
            </li>
          </ul>
        </section>

        <section id="about" aria-labelledby="about-h">
          <div className="section-head"><h2 id="about-h">Skills</h2></div>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}><dt>{s.group}</dt><dd>{s.list}</dd></div>
            ))}
          </dl>
        </section>

        <section id="contact" aria-labelledby="contact-h">
          <div className="section-head"><h2 id="contact-h">Contact</h2></div>
          <p>Email <a href={`mailto:${profile.email}`}>{profile.email}</a> for projects or collaboration.</p>
        </section>
      </main>

      <footer>
        {profile.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
        ))}
      </footer>
    </div>
  );
}