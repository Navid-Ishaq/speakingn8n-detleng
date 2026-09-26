import { ArrowUpRight } from "lucide-react";
import { courseStages, type CourseStage, type Lesson } from "@/content/course";

function LessonAction({ item }: { item: Lesson }) {
  if (item.status === "available") {
    return (
      <a className="lesson-action lesson-action--live" href={`/lessons/${item.slug}/`}>
        Start lesson <ArrowUpRight aria-hidden="true" />
      </a>
    );
  }

  return (
    <span className="lesson-action lesson-action--soon" aria-label={`${item.title} — Coming soon`}>
      Coming soon
    </span>
  );
}

function LessonRow({ item }: { item: Lesson }) {
  return (
    <li className="lesson-row">
      <span className="lesson-number" aria-hidden="true">{String(item.number).padStart(2, "0")}</span>
      <span className="lesson-copy">
        {item.room && <span className="room-label">{item.room}</span>}
        <strong>{item.title}</strong>
        <span>{item.summary}</span>
      </span>
      <LessonAction item={item} />
    </li>
  );
}

function StandardLessons({ stage }: { stage: CourseStage }) {
  return (
    <ol className="lesson-list" start={stage.lessons[0].number}>
      {stage.lessons.map((item) => <LessonRow item={item} key={item.number} />)}
    </ol>
  );
}

function ThreeRooms({ stage }: { stage: CourseStage }) {
  const rooms = [
    { key: "Layperson", number: "01", title: "The Layperson", line: "Start with the day they already know." },
    { key: "Technical audience", number: "02", title: "The Technical Audience", line: "Show the choices, data and limits." },
    { key: "Mixed audience", number: "03", title: "The Mixed Room", line: "Lead with value. Add depth without losing the room." },
  ];

  return (
    <div className="room-grid">
      {rooms.map((room) => {
        const lessons = stage.lessons.filter((lesson) => lesson.room?.includes(room.key));
        return (
          <section className="room-card" key={room.key}>
            <div className="room-card-head">
              <span>{room.number}</span>
              <div>
                <p>{room.title}</p>
                <small>{room.line}</small>
              </div>
            </div>
            <ol className="room-lessons" start={lessons[0]?.number}>
              {lessons.map((item) => <LessonRow item={item} key={item.number} />)}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

export function CourseJourney() {
  return (
    <div className="journey-list">
      {courseStages.map((stage) => {
        const stageClass = [
          "stage-panel",
          stage.number === 4 ? "stage-panel--rooms" : "",
          stage.number === 5 ? "stage-panel--expert" : "",
          stage.number === 6 ? "stage-panel--final" : "",
        ].filter(Boolean).join(" ");

        return (
          <article className={stageClass} id={`stage-${stage.number}`} key={stage.number}>
            <div className="stage-rail" aria-hidden="true">
              <span>{String(stage.number).padStart(2, "0")}</span>
              <i />
            </div>

            <div className="stage-body">
              <header className="stage-header">
                <div>
                  <p className="stage-kicker">Stage {String(stage.number).padStart(2, "0")} · {stage.lessons.length} lessons</p>
                  <h3>{stage.title}</h3>
                  <p className="stage-subtitle">{stage.subtitle}</p>
                </div>
                <p className="stage-intro">{stage.introduction}</p>
              </header>

              {stage.number === 4 ? <ThreeRooms stage={stage} /> : <StandardLessons stage={stage} />}

              <div className="checkpoint">
                <span>{stage.number === 6 ? "Final checkpoint" : `Checkpoint ${stage.number}`}</span>
                <p>{stage.checkpoint}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
