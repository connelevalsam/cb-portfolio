import Head from 'next/head';
import Link from 'next/link';
import data from '../utils/data';

const featuredProjects = [
  { ...data.projects.find((project) => project.slug === 'auxillorx'), label: 'Healthcare · Mobile product' },
  { ...data.projects.find((project) => project.slug === 'aura'), label: 'Hospitality · Digital experience' },
  { ...data.projects.find((project) => project.slug === 'swiftier-app'), label: 'Fintech · Cross-border payments' },
  { ...data.projects.find((project) => project.slug === 'quickbill-app'), label: 'Payments · Mobile product' },
].filter(Boolean);

const services = [
  { number: '01', title: 'Product discovery', text: 'Get clear on the problem, the people you are solving it for, and the smallest useful product to build.' },
  { number: '02', title: 'MVP development', text: 'Turn a validated idea into a focused first release without building every feature at once.' },
  { number: '03', title: 'Product engineering', text: 'Bring the right designers and engineers together to build, launch, and improve digital products.' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>connel asikong — product, technology & engineering</title>
        <meta name="description" content="I help founders and growing businesses figure out what to build and turn business ideas into useful digital products." />
        <meta name="keywords" content="Connel Asikong, product strategy, technology strategy, MVP development, product engineering, software development" />
        <meta name="author" content="Connel Asikong" />
        <meta property="og:title" content="Connel Asikong — Turn Ideas Into Digital Products" />
        <meta property="og:description" content="Product strategy, technology, and engineering for businesses ready to build useful digital products." />
        <meta property="og:type" content="website" />
      </Head>

      <div className="personal-site">
        <header className="site-nav">
          <Link href="/" className="wordmark" aria-label="Connel Asikong home">CA<span>.</span></Link>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#work">selected work</a>
            <a href="#services">what i do</a>
            <Link href="/about">about</Link>
          </nav>
          <a className="nav-cta" href="mailto:connelblaze@gmail.com">let&apos;s talk <span>↗</span></a>
        </header>

        <main>
          <section className="hero-section" id="top">
            <div className="hero-copy">
              <div className="eyebrow"><span className="availability-dot" /> product · technology · engineering</div>
              <h1>turn ideas into <span>digital products.</span></h1>
              <p className="hero-description">i help founders and growing businesses figure out what to build, why it matters, and how to bring it to life.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">explore my work <span>↘</span></a>
                <a className="text-link" href="mailto:connelblaze@gmail.com">have a project in mind? <span>↗</span></a>
              </div>
              <div className="hero-footnote"><span>based in africa</span><span>working worldwide</span></div>
            </div>
            <div className="hero-visual">
              <div className="portrait-frame">
                <img src="/img/connel-professional.png" alt="Connel Asikong, product and technology strategist" />
                <div className="portrait-stamp"><span>think clearly.</span><span>build useful things.</span></div>
              </div>
              <div className="visual-note"><span className="note-line" /> a product-minded engineer<br />with a business-first lens.</div>
              <span className="hero-index">01 / 04</span>
            </div>
            <div className="hero-side-label">independent product & technology partner</div>
          </section>

          <section className="intro-strip" aria-label="Introduction">
            <p>good software starts before the first line of code.</p>
            <span>i bring product thinking and engineering together to solve real business problems.</span>
          </section>

          <section className="work-section section-wrap" id="work">
            <div className="section-heading">
              <div><p className="eyebrow">a few things I&apos;VE WORKED ON</p><h2>selected work<span>.</span></h2></div>
              <Link className="text-link" href="/portfolio">view all projects <span>↗</span></Link>
            </div>
            <div className="project-grid">
              {featuredProjects.map((project, index) => (
                <Link className={`project-card project-card-${index + 1}`} href={`/projects/${project.slug}`} key={project.id}>
                  <div className="project-image-wrap">
                    <img src={project.dp} alt={`${project.name} product preview`} className="project-image" />
                    <span className="project-arrow">↗</span>
                  </div>
                  <div className="project-meta"><span>{project.label}</span><span>0{index + 1}</span></div>
                  <div className="project-title-row"><h3>{project.name}</h3><span>view case study ↗</span></div>
                  <p>{project.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="services-section" id="services">
            <div className="section-wrap services-inner">
              <div className="services-heading">
                <p className="eyebrow">how i can help</p>
                <h2>from the first question to the first release.</h2>
                <p className="services-intro">you don&apos;t always need more code. sometimes you need a clearer problem, a better plan, or the right team to make the product real.</p>
                <a className="button button-light" href="mailto:connelblaze@gmail.com">talk through your idea <span>↗</span></a>
              </div>
              <div className="service-list">
                {services.map((service) => (
                  <article className="service-row" key={service.number}>
                    <span className="service-number">{service.number}</span>
                    <div><h3>{service.title}</h3><p>{service.text}</p></div>
                    <span className="service-symbol">↗</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="about-teaser section-wrap">
            <div className="about-mark">CA<span>.</span></div>
            <div className="about-teaser-copy"><p className="eyebrow">a little about me</p><h2>engineering taught me how to build. working with businesses taught me what to build.</h2><p>i&apos;m connel — a software engineer, founder, and product builder. Over the years, i&apos;ve worked across fintech, healthcare, hospitality, education, and other industries, helping teams turn ideas into shipped products.</p><Link className="text-link" href="/about">more about my approach <span>↗</span></Link></div>
          </section>

          <section className="closing-cta">
            <p className="eyebrow">have a product in mind?</p>
            <h2>let&apos;s make the next<br />step a useful one.</h2>
            <a className="button button-light" href="mailto:connelblaze@gmail.com">start a conversation <span>↗</span></a>
          </section>
        </main>

        <footer className="site-footer">
          <Link href="/" className="wordmark">CA<span>.</span></Link>
          <p>product thinking. thoughtful engineering. useful outcomes.</p>
          <div><a href="https://www.linkedin.com/in/connel-asikong-00016181/" target="_blank" rel="noreferrer">linkedIn ↗</a><a href="https://x.com/ConnelBlaze" target="_blank" rel="noreferrer">X ↗</a><a href="mailto:connelblaze@gmail.com">email ↗</a></div>
          <span className="copyright">© {new Date().getFullYear()} connel asikong</span>
        </footer>
      </div>
    </>
  );
}
