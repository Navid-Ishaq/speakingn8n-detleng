"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { courseStages } from "@/content/course";

export function CourseJourney() {
  return (
    <div className="journey-list">
      <Accordion type="multiple" defaultValue={["stage-1"]}>
        {courseStages.map((stage) => (
          <AccordionItem key={stage.number} value={`stage-${stage.number}`} className="stage-row">
            <AccordionTrigger className="stage-trigger">
              <span className="stage-number" aria-hidden="true">{String(stage.number).padStart(2, "0")}</span>
              <span className="stage-heading">
                <span className="stage-kicker">Stage {stage.number} · {stage.lessons.length} lessons</span>
                <span className="stage-title">{stage.title}</span>
                <span className="stage-subtitle">{stage.subtitle}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="stage-content">
              <p className="stage-intro">{stage.introduction}</p>
              <ol className="lesson-list" start={stage.lessons[0].number}>
                {stage.lessons.map((item) => (
                  <li className="lesson-row" key={item.number}>
                    <span className="lesson-number">{String(item.number).padStart(2, "0")}</span>
                    <span className="lesson-copy">
                      {item.room && <span className="room-label">{item.room}</span>}
                      <strong>{item.title}</strong>
                      <span>{item.summary}</span>
                    </span>
                    <button className="coming-soon" type="button" disabled aria-label={`${item.title} — Coming soon`}>Coming soon</button>
                  </li>
                ))}
              </ol>
              <div className="checkpoint">
                <span>Checkpoint {stage.number < 6 ? stage.number : "Final"}</span>
                <p>{stage.checkpoint}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
