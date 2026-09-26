import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CourseJourney } from "@/components/course-journey";
import { courseStages, ecosystemDoors, finalTalks } from "@/content/course";

const deepLoop = ["Speak", "Notice the gap", "Learn", "Build", "Test", "Speak again"];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Speaking n8n home">
          <span className="brand-mark" aria-hidden="true"><i /><b>S</b><i /></span>
          <span>Speaking <em>n8n</em></span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#course">Course</a>
          <a href="#method">Method</a>
          <a href="#talks">Final talks</a>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A public-speaking course built around one subject</p>
            <h1 id="hero-title">Speak with<br/><span>Confidence.</span></h1>
            <p className="hero-subtitle">One Learner. One Subject. Every Kind of Room.</p>
            <p className="hero-intro">Learn n8n by building one real workflow—and learn to explain it clearly to anyone in the room.</p>
            <div className="hero-actions">
              <a className="primary-action" href="#course">Explore the course <ArrowDown aria-hidden="true" /></a>
              <a className="text-action" href="#method">See the method <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>

          <aside className="hero-system" aria-label="Course system">
            <div className="hero-system-top">
              <span>Course system</span>
              <span>35 lessons · 6 stages</span>
            </div>
            <div className="hero-path" aria-hidden="true">
              <span>Speak</span><i />
              <span>Build</span><i />
              <span>Explain</span><i />
              <span>Respond</span>
            </div>
            <div className="hero-promise">
              <span className="note-label">The promise</span>
              <p>Explain one real n8n workflow to a layperson, a technical audience, and someone who may know n8n far better than you do.</p>
              <small>Understand it. Build it. Explain it. Then answer when someone asks why.</small>
            </div>
          </aside>
        </section>

        <section className="ecosystem-ribbon" aria-label="n8n learning ecosystem">
          <p><span>Speaking n8n</span> is the speaking door in a wider independent n8n learning ecosystem.</p>
          <div className="ribbon-links">
            {ecosystemDoors.filter((door) => door.key !== "speak").map((door) => (
              <a href={door.href} key={door.key} target="_blank" rel="noopener">
                <span>{door.label}</span>{door.domain}<ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="idea section-pad">
          <p className="section-index">01 · The idea</p>
          <div>
            <h2>Speaking is not the part that comes after learning.</h2>
            <div className="two-col-copy">
              <p>You learn something. You build something. Then you explain it aloud.</p>
              <p>The act of speaking reveals what you understand—and what you still need to learn. Every gap becomes the next useful step.</p>
            </div>
          </div>
        </section>

        <section className="method section-pad" id="method">
          <div className="method-title">
            <p className="section-index light">02 · The method</p>
            <h2>Speak <i>→</i> Build <i>→</i> Speak Again</h2>
            <p>No lesson ends with “think about this.” Each one ends with something said aloud, built, tested, questioned, or improved.</p>
          </div>
          <ol className="loop" aria-label="The deeper learning loop">
            {deepLoop.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>
            ))}
          </ol>
        </section>

        <section className="course section-pad" id="course">
          <div className="section-lead">
            <p className="section-index">03 · The journey</p>
            <div>
              <h2>Six stages.<br/>One growing voice.</h2>
              <p>Start with thirty seconds. Finish with a real talk, a working workflow, and the confidence to answer questions honestly.</p>
            </div>
            <p className="course-count"><strong>35</strong><span>lessons</span></p>
          </div>

          <nav className="stage-map" aria-label="Course stages">
            {courseStages.map((stage) => (
              <a href={`#stage-${stage.number}`} key={stage.number}>
                <span>{String(stage.number).padStart(2, "0")}</span>
                <strong>{stage.title}</strong>
                <small>{stage.lessons.length} lessons</small>
              </a>
            ))}
          </nav>

          <CourseJourney />
        </section>

        <section className="result section-pad">
          <p className="section-index light">04 · The evidence</p>
          <div className="result-copy">
            <p>One learner.</p>
            <p>One real workflow.</p>
            <p>Three rooms.</p>
          </div>
          <div className="result-side">
            <p>This is not a promise of perfection. It is a trail of evidence that you built, spoke, listened, corrected, and spoke again.</p>
            <ul>
              <li>A body of recorded speaking practice</li>
              <li>Stronger technical understanding</li>
              <li>Greater confidence answering questions</li>
              <li>A communication skill that outlasts one workflow</li>
            </ul>
          </div>
        </section>

        <section className="talks section-pad" id="talks">
          <div className="section-lead compact">
            <p className="section-index">05 · The final talks</p>
            <div><h2>The same truth.<br/>Three doorways.</h2><p>The workflow does not change. The way you enter the room does.</p></div>
          </div>
          <div className="talk-grid">
            {finalTalks.map((talk, index) => (
              <article className="talk" key={talk.audience}>
                <span className="talk-number">Room {String(index + 1).padStart(2, "0")}</span>
                <h3>{talk.audience}</h3>
                <blockquote>“{talk.question}”</blockquote>
                <dl>
                  <div><dt>They need</dt><dd>{talk.needs}</dd></div>
                  <div><dt>Show</dt><dd>{talk.show}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="ecosystem section-pad" id="ecosystem">
          <div className="ecosystem-head">
            <p className="section-index light">06 · The ecosystem</p>
            <div>
              <h2>One craft.<br/>Different doors.</h2>
              <p>Speaking n8n sits beside the places where n8n is learned, explored, shown, and turned into practical automation work.</p>
            </div>
          </div>
          <div className="door-map">
            {ecosystemDoors.map((door, index) => (
              <a className={`door ${door.key === "speak" ? "door--current" : ""}`} href={door.href} key={door.key} target={door.key === "speak" ? undefined : "_blank"} rel={door.key === "speak" ? undefined : "noopener"}>
                <span className="door-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="door-label">{door.label}</span>
                <strong>{door.title}</strong>
                <p>{door.description}</p>
                <span className="door-domain">{door.domain} {door.key === "speak" ? "· You are here" : "↗"}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="philosophy section-pad">
          <p className="section-index">07 · The philosophy</p>
          <blockquote>
            <p>Know one thing well enough to explain it simply.</p>
            <p>Build it well enough to answer questions.</p>
            <p>Observe it closely enough to say something worth hearing.</p>
          </blockquote>
          <p className="closing">Don’t practise sounding knowledgeable.<br/><strong>Practise becoming clear.</strong></p>
        </section>

        <section className="about section-pad" id="about">
          <p className="section-index light">About the course</p>
          <div>
            <h2>A speaking laboratory built around real n8n practice.</h2>
            <p>Speaking n8n is an independent learning project. The course uses repeated explanation, building, testing, recording, feedback, and reflection to turn technical learning into communication practice.</p>
          </div>
          <a href="#top">Back to the top ↑</a>
        </section>
      </div>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand--footer" href="#top"><span className="brand-mark" aria-hidden="true"><i /><b>S</b><i /></span><span>Speaking <em>n8n</em></span></a>
            <p>Speak → Build → Speak Again</p>
          </div>
          <div className="footer-column">
            <strong>Course</strong>
            <a href="#course">Course journey</a>
            <a href="#method">Method</a>
            <a href="#talks">Final talks</a>
          </div>
          <div className="footer-column">
            <strong>n8n ecosystem</strong>
            {ecosystemDoors.filter((door) => door.key !== "speak").map((door) => <a href={door.href} key={door.key} target="_blank" rel="noopener">{door.label} ↗</a>)}
          </div>
          <div className="footer-column">
            <strong>Project</strong>
            <a href="#about">About</a>
            <a href="https://lfds.detleng.com" target="_blank" rel="noopener">Logic First Digital Solutions ↗</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="footer-legal">
          <p>Speaking n8n is an independent learning project and is not affiliated with or endorsed by n8n GmbH.</p>
          <span>speakingn8n.detleng.com</span>
        </div>
      </footer>
    </main>
  );
}
