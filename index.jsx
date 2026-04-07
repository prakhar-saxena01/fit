import { useState } from "react";

const ACCENT = "#F97316";
const ACCENT2 = "#FBBF24";
const BG = "#0A0A0A";
const CARD = "#111111";
const CARD2 = "#1A1A1A";
const BORDER = "#222222";
const TEXT = "#E5E5E5";
const MUTED = "#888888";

const styles = {
  root: {
    background: BG,
    minHeight: "100vh",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    color: TEXT,
    padding: "0",
  },
  header: {
    background: `linear-gradient(135deg, #0A0A0A 0%, #1a0f00 100%)`,
    borderBottom: `1px solid ${BORDER}`,
    padding: "32px 24px 24px",
    position: "relative",
    overflow: "hidden",
  },
  headerAccent: {
    position: "absolute",
    top: 0, right: 0,
    width: 200, height: 200,
    background: `radial-gradient(circle, ${ACCENT}22 0%, transparent 70%)`,
    pointerEvents: "none",
  },
  tag: {
    display: "inline-block",
    background: `${ACCENT}22`,
    border: `1px solid ${ACCENT}44`,
    color: ACCENT,
    fontSize: 11,
    fontFamily: "'Courier New', monospace",
    letterSpacing: 2,
    padding: "4px 10px",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  title: {
    fontSize: "clamp(24px, 5vw, 40px)",
    fontWeight: "bold",
    lineHeight: 1.1,
    margin: "0 0 8px",
    letterSpacing: -1,
  },
  subtitle: {
    color: MUTED,
    fontSize: 14,
    fontFamily: "'Courier New', monospace",
    margin: 0,
  },
  statsRow: {
    display: "flex",
    gap: 12,
    marginTop: 20,
    flexWrap: "wrap",
  },
  stat: {
    background: CARD2,
    border: `1px solid ${BORDER}`,
    padding: "10px 16px",
    flex: "1 1 80px",
    minWidth: 80,
  },
  statLabel: { color: MUTED, fontSize: 10, fontFamily: "'Courier New', monospace", letterSpacing: 1, textTransform: "uppercase" },
  statVal: { color: ACCENT, fontSize: 20, fontWeight: "bold", marginTop: 2 },
  nav: {
    display: "flex",
    gap: 0,
    overflowX: "auto",
    borderBottom: `1px solid ${BORDER}`,
    background: "#0D0D0D",
    padding: "0 16px",
  },
  navBtn: (active) => ({
    background: "none",
    border: "none",
    borderBottom: active ? `2px solid ${ACCENT}` : "2px solid transparent",
    color: active ? ACCENT : MUTED,
    fontFamily: "'Courier New', monospace",
    fontSize: 11,
    letterSpacing: 1,
    padding: "14px 14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    transition: "color 0.2s",
  }),
  content: { padding: "24px 16px", maxWidth: 700, margin: "0 auto" },
  section: { marginBottom: 32 },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "'Courier New', monospace",
    letterSpacing: 3,
    color: ACCENT,
    textTransform: "uppercase",
    marginBottom: 16,
    paddingBottom: 8,
    borderBottom: `1px solid ${BORDER}`,
  },
  card: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    padding: "16px",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 6,
    color: TEXT,
  },
  cardSub: { color: MUTED, fontSize: 13, marginBottom: 0, lineHeight: 1.6 },
  pill: (color = ACCENT) => ({
    display: "inline-block",
    background: `${color}22`,
    border: `1px solid ${color}44`,
    color: color,
    fontSize: 10,
    fontFamily: "'Courier New', monospace",
    padding: "2px 8px",
    marginRight: 6,
    marginBottom: 4,
    letterSpacing: 1,
  }),
  exerciseRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "12px 0",
    borderBottom: `1px solid ${BORDER}`,
    gap: 12,
  },
  exerciseName: { fontSize: 14, fontWeight: "bold", marginBottom: 3 },
  exerciseNote: { color: MUTED, fontSize: 12, lineHeight: 1.5 },
  setsBadge: {
    background: `${ACCENT}22`,
    border: `1px solid ${ACCENT}44`,
    color: ACCENT,
    fontSize: 11,
    fontFamily: "'Courier New', monospace",
    padding: "4px 10px",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  weekBadge: (active) => ({
    background: active ? ACCENT : CARD2,
    color: active ? "#000" : MUTED,
    fontSize: 11,
    fontFamily: "'Courier New', monospace",
    padding: "6px 12px",
    border: `1px solid ${active ? ACCENT : BORDER}`,
    cursor: "pointer",
    transition: "all 0.2s",
    fontWeight: active ? "bold" : "normal",
  }),
  weekRow: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 },
  highlight: {
    background: `${ACCENT}15`,
    border: `1px solid ${ACCENT}33`,
    borderLeft: `3px solid ${ACCENT}`,
    padding: "12px 16px",
    marginBottom: 12,
    fontSize: 13,
    lineHeight: 1.7,
    color: TEXT,
  },
  mealCard: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    padding: "14px 16px",
    marginBottom: 10,
  },
  mealTime: {
    color: ACCENT,
    fontSize: 11,
    fontFamily: "'Courier New', monospace",
    letterSpacing: 2,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  mealFood: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  mealPro: { color: ACCENT2, fontSize: 12, fontFamily: "'Courier New', monospace" },
  progressBar: (pct) => ({
    height: 4,
    background: BORDER,
    marginTop: 8,
    position: "relative",
    overflow: "hidden",
  }),
  progressFill: (pct, color = ACCENT) => ({
    height: "100%",
    width: `${pct}%`,
    background: color,
    transition: "width 0.5s",
  }),
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 13,
  },
  th: {
    background: CARD2,
    color: ACCENT,
    fontFamily: "'Courier New', monospace",
    fontSize: 10,
    letterSpacing: 2,
    padding: "10px 12px",
    textAlign: "left",
    borderBottom: `1px solid ${BORDER}`,
    textTransform: "uppercase",
  },
  td: {
    padding: "10px 12px",
    borderBottom: `1px solid ${BORDER}`,
    color: TEXT,
    verticalAlign: "top",
  },
  mobilityBlock: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    padding: 16,
    marginBottom: 10,
  },
  mobilityTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 8 },
  mobilityItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: `1px solid ${BORDER}`,
    fontSize: 13,
  },
};

const TABS = ["Overview", "12-Week Plan", "Workouts", "Nutrition", "Mobility", "Sleep", "Milestones"];

// ─── OVERVIEW ───────────────────────────────────────────────────────
function Overview() {
  const issues = [
    { label: "Anterior Pelvic Tilt", desc: "Classic desk posture. Lower back arches, pelvis tilts forward, glutes go inactive. Causes your back & pelvis pain.", fix: "Hip flexor stretches + glute activation daily" },
    { label: "Forward Head Posture", desc: "For every inch your head juts forward, it adds ~10 lbs of effective weight on your spine. Causes neck/shoulder tightness.", fix: "Chin tucks + face pulls in every workout" },
    { label: "Weak Posterior Chain", desc: "Your glutes, hamstrings, and lower back are undertrained. This is the root cause of most of your body issues.", fix: "Hip thrusts, RDLs, and deadlifts weekly" },
    { label: "Protein Deficit", desc: "Standard Indian veg meals give ~40–60g protein. You need 130–150g. Muscle can't be built without protein.", fix: "Soya chunks, paneer, curd, dal every meal" },
    { label: "Sleep Debt", desc: "5–6 hrs spikes cortisol (a fat-storage hormone), kills muscle recovery, and is 70% responsible for your low energy.", fix: "Fix sleep first — everything else depends on it" },
  ];

  const principles = [
    { n: "01", title: "Progressive Overload", desc: "Add a little more weight or one more rep each week. This is the single law of muscle building. Nothing else matters more." },
    { n: "02", title: "Protein at Every Meal", desc: "Every single meal should have a protein source. Not sometimes. Not most times. Every time." },
    { n: "03", title: "Consistency > Intensity", desc: "A moderate workout done 4x a week beats one brutal session. Show up. Even on off days." },
    { n: "04", title: "Sleep is Training", desc: "Muscle is built when you sleep, not when you lift. 7.5 hrs is not optional — it is part of your program." },
    { n: "05", title: "Mobility is Non-Negotiable", desc: "12 minutes of mobility daily will fix your posture faster than any workout. Do it before bed, every night." },
  ];

  return (
    <div style={styles.content}>
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Your Starting Reality</div>
        <div style={styles.highlight}>
          BMI ~30.9 — overweight, but at 25 with zero training history, you have a massive advantage. Beginners who are overweight often experience <strong style={{color:ACCENT}}>body recomposition</strong> — losing fat and gaining muscle at the same time. The first 3 months will be your most dramatic transformation ever.
        </div>
        {issues.map(i => (
          <div key={i.label} style={styles.card}>
            <div style={styles.cardTitle}>{i.label}</div>
            <div style={{...styles.cardSub, marginBottom: 8}}>{i.desc}</div>
            <span style={styles.pill(ACCENT2)}>FIX: {i.fix}</span>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>5 Core Principles</div>
        {principles.map(p => (
          <div key={p.n} style={{...styles.card, display:"flex", gap:16}}>
            <div style={{color:ACCENT, fontFamily:"'Courier New', monospace", fontSize:22, fontWeight:"bold", flexShrink:0, lineHeight:1}}>{p.n}</div>
            <div>
              <div style={styles.cardTitle}>{p.title}</div>
              <div style={styles.cardSub}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>3-Phase Roadmap</div>
        {[
          { phase: "Phase 1", range: "Months 1–3", title: "Build the Foundation", items: ["Fix posture & movement patterns", "Learn all gym machines", "Build base stamina & endurance", "Eliminate back & shoulder pain", "Establish sleep & eating habits"], color: ACCENT },
          { phase: "Phase 2", range: "Months 4–8", title: "Build the Engine", items: ["Progressive overload on all lifts", "Visible muscle development", "Cardio capacity expansion", "Body recomposition accelerates", "Introduce jogging & intervals"], color: ACCENT2 },
          { phase: "Phase 3", range: "Month 9+", title: "Sculpt & Perform", items: ["Athletic conditioning", "Strength benchmarks", "Advanced mobility", "Full body capability", "Maintain & refine"], color: "#34D399" },
        ].map(ph => (
          <div key={ph.phase} style={{...styles.card, borderLeft: `3px solid ${ph.color}`}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10}}>
              <span style={{...styles.pill(ph.color)}}>{ph.phase}</span>
              <span style={{color:MUTED, fontSize:12, fontFamily:"'Courier New', monospace"}}>{ph.range}</span>
            </div>
            <div style={{fontSize:16, fontWeight:"bold", marginBottom:10}}>{ph.title}</div>
            {ph.items.map(it => (
              <div key={it} style={{fontSize:13, color:MUTED, padding:"4px 0", display:"flex", gap:8}}>
                <span style={{color:ph.color}}>→</span> {it}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 12-WEEK PLAN ────────────────────────────────────────────────────
function TwelveWeekPlan() {
  const weeks = [
    { w:1, title:"Just Show Up", focus:"Orientation", desc:"Go to the gym. Learn where everything is. Do treadmill + 1 machine + plank. That's it. The goal is zero intimidation.", key:["Treadmill 15 min walk", "1 machine of choice (ask staff)", "Plank 3×max hold", "Mobility routine at night"] },
    { w:2, title:"Learn the Machines", focus:"Orientation", desc:"Add one more machine. Start understanding the Upper/Lower split. Don't go heavy — practice form only.", key:["Treadmill 20 min", "2 machines total", "Begin Day 1 & 2 structure loosely", "12 min mobility nightly"] },
    { w:3, title:"Follow the Program", focus:"Foundation", desc:"Begin the actual 4-day Upper/Lower split as written. Light weights, strict form. Log your weights.", key:["Full Day 1/2/4/5 structure", "Log every exercise & weight", "Walk 8,000 steps on off days", "Fix sleep — aim for 7 hrs"] },
    { w:4, title:"Add 5% Weight", focus:"Foundation", desc:"Whatever you lifted in Week 3, add 5% to each exercise. This is progressive overload — the core law of fitness.", key:["+5% on all exercises", "Cardio: add 5 min to treadmill", "Check posture in mirror", "Mobility daily — no skipping"] },
    { w:5, title:"Increase Intensity", focus:"Foundation", desc:"Reduce rest between sets from 90s to 75s. This builds stamina. Keep adding weight where possible.", key:["Rest: 75 sec between sets", "Week 5 weights +5% from Week 4", "Add stationary bike 1 day", "Dial in nutrition — protein first"] },
    { w:6, title:"Deload Week", focus:"Recovery", desc:"Reduce weight by 20%, cut sets from 3 to 2. This is NOT skipping — it forces muscle recovery and prevents plateau.", key:["80% of usual weight", "2 sets instead of 3", "Extra stretching & mobility", "Prioritize 8 hrs sleep this week"] },
    { w:7, title:"Phase 1 Peak", focus:"Foundation", desc:"Come back stronger from deload. You should hit personal records this week. Your body is adapted.", key:["New personal records on lifts", "Treadmill: 25 min", "3 days bike or walking cardio", "Reassess posture improvements"] },
    { w:8, title:"Intensify Cardio", focus:"Stamina Build", desc:"Start incline treadmill walks (incline 5–8). Introduce 10-minute light jog intervals if comfortable.", key:["Incline treadmill walks", "Light jog intervals: 1 min on/2 min off", "+10% on strength exercises", "Track progress — photos & measurements"] },
    { w:9, title:"Compound Lifts", focus:"Stamina Build", desc:"Introduce barbell squats and deadlifts with a trainer or YouTube form check. These are the kings of muscle building.", key:["Learn barbell squat (empty bar first)", "Learn conventional deadlift", "Keep all other lifts progressing", "Cardio: 3 days 30 min each"] },
    { w:10, title:"Volume Increase", focus:"Stamina Build", desc:"Add a 4th set to your major compound exercises. More volume = more muscle signal.", key:["4 sets on squats, deadlifts, press, rows", "Jogging intervals: 2 min on/2 min off", "Mobility: add 5 min for hip work", "Protein: track seriously this week"] },
    { w:11, title:"Deload Week 2", focus:"Recovery", desc:"Second deload. By now you've been training 10 weeks — your CNS needs this. Come back fired up.", key:["80% weight, 2 sets", "Light walking only for cardio", "Sleep 8+ hrs every night", "Prep for the final push"] },
    { w:12, title:"Foundation Complete", focus:"Milestone", desc:"Full test week. Max out on your best lifts, measure body, take photos. Compare to Week 1. This is your new baseline.", key:["Attempt personal records", "Full body measurements", "Progress photos", "Plan Phase 2 with new benchmarks"] },
  ];

  const [sel, setSel] = useState(1);
  const w = weeks.find(x => x.w === sel);
  const focusColor = { Orientation: "#60A5FA", Foundation: ACCENT, "Stamina Build": ACCENT2, Recovery: "#34D399", Milestone: "#A78BFA" };

  return (
    <div style={styles.content}>
      <div style={styles.highlight}>
        This is a <strong style={{color:ACCENT}}>12-week beginner foundation program.</strong> Each week builds on the last. Never skip a deload week — they are where real progress is locked in.
      </div>
      <div style={styles.weekRow}>
        {weeks.map(wk => (
          <button key={wk.w} style={styles.weekBadge(sel===wk.w)} onClick={()=>setSel(wk.w)}>W{wk.w}</button>
        ))}
      </div>
      {w && (
        <div style={{...styles.card, borderLeft:`3px solid ${focusColor[w.focus]||ACCENT}`}}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10}}>
            <span style={styles.pill(focusColor[w.focus]||ACCENT)}>{w.focus}</span>
            <span style={{color:MUTED, fontSize:12, fontFamily:"'Courier New', monospace"}}>WEEK {w.w} OF 12</span>
          </div>
          <div style={{fontSize:20, fontWeight:"bold", marginBottom:10}}>{w.title}</div>
          <div style={{...styles.cardSub, marginBottom:16}}>{w.desc}</div>
          <div style={{fontSize:11, fontFamily:"'Courier New', monospace", color:ACCENT, letterSpacing:2, marginBottom:10, textTransform:"uppercase"}}>This Week's Focus</div>
          {w.key.map(k => (
            <div key={k} style={{display:"flex", gap:10, padding:"6px 0", borderBottom:`1px solid ${BORDER}`, fontSize:13}}>
              <span style={{color:focusColor[w.focus]||ACCENT, flexShrink:0}}>▸</span> {k}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── WORKOUTS ────────────────────────────────────────────────────────
function Workouts() {
  const [day, setDay] = useState("D1");

  const days = {
    D1: {
      label: "Day 1 — Upper Push",
      note: "Monday. Chest, shoulders, triceps. Also hits your posture muscles.",
      warmup: "5 min treadmill walk + arm circles + band pull-aparts x20",
      exercises: [
        { name: "Incline Dumbbell Press", sets: "3×12", note: "Start light. Feel your chest stretch at bottom. Elbows at 45° — not flared out.", why: "Upper chest + front deltoid" },
        { name: "Seated Dumbbell Shoulder Press", sets: "3×12", note: "Don't arch your back. Sit upright. Lower to ear level, press overhead.", why: "Deltoids, triceps" },
        { name: "Cable Chest Fly", sets: "3×15", note: "Light weight. Full stretch across the chest. Imagine hugging a tree.", why: "Chest isolation, full range of motion" },
        { name: "Tricep Pushdown (Cable)", sets: "3×15", note: "Elbows stay pinned at your sides the whole time. Only forearms move.", why: "Triceps, arm size & lockout strength" },
        { name: "Face Pulls (Cable)", sets: "3×20", note: "CRUCIAL for your shoulder/neck tightness. Pull to forehead level, elbows flare out. Use light weight.", why: "Rear delts + rotator cuff — fixes posture" },
        { name: "Plank", sets: "3×max", note: "Elbows under shoulders. Squeeze everything. Don't hold breath. Even 15 secs counts.", why: "Core, anti-rotation strength" },
      ],
      cardio: "10 min treadmill walk (incline 3) after workout",
      cool: "Doorway chest stretch 60 sec + Neck rolls 5 each side",
    },
    D2: {
      label: "Day 2 — Lower Quad",
      note: "Tuesday. Quads, calves, core. Builds your leg foundation safely.",
      warmup: "5 min bike + bodyweight squats x15 + hip circles x10 each leg",
      exercises: [
        { name: "Goblet Squat (Dumbbell)", sets: "3×12", note: "Hold dumbbell at chest. Feet shoulder-width. Sit back and DOWN. Knees track over toes. Do NOT let back round.", why: "Teaches squat pattern. Quads, glutes, core." },
        { name: "Leg Press", sets: "3×15", note: "Feet shoulder-width, mid-plate. Lower until thighs are parallel. Don't lock out knees at top.", why: "Safe quad overload for beginners" },
        { name: "Leg Extension", sets: "3×15", note: "Slow on the way down (3 seconds). Contract hard at top.", why: "Quad isolation, knee strengthening" },
        { name: "Walking Lunges", sets: "3×10 each", note: "Keep torso upright. Front knee doesn't go past toes. Take big steps.", why: "Balance, quad & glute development" },
        { name: "Calf Raises (Machine/Smith)", sets: "4×20", note: "Full range — all the way up, all the way down. Pause at bottom for 1 sec.", why: "Calf development, ankle stability" },
        { name: "Dead Bug", sets: "3×10 each side", note: "Lie on back. Lower opposite arm and leg slowly while keeping lower back pressed to floor. KEY for your back pain.", why: "Core stability, protects lower back" },
      ],
      cardio: "10 min stationary bike (easy pace) after workout",
      cool: "Kneeling hip flexor stretch 60s each + Cat-Cow 10 reps",
    },
    D3: {
      label: "Day 3 — REST + Mobility",
      note: "Wednesday. Active recovery. Do NOT skip mobility — this is where your posture heals.",
      warmup: "",
      exercises: [],
      cardio: "Optional: 20–30 min slow walk outdoors",
      cool: "",
      restDay: true,
    },
    D4: {
      label: "Day 4 — Upper Pull",
      note: "Thursday. Back, biceps, rear delts. The muscles that fix your posture.",
      warmup: "5 min treadmill + band pull-aparts x20 + shoulder rotations",
      exercises: [
        { name: "Lat Pulldown (Cable)", sets: "3×12", note: "Grip slightly wider than shoulders. Pull to upper chest, lean back slightly. SQUEEZE lats at bottom.", why: "Lats, biceps — the V-taper muscle" },
        { name: "Seated Cable Row", sets: "3×12", note: "Sit tall, pull to belly button. Squeeze shoulder blades together. Don't rock back and forth.", why: "Mid-back thickness, posture" },
        { name: "Single-Arm Dumbbell Row", sets: "3×12 each", note: "Knee and hand on bench. Pull elbow to ceiling. Don't rotate your torso.", why: "Unilateral back development, grip strength" },
        { name: "Dumbbell Bicep Curl", sets: "3×15", note: "Elbows pinned at sides. Full range — all the way down. Supinate (rotate) at top.", why: "Biceps, arm aesthetics" },
        { name: "Rear Delt Fly (Pec Deck or DB)", sets: "3×15", note: "Lean forward slightly. Arms slightly bent. Squeeze rear delts hard. CRITICAL for fixing rounded shoulders.", why: "Rear deltoids — your posture fix" },
        { name: "Hanging Knee Raises", sets: "3×12", note: "Hang from bar. Raise knees to chest slowly. Lower with control. Grip strength bonus.", why: "Lower abs, core, grip" },
      ],
      cardio: "10 min incline treadmill walk after workout",
      cool: "Thread the needle stretch x10 each + Chin tucks x15",
    },
    D5: {
      label: "Day 5 — Lower Hinge",
      note: "Friday or Saturday. Hamstrings, glutes, posterior chain. This is your back-pain cure day.",
      warmup: "5 min bike + glute bridges x20 + leg swings x10 each",
      exercises: [
        { name: "Romanian Deadlift (RDL)", sets: "3×12", note: "MOST IMPORTANT for your back pain. Hinge at hips, soft knees, bar stays close to legs, feel hamstring stretch, drive hips forward to stand. Go lighter than you think.", why: "Hamstrings, glutes, lower back rehab" },
        { name: "Leg Curl (Machine)", sets: "3×15", note: "Lie face down. Curl heels to glutes. Slow on the way down (3 seconds).", why: "Hamstring isolation, knee health" },
        { name: "Barbell/Dumbbell Hip Thrust", sets: "3×15", note: "Back on bench, weight on hips, drive hips UP. Squeeze glutes HARD at top. Your pelvic tilt fix.", why: "Glutes — fixes pelvic tilt, builds powerful hips" },
        { name: "Sumo Dumbbell Deadlift", sets: "3×10", note: "Wide stance, toes out, dumbbell between legs. Chest up, hinge down, stand tall. Easier on lower back than conventional.", why: "Full posterior chain, hip mobility" },
        { name: "Side-Lying Clamshells", sets: "3×15 each", note: "Lie on side, knees bent. Open top knee like a clamshell without rotating hips. Feels easy — that means you need it most.", why: "Hip abductors, glute med — pelvic stability" },
        { name: "Hollow Body Hold", sets: "3×20 sec", note: "Lie on back. Press lower back down. Raise legs + shoulders slightly. Hold. Breathe.", why: "Deep core, posture, athletic foundation" },
      ],
      cardio: "10 min bike cool down",
      cool: "90/90 hip stretch 60s each side + pigeon pose 60s each",
    },
  };

  const d = days[day];
  const dayKeys = ["D1","D2","D3","D4","D5"];
  const dayLabels = ["Day 1\nUpper Push","Day 2\nLower Quad","Day 3\nRest","Day 4\nUpper Pull","Day 5\nLower Hinge"];

  return (
    <div style={styles.content}>
      <div style={{display:"flex", gap:6, marginBottom:20, overflowX:"auto", paddingBottom:4}}>
        {dayKeys.map((k,i) => (
          <button key={k} style={{...styles.weekBadge(day===k), padding:"8px 12px", textAlign:"center", minWidth:70, whiteSpace:"pre-line", lineHeight:1.4, fontSize:10}}
            onClick={()=>setDay(k)}>
            {dayLabels[i]}
          </button>
        ))}
      </div>

      {d.restDay ? (
        <div>
          <div style={styles.highlight}>
            <strong style={{color:ACCENT}}>Rest day is not an optional day off.</strong> It is active recovery. Your muscles grow and repair TODAY. Skip this and your gains slow down.
          </div>
          <div style={styles.sectionTitle}>Mandatory Mobility — Do All Of This</div>
          {[
            { zone: "Lower Back & Pelvis", exercises: [
              { name: "90/90 Hip Stretch", dur: "60 sec each side", note: "Sit on floor, both knees at 90°. Lean forward over front leg. Breathe into the stretch." },
              { name: "Kneeling Hip Flexor Stretch", dur: "60 sec each side", note: "Lunge position. Back knee on floor. Push hips forward gently. Squeeze back glute." },
              { name: "Glute Bridge", dur: "2×20 reps", note: "On back, feet flat, drive hips up. Squeeze glutes hard at top. Wakes up your lazy glutes." },
              { name: "Cat-Cow", dur: "10 reps slow", note: "On all fours. Arch and round your back slowly. Breathe out when rounding." },
            ]},
            { zone: "Shoulders & Neck", exercises: [
              { name: "Chin Tucks", dur: "3×15 reps", note: "Make a double chin. Hold 3 sec. Reverses forward head posture." },
              { name: "Doorway Chest Stretch", dur: "60 sec", note: "Arms on door frame at 90°. Step through gently. Feel your chest open." },
              { name: "Thread the Needle", dur: "10 reps each side", note: "All fours. Slide one arm under body, rotating thoracic spine. Great for shoulder tightness." },
              { name: "Slow Neck Rolls", dur: "5 each direction", note: "Very slow. Ear to shoulder, chin to chest, other side. Never hyperextend back." },
            ]},
          ].map(zone => (
            <div key={zone.zone} style={styles.mobilityBlock}>
              <div style={styles.mobilityTitle}>{zone.zone}</div>
              {zone.exercises.map(ex => (
                <div key={ex.name} style={{padding:"8px 0", borderBottom:`1px solid ${BORDER}`}}>
                  <div style={{display:"flex", justifyContent:"space-between", marginBottom:3}}>
                    <span style={{fontSize:13, fontWeight:"bold"}}>{ex.name}</span>
                    <span style={{color:ACCENT, fontSize:11, fontFamily:"'Courier New', monospace"}}>{ex.dur}</span>
                  </div>
                  <div style={{color:MUTED, fontSize:12}}>{ex.note}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div style={styles.card}>
            <div style={{...styles.pill(ACCENT), marginBottom:8}}>{d.label}</div>
            <div style={{color:MUTED, fontSize:13}}>{d.note}</div>
          </div>

          <div style={styles.sectionTitle}>Warmup</div>
          <div style={styles.highlight}>{d.warmup}</div>

          <div style={styles.sectionTitle}>Exercises</div>
          {d.exercises.map((ex, i) => (
            <div key={ex.name} style={{...styles.card, marginBottom:10}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8}}>
                <div style={{fontSize:15, fontWeight:"bold"}}>{ex.name}</div>
                <div style={styles.setsBadge}>{ex.sets}</div>
              </div>
              <div style={{color:MUTED, fontSize:12, marginBottom:6, lineHeight:1.6}}>{ex.note}</div>
              <span style={styles.pill(ACCENT2)}>Target: {ex.why}</span>
            </div>
          ))}

          <div style={styles.sectionTitle}>Cardio Finisher</div>
          <div style={styles.highlight}>{d.cardio}</div>

          {d.cool && (<>
            <div style={styles.sectionTitle}>Cool Down</div>
            <div style={styles.highlight}>{d.cool}</div>
          </>)}
        </div>
      )}
    </div>
  );
}

// ─── NUTRITION ────────────────────────────────────────────────────────
function Nutrition() {
  const proteins = [
    { food: "Soya Chunks (dry)", per: "100g", protein: "52g", note: "Your #1 weapon. Cheapest protein source in India. Add to curries, pulao, everything.", icon: "⭐" },
    { food: "Paneer", per: "100g", protein: "18g", note: "Versatile. Add to sabzi, eat plain with spices, in salads.", icon: "" },
    { food: "Chana (cooked)", per: "1 cup", protein: "15g", note: "Rajma, chole, chana — eat these at every possible opportunity.", icon: "" },
    { food: "Moong Dal (cooked)", per: "1 cup", protein: "14g", note: "Easier to digest than other dals. Great for dinner.", icon: "" },
    { food: "Dahi (curd)", per: "1 cup", protein: "10g", note: "Have daily. Great for gut health too. Unsweetened only.", icon: "" },
    { food: "Milk (whole)", per: "1 glass", protein: "8g", note: "Pre-bed or post-workout. Casein protein = slow digesting = muscle overnight.", icon: "" },
    { food: "Peanut Butter", per: "2 tbsp", protein: "8g", note: "Cheap, calorie-dense, great snack. Get the plain kind without added sugar.", icon: "" },
    { food: "Sattu (Roasted Chana Flour)", per: "30g", protein: "10g", note: "Indian superfood. Mix with water + lemon. Best post-workout drink in India.", icon: "" },
  ];

  const meals = [
    { time: "7:30 AM — Breakfast", food: "2 rotis + sabzi + 1 cup dahi + handful roasted chana", protein: "~25g protein", note: "Don't skip. Breakfast breaks overnight fast and sets up the day." },
    { time: "10:30 AM — Mid-Morning", food: "1 glass milk OR sattu drink with lemon", protein: "~10g protein", note: "Keeps you fuelled. Prevents overeating at lunch." },
    { time: "1:00 PM — Lunch", food: "1 cup soya chunk sabzi OR rajma + 2 rotis + salad + lassi/curd", protein: "~35g protein", note: "Make soya chunks a lunch staple. Biggest protein meal of the day." },
    { time: "4:00 PM — Pre-Workout Snack", food: "Banana + peanut butter OR chana chaat", protein: "~12g protein", note: "45 min before workout. Gives energy without making you feel heavy." },
    { time: "7:30 PM — Post-Workout / Dinner", food: "Moong/chana dal (thick) + 1-2 rotis + paneer sabzi + salad", protein: "~40g protein", note: "Largest meal. Protein for overnight muscle repair." },
    { time: "9:30 PM — Optional", food: "1 glass warm milk", protein: "~8g protein", note: "Casein protein works overnight. Helps with sleep too." },
  ];

  const total = 130;
  const current = 50;

  return (
    <div style={styles.content}>
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Your Protein Gap</div>
        <div style={styles.card}>
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:8}}>
            <span style={{fontSize:13}}>Current intake (estimated)</span>
            <span style={{color:MUTED, fontFamily:"'Courier New',monospace"}}>{current}g / day</span>
          </div>
          <div style={styles.progressBar()}>
            <div style={styles.progressFill(Math.round(current/total*100), "#EF4444")}></div>
          </div>
          <div style={{display:"flex", justifyContent:"space-between", marginTop:16, marginBottom:8}}>
            <span style={{fontSize:13}}>Your target</span>
            <span style={{color:ACCENT, fontFamily:"'Courier New',monospace"}}>{total}–150g / day</span>
          </div>
          <div style={styles.progressBar()}>
            <div style={styles.progressFill(100)}></div>
          </div>
          <div style={{...styles.highlight, marginTop:16, marginBottom:0}}>
            You need to <strong style={{color:ACCENT}}>almost triple your protein intake.</strong> This is the single most important diet change. Muscle cannot be built without sufficient protein, no matter how hard you train.
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Best Indian Veg Protein Sources</div>
        {proteins.map(p => (
          <div key={p.food} style={styles.card}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
              <div>
                <div style={{fontSize:14, fontWeight:"bold", marginBottom:4}}>{p.icon} {p.food}</div>
                <div style={{color:MUTED, fontSize:12, lineHeight:1.6}}>{p.note}</div>
              </div>
              <div style={{textAlign:"right", flexShrink:0, marginLeft:12}}>
                <div style={{color:ACCENT, fontWeight:"bold", fontSize:16}}>{p.protein}</div>
                <div style={{color:MUTED, fontSize:11, fontFamily:"'Courier New',monospace"}}>per {p.per}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Daily Meal Plan (~2,100 kcal)</div>
        {meals.map(m => (
          <div key={m.time} style={styles.mealCard}>
            <div style={styles.mealTime}>{m.time}</div>
            <div style={styles.mealFood}>{m.food}</div>
            <div style={{color:ACCENT2, fontSize:12, fontFamily:"'Courier New',monospace", marginBottom:4}}>{m.protein}</div>
            <div style={{color:MUTED, fontSize:12}}>{m.note}</div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Simple Rules</div>
        {[
          "Every meal must have a protein source — not sometimes, always",
          "Reduce plain white rice — replace half with dal or soya chunks",
          "Drink 3.5–4 litres of water daily (set phone reminders if needed)",
          "Cut deep-fried snacks to 2x per week max",
          "Never skip breakfast — your metabolism needs that ignition",
          "Don't drink your calories — avoid juice, chai with sugar, cold drinks",
        ].map(r => (
          <div key={r} style={{display:"flex", gap:10, padding:"10px 0", borderBottom:`1px solid ${BORDER}`, fontSize:13}}>
            <span style={{color:ACCENT, flexShrink:0}}>✓</span> {r}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MOBILITY ────────────────────────────────────────────────────────
function Mobility() {
  const routines = [
    {
      title: "Morning Activation (5 min) — Do Before Getting Up",
      note: "Wakes your body up, activates glutes, reduces morning stiffness. Takes 5 min in bed or on the floor.",
      exercises: [
        { name: "Glute Bridges", dur: "2×20", note: "On back. Drive hips up. Squeeze. Wakes up glutes that have been off all night." },
        { name: "Dead Bug", dur: "2×8 each side", note: "Lower back pressed to floor. Opposite arm + leg out slowly. Core activates." },
        { name: "Cat-Cow", dur: "10 slow reps", note: "All fours. Arch and round. Breathe out when rounding. Mobilises spine." },
        { name: "Chin Tucks", dur: "3×15 reps", note: "Make a double chin. Hold 3 sec. Resets forward head posture each morning." },
      ]
    },
    {
      title: "Pre-Workout Warmup (5–7 min) — Before Gym",
      note: "Prepares joints, reduces injury risk, increases range of motion.",
      exercises: [
        { name: "Hip Circles", dur: "10 each direction", note: "Stand, hands on hips, make big circles. Lubes the hip joint." },
        { name: "Leg Swings (front-back)", dur: "15 each leg", note: "Hold wall, swing leg front to back. Loosens hip flexors." },
        { name: "Leg Swings (side-to-side)", dur: "15 each leg", note: "Hip abductor activation." },
        { name: "Arm Circles", dur: "10 forward, 10 back", note: "Full range shoulder rotations. Gets rotator cuff ready." },
        { name: "Band Pull-Aparts", dur: "2×20", note: "If gym has bands. Crucial for shoulder warmup. Prevents impingement." },
        { name: "Bodyweight Squats", dur: "15 reps", note: "Full depth, slow. Warms up knees, hips, ankles." },
      ]
    },
    {
      title: "Night Mobility Routine (12 min) — Every Single Night",
      note: "This is your posture fix. Targets all 3 of your problem zones. Do this before sleep, non-negotiable.",
      exercises: [
        { name: "90/90 Hip Stretch", dur: "60 sec each side", note: "Sit on floor, both knees bent at 90°. Lean forward over front leg. Breathe deep. FIXES pelvic tilt." },
        { name: "Kneeling Hip Flexor Stretch", dur: "60 sec each side", note: "Lunge, back knee down. Push hips forward, squeeze back glute. Releases tight hip flexors from sitting all day." },
        { name: "Doorway Chest Stretch", dur: "60 sec", note: "Arms at 90° on door frame. Step through. Feel chest open. Reverses rounded shoulders." },
        { name: "Thread the Needle", dur: "8 reps each side", note: "On all fours. Slide one arm under body. Rotates thoracic spine. Releases shoulder and mid-back tension." },
        { name: "Pigeon Pose (or Figure 4)", dur: "60 sec each side", note: "Deep hip opener. Releases piriformis — a major contributor to your lower back and pelvic pain." },
        { name: "Seated Forward Fold", dur: "60 sec", note: "Legs straight, reach for toes. Hamstrings + lower back release." },
        { name: "Chin Tucks", dur: "3×15 reps", note: "Before sleep. Daily chin tucks over weeks literally reshape posture." },
        { name: "Neck Side Stretch", dur: "30 sec each side", note: "Ear to shoulder, gentle hold. No forcing. Your neck muscles need daily love." },
      ]
    }
  ];

  return (
    <div style={styles.content}>
      <div style={styles.highlight}>
        <strong style={{color:ACCENT}}>Your posture issues will not fix themselves in the gym alone.</strong> The night mobility routine is the most important 12 minutes of your day. Within 3 weeks of doing this consistently, your back stiffness will drop significantly. This is not optional.
      </div>
      {routines.map(r => (
        <div key={r.title} style={{...styles.mobilityBlock, marginBottom:16}}>
          <div style={{...styles.mobilityTitle, color:ACCENT}}>{r.title}</div>
          <div style={{color:MUTED, fontSize:12, marginBottom:14}}>{r.note}</div>
          {r.exercises.map(ex => (
            <div key={ex.name} style={{padding:"10px 0", borderBottom:`1px solid ${BORDER}`}}>
              <div style={{display:"flex", justifyContent:"space-between", marginBottom:4}}>
                <span style={{fontSize:13, fontWeight:"bold"}}>{ex.name}</span>
                <span style={{color:ACCENT, fontSize:11, fontFamily:"'Courier New',monospace", flexShrink:0, marginLeft:8}}>{ex.dur}</span>
              </div>
              <div style={{color:MUTED, fontSize:12, lineHeight:1.5}}>{ex.note}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── SLEEP ────────────────────────────────────────────────────────────
function Sleep() {
  const fixes = [
    { title: "Move Bedtime 15 Min Earlier Every 3 Days", desc: "Don't try to fix it overnight. If you currently sleep at 1 AM, go to 12:45 for 3 days, then 12:30, and so on until you hit 10:30–11 PM. Gradual shifts stick.", icon: "⏰" },
    { title: "No Phone 30 Min Before Bed", desc: "Blue light from screens suppresses melatonin (your sleep hormone) by up to 50%. Use this time for your mobility routine instead — two problems solved at once.", icon: "📵" },
    { title: "Eat Dinner 2 Hours Before Sleeping", desc: "Digestion raises core body temperature, which fights sleep. You need your body temp to DROP to fall asleep. Eat by 9 PM if sleeping at 11 PM.", icon: "🍽️" },
    { title: "Fixed Wake Time — Even on Weekends", desc: "Your circadian rhythm (body clock) is set by your WAKE time, not your sleep time. Same wake time every day — even Sunday — is the single most powerful sleep fix.", icon: "☀️" },
    { title: "Cool, Dark Room", desc: "Ideal sleep temp is 18–20°C. Even in summer, a fan or AC helps. Blackout curtains or an eye mask make a measurable difference.", icon: "🌙" },
    { title: "No Caffeine After 2 PM", desc: "Caffeine has a 5–6 hour half-life. Chai at 4 PM is still 50% active in your system at 10 PM. It doesn't stop you sleeping — it stops you sleeping DEEPLY.", icon: "☕" },
  ];

  return (
    <div style={styles.content}>
      <div style={styles.highlight}>
        <strong style={{color:ACCENT}}>Your low energy is not laziness.</strong> It is sleep deprivation. At 5–6 hrs of inconsistent sleep, your cortisol is chronically elevated. Cortisol actively stores belly fat, destroys muscle, and kills motivation. Fix sleep and you fix energy, fix fat loss, and fix recovery — simultaneously.
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>What Bad Sleep Does To Your Body</div>
        {[
          { effect: "Fat Storage", detail: "High cortisol from sleep dep directly increases abdominal fat storage. You can diet and train perfectly and still store fat with bad sleep." },
          { effect: "Muscle Loss", detail: "Growth hormone (your muscle-building hormone) is released in the first 2 hours of deep sleep. Less sleep = less GH = less muscle." },
          { effect: "Hunger Hormones", detail: "Ghrelin (hunger hormone) spikes. Leptin (fullness hormone) drops. You will feel hungrier and eat more the day after bad sleep." },
          { effect: "Gym Performance", detail: "Strength output drops 10–20%. Reaction time slows. Injury risk increases. You'll feel weaker and your workouts will suffer." },
        ].map(e => (
          <div key={e.effect} style={{...styles.card, borderLeft:`3px solid #EF4444`}}>
            <div style={{fontSize:14, fontWeight:"bold", color:"#EF4444", marginBottom:6}}>{e.effect}</div>
            <div style={{color:MUTED, fontSize:13, lineHeight:1.6}}>{e.detail}</div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Your Sleep Fix Protocol</div>
        {fixes.map(f => (
          <div key={f.title} style={styles.card}>
            <div style={{fontSize:20, marginBottom:8}}>{f.icon}</div>
            <div style={{fontSize:14, fontWeight:"bold", marginBottom:6}}>{f.title}</div>
            <div style={{color:MUTED, fontSize:13, lineHeight:1.6}}>{f.desc}</div>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Target Sleep Schedule</div>
        <div style={styles.card}>
          {[
            { label: "Wake Up", time: "6:30 AM", note: "Same every day, including weekends" },
            { label: "Last Caffeine", time: "2:00 PM", note: "No chai, coffee, or cold drinks after this" },
            { label: "Dinner", time: "8:30 PM", note: "2 hours before sleep minimum" },
            { label: "Screens Off", time: "10:00 PM", note: "Do mobility routine in this time" },
            { label: "Sleep", time: "10:30 PM", note: "Target: 8 hours of sleep" },
          ].map(s => (
            <div key={s.label} style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:`1px solid ${BORDER}`}}>
              <div>
                <div style={{fontSize:13, fontWeight:"bold"}}>{s.label}</div>
                <div style={{color:MUTED, fontSize:12}}>{s.note}</div>
              </div>
              <div style={{color:ACCENT, fontFamily:"'Courier New',monospace", fontSize:15, fontWeight:"bold"}}>{s.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MILESTONES ────────────────────────────────────────────────────────
function Milestones() {
  const timeline = [
    { time: "Week 1–2", title: "First Signs", items: ["Sleep improves slightly from consistent schedule", "Gym no longer feels foreign or scary", "First muscle soreness (DOMS) — this is GOOD", "Slight boost in energy from exercise"], color: "#60A5FA" },
    { time: "Week 3–4", title: "Posture Shifts", items: ["Back stiffness noticeably reduced", "Shoulder/neck tightness easing", "Strength increasing on all exercises", "1–2 kg weight change", "Feeling more alert in the mornings"], color: ACCENT },
    { time: "Month 2", title: "Visible Changes Begin", items: ["Clothes fitting differently around waist", "3–4 kg total change (fat out, muscle in)", "Stamina: can sustain 25 min cardio", "Friends and family start noticing", "Posture improved significantly"], color: ACCENT2 },
    { time: "Month 3", title: "Foundation Complete", items: ["5–7 kg total body composition change", "Visible muscle definition starting", "Gym is now a habit, not a task", "Stamina for 30+ min continuous cardio", "Can jog for intervals", "Lower back pain largely resolved"], color: "#34D399" },
    { time: "Month 6", title: "Athletic Physique Taking Shape", items: ["Body recomposition clearly visible", "Significant strength benchmarks hit", "Stamina for 45 min cardio sessions", "Mobility dramatically improved", "Athletic, capable body emerging", "Posture completely transformed"], color: "#A78BFA" },
    { time: "Month 12", title: "New Person", items: ["You look and move like a completely different person", "Strength benchmarks: 1.5× bodyweight squat, pull-ups", "Can run 5K continuously", "Full range of motion in all joints", "Athletic, pleasing physique achieved", "Fitness is now identity, not effort"], color: "#F472B6" },
  ];

  const benchmarks = [
    { lift: "Push-ups", week4: "5–10", month3: "20+", month6: "35+", month12: "50+" },
    { lift: "Plank hold", week4: "30 sec", month3: "90 sec", month6: "3 min", month12: "5 min" },
    { lift: "Goblet Squat", week4: "10 kg", month3: "25 kg", month6: "40 kg", month12: "60 kg" },
    { lift: "Lat Pulldown", week4: "20 kg", month3: "45 kg", month6: "65 kg", month12: "85 kg" },
    { lift: "Hip Thrust", week4: "20 kg", month3: "60 kg", month6: "90 kg", month12: "120 kg" },
    { lift: "Cardio", week4: "15 min walk", month3: "30 min run", month6: "5K run", month12: "10K run" },
  ];

  return (
    <div style={styles.content}>
      <div style={styles.section}>
        <div style={styles.sectionTitle}>Your Transformation Timeline</div>
        {timeline.map(t => (
          <div key={t.time} style={{...styles.card, borderLeft:`3px solid ${t.color}`, marginBottom:12}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8}}>
              <span style={styles.pill(t.color)}>{t.time}</span>
            </div>
            <div style={{fontSize:17, fontWeight:"bold", marginBottom:10}}>{t.title}</div>
            {t.items.map(it => (
              <div key={it} style={{display:"flex", gap:10, padding:"5px 0", fontSize:13}}>
                <span style={{color:t.color, flexShrink:0}}>✓</span> {it}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Strength Benchmarks</div>
        <div style={{overflowX:"auto"}}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Exercise</th>
                <th style={styles.th}>Week 4</th>
                <th style={styles.th}>Month 3</th>
                <th style={styles.th}>Month 6</th>
                <th style={styles.th}>Month 12</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((b, i) => (
                <tr key={b.lift} style={{background: i%2===0 ? CARD : CARD2}}>
                  <td style={{...styles.td, fontWeight:"bold"}}>{b.lift}</td>
                  <td style={{...styles.td, color:MUTED}}>{b.week4}</td>
                  <td style={{...styles.td, color:ACCENT}}>{b.month3}</td>
                  <td style={{...styles.td, color:ACCENT2}}>{b.month6}</td>
                  <td style={{...styles.td, color:"#34D399"}}>{b.month12}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Rules to Never Break</div>
        {[
          { rule: "Never miss Monday", why: "Monday sets the week's momentum. Miss Monday and the whole week crumbles." },
          { rule: "Never miss two days in a row", why: "One missed day is life. Two is a habit forming. Three is starting over." },
          { rule: "Protein at every meal", why: "Without this, your training is largely wasted. Non-negotiable." },
          { rule: "Mobility every night", why: "Your posture will never fix itself without this. 12 minutes. Every night." },
          { rule: "Sleep 7.5 hours", why: "Not a recommendation. It's medicine. Your results literally depend on this." },
          { rule: "Log your workouts", why: "If you don't track it, you can't progress it. Use a notes app. Every session." },
        ].map(r => (
          <div key={r.rule} style={{...styles.card, display:"flex", gap:14, alignItems:"flex-start"}}>
            <span style={{color:ACCENT, fontSize:18, flexShrink:0}}>⚡</span>
            <div>
              <div style={{fontSize:14, fontWeight:"bold", marginBottom:4}}>{r.rule}</div>
              <div style={{color:MUTED, fontSize:13}}>{r.why}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────
export default function FitnessPlan() {
  const [tab, setTab] = useState("Overview");

  const tabComponents = {
    "Overview": <Overview />,
    "12-Week Plan": <TwelveWeekPlan />,
    "Workouts": <Workouts />,
    "Nutrition": <Nutrition />,
    "Mobility": <Mobility />,
    "Sleep": <Sleep />,
    "Milestones": <Milestones />,
  };

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <div style={styles.headerAccent} />
        <div style={styles.tag}>Personal Fitness Blueprint</div>
        <h1 style={styles.title}>From Zero<br />to Athletic</h1>
        <p style={styles.subtitle}>178 cm · 98 kg · 25 yrs · Indian Vegetarian · Gym Beginner</p>
        <div style={styles.statsRow}>
          {[
            { label: "Duration", val: "12 Wks" },
            { label: "Days/Week", val: "4 Days" },
            { label: "Protein Target", val: "140g" },
            { label: "Sleep Target", val: "7.5 hrs" },
            { label: "Phase", val: "1 of 3" },
          ].map(s => (
            <div key={s.label} style={styles.stat}>
              <div style={styles.statLabel}>{s.label}</div>
              <div style={styles.statVal}>{s.val}</div>
            </div>
          ))}
        </div>
      </div>

      <nav style={styles.nav}>
        {TABS.map(t => (
          <button key={t} style={styles.navBtn(tab===t)} onClick={()=>setTab(t)}>{t}</button>
        ))}
      </nav>

      {tabComponents[tab]}
    </div>
  );
}
