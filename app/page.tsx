import Image from "next/image";
import { experiences } from "./content";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.98 10.98 0 0 1 12 6.13c.98 0 1.95.13 2.87.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.38-5.29 5.67.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="shell hero__content">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>Tiago Eira</h1>
          <p className="hero__role">Senior Software Developer &amp; Tech Lead</p>
          <a className="button button--outline" href="#about">
            Know more
          </a>
        </div>
        <a className="hero__scroll" href="#about" aria-label="Scroll to About">
          <ArrowIcon />
        </a>
      </section>

      <section className="about section" id="about">
        <div className="shell">
          <p className="section-label section-label--light">Profile</p>
          <h2>About me</h2>
          <div className="about__grid-rev">
            <div className="about__copy">
              <p>
                I&apos;m a senior software developer & tech lead based in Lisbon, Portugal,
                specialised in web applications. I bring a problem-solving mindset and a strong
                focus on delivering the right product for each customer.
              </p>
              <p>I love challenges, thoughtful engineering, and learning new things.</p>
              <p className="about__closing">We have to stay curious, don&apos;t we?</p>
              <a className="text-link text-link--light" href="#experience">
                See my career experience
              </a>
            </div>

            <div className="portrait-wrap">
              <Image
                className="portrait"
                src="/images/profile.jpg"
                alt="Portrait of Tiago Eira"
                width={520}
                height={520}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="shell">
          <p className="section-label">Career</p>
          <h2>Experience</h2>
          <p className="section-intro">
            More than a decade building web products, leading teams, and turning complex
            requirements into maintainable software.
          </p>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="role" key={`${experience.company}-${experience.period}`}>
                <div className="role__marker" aria-hidden="true"></div>
                <div className="role__identity">
                  <div className="role__logo">
                    {experience.logo ? (
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={180}
                        height={72}
                      />
                    ) : (
                      <span>{experience.company.slice(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                  <p>{experience.period}</p>
                </div>
                <div className="role__details">
                  <h3>{experience.company}</h3>
                  <ul className="chips" aria-label="Technologies">
                    {experience.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <ul className="highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact__inner">
          <p className="section-label section-label--light">Contact</p>
          <h2>Interested in working together?</h2>
          <p>Let&apos;s talk about the product and how I can help.</p>
          <a className="button button--light" href="mailto:tiago.eira@gmail.com">
            Let&apos;s talk
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer__inner">
          <a className="footer__top" href="#top" aria-label="Back to top">
            <ArrowIcon />
          </a>
          <a
            className="footer__github"
            href="https://github.com/sbsmnt"
            target="_blank"
            rel="noreferrer"
            aria-label="Tiago Eira on GitHub"
          >
            <GitHubIcon />
          </a>
          <p>© {new Date().getFullYear()} Tiago Eira</p>
        </div>
      </footer>
    </main>
  );
}
