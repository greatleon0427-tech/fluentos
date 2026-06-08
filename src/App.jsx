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
  PanelTop,
  Plane,
  RotateCcw,
  Sparkles,
  Star,
  Trash2,
  Waves,
} from "lucide-react";
import React from "react";
import { useMemo, useRef, useState } from "react";
import {
  conversationRoles,
  dailyScripts,
  nativeFlowItems,
  phraseBank,
  presentationLines,
  realLifeScenarios,
  shadowingLines,
} from "./data/content";
import { useLocalStorage } from "./hooks/useLocalStorage";

const initialProgress = {
  completedDaily: [],
  favoritePhrases: [],
  favorites: [],
  presentationPracticeCount: 0,
  conversationPracticeCount: 0,
};

const modules = [
  { id: "daily", label: "Daily Fluency", icon: BookOpen },
  { id: "shadowing", label: "Voice Training", icon: Mic2 },
  { id: "native", label: "Native Flow", icon: Waves },
  { id: "real-life", label: "Real Life English", icon: Plane },
  { id: "presentation", label: "Stage Mode", icon: MonitorPlay },
  { id: "conversation", label: "Business Arena", icon: BriefcaseBusiness },
  { id: "phrases", label: "Expression Library", icon: Star },
  { id: "favorites", label: "My Favorites", icon: Heart },
  { id: "progress", label: "Growth Dashboard", icon: BarChart3 },
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

function normalizeProgress(progress) {
  const legacyFavorites = (progress.favoritePhrases || []).map((phrase) =>
    makeFavorite({
      id: `legacy-phrase-${phrase}`,
      phrase,
      category: "Expression Library",
      meaning: "Saved before FluentOS V2",
      example: phrase,
    }),
  );
  const favorites = progress.favorites?.length ? progress.favorites : legacyFavorites;

  return {
    ...initialProgress,
    ...progress,
    favorites,
    favoritePhrases: progress.favoritePhrases || [],
  };
}

function makeFavorite({ id, phrase, category, meaning = "", example = "" }) {
  return { id, phrase, category, meaning, example };
}

function isFavorite(progress, id) {
  return progress.favorites.some((favorite) => favorite.id === id);
}

function toggleFavoriteItem(setProgress, favorite) {
  setProgress((currentProgress) => {
    const current = normalizeProgress(currentProgress);
    const exists = current.favorites.some((item) => item.id === favorite.id);

    return {
      ...current,
      favorites: exists
        ? current.favorites.filter((item) => item.id !== favorite.id)
        : [...current.favorites, favorite],
    };
  });
}

function FavoriteButton({ active, onClick, label = "Favorite" }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition ${
        active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
      }`}
      aria-label={active ? `Remove ${label}` : `Add ${label}`}
    >
      <Star size={17} fill={active ? "currentColor" : "none"} />
    </button>
  );
}

function TodayPractice({ progress, setProgress }) {
  const nativePicks = nativeFlowItems.slice(0, 3);
  const realLifePicks = realLifeScenarios
    .flatMap((scenario) =>
      scenario.sentences.slice(0, 1).map((item) => ({
        ...item,
        category: scenario.category,
      })),
    )
    .slice(0, 3);
  const businessPicks = phraseBank.flatMap((group) => group.phrases).slice(0, 2);

  return (
    <Card className="mb-5 p-4 md:p-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Today&apos;s Practice
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
            Quick reps for fluent speaking
          </h2>
        </div>
        <p className="text-sm text-slate-500">3 native flow · 3 real life · 2 business</p>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="mb-3 text-sm font-semibold text-slate-950">Native Flow</p>
          <div className="space-y-2">
            {nativePicks.map((item) => (
              <p key={item.id} className="text-sm text-slate-600">
                <span className="font-semibold text-slate-950">{item.phrase}</span> → {item.spoken}{" "}
                <span className="text-blue-600">{item.ipa}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="mb-3 text-sm font-semibold text-slate-950">Real Life English</p>
          <div className="space-y-2">
            {realLifePicks.map((item) => (
              <p key={item.id} className="text-sm text-slate-600">
                <span className="font-semibold text-slate-950">{item.category}</span>:{" "}
                {renderMarkedText(item.senseGroup)}
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-slate-950 p-4 text-white">
          <p className="mb-3 text-sm font-semibold text-blue-200">Business English</p>
          <div className="space-y-2">
            {businessPicks.map((item) => {
              const favorite = makeFavorite({
                id: `today-business-${item.english}`,
                phrase: item.english,
                category: "Business English",
                meaning: item.chinese,
                example: item.example,
              });

              return (
                <div key={item.english} className="flex items-start justify-between gap-3">
                  <p className="text-sm leading-6 text-slate-200">{item.english}</p>
                  <FavoriteButton
                    active={isFavorite(progress, favorite.id)}
                    onClick={() => toggleFavoriteItem(setProgress, favorite)}
                    label={item.english}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
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
    { label: "Daily", value: progress.completedDaily.length },
    { label: "Favorites", value: progress.favorites.length },
    { label: "Stage reps", value: progress.presentationPracticeCount },
  ];

  return (
    <section className="mb-4 overflow-hidden rounded-[30px] border border-white/80 bg-slate-950 text-white shadow-soft">
      <div className="grid gap-5 p-5 md:grid-cols-[1.2fr_0.8fr] md:p-6">
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <FluentLogo compact />
              <div>
                <p className="text-sm font-semibold text-white">FluentOS</p>
                <p className="text-sm text-slate-400">Master the Room.</p>
              </div>
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Native-like flow for daily life, business, and the stage.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              An AI-powered communication operating system for presentations, business English,
              networking, and public speaking.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
          <div className="rounded-[22px] bg-white p-4 text-slate-950 shadow-2xl shadow-blue-950/20">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  V2 focus
                </p>
                <h3 className="mt-1 text-xl font-semibold tracking-tight">Sound natural faster</h3>
              </div>
              <Layers3 className="text-blue-600" size={24} />
            </div>
            <div className="space-y-2">
              {[
                ["Native Flow", "Linking, reductions, weak forms, IPA."],
                ["Real Life", "Airport, hotel, office, party, small talk."],
                ["Favorites", "Save phrases across every module."],
              ].map(([label, detail]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-950">{label}</p>
                    <p className="text-sm text-slate-500">{detail}</p>
                  </div>
                </div>
              ))}
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
      <SectionHeader eyebrow="Daily Fluency" title={todayScript.title}>
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
                <div key={phrase} className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50 p-3">
                  <div className="flex items-start gap-3">
                    <ChevronRight size={16} className="mt-1 shrink-0 text-blue-600" />
                    <span className="text-sm text-slate-700">{phrase}</span>
                  </div>
                  <FavoriteButton
                    active={isFavorite(progress, `daily-phrase-${phrase}`)}
                    onClick={() =>
                      toggleFavoriteItem(
                        setProgress,
                        makeFavorite({
                          id: `daily-phrase-${phrase}`,
                          phrase,
                          category: "Daily Fluency",
                          meaning: todayScript.topic,
                          example: todayScript.title,
                        }),
                      )
                    }
                    label={phrase}
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-lg font-semibold text-slate-950">Shadowing lines</h3>
            <div className="space-y-3">
              {todayScript.shadowing.map((line) => (
                <div key={line} className="flex items-start justify-between gap-3 rounded-2xl border border-slate-100 p-3">
                  <p className="text-sm leading-7 text-slate-700">{renderMarkedText(line)}</p>
                  <FavoriteButton
                    active={isFavorite(progress, `daily-shadow-${line}`)}
                    onClick={() =>
                      toggleFavoriteItem(
                        setProgress,
                        makeFavorite({
                          id: `daily-shadow-${line}`,
                          phrase: line.replaceAll("|", " "),
                          category: "Shadowing Sentence",
                          meaning: todayScript.topic,
                          example: line,
                        }),
                      )
                    }
                    label={line}
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ShadowingCoach({ progress, setProgress }) {
  const [activeLine, setActiveLine] = useState(0);
  const item = shadowingLines[activeLine];

  return (
    <div>
      <SectionHeader eyebrow="Voice Training" title="Sound natural in American business English">
        <span>Fillers, transitions, sense groups, pronunciation</span>
      </SectionHeader>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="space-y-3">
          {shadowingLines.map((line, index) => (
            <div
              key={line.line}
              className={`flex items-start justify-between gap-3 rounded-2xl border p-4 transition ${
                activeLine === index
                  ? "border-blue-500 bg-blue-50 text-slate-950"
                  : "border-slate-100 bg-white text-slate-600 hover:border-slate-300"
              }`}
            >
              <button onClick={() => setActiveLine(index)} className="flex-1 text-left text-sm leading-7">
                {renderMarkedText(line.line)}
              </button>
              <FavoriteButton
                active={isFavorite(progress, `voice-${line.line}`)}
                onClick={() =>
                  toggleFavoriteItem(
                    setProgress,
                    makeFavorite({
                      id: `voice-${line.line}`,
                      phrase: line.line.replaceAll("|", " "),
                      category: "Voice Training",
                      meaning: line.note,
                      example: line.line,
                    }),
                  )
                }
                label={line.line}
              />
            </div>
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
      <SectionHeader eyebrow="Stage Mode" title="Practice with scripts or memory prompts">
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
      <SectionHeader eyebrow="Business Arena" title="Practice high-value business situations">
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

  return (
    <div>
      <SectionHeader eyebrow="Expression Library" title="Useful phrases for serious business communication">
        <span>{progress.favorites.length} favorites</span>
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
            const favoriteItem = makeFavorite({
              id: `expression-${active.scenario}-${phrase.english}`,
              phrase: phrase.english,
              category: `Expression Library · ${active.scenario}`,
              meaning: phrase.chinese,
              example: phrase.example,
            });
            const favorite = isFavorite(progress, favoriteItem.id);

            return (
              <Card key={phrase.english} className="shadow-none">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{phrase.english}</h3>
                    <p className="mt-2 text-slate-500">{phrase.chinese}</p>
                  </div>
                  <FavoriteButton
                    active={favorite}
                    onClick={() => toggleFavoriteItem(setProgress, favoriteItem)}
                    label={phrase.english}
                  />
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

function NativeFlow({ progress, setProgress }) {
  const [focus, setFocus] = useState("All");
  const focuses = ["All", ...new Set(nativeFlowItems.map((item) => item.focus))];
  const items = focus === "All" ? nativeFlowItems : nativeFlowItems.filter((item) => item.focus === focus);

  return (
    <div>
      <SectionHeader eyebrow="Native Flow" title="Connected speech, reductions, weak forms, and IPA">
        <span>{nativeFlowItems.length} native-like pronunciation patterns</span>
      </SectionHeader>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {focuses.map((item) => (
          <button
            key={item}
            onClick={() => setFocus(item)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              focus === item ? "bg-slate-950 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {items.map((item) => {
          const favorite = makeFavorite({
            id: `native-${item.id}`,
            phrase: `${item.phrase} → ${item.spoken}`,
            category: `Native Flow · ${item.focus}`,
            meaning: `${item.meaning} · ${item.ipa}`,
            example: item.businessExample,
          });

          return (
            <Card key={item.id} className="shadow-none">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-blue-600">{item.focus}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.phrase} <span className="text-blue-600">→ {item.spoken}</span>
                  </h3>
                  <p className="mt-2 font-mono text-sm text-slate-500">{item.ipa}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.meaning}</p>
                </div>
                <FavoriteButton
                  active={isFavorite(progress, favorite.id)}
                  onClick={() => toggleFavoriteItem(setProgress, favorite)}
                  label={item.phrase}
                />
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Sense group
                  </p>
                  <p className="mt-2 leading-7 text-slate-800">{renderMarkedText(item.senseGroup)}</p>
                </div>
                <div className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                    Business
                  </p>
                  <p className="mt-2 leading-7 text-slate-800">{renderMarkedText(item.businessExample)}</p>
                </div>
                <div className="rounded-2xl bg-slate-950 p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                    Daily life
                  </p>
                  <p className="mt-2 leading-7 text-slate-200">{renderMarkedText(item.dailyExample)}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function RealLifeEnglish({ progress, setProgress }) {
  const [category, setCategory] = useState(realLifeScenarios[0].category);
  const active = realLifeScenarios.find((item) => item.category === category);

  return (
    <div>
      <SectionHeader eyebrow="Real Life English" title="High-frequency American English by situation">
        <span>Daily speaking with sense groups and natural versions</span>
      </SectionHeader>

      <div className="grid gap-5 xl:grid-cols-[0.38fr_0.62fr]">
        <Card className="p-3 md:p-4">
          <div className="grid grid-cols-2 gap-2 xl:grid-cols-1">
            {realLifeScenarios.map((item) => (
              <button
                key={item.category}
                onClick={() => setCategory(item.category)}
                className={`rounded-2xl px-3 py-3 text-left text-sm font-semibold transition ${
                  category === item.category
                    ? "bg-slate-950 text-white"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </Card>

        <div className="grid gap-4">
          <Card className="shadow-none">
            <h3 className="text-xl font-semibold text-slate-950">{active.category} sentences</h3>
            <div className="mt-4 grid gap-3">
              {active.sentences.map((item) => {
                const favorite = makeFavorite({
                  id: `real-life-sentence-${item.id}`,
                  phrase: item.english,
                  category: `Real Life English · ${active.category}`,
                  meaning: item.meaning,
                  example: item.natural,
                });

                return (
                  <div key={item.id} className="rounded-2xl border border-slate-100 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-950">{item.english}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.meaning}</p>
                      </div>
                      <FavoriteButton
                        active={isFavorite(progress, favorite.id)}
                        onClick={() => toggleFavoriteItem(setProgress, favorite)}
                        label={item.english}
                      />
                    </div>
                    <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-sm leading-7 text-slate-700">
                      {renderMarkedText(item.natural)}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="shadow-none">
            <h3 className="text-xl font-semibold text-slate-950">{active.category} useful phrases</h3>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {active.phrases.map((item) => {
                const favorite = makeFavorite({
                  id: `real-life-phrase-${item.id}`,
                  phrase: item.english,
                  category: `Real Life Phrase · ${active.category}`,
                  meaning: item.meaning,
                  example: item.natural,
                });

                return (
                  <div key={item.id} className="flex items-start justify-between gap-3 rounded-2xl bg-blue-50 p-4">
                    <div>
                      <p className="font-semibold text-slate-950">{item.english}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.meaning}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{renderMarkedText(item.senseGroup)}</p>
                    </div>
                    <FavoriteButton
                      active={isFavorite(progress, favorite.id)}
                      onClick={() => toggleFavoriteItem(setProgress, favorite)}
                      label={item.english}
                    />
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function MyFavorites({ progress, setProgress }) {
  const favorites = progress.favorites;

  function removeFavorite(id) {
    setProgress((currentProgress) => {
      const current = normalizeProgress(currentProgress);
      return {
        ...current,
        favorites: current.favorites.filter((favorite) => favorite.id !== id),
      };
    });
  }

  return (
    <div>
      <SectionHeader eyebrow="My Favorites" title="Your saved FluentOS phrases">
        <span>{favorites.length} saved items</span>
      </SectionHeader>

      {favorites.length ? (
        <div className="grid gap-4 lg:grid-cols-2">
          {favorites.map((favorite) => (
            <Card key={favorite.id} className="shadow-none">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-blue-600">{favorite.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">{favorite.phrase}</h3>
                  <p className="mt-2 text-sm text-slate-500">{favorite.meaning}</p>
                </div>
                <button
                  onClick={() => removeFavorite(favorite.id)}
                  className="rounded-full bg-slate-100 p-3 text-slate-500 transition hover:bg-slate-200"
                  aria-label={`Remove ${favorite.phrase}`}
                >
                  <Trash2 size={17} />
                </button>
              </div>
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 leading-7 text-slate-700">
                {renderMarkedText(favorite.example)}
              </p>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-slate-500">
            No favorites yet. Use the star buttons in Daily Fluency, Native Flow, Real Life
            English, Voice Training, and Expression Library.
          </p>
        </Card>
      )}
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
      label: "Favorites",
      value: progress.favorites.length,
      detail: "Saved phrases and sentences",
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
    {
      label: "Native patterns",
      value: nativeFlowItems.length,
      detail: "IPA, linking, reductions",
    },
    {
      label: "Real-life categories",
      value: realLifeScenarios.length,
      detail: "Daily American scenarios",
    },
  ];

  return (
    <div>
      <SectionHeader eyebrow="Growth Dashboard" title="Your local learning operating system">
        <span>Private on this browser</span>
      </SectionHeader>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
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
            <p className="mt-2 text-slate-500">Review saved phrases before calls, travel, meetings, and CES follow-ups.</p>
          </div>
          <button
            onClick={() => setProgress(initialProgress)}
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          >
            Reset progress
          </button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {progress.favorites.length ? (
            progress.favorites.map((favorite) => (
              <span key={favorite.id} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                {favorite.phrase}
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
  const [storedProgress, setProgress] = useLocalStorage(
    "fluentos-progress",
    initialProgress,
    "leon-english-os-progress",
  );
  const progress = normalizeProgress(storedProgress);
  const contentRef = useRef(null);

  function selectModule(moduleId) {
    setActiveModule(moduleId);
    window.requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_32rem),#f8fafc]">
      <div className="mx-auto min-h-screen w-full max-w-7xl px-4 py-4 md:px-6 lg:py-6">
        <div className="mb-4 flex items-center justify-between rounded-[28px] border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur">
          <FluentLogo />
          <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 sm:flex">
            <PanelTop size={16} className="text-blue-600" />
            FluentOS V2
          </div>
        </div>

        <LandingHero progress={progress} />
        <TodayPractice progress={progress} setProgress={setProgress} />

        <div className="sticky top-0 z-30 mb-5 rounded-[26px] border border-white/80 bg-white/95 p-2 shadow-soft backdrop-blur">
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {modules.map((module) => {
              const Icon = module.icon;
              const active = activeModule === module.id;

              return (
                <button
                  key={module.id}
                  onClick={() => selectModule(module.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
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
        </div>

        <div ref={contentRef} className="scroll-mt-28 pb-8">
          <header className="mb-5 rounded-[28px] border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur md:p-5">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  FluentOS workspace
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                  {modules.find((module) => module.id === activeModule)?.label}
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:min-w-[420px]">
                <div className="rounded-2xl bg-slate-950 p-3 text-white">
                  <p className="text-2xl font-semibold">{progress.completedDaily.length}</p>
                  <p className="text-xs text-slate-300">Daily</p>
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-950">{progress.favorites.length}</p>
                  <p className="text-xs text-slate-500">Favorites</p>
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <p className="text-2xl font-semibold text-slate-950">{progress.presentationPracticeCount}</p>
                  <p className="text-xs text-slate-500">Talks</p>
                </div>
                <div className="rounded-2xl bg-blue-600 p-3 text-white">
                  <p className="text-2xl font-semibold">{progress.conversationPracticeCount}</p>
                  <p className="text-xs text-blue-100">Chats</p>
                </div>
              </div>
            </div>
          </header>

          {activeModule === "daily" && <DailyEnglish progress={progress} setProgress={setProgress} />}
          {activeModule === "shadowing" && <ShadowingCoach progress={progress} setProgress={setProgress} />}
          {activeModule === "native" && <NativeFlow progress={progress} setProgress={setProgress} />}
          {activeModule === "real-life" && <RealLifeEnglish progress={progress} setProgress={setProgress} />}
          {activeModule === "presentation" && (
            <PresentationCoach progress={progress} setProgress={setProgress} />
          )}
          {activeModule === "conversation" && (
            <ConversationSimulator progress={progress} setProgress={setProgress} />
          )}
          {activeModule === "phrases" && <PhraseBank progress={progress} setProgress={setProgress} />}
          {activeModule === "favorites" && <MyFavorites progress={progress} setProgress={setProgress} />}
          {activeModule === "progress" && <ProgressTracker progress={progress} setProgress={setProgress} />}
        </div>
      </div>
    </main>
  );
}

export default App;
