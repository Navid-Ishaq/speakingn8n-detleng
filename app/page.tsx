import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CourseJourney } from "@/components/course-journey";
import { finalTalks } from "@/content/course";

const deepLoop = ["Speak", "Notice the gap", "Learn", "Build", "Test", "Speak again"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Speaking n8n home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Speaking <em>n8n</em></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#course">Course</a><a href="#method">Method</a><a href="#talks">Final talks</a><a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A public-speaking course built around one subject</p>
          <h1>Speak with<br/><span>Confidence.</span></h1>
          <p className="hero-subtitle">One Learner. One Subject. Every Kind of Room.</p>
          <p className="hero-intro">Learn n8n by building one real workflow—and learn to explain it clearly to anyone in the room.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#course">Explore the course <ArrowDown aria-hidden="true" /></a>
            <a className="text-action" href="#method">See the method <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <aside className="hero-note" aria-label="The course promise">
          <span className="note-label">The promise</span>
          <p>By the end, you will be able to explain an n8n workflow to someone new to automation, walk a technical audience through how it works, and share an honest insight with someone who may know n8n far better than you do.</p>
          <div className="note-rule" />
          <p className="note-small">Understand it. Build it. Explain it. Then answer when someone asks why.</p>
        </aside>
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
          {deepLoop.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
        </ol>
      </section>

      <section className="course section-pad" id="course">
        <div className="section-lead">
          <p className="section-index">03 · The journey</p>
          <div><h2>Six stages.<br/>One growing voice.</h2><p>Start with thirty seconds. Finish with a real talk, a working workflow, and the confidence to answer questions honestly.</p></div>
          <p className="course-count"><strong>35</strong><span>lessons</span></p>
        </div>
        <CourseJourney />
      </section>

      <section className="result section-pad">
        <p className="section-index light">04 · The result</p>
        <div className="result-copy"><p>One learner.</p><p>One real n8n workflow.</p><p>Three audience-ready versions of the same story.</p></div>
        <ul><li>A body of recorded speaking practice</li><li>Stronger technical understanding</li><li>Greater confidence answering questions</li><li>A communication skill that outlasts one workflow</li></ul>
      </section>

      <section className="talks section-pad" id="talks">
        <div className="section-lead compact"><p className="section-index">05 · The final talks</p><div><h2>The same truth.<br/>Three doorways.</h2></div></div>
        <div className="talk-grid">
          {finalTalks.map((talk, index) => (
            <article className="talk" key={talk.audience}>
              <span className="talk-number">Audience {index + 1}</span><h3>{talk.audience}</h3><blockquote>“{talk.question}”</blockquote>
              <dl><div><dt>They need</dt><dd>{talk.needs}</dd></div><div><dt>Show</dt><dd>{talk.show}</dd></div></dl>
            </article>
          ))}
        </div>
      </section>

      <section className="philosophy section-pad">
        <p className="section-index">06 · The philosophy</p>
        <blockquote><p>Know one thing well enough to explain it simply.</p><p>Build it well enough to answer questions.</p><p>Observe it closely enough to say something worth hearing.</p></blockquote>
        <p className="closing">Don’t practise sounding knowledgeable.<br/><strong>Practise becoming clear.</strong></p>
      </section>

      <section className="about section-pad" id="about">
        <p className="section-index light">About the course</p>
        <p>Speaking n8n is an independent learning project focused on public speaking through hands-on n8n practice. It is built around repeated explanation, building, testing, and reflection.</p>
        <a href="#top">Back to the top ↑</a>
      </section>

      <footer><span>Speaking n8n</span><p>Speaking n8n is an independent learning project and is not affiliated with or endorsed by n8n GmbH.</p><span>Speak → Build → Speak Again</span></footer>
    </main>
  );
}
