import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Heart,
  Layers3,
  Mic2,
  MonitorPlay,
  RotateCcw,
  Sparkles,
  Star,
} from "lucide-react";
import React from "react";
import { useMemo, useState } from "react";
import {
  conversationRoles,
  dailyScripts,
  phraseBank,
  presentationLines,
  shadowingLines,
} from "./data/content";
import { useLocalStorage } from "./hooks/useLocalStorage";

const initialProgress = {
  completedDaily: [],
  favoritePhrases: [],
  presentationPracticeCount: 0,
  conversationPracticeCount: 0,
};

const modules = [
  { id: "daily", label: "Daily Brief", icon: BookOpen },
  { id: "shadowing", label: "Shadow Lab", icon: Mic2 },
  { id: "presentation", label: "Room Deck", icon: MonitorPlay },
  { id: "conversation", label: "Roleplay OS", icon: BriefcaseBusiness },
  { id: "phrases", label: "Phrase Vault", icon: Star },
  { id: "progress", label: "Progress Hub", icon: BarChart3 },
];

function renderMarkedText(text, className = "") {
  const parts = text.split(/(\*\*[^*]+\*\*|\|)/g).filter(Boolean);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part === "|") {
          return (
            <span key={`${part}-${index}`} className="mx-2 text-blue-500">
              |
            </span>
          );
        }

        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={`${part}-${index}`} className="font-semibold text-slate-950">
              {part.slice(2, -2)}
            </strong>
          );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </span>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
          {title}
        </h2>
      </div>
      {children && <div className="text-sm text-slate-500">{children}</div>}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <section
      className={`rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-soft md:p-7 ${className}`}
    >
      {children}
    </section>
  );
}

function FluentLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20">
        <span className="text-xl font-semibold tracking-tight">F</span>
        <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-blue-500" />
      </div>
      {!compact && (
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-950">FluentOS</h1>
          <p className="text-sm text-slate-500">Master the Room.</p>
        </div>
      )}
    </div>
  );
}

function LandingHero({ progress }) {
  const heroStats = [
    { label: "Daily briefs", value: progress.completedDaily.length },
    { label: "Saved phrases", value: progress.favoritePhrases.length },
    { label: "Presentation reps", value: progress.presentationPracticeCount },
  ];

  return (
    <section className="mb-5 overflow-hidden rounded-[34px] border border-white/80 bg-slate-950 text-white shadow-soft">
      <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[1.08fr_0.92fr] xl:p-10">
        <div className="flex min-h-[420px] flex-col justify-between">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <FluentLogo compact />
              <div>
                <p className="text-sm font-semibold text-white">FluentOS</p>
                <p className="text-sm text-slate-400">AI communication operating system</p>
              </div>
            </div>
            <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
              Master the Room.
            </p>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Speak with command in every high-stakes room.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              An AI-powered communication operating system for presentations, business English,
              networking, and public speaking.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
          <div className="rounded-[24px] bg-white p-4 text-slate-950 shadow-2xl shadow-blue-950/20">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Live practice stack
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">CES partner pitch</h3>
              </div>
              <Layers3 className="text-blue-600" size={24} />
            </div>
            <div className="space-y-3">
              {[
                ["Opening", "Frame Zdeer with clear value."],
                ["Shadowing", "Sense groups, pauses, American rhythm."],
                ["Roleplay", "Distributor and creator conversations."],
                ["Vault", "Business phrases saved for follow-up."],
              ].map(([label, detail]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-950">{label}</p>
                    <p className="text-sm text-slate-500">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-3xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold text-blue-200">Today&apos;s focus</p>
              <p className="mt-2 text-2xl font-semibold leading-tight">
                Turn product knowledge into confident American business English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DailyEnglish({ progress, setProgress }) {
  const todayScript = useMemo(() => {
    const dayIndex = Math.floor(Date.now() / 86400000) % dailyScripts.length;
    return dailyScripts[dayIndex];
  }, []);

  const completed = progress.completedDaily.includes(todayScript.id);

  function completeDaily() {
    setProgress((current) => ({
      ...current,
      completedDaily: current.completedDaily.includes(todayScript.id)
        ? current.completedDaily
        : [...current.completedDaily, todayScript.id],
    }));
  }

  return (
    <div>
      <SectionHeader eyebrow="Daily English" title={todayScript.title}>
        <span>{todayScript.topic}</span>
      </SectionHeader>

      <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
        <Card>
          <div className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Sparkles size={16} className="text-blue-600" />
            One-minute practice script
          </div>
          <p className="text-lg leading-9 text-slate-700 md:text-xl md:leading-10">
            {renderMarkedText(todayScript.script)}
          </p>
          <button
            onClick={completeDaily}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            <Check size={17} />
            {completed ? "Completed today" : "Mark complete"}
          </button>
        </Card>

        <div className="grid gap-5">
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-slate-950">Useful phrases</h3>
            <div className="space-y-3">
              {todayScript.phrases.map((phrase) => (
                <div key={phrase} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
                  <ChevronRight size={16} className="mt-1 shrink-0 text-blue-600" />
                  <span className="text-sm text-slate-700">{phrase}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-lg font-semibold text-slate-950">Shadowing lines</h3>
            <div className="space-y-3">
              {todayScript.shadowing.map((line) => (
                <p key={line} className="rounded-2xl border border-slate-100 p-3 text-sm leading-7 text-slate-700">
                  {renderMarkedText(line)}
                </p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ShadowingCoach() {
  const [activeLine, setActiveLine] = useState(0);
  const item = shadowingLines[activeLine];

  return (
    <div>
      <SectionHeader eyebrow="Shadowing Coach" title="Sound natural in American business English">
        <span>Fillers, transitions, sense groups, pronunciation</span>
      </SectionHeader>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="space-y-3">
          {shadowingLines.map((line, index) => (
            <button
              key={line.line}
              onClick={() => setActiveLine(index)}
              className={`w-full rounded-2xl border p-4 text-left text-sm leading-7 transition ${
                activeLine === index
                  ? "border-blue-500 bg-blue-50 text-slate-950"
                  : "border-slate-100 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              {renderMarkedText(line.line)}
            </button>
          ))}
        </Card>

        <Card className="flex min-h-[320px] flex-col justify-between">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Practice focus
            </p>
            <p className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl md:leading-tight">
              {renderMarkedText(item.line)}
            </p>
          </div>
          <div className="mt-8 rounded-3xl bg-slate-950 p-5 text-white">
            <p className="mb-2 text-sm font-semibold text-blue-200">Pronunciation note</p>
            <p className="leading-7 text-slate-200">{item.note}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function PresentationCoach({ progress, setProgress }) {
  const [mode, setMode] = useState("script");
  const [category, setCategory] = useState("opening");

  const lines = presentationLines[category];
  const keywordLine = lines
    .join(" ")
    .split(/[,.]/)
    .filter(Boolean)
    .slice(0, 6)
    .map((line) => line.trim().split(" ").slice(0, 4).join(" "));

  function logPractice() {
    setProgress((current) => ({
      ...current,
      presentationPracticeCount: current.presentationPracticeCount + 1,
    }));
  }

  return (
    <div>
      <SectionHeader eyebrow="Presentation Coach" title="Practice with scripts or memory prompts">
        <span>{progress.presentationPracticeCount} sessions logged</span>
      </SectionHeader>

      <div className="mb-5 flex flex-wrap gap-2">
        {Object.keys(presentationLines).map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
              category === item ? "bg-slate-950 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <Card>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex rounded-full bg-slate-100 p-1">
            {["script", "teleprompter", "memory"].map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  mode === item ? "bg-white text-blue-600 shadow-sm" : "text-slate-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={logPractice}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Check size={16} />
            Log practice
          </button>
        </div>

        {mode === "memory" ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {keywordLine.map((keyword) => (
              <div key={keyword} className="rounded-3xl bg-slate-50 p-5 text-xl font-semibold text-slate-950">
                {keyword}
              </div>
            ))}
          </div>
        ) : (
          <div className={mode === "teleprompter" ? "space-y-8 py-7" : "space-y-4"}>
            {lines.map((line) => (
              <p
                key={line}
                className={
                  mode === "teleprompter"
                    ? "text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl md:leading-tight"
                    : "rounded-3xl bg-slate-50 p-5 text-lg leading-8 text-slate-700"
                }
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

function ConversationSimulator({ progress, setProgress }) {
  const [roleId, setRoleId] = useState(conversationRoles[0].id);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const role = conversationRoles.find((item) => item.id === roleId);

  function submitAnswer() {
    if (!answer.trim()) return;
    setSubmitted(true);
    setProgress((current) => ({
      ...current,
      conversationPracticeCount: current.conversationPracticeCount + 1,
    }));
  }

  return (
    <div>
      <SectionHeader eyebrow="Conversation Simulator" title="Practice high-value business situations">
        <span>{progress.conversationPracticeCount} answers submitted</span>
      </SectionHeader>

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="space-y-3">
          {conversationRoles.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setRoleId(item.id);
                setSubmitted(false);
                setAnswer("");
              }}
              className={`w-full rounded-2xl border p-4 text-left text-sm font-semibold capitalize transition ${
                roleId === item.id
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-100 text-slate-600 hover:border-slate-300"
              }`}
            >
              {item.role}
            </button>
          ))}
        </Card>

        <Card>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            {role.role}
          </p>
          <h3 className="mb-5 text-2xl font-semibold leading-tight tracking-tight text-slate-950">
            {role.question}
          </h3>
          <textarea
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Type your answer in English..."
            className="min-h-36 w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 p-4 leading-7 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={submitAnswer}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Improve my answer
            </button>
            <button
              onClick={() => {
                setAnswer("");
                setSubmitted(false);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>

          {submitted && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-blue-50 p-5">
                <p className="mb-2 text-sm font-semibold text-blue-700">More natural version</p>
                <p className="leading-7 text-slate-800">{role.naturalAnswer}</p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-5 text-white">
                <p className="mb-2 text-sm font-semibold text-blue-200">Why it sounds better</p>
                <p className="leading-7 text-slate-200">{role.why}</p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

function PhraseBank({ progress, setProgress }) {
  const [scenario, setScenario] = useState(phraseBank[0].scenario);
  const active = phraseBank.find((item) => item.scenario === scenario);

  function toggleFavorite(phrase) {
    setProgress((current) => {
      const exists = current.favoritePhrases.includes(phrase);
      return {
        ...current,
        favoritePhrases: exists
          ? current.favoritePhrases.filter((item) => item !== phrase)
          : [...current.favoritePhrases, phrase],
      };
    });
  }

  return (
    <div>
      <SectionHeader eyebrow="Phrase Bank" title="Useful phrases for serious business communication">
        <span>{progress.favoritePhrases.length} favorites</span>
      </SectionHeader>

      <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr]">
        <Card className="space-y-2">
          {phraseBank.map((item) => (
            <button
              key={item.scenario}
              onClick={() => setScenario(item.scenario)}
              className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                scenario === item.scenario ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item.scenario}
            </button>
          ))}
        </Card>

        <div className="grid gap-4">
          {active.phrases.map((phrase) => {
            const favorite = progress.favoritePhrases.includes(phrase.english);

            return (
              <Card key={phrase.english} className="shadow-none">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{phrase.english}</h3>
                    <p className="mt-2 text-slate-500">{phrase.chinese}</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(phrase.english)}
                    className={`rounded-full p-3 transition ${
                      favorite ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                    aria-label={favorite ? "Remove favorite" : "Add favorite"}
                  >
                    <Heart size={18} fill={favorite ? "currentColor" : "none"} />
                  </button>
                </div>
                <p className="mt-5 rounded-3xl bg-slate-50 p-4 leading-7 text-slate-700">
                  {phrase.example}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ProgressTracker({ progress, setProgress }) {
  const stats = [
    {
      label: "Daily practices",
      value: progress.completedDaily.length,
      detail: `${dailyScripts.length} seeded scripts`,
    },
    {
      label: "Favorite phrases",
      value: progress.favoritePhrases.length,
      detail: "Saved to localStorage",
    },
    {
      label: "Presentation sessions",
      value: progress.presentationPracticeCount,
      detail: "Logged manually",
    },
    {
      label: "Conversation answers",
      value: progress.conversationPracticeCount,
      detail: "Simulator submissions",
    },
  ];

  return (
    <div>
      <SectionHeader eyebrow="Progress Tracker" title="Your local learning operating system">
        <span>Private on this browser</span>
      </SectionHeader>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
            <p className="mt-3 text-sm text-slate-500">{stat.detail}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-950">Favorite phrase list</h3>
            <p className="mt-2 text-slate-500">Review saved phrases before calls, meetings, and CES follow-ups.</p>
          </div>
          <button
            onClick={() => setProgress(initialProgress)}
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            Reset progress
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {progress.favoritePhrases.length ? (
            progress.favoritePhrases.map((phrase) => (
              <span key={phrase} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {phrase}
              </span>
            ))
          ) : (
            <p className="text-slate-500">No favorites yet.</p>
          )}
        </div>
      </Card>
    </div>
  );
}

function App() {
  const [activeModule, setActiveModule] = useState("daily");
  const [progress, setProgress] = useLocalStorage(
    "fluentos-progress",
    initialProgress,
    "leon-english-os-progress",
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_32rem),#f8fafc]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 md:px-6 lg:flex-row lg:gap-6 lg:py-6">
        <aside className="mb-4 rounded-[30px] border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur lg:sticky lg:top-6 lg:mb-0 lg:h-[calc(100vh-3rem)] lg:w-72">
          <div className="mb-7">
            <FluentLogo />
          </div>

          <nav className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {modules.map((module) => {
              const Icon = module.icon;
              const active = activeModule === module.id;

              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-semibold transition ${
                    active
                      ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Icon size={18} />
                  <span>{module.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="flex-1 pb-8">
          <LandingHero progress={progress} />

          <header className="mb-5 rounded-[30px] border border-white/80 bg-white/80 p-5 shadow-soft backdrop-blur md:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  FluentOS workspace
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  Build fluency for presentations, networking, and business conversations.
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:min-w-[420px]">
                <div className="rounded-3xl bg-slate-950 p-4 text-white">
                  <p className="text-2xl font-semibold">{progress.completedDaily.length}</p>
                  <p className="text-xs text-slate-300">Daily</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-950">{progress.favoritePhrases.length}</p>
                  <p className="text-xs text-slate-500">Phrases</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-950">{progress.presentationPracticeCount}</p>
                  <p className="text-xs text-slate-500">Talks</p>
                </div>
                <div className="rounded-3xl bg-blue-600 p-4 text-white">
                  <p className="text-2xl font-semibold">{progress.conversationPracticeCount}</p>
                  <p className="text-xs text-blue-100">Chats</p>
                </div>
              </div>
            </div>
          </header>

          {activeModule === "daily" && <DailyEnglish progress={progress} setProgress={setProgress} />}
          {activeModule === "shadowing" && <ShadowingCoach />}
          {activeModule === "presentation" && (
            <PresentationCoach progress={progress} setProgress={setProgress} />
          )}
          {activeModule === "conversation" && (
            <ConversationSimulator progress={progress} setProgress={setProgress} />
          )}
          {activeModule === "phrases" && <PhraseBank progress={progress} setProgress={setProgress} />}
          {activeModule === "progress" && <ProgressTracker progress={progress} setProgress={setProgress} />}
        </div>
      </div>
    </main>
  );
}

export default App;
