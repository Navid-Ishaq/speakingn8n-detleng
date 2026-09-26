export type Lesson = {
  number: number;
  title: string;
  summary: string;
  status: "coming-soon" | "available";
  slug: string;
  room?: string;
};

export type CourseStage = {
  number: number;
  title: string;
  subtitle: string;
  introduction: string;
  checkpoint: string;
  lessons: Lesson[];
};

const lesson = (number: number, title: string, summary: string, room?: string): Lesson => ({
  number,
  title,
  summary,
  status: "coming-soon",
  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  room,
});

export const courseStages: CourseStage[] = [
  {
    number: 1, title: "Find Your Voice", subtitle: "Before n8n, learn to stand up and speak.",
    introduction: "Begin without a script. Finish a thought, tell a true story, and let useful feedback into the room.",
    checkpoint: "You can deliver one natural two-minute talk to another person.",
    lessons: [
      lesson(1, "Stand Up and Speak for 30 Seconds", "Say your name and describe one thing you did today. One take. No restart."),
      lesson(2, "Say One Thing, Then Stop", "Make one point, give one example, and stop before the message wanders."),
      lesson(3, "Give Your Listener a Reason to Care", "Begin with why the subject matters to the person listening."),
      lesson(4, "Speak from Three Words", "Replace written sentences with three prompts and speak for one minute."),
      lesson(5, "Explain It to Someone Who Knows Nothing", "Make every step in a familiar process clear without assuming knowledge."),
      lesson(6, "Tell a Two-Minute Story", "Turn a real moment of wasted time into a short, truthful story."),
      lesson(7, "Speak to a Real Person", "Ask where they followed you and where you lost them. Then improve one thing."),
    ],
  },
  {
    number: 2, title: "Explain How Work Gets Done", subtitle: "The bridge between speaking and automation thinking.",
    introduction: "Learn to see a process, name its cost, and describe a better way without losing the human decisions inside it.",
    checkpoint: "You can explain one real process, and how it could be improved, in three minutes.",
    lessons: [
      lesson(8, "Spot a Repetitive Task", "Find one repeated task and describe who does what, when, and next."),
      lesson(9, "Explain It as ‘When → Then’", "Build a spoken map another person could follow from beginning to end."),
      lesson(10, "Show the Cost of Doing It by Hand", "Explain where time disappears and what can go wrong, using real evidence."),
      lesson(11, "Describe a Better Way", "Show what could happen automatically and where a person should still decide."),
      lesson(12, "Explain the Same Process to Two People", "Change the language for two listeners without changing the truth."),
    ],
  },
  {
    number: 3, title: "Start Speaking n8n", subtitle: "The problem already exists. Now the tool enters the story.",
    introduction: "Build one modest workflow, follow its data, break it on purpose, and explain what the evidence shows.",
    checkpoint: "You have one working workflow and one honest three-minute explanation of it.",
    lessons: [
      lesson(13, "Meet n8n Through a Real Problem", "Let a real process—not a memorised definition—be your doorway into n8n."),
      lesson(14, "Explain a Workflow Without Hiding Behind the Screen", "Describe the start, steps, and outcome without depending on the canvas."),
      lesson(15, "Learn the Essential Words, Then Translate Them", "Turn six core n8n terms into plain English you can actually use."),
      lesson(16, "Build Your First Small Workflow", "Use sample data, run the workflow, inspect it, and explain every step."),
      lesson(17, "Follow the Data", "Track one piece of data from input through each change to the outcome."),
      lesson(18, "Make It Work. Then Break It.", "Introduce one controlled error and explain what you would investigate next."),
      lesson(19, "Put the Human in the Right Place", "Choose one decision that should stay human and explain why."),
      lesson(20, "Give Your First n8n Talk", "Present the problem, workflow, result, and what you learned in three minutes."),
    ],
  },
  {
    number: 4, title: "One Workflow, Three Rooms", subtitle: "The workflow stays the same. The doorway changes.",
    introduction: "Keep the facts steady while you adapt the depth, vocabulary, and evidence to the people in front of you.",
    checkpoint: "You can tell the same workflow story three ways: layperson, technical audience, and mixed room.",
    lessons: [
      lesson(21, "Start with Their Day", "Open with the repetitive human task and the change they will feel.", "Room one · Layperson"),
      lesson(22, "Show Only What Helps", "Show the input and outcome; reveal the canvas only when it adds clarity.", "Room one · Layperson"),
      lesson(23, "Explain the Decisions", "Walk through the design and explain why you built it that way.", "Room two · Technical audience"),
      lesson(24, "Answer Without Bluffing", "Separate what you tested, what you expect, and what you do not yet know.", "Room two · Technical audience"),
      lesson(25, "Speak on Two Levels", "Lead with the outcome, then add enough implementation detail for technical listeners.", "Room three · Mixed audience"),
      lesson(26, "Read the Room", "Shorten, clarify, or go deeper without losing the main point.", "Room three · Mixed audience"),
    ],
  },
  {
    number: 5, title: "The Founder-Level Conversation", subtitle: "Bring something only your experience can provide.",
    introduction: "Do not perform expertise. Bring a real workflow, honest evidence, one useful observation, and a thoughtful question.",
    checkpoint: "You can deliver a five-minute expert-level presentation and respond to unscripted questions.",
    lessons: [
      lesson(27, "Find the Observation Worth Sharing", "Look back at what surprised you, broke, or changed your understanding."),
      lesson(28, "Replace Praise with Substance", "Describe what you built, where you struggled, and what finally helped."),
      lesson(29, "Show the Workflow in 90 Seconds", "Present only the problem, the design choice, and the result."),
      lesson(30, "Offer an Insight Without Overclaiming", "State what you observed, the evidence you have, and what remains unknown."),
      lesson(31, "Handle the Hard Follow-Up", "Answer difficult questions from actual experience, calmly and precisely."),
    ],
  },
  {
    number: 6, title: "Deliver the Real Talk", subtitle: "Now remove the training wheels.",
    introduction: "Prepare the talk, rehearse the real format, deliver it to real listeners, then compare the evidence of change.",
    checkpoint: "Visible evidence of progress—and a clear direction for what comes next.",
    lessons: [
      lesson(32, "Build the Final Presentation", "Prepare an opening, three points, a short demo, an ending, and a backup plan."),
      lesson(33, "Rehearse the Real Format", "Use the real timer, screen, notes, and transitions. Change one thing at a time."),
      lesson(34, "Give the Talk", "Speak to real listeners, take questions, and continue when a sentence goes wrong."),
      lesson(35, "Watch the Evidence", "Compare your first recording with the final talk and choose what comes next."),
    ],
  },
];

export const finalTalks = [
  { audience: "Layperson", question: "What repetitive task is wasting time?", needs: "The problem, the change, and the human benefit", show: "Input + outcome" },
  { audience: "Technical audience", question: "How does this work, and where could it fail?", needs: "Architecture, data flow, choices, and limitations", show: "Workflow + execution" },
  { audience: "Founder / expert", question: "What did I discover by actually building this?", needs: "Experience, observation, evidence, and a thoughtful question", show: "Only what supports the insight" },
];
