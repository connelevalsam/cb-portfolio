import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import blogsData from '../../utils/blogs';
import styles from '../../styles/blog.module.css';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <Link href="/blogs" className="text-orange-500 underline">
            Back to all blogs
          </Link>
        </div>
      </Layout>
    );
  }

  if (!post.published) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
          <p className="text-gray-300 mb-8">{post.title}</p>
          <Link href="/blogs" className="text-orange-500 underline">
            Back to all blogs
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Connelblaze - Connel Asikong Portfolio</title>
        <meta name="description" content={post.description} />
        <meta name="author" content="Connel Asikong" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Nunito:wght@400;600;700;800;900&family=Kalam:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ width: `${scrollProgress}%`, height: '3px', background: slug === 'ai-fluency-part-1' ? 'linear-gradient(90deg, #e63946, #ffd60a)' : 'linear-gradient(90deg, #2dd4bf, #7b2fbe)', position: 'fixed', top: 0, left: 0, zIndex: 999, transition: 'width 0.1s' }}></div>

      <div
        style={{
          backgroundColor: '#0a0e1a',
          color: '#fef9ef',
          fontFamily: "'Nunito', sans-serif",
          fontSize: '18px',
          lineHeight: '1.8',
          overflowX: 'hidden',
        }}
      >
        {slug === 'ai-fluency-part-1' && <AiFluencyPart1 post={post} />}
        {slug === 'ai-fluency-part-2' && <AiFluencyPart2 post={post} />}
      </div>
    </>
  );
};

const AiFluencyPart1 = ({ post }) => {
  return (
    <div>
      {/* HERO */}
      <header className={styles.hero}>
        <div style={{ width: '320px', height: '320px' }} className={styles.bubble}></div>
        <div style={{ width: '200px', height: '200px' }} className={styles.bubble}></div>
        <div style={{ width: '150px', height: '150px' }} className={styles.bubble}></div>

        <p className={styles.heroEyebrow}>⚓ A blog series by a proud One Piece fan ⚓</p>
        <div className={styles.heroSeries}>📖 SERIES &nbsp;·&nbsp; {post.series}</div>

        <h1 className={styles.heroTitle}>
          <span className={styles.line1}>So You Want to</span>
          <span className={styles.line2}>Sail the AI</span>
          <span className={styles.line3}>Grand Line?</span>
        </h1>

        <p className={styles.heroSub}>{post.description}</p>

        <div className={styles.heroMeta}>
          <div className={styles.metaPill}>
            <div className={styles.metaDot} style={{ background: '#e63946' }}></div>
            {post.tag} Fluency
          </div>
          <div className={styles.metaPill}>
            <div className={styles.metaDot} style={{ background: '#ffd60a' }}></div>
            {post.readTime} read
          </div>
          <div className={styles.metaPill}>
            <div className={styles.metaDot} style={{ background: '#00d4e8' }}></div>
            The 4D Framework
          </div>
        </div>
      </header>

      <div className={styles.scrollHint}>↓ &nbsp; SET SAIL &nbsp; ↓</div>

      {/* CONTENT */}
      <main className={styles.container}>
        <div className="mb-6">
          <Link href="/portfolio" className="text-orange-500 underline">
            ← Back to Portfolio
          </Link>
        </div>
        <div className={styles.chapterTag}>⚓ PROLOGUE</div>

        <p className={styles.prose}>
          I'll be honest with you — I'm a huge One Piece fan. Always have been. There's something deeply human about Luffy's crew: a ragtag group of wildly different people, each contributing a unique skill, working together to navigate the impossible. No single crew member can do it alone. The cook can't navigate. The navigator can't fight. The doctor can't cook (well, Chopper tries). But together? They make it to the Grand Line and beyond.
        </p>

        <p className={styles.prose}>
          AI and humans working together feels a lot like that to me. And just like you wouldn't send your crew into Calm Belt territory without understanding how Sea Kings behave — you shouldn't be navigating the world of AI without knowing what you're working with.
        </p>

        <p className={styles.prose}>
          That's what AI Fluency is about. Not replacing you with a robot. Not being afraid of the robot either. It's about becoming the kind of person who can actually <em>sail with the robot.</em>
        </p>

        <div className={styles.opCallout}>
          <div className={styles.opLabel}>☠️ AUTHOR'S LOG</div>
          <p>"In One Piece, the most dangerous seas aren't the ones with the most monsters — they're the ones sailors enter without preparation. AI is the same. The Grand Line of technology is open to everyone. But only those who understand it will thrive." — Me, a Straw Hat enthusiast</p>
        </div>

        <div className={styles.divider}>⚓</div>

        {/* WHAT IS AI FLUENCY */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(0,212,232,0.15)', border: '1px solid rgba(0,212,232,0.3)' }}>
            🧭
          </div>
          <div className={styles.markerText} style={{ color: '#00d4e8' }}>
            WHAT IS AI FLUENCY?
          </div>
        </div>

        <p className={styles.prose}>
          Let's start at the beginning. <strong style={{ color: '#fef9ef' }}>AI Fluency</strong> is the ability to collaborate with AI in ways that are effective, efficient, ethical, and safe. Not just knowing what AI is. Not just using a chatbot occasionally. <em>Actually collaborating</em> — like you'd collaborate with a crewmate who has very specific superpowers and very specific blind spots.
        </p>

        <p className={styles.prose}>
          Think about Nami. She doesn't just hold a map. She understands weather, ocean currents, risk, timing. She's fluent in navigation. AI Fluency is that same depth of understanding — applied to working with artificial intelligence.
        </p>

        <div className={styles.pullQuote}>
          "AI Fluency isn't about knowing everything AI can do. It's about knowing how to work <em>with</em> it, not just <em>at</em> it."
        </div>

        <p className={styles.prose}>
          The goal isn't to become a software engineer or an AI researcher. It's to develop <strong style={{ color: '#fef9ef' }}>lasting, transferable skills</strong> that stay relevant even as the tools change — because they will change, constantly. Luffy's crew didn't train for one specific island. They trained to handle anything the Grand Line throws at them.
        </p>

        {/* THE 4 E'S */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(255,214,10,0.15)', border: '1px solid rgba(255,214,10,0.3)' }}>
            ⚡
          </div>
          <div className={styles.markerText} style={{ color: '#ffd60a' }}>
            THE FOUR PILLARS
          </div>
        </div>

        <p className={styles.prose}>
          When we say "effective, efficient, ethical, and safe," we don't mean those as buzzwords. They mean something specific here. Think of them as the four winds that should be at your back whenever you're working with AI:
        </p>

        <div className={styles.fourE}>
          <div className={styles.eCard}>
            <div className={styles.eLetter}>E</div>
            <div className={styles.eWord}>Effective</div>
            <p>
              Getting the <em>right</em> results. AI outputs actually solve your problem. You know when AI helps — and when it doesn't. The right tool for the right task.
            </p>
          </div>
          <div className={styles.eCard}>
            <div className={styles.eLetter}>E</div>
            <div className={styles.eWord}>Efficient</div>
            <p>
              Getting results <em>faster and smarter</em>. AI saves meaningful time. You invest saved time into higher-value thinking. No wasted prompts, no trial-and-error spirals.
            </p>
          </div>
          <div className={styles.eCard}>
            <div className={styles.eLetter}>E</div>
            <div className={styles.eWord}>Ethical</div>
            <p>
              Acting with <em>integrity</em>. You're transparent when AI creates content. You guard against bias. You consider the wider impact of what you produce.
            </p>
          </div>
          <div className={styles.eCard}>
            <div className={styles.eLetter}>E</div>
            <div className={styles.eWord}>Safe</div>
            <p>
              <em>Protecting</em> people and information. Sensitive data stays out of public AI tools. Human oversight is always maintained. Errors get caught before they cause harm.
            </p>
          </div>
        </div>

        <div className={styles.divider}>⚓</div>

        {/* THE 4D FRAMEWORK */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(230,57,70,0.15)', border: '1px solid rgba(230,57,70,0.3)' }}>
            🗡️
          </div>
          <div className={styles.markerText} style={{ color: '#e63946' }}>
            THE 4D FRAMEWORK
          </div>
        </div>

        <p className={styles.prose}>
          So how do you actually <em>become</em> AI fluent? This is where the <strong style={{ color: '#fef9ef' }}>4D Framework</strong> comes in. Four interconnected competencies — each one a different kind of skill, each one essential. Miss any of them and you'll end up lost at sea.
        </p>

        <p className={styles.prose}>
          Think of the four D's as the core abilities of a truly fluent AI collaborator — like Devil Fruit powers, except these ones don't stop you from swimming:
        </p>

        <div className={styles.dGrid}>
          <div className={`${styles.dCard} ${styles.d1}`}>
            <div className={styles.dCardHeader}>
              <div className={styles.dBadge}>D1</div>
              <div>
                <div className={styles.dCardSub}>First Competency</div>
                <div className={styles.dCardTitle}>Delegation</div>
              </div>
            </div>
            <p>
              <strong style={{ color: '#fef9ef' }}>Thoughtfully deciding what work to give to AI — and what to keep for yourself.</strong> This isn't about laziness; it's about strategy. The best Straw Hats know when to step back and let a crewmate shine, and when the captain needs to step up.
            </p>
            <p>Delegation asks you to answer three questions:</p>
            <ul className={styles.dBullets}>
              <li>Understand your goal and the problem you're actually trying to solve</li>
              <li>Know what AI systems can and cannot do well</li>
              <li>Decide how to divide the work between you and the AI</li>
            </ul>
          </div>

          <div className={`${styles.dCard} ${styles.d2}`}>
            <div className={styles.dCardHeader}>
              <div className={styles.dBadge}>D2</div>
              <div>
                <div className={styles.dCardSub}>Second Competency</div>
                <div className={styles.dCardTitle}>Description</div>
              </div>
            </div>
            <p>
              <strong style={{ color: '#fef9ef' }}>Communicating clearly with AI systems — the art of prompting.</strong> If Delegation is knowing <em>when</em> to send a crewmate on a mission, Description is how you brief them. Vague instructions get vague results. Precise instructions? That's when AI starts to sing.
            </p>
            <p>Description covers three dimensions of communication:</p>
            <ul className={styles.dBullets}>
              <li>What you want the final output to be — the destination</li>
              <li>How you want the AI to approach the task — the route</li>
              <li>How you want the AI to behave — the crew code</li>
            </ul>
          </div>

          <div className={`${styles.dCard} ${styles.d3}`}>
            <div className={styles.dCardHeader}>
              <div className={styles.dBadge}>D3</div>
              <div>
                <div className={styles.dCardSub}>Third Competency</div>
                <div className={styles.dCardTitle}>Discernment</div>
              </div>
            </div>
            <p>
              <strong style={{ color: '#fef9ef' }}>Evaluating AI outputs and behaviour with a critical eye.</strong> AI can be wrong — confidently wrong. Discernment is the Usopp on the lookout tower, catching what everyone else misses. It's the skill of questioning, not just accepting.
            </p>
            <p>Every AI output deserves three questions:</p>
            <ul className={styles.dBullets}>
              <li>Is the output actually useful and correct?</li>
              <li>Is the AI taking the right approach to my problem?</li>
              <li>Is the AI behaving in the way I actually wanted?</li>
            </ul>
          </div>

          <div className={`${styles.dCard} ${styles.d4}`}>
            <div className={styles.dCardHeader}>
              <div className={styles.dBadge}>D4</div>
              <div>
                <div className={styles.dCardSub}>Fourth Competency</div>
                <div className={styles.dCardTitle}>Diligence</div>
              </div>
            </div>
            <p>
              <strong style={{ color: '#fef9ef' }}>Ensuring you interact with AI responsibly, transparently, and accountably.</strong> This is the Robin in the crew — the keeper of history, ethics, and consequences. When AI creates something, <em>you</em> are still responsible for it. Diligence keeps you from becoming the villain of your own story.
            </p>
            <p>Diligence operates on three levels:</p>
            <ul className={styles.dBullets}>
              <li>Ensuring accuracy and taking full responsibility for outputs</li>
              <li>Honesty and transparency about AI's role in your work</li>
              <li>Ethical use and critical awareness of AI's societal impact</li>
            </ul>
          </div>
        </div>

        <div className={styles.opCallout}>
          <div className={styles.opLabel}>☠️ AUTHOR'S LOG</div>
          <p>
            "Luffy's crew works because every member knows their role, communicates clearly, questions what seems off, and holds each other accountable. Sound familiar? The 4D Framework is basically the Straw Hat crew manual — except for your AI collaboration." — Still me, still a fan
          </p>
        </div>

        <div className={styles.divider}>⚓</div>

        {/* WHY THIS MATTERS */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(244,162,97,0.15)', border: '1px solid rgba(244,162,97,0.3)' }}>
            🏴‍☠️
          </div>
          <div className={styles.markerText} style={{ color: '#f4a261' }}>
            WHY THIS MATTERS NOW
          </div>
        </div>

        <p className={styles.prose}>
          Here's the thing about AI — it's not the future anymore. It's 2026. People are already using it to write, to code, to analyse, to design, to decide. The question isn't whether AI will touch your work. The question is whether you'll be steering the ship or just along for the ride.
        </p>

        <p className={styles.prose}>
          AI Fluency isn't a one-time skill you learn and forget. Like navigation on the Grand Line, the sea keeps changing. New islands appear. New weather systems form. The crew that <em>adapts together</em> survives. The 4D Framework is designed to be that kind of adaptable — grounded in human principles that won't become obsolete when the next model drops.
        </p>

        <div className={styles.infoBox}>
          <div className={styles.infoTitle} style={{ color: '#00d4e8' }}>
            🧭 THE CORE INSIGHT
          </div>
          <p>
            Effective AI collaboration requires both <strong style={{ color: '#fef9ef' }}>practical skills</strong> (how to prompt, how to check, how to decide) <em>and</em> a <strong style={{ color: '#fef9ef' }}>fundamental mindset shift</strong> — from seeing AI as a magic answer machine, to seeing it as a capable but imperfect crewmate who needs clear direction and constant oversight.
          </p>
        </div>

        {/* NEXT UP */}
        <div className={styles.nextUp}>
          <h3 className={styles.nextUpHeading}>⚓ COMING UP NEXT</h3>
          <h2 className={styles.nextUpTitle}>PART TWO: WHAT IS THE AI POWERING ALL OF THIS?</h2>
          <p className={styles.nextUpText}>
            In Part 2, we crack open the engine room: what Generative AI actually is, how Large Language Models work, what makes them so powerful — and what their very real limitations are.
          </p>
          <Link href="/blogs/ai-fluency-part-2" className={styles.ctaBtn}>
            READ PART 2 →
          </Link>
        </div>

        {/* FOOTER */}
        <footer className={styles.postFooter}>
          <div className={styles.authorCard}>
            <div className={styles.authorAvatar}>🏴‍☠️</div>
            <div>
              <div className={styles.authorName}>Written by a One Piece Fan Who Thinks About AI Too Much</div>
              <div className={styles.authorBio}>
                AI Fluency advocate · Educator · Straw Hat crew member in spirit · Believes every good idea deserves a good analogy.
              </div>
            </div>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>#AIFluency</span>
            <span className={styles.tag}>#4DFramework</span>
            <span className={styles.tag}>#Delegation</span>
            <span className={styles.tag}>#Description</span>
            <span className={styles.tag}>#Discernment</span>
            <span className={styles.tag}>#Diligence</span>
            <span className={styles.tag}>#OnePiece</span>
            <span className={styles.tag}>#HumanAICollaboration</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

const AiFluencyPart2 = ({ post }) => {
  return (
    <div>
      {/* HERO */}
      <header className={styles.hero}>
        <div style={{ width: '300px', height: '300px' }} className={styles.bubble}></div>
        <div style={{ width: '180px', height: '180px' }} className={styles.bubble}></div>
        <div style={{ width: '220px', height: '220px' }} className={styles.bubble}></div>

        <p className={styles.heroEyebrow}>⚓ A blog series by a proud One Piece fan ⚓</p>
        <div className={styles.heroSeries} style={{ background: 'rgba(45,212,191,0.12)', borderColor: 'rgba(45,212,191,0.35)', color: '#2dd4bf' }}>
          📖 SERIES &nbsp;·&nbsp; {post.series}
        </div>

        <h1 className={styles.heroTitle}>
          <span style={{ color: '#fef9ef' }}>What's Actually Inside</span>
          <span style={{ color: '#2dd4bf', textShadow: '0 0 40px rgba(45,212,191,0.35)' }}>the Engine Room?</span>
          <span style={{ color: '#ffd60a' }}>Generative AI, Explained.</span>
        </h1>

        <p className={styles.heroSub}>{post.description}</p>

        <div className={styles.heroMeta}>
          <div className={styles.metaPill}>
            <div className={styles.metaDot} style={{ background: '#2dd4bf' }}></div>
            Generative AI
          </div>
          <div className={styles.metaPill}>
            <div className={styles.metaDot} style={{ background: '#ffd60a' }}></div>
            {post.readTime} read
          </div>
          <div className={styles.metaPill}>
            <div className={styles.metaDot} style={{ background: '#7b2fbe' }}></div>
            LLMs & Capabilities
          </div>
        </div>
      </header>

      <div className={styles.scrollHint}>↓ &nbsp; INTO THE ENGINE ROOM &nbsp; ↓</div>

      {/* CONTENT */}
      <main className={styles.container}>
        <div className="mb-6">
          <Link href="/portfolio" className="text-orange-500 underline">
            ← Back to Portfolio
          </Link>
        </div>
        <Link href="/blogs/ai-fluency-part-1" className={styles.backLink}>
          ← Back to Part 1
        </Link>

        <div className={styles.chapterTag} style={{ background: 'rgba(45,212,191,0.10)', borderColor: 'rgba(45,212,191,0.3)', color: '#2dd4bf' }}>
          ⚓ PREVIOUSLY, ON AI FLUENCY...
        </div>

        <p className={styles.prose}>
          In Part 1, we set sail with the 4D Framework — Delegation, Description, Discernment, and Diligence — the four competencies that define what it means to be truly AI fluent. We talked about <em>how</em> to work with AI.
        </p>

        <p className={styles.prose}>
          Now, in Part 2, we open the engine room hatch. Because understanding <em>how to collaborate</em> with something means understanding <em>what that something actually is</em>. You wouldn't sail a ship you didn't understand, right? Well, Franky builds his own. And while we don't all need to be Frankys — we do need to know what's powering the vessel.
        </p>

        <div className={styles.opCallout}>
          <div className={styles.opLabel}>☠️ AUTHOR'S LOG</div>
          <p>
            "In One Piece, the Thousand Sunny runs on Coup de Burst and Adam Wood and whatever brilliant nonsense Franky engineered into it. You don't need to understand every bolt — but you do need to know it can't fly (well, usually). AI is exactly the same. Know what it's built on, know what it can't do." — Me again, still wearing a straw hat
          </p>
        </div>

        <div className={styles.divider}>⚙️</div>

        {/* WHAT IS GENERATIVE AI */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(45,212,191,0.15)', border: '1px solid rgba(45,212,191,0.3)' }}>
            🤖
          </div>
          <div className={styles.markerText} style={{ color: '#2dd4bf' }}>
            WHAT IS GENERATIVE AI?
          </div>
        </div>

        <p className={styles.prose}>
          Let's make a distinction that matters a lot. Most AI you've heard of — spam filters, recommendation engines, fraud detection — is <strong style={{ color: '#fef9ef' }}>traditional AI</strong>. It looks at existing data and classifies, categorizes, or predicts based on patterns it has learned. It analyses and decides.
        </p>

        <p className={styles.prose}>
          <strong style={{ color: '#fef9ef' }}>Generative AI</strong> is fundamentally different. It doesn't just analyse existing content — it <em>creates something new that didn't exist before</em>. A new paragraph. A new image. A new piece of code. A new musical composition. Given a prompt, it generates.
        </p>

        <div className={styles.infoBox}>
          <div className={styles.infoTitle} style={{ color: '#2dd4bf' }}>
            ⚙️ THE KEY DISTINCTION
          </div>
          <p>
            <strong style={{ color: '#fef9ef' }}>Traditional AI:</strong> "Is this email spam or not spam?" → Analyses and classifies existing content.
            <br />
            <br />
            <strong style={{ color: '#fef9ef' }}>Generative AI:</strong> "Write me a professional email declining this meeting." → Creates new content that did not exist before the prompt.
          </p>
        </div>

        <p className={styles.prose}>
          At the heart of most modern Generative AI are <strong style={{ color: '#fef9ef' }}>Large Language Models (LLMs)</strong>. The name tells you everything:
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', margin: '28px 0' }}>
          <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', color: '#c8d4e0', fontSize: '1.05rem' }}>
            <span style={{ color: '#2dd4bf', fontSize: '1.4rem', flexShrink: 0, lineHeight: 1.2 }}>⚡</span>
            <span><strong style={{ color: '#fef9ef' }}>Language:</strong> They're trained to predict and generate human language — text in, text out. Though modern ones now also handle images, audio, and video.</span>
          </li>
          <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', color: '#c8d4e0', fontSize: '1.05rem' }}>
            <span style={{ color: '#ffd60a', fontSize: '1.4rem', flexShrink: 0, lineHeight: 1.2 }}>⚡</span>
            <span><strong style={{ color: '#fef9ef' }}>Large:</strong> They contain billions — sometimes trillions — of parameters. Mathematical weights that encode patterns, knowledge, and relationships learned from vast amounts of text.</span>
          </li>
          <li style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', color: '#c8d4e0', fontSize: '1.05rem' }}>
            <span style={{ color: '#b57bee', fontSize: '1.4rem', flexShrink: 0, lineHeight: 1.2 }}>⚡</span>
            <span><strong style={{ color: '#fef9ef' }}>Model:</strong> A mathematical system — trained, tuned, and deployed — not a person, not a database, not a search engine.</span>
          </li>
        </ul>

        <div className={styles.pullQuote} style={{ color: '#2dd4bf', background: 'rgba(45,212,191,0.05)', borderTop: '1px solid rgba(45,212,191,0.2)', borderBottom: '1px solid rgba(45,212,191,0.2)' }}>
          "An LLM doesn't know things the way you know things. It knows patterns — vast, extraordinarily complex patterns, in human language."
        </div>

        <div className={styles.divider}>⚙️</div>

        {/* THREE PILLARS */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(255,214,10,0.15)', border: '1px solid rgba(255,214,10,0.3)' }}>
            🏗️
          </div>
          <div className={styles.markerText} style={{ color: '#ffd60a' }}>
            THREE PILLARS THAT MADE IT POSSIBLE
          </div>
        </div>

        <p className={styles.prose}>
          You might wonder: why now? AI as a concept has existed for decades. What changed? The answer is three things coming together at the right moment — like the Devil Fruit, the sea, and the will to fight all converging on one person to make a legendary pirate.
        </p>

        <div className={styles.pillarsGrid}>
          <div className={`${styles.pillarCard} ${styles.pillar1}`}>
            <div className={styles.pillarIcon}>🧠</div>
            <div className={styles.pillarName}>Algorithms</div>
            <ul className={styles.pillarItems}>
              <li>Neural networks that mimic the brain's connected structure</li>
              <li>Transformers: the architecture that changed everything (2017)</li>
              <li>Attention mechanisms that let models weigh context</li>
            </ul>
          </div>
          <div className={`${styles.pillarCard} ${styles.pillar2}`}>
            <div className={styles.pillarIcon}>📚</div>
            <div className={styles.pillarName}>Data</div>
            <ul className={styles.pillarItems}>
              <li>Articles, books, websites — the full breadth of human writing</li>
              <li>Code repositories from millions of developers</li>
              <li>Multimodal content: images, audio, video, documents</li>
            </ul>
          </div>
          <div className={`${styles.pillarCard} ${styles.pillar3}`}>
            <div className={styles.pillarIcon}>⚡</div>
            <div className={styles.pillarName}>Computation</div>
            <ul className={styles.pillarItems}>
              <li>GPUs and TPUs — chips built for massively parallel math</li>
              <li>Computing clusters with thousands of processors working together</li>
              <li>Cloud infrastructure that scaled training beyond what was imaginable</li>
            </ul>
          </div>
        </div>

        <p className={styles.prose}>
          Remove any one of these and the revolution stalls. Better algorithms without enough data give you a clever-but-ignorant model. Vast data without the right algorithms gives you noise. Both without the compute to train them gives you… an expensive idea. All three together? You get GPT, Gemini, Claude, and the rest of the fleet.
        </p>

        <div className={styles.opCallout}>
          <div className={styles.opLabel}>☠️ AUTHOR'S LOG</div>
          <p>
            "Luffy needed the Gum-Gum Fruit (the algorithm), years of training under Garp and Shanks (the data), and his own ridiculous willpower to push through (the compute). One Piece told us about the three pillars of AI years before the AI industry did." — Me, really reaching for this analogy, no regrets
          </p>
        </div>

        <div className={styles.divider}>⚙️</div>

        {/* WHAT MAKES IT POWERFUL */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(123,47,190,0.15)', border: '1px solid rgba(123,47,190,0.3)' }}>
            💥
          </div>
          <div className={styles.markerText} style={{ color: '#b57bee' }}>
            WHAT MAKES GENAI SO POWERFUL
          </div>
        </div>

        <p className={styles.prose}>
          We've established what Generative AI is and what it's built on. Now, why is everyone so excited? What makes it genuinely different from tools we've had before? Three things stand out.
        </p>

        <div className={styles.capabilityGrid}>
          <div className={styles.capCard}>
            <div className={styles.capNum}>01</div>
            <div className={styles.capTitle}>Processing Vast Information During Training</div>
            <p>
              LLMs train on more text than any human could read in thousands of lifetimes. In doing so, they learn extraordinarily complex patterns — not just grammar, but reasoning structures, domain knowledge, writing styles, logical flows, and cultural references. The breadth of what they've absorbed is genuinely unprecedented.
            </p>
          </div>
          <div className={styles.capCard}>
            <div className={styles.capNum}>02</div>
            <div className={styles.capTitle}>In-Context Learning</div>
            <p>
              Here's what's remarkable: you don't need to retrain an LLM to teach it a new task. You just show it examples in your prompt. Provide a few examples of the format you want, and it adapts on the fly. This "few-shot" capability makes LLMs extraordinarily flexible tools — the same model can write poetry, debug code, or explain quantum physics, based purely on how you prompt it.
            </p>
          </div>
          <div className={styles.capCard}>
            <div className={styles.capNum}>03</div>
            <div className={styles.capTitle}>Emergent Capabilities from Scale</div>
            <p>
              This is perhaps the most surprising feature: as models get larger, they start doing things no one explicitly programmed them to do. Arithmetic. Logic puzzles. Multi-step reasoning. These "emergent capabilities" appear almost magically once a model crosses certain scale thresholds. Researchers didn't teach the model to do these things — they simply... appeared.
            </p>
          </div>
          <div className={styles.capCard} style={{ background: 'linear-gradient(135deg, rgba(45,212,191,0.08), rgba(123,47,190,0.08))', borderColor: 'rgba(45,212,191,0.2)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</div>
            <div className={styles.capTitle} style={{ color: '#2dd4bf' }}>
              The Human + AI Advantage
            </div>
            <p>
              The real power isn't AI alone — it's AI doing what AI does best, combined with humans doing what humans do best. That's the whole point of the 4D Framework: orchestrating that combination wisely.
            </p>
          </div>
        </div>

        <div className={styles.divider}>⚙️</div>

        {/* HUMAN VS AI */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(255,214,10,0.15)', border: '1px solid rgba(255,214,10,0.3)' }}>
            ⚖️
          </div>
          <div className={styles.markerText} style={{ color: '#ffd60a' }}>
            HUMAN & AI — BETTER TOGETHER
          </div>
        </div>

        <p className={styles.prose}>
          If AI is so powerful, why do we need humans at all? (A question that has caused unnecessary dread for years.) Here's the honest answer: because humans and AI are good at completely different things. The goal isn't competition, it's complementarity.
        </p>

        <div className={styles.comparison}>
          <div className={styles.compCol}>
            <div className={styles.compHeader}>🧠 HUMANS PROVIDE</div>
            <div className={styles.compItems}>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Critical thinking and judgment
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Creativity and original vision
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Ethical reasoning and values
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Accountability and responsibility
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Emotional intelligence and empathy
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Real-world context and lived experience
              </div>
            </div>
          </div>
          <div className={styles.compCol}>
            <div className={styles.compHeader}>🤖 AI PROVIDES</div>
            <div className={styles.compItems}>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Speed at scale, vast output, instantly
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Pattern recognition across huge datasets
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Consistent processing without fatigue
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Broad knowledge synthesis
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Near-infinite task variation
              </div>
              <div className={styles.compItem}>
                <div className={styles.compDot}></div>
                Memory of everything it was trained on
              </div>
            </div>
          </div>
        </div>

        <p className={styles.prose}>
          The crew that wins isn't the one that replaces crew members with robots. It's the one where every crew member, human and AI, is deployed at their strengths. This is delegation in action. This is the whole point.
        </p>

        <div className={styles.divider}>⚙️</div>

        {/* LIMITATIONS */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(230,57,70,0.15)', border: '1px solid rgba(230,57,70,0.3)' }}>
            ⚠️
          </div>
          <div className={styles.markerText} style={{ color: '#e63946' }}>
            THE REAL LIMITATIONS — KNOW THESE
          </div>
        </div>

        <p className={styles.prose}>
          Here's where AI Fluency earns its keep. The power of Generative AI is real — but so are its limitations. A crew that doesn't know their ship's weaknesses will hit rocks. These aren't speculative edge cases. These are everyday realities that your Discernment and Diligence skills exist to handle.
        </p>

        <div className={styles.limitList}>
          <div className={styles.limitItem}>
            <div className={styles.limitNum}>01</div>
            <div>
              <div className={styles.limitTitle}>Knowledge Cutoff Date</div>
              <p>
                Every LLM was trained on data up to a specific date. Beyond that cutoff, the model has no knowledge of what happened in the world. Ask it about a news event from last week and it may either refuse, make something up, or confidently give you outdated information. It's not lying, it simply doesn't know. Always verify anything time-sensitive with current sources.
              </p>
            </div>
          </div>

          <div className={styles.limitItem}>
            <div className={styles.limitNum}>02</div>
            <div>
              <div className={styles.limitTitle}>Incorrect Information — Sometimes Confidently Delivered</div>
              <p>
                LLMs can produce information that is wrong. Not occasionally, regularly, especially on specific facts, figures, dates, and niche topics. The dangerous part? They deliver incorrect information in exactly the same confident, fluent tone as correct information. There's no stutter, no asterisk, no "actually I'm not sure about this." Your critical eye is the only safeguard.
              </p>
            </div>
          </div>

          <div className={styles.limitItem}>
            <div className={styles.limitNum}>03</div>
            <div>
              <div className={styles.limitTitle}>Hallucinations — Fabricated Facts</div>
              <p>
                This is the colourful term for when AI generates something that is entirely made up, a fake research paper citation, a non-existent law, a person who doesn't exist, a historical event that never happened. Hallucinations are a known and unsolved fundamental property of how LLMs work. The model is completing a pattern, not retrieving a fact. Always verify claims that matter.
              </p>
            </div>
          </div>

          <div className={styles.limitItem}>
            <div className={styles.limitNum}>04</div>
            <div>
              <div className={styles.limitTitle}>Context Window — The Memory Limit</div>
              <p>
                Every LLM has a maximum amount of information it can process in a single interaction, this is the context window. Think of it as working memory. If your conversation, documents, or instructions exceed this limit, the AI won't be able to "remember" or consider information that falls outside the window. It's not ignoring you, it literally cannot see that text anymore. For long tasks, break them into chunks and be strategic about what you include.
              </p>
            </div>
          </div>

          <div className={styles.limitItem}>
            <div className={styles.limitNum}>05</div>
            <div>
              <div className={styles.limitTitle}>Non-Deterministic Output — It Changes Every Time</div>
              <p>
                Ask the same question twice and you'll likely get two different answers. Not slightly different — sometimes substantially different. This "non-determinism" is baked into how LLMs generate text: they use probabilistic sampling, meaning each response is drawn from a distribution of possible outputs. It makes them creative and flexible, but also unpredictable. Never assume you'll get the same response twice. Test. Vary. Verify.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.opCallout}>
          <div className={styles.opLabel}>☠️ AUTHOR'S LOG</div>
          <p>
            "In One Piece, the most dangerous enemies aren't the ones who are strong — they're the ones who are strong and unpredictable. Blackbeard is terrifying precisely because you can't predict him. AI hallucinations are the Blackbeard of the LLM world: confident, surprising, and occasionally deeply wrong. Keep your guard up." — Forever a One Piece fan
          </p>
        </div>

        <div className={styles.divider}>⚙️</div>

        {/* PULLING IT TOGETHER */}
        <div className={styles.sectionMarker}>
          <div className={styles.markerIcon} style={{ background: 'rgba(45,212,191,0.15)', border: '1px solid rgba(45,212,191,0.3)' }}>
            🏴‍☠️
          </div>
          <div className={styles.markerText} style={{ color: '#2dd4bf' }}>
            PULLING THE SERIES TOGETHER
          </div>
        </div>

        <p className={styles.prose}>
          Across these two posts, we've covered the full arc of AI Fluency:
        </p>

        <p className={styles.prose}>
          <strong style={{ color: '#fef9ef' }}>Part 1</strong> gave us the <em>why</em> and the <em>what</em>: the 4D Framework as a structured approach to human-AI collaboration, grounded in the principles of being effective, efficient, ethical, and safe. Four interconnected competencies: Delegation, Description, Discernment, Diligence; that work together like a crew.
        </p>

        <p className={styles.prose}>
          <strong style={{ color: '#fef9ef' }}>Part 2</strong> gave us the <em>engine room</em>: what Generative AI actually is, how LLMs are built on algorithms, data, and computation, what makes them genuinely powerful, and — crucially — the five limitations that your AI Fluency skills are specifically designed to handle.
        </p>

        <div className={styles.pullQuote} style={{ color: '#2dd4bf', background: 'rgba(45,212,191,0.05)', borderTop: '1px solid rgba(45,212,191,0.2)', borderBottom: '1px solid rgba(45,212,191,0.2)' }}>
          "The goal isn't to fear the sea. It's to understand it well enough to sail it safely and boldly."
        </div>

        <p className={styles.prose}>
          The 4D Framework isn't just a framework for AI tools. It's a framework for <em>thinking</em> — a structured way of approaching any intelligent system, any future model, any technology that creates on your behalf. The tools will change. The 4Ds won't.
        </p>

        <p className={styles.prose}>
          Every great crew needs a navigator. Every great navigator needs to understand the sea. Now you understand the sea a little better.
        </p>

        <p className={styles.prose}>MI Abaga once said, "Exhale and set sail the brave traveller... 🏴‍☠️ "</p>

        {/* CONCLUSION */}
        <div className={styles.conclusionBox}>
          <h2>⚓ END OF SERIES</h2>
          <p style={{ fontSize: '1.05rem' }}>
            Two posts. Four competencies. One mission: to help you collaborate with AI in ways that are effective, efficient, ethical, and safe.
          </p>
          <p style={{ marginTop: '16px', color: '#8896a7', fontSize: '0.92rem' }}>
            Thanks for sailing with me. Fair winds and following seas. 🌊
          </p>
        </div>

        {/* FOOTER */}
        <footer className={styles.postFooter}>
          <div className={styles.authorCard}>
            <div className={styles.authorAvatar}>🏴‍☠️</div>
            <div>
              <div className={styles.authorName}>Written by a One Piece Fan Who Thinks About AI Too Much</div>
              <div className={styles.authorBio}>
                AI Fluency advocate · Educator · Proud Straw Hat crew member in spirit · Believes the best lessons always come with a good adventure.
              </div>
            </div>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>#GenerativeAI</span>
            <span className={styles.tag}>#LLMs</span>
            <span className={styles.tag}>#AIFluency</span>
            <span className={styles.tag}>#4DFramework</span>
            <span className={styles.tag}>#AILimitations</span>
            <span className={styles.tag}>#Hallucinations</span>
            <span className={styles.tag}>#OnePiece</span>
            <span className={styles.tag}>#HumanAI</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default BlogPost;
