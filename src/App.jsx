import { useState, useEffect, useRef, useCallback } from "react";
import { metaNetwork } from "./networks/meta.js";
import { methodsNetwork } from "./networks/methods.js";
import { viennaNetwork } from "./networks/vienna.js";
import { livelihoodsNetwork } from "./networks/livelihoods.js";
import { simulationNetwork } from "./networks/simulation.js";
import { worldingNetwork } from "./networks/worlding.js";
import { movementNetwork } from "./networks/movement.js";
import { creativityNetwork } from "./networks/creativity.js";
import { dsaNetwork } from "./networks/dsa.js";

// ---NETWORK REGISTRY ---
// To add a new vocabulary: import it above and add it to NETWORKS below.
// To create a context-specific build (e.g. Cobana): only import the relevant networks.

const NETWORKS = {
  meta: metaNetwork,
  methods: methodsNetwork,
  vienna: viennaNetwork,
  livelihoods: livelihoodsNetwork,
  simulation: simulationNetwork,
  worlding: worldingNetwork,
  movement: movementNetwork,
  creativity: creativityNetwork,
  dsa: dsaNetwork,
};

// ---VOCABULARY GROUPS (for landing page organisation) ---
const GROUPS = [
  {
    id: "foundation",
    label: "Foundation",
    description: "The meta-vocabularies that frame and introduce all the others",
    networkIds: ["meta","methods","creativity"],
  },
  {
    id: "ontological",
    label: "Ontological",
    description: "Vocabularies concerned with worlds, movement, and the nature of being",
    networkIds: ["worlding","livelihoods","movement"],
  },
  {
    id: "cultural",
    label: "Cultural & Critical",
    description: "Vocabularies grounded in specific cultural and critical traditions",
    networkIds: ["vienna","simulation"],
  },
  {
    id: "applied",
    label: "Applied",
    description: "Vocabularies developed in and for specific research and community contexts",
    networkIds: ["dsa"],
  },
];

// ---CONSTANTS ---

const PALETTE = ["#c084fc","#f472b6","#fb923c","#facc15","#4ade80","#34d399","#38bdf8","#818cf8"];
const TAG_COLORS = {
  epistemology:"#818cf8",science:"#38bdf8",change:"#c084fc",history:"#fb923c",
  ontology:"#4ade80",institution:"#facc15",complexity:"#34d399",imagination:"#f472b6",
  craft:"#fb923c",design:"#f59e0b",reform:"#4ade80",modernity:"#38bdf8",
  form:"#c084fc",unity:"#facc15",social:"#34d399",ethics:"#818cf8",
  education:"#38bdf8",urbanism:"#f59e0b",space:"#4ade80",critique:"#f472b6",
  material:"#fb923c",theory:"#818cf8",will:"#c084fc",life:"#34d399",
  "avant-garde":"#f472b6",sensibility:"#facc15",coherence:"#38bdf8",
  controversy:"#f472b6",decoration:"#fb923c",embodiment:"#4ade80",
  judgment:"#818cf8",rupture:"#c084fc",taste:"#facc15",eclecticism:"#fb923c",
  composition:"#f59e0b",aesthetics:"#f472b6",pleasure:"#facc15",
  transformation:"#c084fc",autonomy:"#4ade80",making:"#fb923c",
  phenomenology:"#818cf8",artifact:"#f59e0b",narrative:"#fb923c",
  process:"#4ade80",planning:"#38bdf8",vision:"#c084fc",
  wine:"#4ade80",irony:"#facc15",city:"#38bdf8",atmosphere:"#34d399",
  class:"#818cf8",theology:"#f87171",revelation:"#fb923c",crisis:"#f472b6",
  delay:"#818cf8",exception:"#38bdf8",trauma:"#f472b6",futurity:"#facc15",
  accountability:"#34d399",hope:"#facc15",justice:"#4ade80",law:"#38bdf8",
  power:"#818cf8",action:"#4ade80",time:"#38bdf8",agency:"#34d399",
  memory:"#c084fc",language:"#818cf8",
  systems:"#34d399",conditions:"#38bdf8",
  cognition:"#c084fc",schema:"#818cf8",learning:"#4ade80",
  development:"#fb923c",balance:"#facc15",dynamics:"#f472b6",
  tension:"#f472b6",STS:"#34d399",practice:"#38bdf8",plurality:"#4ade80",
  methodology:"#818cf8",performance:"#f472b6",stability:"#facc15",
  emergence:"#4ade80",becoming:"#c084fc",openness:"#38bdf8",
  activation:"#fb923c",community:"#818cf8",discourse:"#38bdf8",
  creation:"#4ade80",integration:"#34d399",obstacle:"#f472b6",
  livelihoods:"#34d399",belonging:"#fb923c",ecology:"#4ade80",
  Deleuze:"#38bdf8",commons:"#34d399",governance:"#facc15",
  philosophy:"#818cf8",politics:"#f472b6",
  simulation:"#f87171",Baudrillard:"#f87171",transit:"#38bdf8",
  homogeneity:"#facc15",consumption:"#fb923c",communication:"#34d399",
  sensation:"#c084fc",image:"#f472b6",architecture:"#38bdf8",
  economics:"#facc25",
  worlding:"#a78bfa",cosmology:"#c084fc",creativity:"#4ade80",
  existence:"#818cf8",enactivism:"#38bdf8",biology:"#34d399",
  desire:"#f472b6",relationality:"#fb923c",feminism:"#f472b6",
  multispecies:"#4ade80",pluriversality:"#a78bfa",
  silence:"#818cf8",limit:"#f87171",strategy:"#38bdf8",
  rhythm:"#4ade80",research:"#34d399",
  freedom:"#4ade80",urban:"#38bdf8",capitalism:"#f87171",
  transformation:"#c084fc",
  cultivation:"#c084fc",Buddhism:"#818cf8",
  sacred:"#f59e0b",religion:"#fb923c",mystery:"#a78bfa",
  love:"#f472b6",aliveness:"#4ade80",
  complexity:"#38bdf8",
  imitation:"#c084fc",narrative:"#fb923c",
  DSA:"#34d399",awareness:"#4ade80",systems:"#38bdf8",
  sensemaking:"#a78bfa",anticipation:"#fb923c",
  dialogue:"#34d399",hosting:"#b07a3a",
  liminality:"#c084fc",seasons:"#facc15",
  dwelling:"#8f7a4a",
  default:"#94a3b8",
};
const tagColor = t => TAG_COLORS[t] || TAG_COLORS.default;

const STATUS_STYLES = {
  consolidated: { border:"none", opacity:1 },
  provisional:  { border:"2px dashed rgba(255,255,255,0.5)", opacity:0.9 },
  contested:    { border:"2px dashed #f472b6", opacity:0.9 },
  proposed:     { border:"2px dashed rgba(255,255,255,0.3)", opacity:0.7 },
};

const SOURCE_ICONS = { manual:"✎", transcript:"◉", voice:"♪", paper:"▤", personal:"★" };

const INPUT_TYPES = [
  { id:"transcript", label:"Transcript", icon:"◉", color:"#38bdf8", desc:"Meeting or interview transcript" },
  { id:"voice",      label:"Voice Note", icon:"♪", color:"#4ade80", desc:"Record or describe an idea" },
  { id:"paper",      label:"Paper / Text", icon:"▤", color:"#fb923c", desc:"Academic paper or document" },
  { id:"personal",   label:"Personal Note", icon:"★", color:"#f472b6", desc:"Reflection, story, or imaginary" },
];

// ---AI EXTRACTION ---

async function extractNodesFromInput(inputType, content, existingNodes, networkContext) {
  const existingTerms = existingNodes.map(n => `"${n.term}" (id: ${n.id})`).join(", ");
  const systemPrompt = `You are a semantic network builder for an interdisciplinary research group. 
Your task is to extract conceptual nodes from research inputs and integrate them into an existing network.
Always respond with ONLY valid JSON, no markdown, no explanation.`;

  const inputDescriptions = {
    transcript: "a meeting or interview transcript",
    voice: "a voice note or spoken reflection",
    paper: "an academic paper or text excerpt",
    personal: "a personal reflection, story, or imaginary",
  };

  const userPrompt = `You are analysing ${inputDescriptions[inputType]} for a research network about: "${networkContext}".

EXISTING NODES in the network: ${existingTerms}

INPUT CONTENT:
"""
${content}
"""

Extract 2-5 key conceptual nodes from this input. For each node:
- Choose terms that are genuinely conceptually significant, not just keywords
- Write definitions that are rich and contextual (3-5 sentences)
- Connect to existing nodes where meaningful
- For personal/voice inputs, preserve the associative, imaginative quality
- Mark status as "proposed" (new idea) or "provisional" (developing)

Return ONLY this JSON structure:
{
  "nodes": [
    {
      "term": "Term Name",
      "definition": "Rich definition...",
      "thinkers": ["Name1", "Name2"],
      "tags": ["tag1", "tag2"],
      "connections": [{"to": "existing-node-id", "label": "relationship"}],
      "nuances": [{"thinker": "Name", "note": "Specific nuance..."}],
      "status": "proposed",
      "color": "#38bdf8",
      "sourceQuote": "Brief quote or phrase from the input that prompted this node"
    }
  ],
  "networkNote": "One sentence about what this input contributes to the network overall."
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error("API " + response.status + ": " + (errData?.error?.message || response.statusText));
  }

  const data = await response.json();
  if (data.error) throw new Error("Claude: " + data.error.message);

  const text = (data.content || []).map(b => b.text || "").join("").trim();
  if (!text) throw new Error("Empty response from Claude");

  const clean = text.replace(/^```json\s*/m, "").replace(/^```\s*/m, "").replace(/```\s*$/m, "").trim();
  const parsed = JSON.parse(clean);
  if (!parsed.nodes || !Array.isArray(parsed.nodes)) throw new Error("Unexpected shape: " + text.slice(0,100));
  return parsed;
}

// ---GRAPH COMPONENTS ---

function NodeCircle({ node, selected, onSelect }) {
  const r = selected ? 40 : 30;
  const st = STATUS_STYLES[node.status] || STATUS_STYLES.consolidated;
  return (
    <g onClick={() => onSelect(node)} style={{ cursor:"pointer" }}>
      {node.status !== "consolidated" && (
        <circle cx={node.x} cy={node.y} r={r+4} fill="none"
          stroke={node.status === "contested" ? "#f472b6" : "rgba(255,255,255,0.2)"}
          strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      )}
      <circle cx={node.x} cy={node.y} r={r} fill={node.color||"#c084fc"}
        opacity={selected ? 1 : st.opacity}
        style={{
          filter: selected ? `drop-shadow(0 0 20px ${node.color||"#c084fc"})` : `drop-shadow(0 0 6px ${node.color||"#c084fc"}88)`,
          transition:"all 0.25s ease",
        }} />
      <circle cx={node.x} cy={node.y} r={r} fill="none" stroke="white"
        strokeWidth={selected?2:1} opacity={0.25} />
      <text x={node.x} y={node.y+(node.status!=="consolidated"?-2:1)}
        textAnchor="middle" dominantBaseline="middle"
        fill="white" fontFamily="'Crimson Pro', serif"
        fontSize={selected?"12":"10"} fontWeight="600"
        style={{ userSelect:"none", pointerEvents:"none" }}>
        {node.term.length > 13 ? node.term.slice(0,12)+"…" : node.term}
      </text>
      {node.status !== "consolidated" && (
        <text x={node.x} y={node.y+14} textAnchor="middle"
          fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="'Space Mono', monospace"
          style={{ userSelect:"none", pointerEvents:"none" }}>
          {node.status}
        </text>
      )}
    </g>
  );
}

function EdgeLine({ from, to, label }) {
  const dx = to.x-from.x, dy = to.y-from.y;
  const len = Math.sqrt(dx*dx+dy*dy);
  if (len===0) return null;
  const ux=dx/len, uy=dy/len;
  return (
    <g>
      <line x1={from.x+ux*33} y1={from.y+uy*33} x2={to.x-ux*33} y2={to.y-uy*33}
        stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" strokeDasharray="4 3" />
      {label && <text x={(from.x+to.x)/2} y={(from.y+to.y)/2-6} textAnchor="middle"
        fill="rgba(255,255,255,0.3)" fontFamily="'Crimson Pro',serif" fontSize="9"
        style={{ userSelect:"none", pointerEvents:"none" }}>{label}</text>}
    </g>
  );
}

// ---INPUT PANEL ---

function InputPanel({ onPropose, networkContext, existingNodes }) {
  const [activeType, setActiveType] = useState("transcript");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recording, setRecording] = useState(false);
  const recognitionRef = useRef(null);

  const startVoice = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { setError("Speech recognition not available. Try Chrome or Edge, or type instead."); return; }
    try {
      const recognition = new SR();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        let final = "", interim = "";
        for (let i = 0; i < event.results.length; i++) {
          const result = event.results[i];
          if (result.isFinal) final += result[0].transcript + " ";
          else interim += result[0].transcript;
        }
        setContent(final + interim);
      };
      recognition.onerror = (event) => {
        if (event.error === "not-allowed") setError("Microphone access denied.");
        else setError("Recording error: " + event.error);
        setRecording(false);
      };
      recognition.onend = () => setRecording(false);
      recognitionRef.current = recognition;
      recognition.start();
      setRecording(true);
      setError("");
    } catch (e) { setError("Could not start recording: " + e.message); }
  };

  const stopVoice = () => {
    if (recognitionRef.current) { recognitionRef.current.stop(); recognitionRef.current = null; }
    setRecording(false);
  };

  const handleExtract = async () => {
    if (!content.trim()) return;
    setLoading(true); setError("");
    try {
      const result = await extractNodesFromInput(activeType, content, existingNodes, networkContext);
      onPropose(result.nodes, result.networkNote, activeType);
      setContent("");
    } catch (e) {
      setError("Extraction failed: " + (e.message || "unknown error"));
    }
    setLoading(false);
  };

  const it = INPUT_TYPES.find(t => t.id === activeType);

  return (
    <div style={{ height:"100%", display:"flex", flexDirection:"column" }}>
      <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)", letterSpacing:"0.12em", marginBottom:"14px" }}>INPUT STREAM</div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", marginBottom:"16px" }}>
        {INPUT_TYPES.map(t => (
          <button key={t.id} onClick={() => { setActiveType(t.id); setContent(""); setError(""); }}
            style={{ padding:"10px 8px", borderRadius:"8px", cursor:"pointer", textAlign:"left", background: activeType===t.id ? `${t.color}18` : "rgba(255,255,255,0.03)", border: activeType===t.id ? `1px solid ${t.color}55` : "1px solid rgba(255,255,255,0.08)", transition:"all 0.2s" }}>
            <div style={{ fontSize:"16px", marginBottom:"3px" }}>{t.icon}</div>
            <div style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color: activeType===t.id ? t.color : "rgba(255,255,255,0.5)", letterSpacing:"0.04em" }}>{t.label}</div>
          </button>
        ))}
      </div>
      <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
        {activeType === "voice" && (
          <div style={{ marginBottom:"10px" }}>
            <div style={{ display:"flex", gap:"8px", marginBottom:"6px" }}>
              <button onClick={recording ? stopVoice : startVoice}
                style={{ flex:1, padding:"10px", borderRadius:"7px", cursor:"pointer", background: recording ? "rgba(244,114,182,0.2)" : "rgba(74,222,128,0.15)", border: recording ? "1px solid rgba(244,114,182,0.5)" : "1px solid rgba(74,222,128,0.4)", color: recording ? "#f472b6" : "#4ade80", fontFamily:"'Space Mono',monospace", fontSize:"11px" }}>
                {recording ? "[ ] Stop" : "[o] Record"}
              </button>
            </div>
          </div>
        )}
        <div style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.25)", marginBottom:"6px" }}>
          {activeType==="transcript" && "PASTE TRANSCRIPT OR MEETING NOTES"}
          {activeType==="voice" && "TRANSCRIPT WILL APPEAR BELOW"}
          {activeType==="paper" && "PASTE PAPER EXCERPT OR ABSTRACT"}
          {activeType==="personal" && "YOUR REFLECTION, STORY, OR IMAGINARY"}
        </div>
        <textarea value={content} onChange={e => setContent(e.target.value)}
          placeholder={activeType==="transcript" ? "Paste a meeting transcript or discussion notes..." : activeType==="voice" ? "Or type your spoken note here..." : activeType==="paper" ? "Paste an abstract or passage from a paper..." : "Write a personal reflection or metaphor..."}
          style={{ flex:1, minHeight:"180px", ...inputSt, resize:"none", lineHeight:"1.6" }} />
        {error && <div style={{ fontSize:"12px", color:"#f472b6", marginTop:"8px", fontFamily:"'Space Mono',monospace" }}>{error}</div>}
        <button onClick={handleExtract} disabled={!content.trim() || loading}
          style={{ marginTop:"12px", padding:"12px", borderRadius:"8px", cursor: content.trim()&&!loading ? "pointer" : "default", background: content.trim()&&!loading ? `${it.color}20` : "rgba(255,255,255,0.03)", border: `1px solid ${content.trim()&&!loading ? it.color+"55" : "rgba(255,255,255,0.08)"}`, color: content.trim()&&!loading ? it.color : "rgba(255,255,255,0.2)", fontFamily:"'Space Mono',monospace", fontSize:"11px", letterSpacing:"0.06em", transition:"all 0.2s" }}>
          {loading ? "EXTRACTING NODES…" : `EXTRACT FROM ${it.label.toUpperCase()}`}
        </button>
      </div>
    </div>
  );
}

// ---REVIEW PANEL ---

function ReviewPanel({ proposed, networkNote, onAccept, onReject, onAcceptAll, existingNodes }) {
  return (
    <div style={{ height:"100%", overflowY:"auto" }}>
      <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)", letterSpacing:"0.12em", marginBottom:"10px" }}>PROPOSED NODES</div>
      {networkNote && (
        <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"8px", padding:"12px", marginBottom:"16px" }}>
          <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)", letterSpacing:"0.1em", marginBottom:"6px" }}>NETWORK NOTE</div>
          <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.6)", lineHeight:1.65, margin:0, fontStyle:"italic" }}>{networkNote}</p>
        </div>
      )}
      <button onClick={onAcceptAll} style={{ width:"100%", padding:"9px", marginBottom:"14px", borderRadius:"7px", cursor:"pointer", background:"rgba(74,222,128,0.12)", border:"1px solid rgba(74,222,128,0.35)", color:"#4ade80", fontFamily:"'Space Mono',monospace", fontSize:"11px", letterSpacing:"0.05em" }}>
        ACCEPT ALL {proposed.length} NODES
      </button>
      {proposed.map((node, i) => (
        <div key={i} style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"10px", padding:"14px", marginBottom:"12px" }}>
          <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"8px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ width:12, height:12, borderRadius:"50%", background:node.color||"#c084fc", flexShrink:0 }} />
              <div style={{ fontSize:"17px", fontWeight:300, color:"#f1f5f9" }}>{node.term}</div>
            </div>
            <span style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.4)", padding:"2px 7px", borderRadius:"4px" }}>{node.status}</span>
          </div>
          {node.sourceQuote && <div style={{ fontSize:"12px", fontStyle:"italic", color:"rgba(255,255,255,0.35)", borderLeft:"2px solid rgba(255,255,255,0.1)", paddingLeft:"10px", marginBottom:"8px" }}>"{node.sourceQuote}"</div>}
          <p style={{ fontSize:"13px", lineHeight:1.65, color:"rgba(255,255,255,0.65)", marginBottom:"10px" }}>{node.definition}</p>
          {node.connections?.length > 0 && (
            <div style={{ marginBottom:"10px" }}>
              {node.connections.map((c,j) => {
                const t = existingNodes.find(n=>n.id===c.to);
                return <span key={j} style={{ display:"inline-block", fontSize:"10px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.06)", color:"rgba(255,255,255,0.4)", padding:"2px 8px", borderRadius:"4px", marginRight:"5px", marginBottom:"4px" }}>{c.label} → {t?.term || c.to}</span>;
              })}
            </div>
          )}
          <div style={{ display:"flex", gap:"7px" }}>
            <button onClick={() => onAccept(node, i)} style={{ flex:1, padding:"8px", borderRadius:"6px", cursor:"pointer", background:"rgba(74,222,128,0.12)", border:"1px solid rgba(74,222,128,0.3)", color:"#4ade80", fontFamily:"'Space Mono',monospace", fontSize:"10px" }}>Accept</button>
            <button onClick={() => onReject(i)} style={{ flex:1, padding:"8px", borderRadius:"6px", cursor:"pointer", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.4)", fontFamily:"'Space Mono',monospace", fontSize:"10px" }}>Dismiss</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ---NODE DETAIL ---

function DeleteButton({ onDelete }) {
  const [confirming, setConfirming] = useState(false);
  if (confirming) {
    return (
      <div style={{ display:"flex", gap:"6px", alignItems:"center" }}>
        <span style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color:"rgba(255,100,100,0.7)" }}>Delete?</span>
        <button onClick={() => { onDelete(); setConfirming(false); }} style={{ background:"rgba(255,100,100,0.15)", border:"1px solid rgba(255,100,100,0.4)", color:"#f87171", borderRadius:"4px", padding:"2px 8px", cursor:"pointer", fontSize:"11px", fontFamily:"'Space Mono',monospace" }}>Yes</button>
        <button onClick={() => setConfirming(false)} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.4)", borderRadius:"4px", padding:"2px 8px", cursor:"pointer", fontSize:"11px", fontFamily:"'Space Mono',monospace" }}>No</button>
      </div>
    );
  }
  return <button onClick={() => setConfirming(true)} style={{ background:"transparent", border:"none", color:"rgba(255,100,100,0.25)", cursor:"pointer", fontSize:"14px", padding:"0 0 0 8px", lineHeight:1 }} title="Delete node">×</button>;
}

function NodeDetail({ node, nodes, onSelectRelated, onDelete, onStatusChange }) {
  return (
    <div style={{ overflowY:"auto", height:"100%" }}>
      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"8px" }}>
        <div style={{ flex:1 }}>
          <div style={{ fontSize:"25px", fontWeight:300, color:"#f1f5f9", letterSpacing:"-0.02em", lineHeight:1.2, marginBottom:"6px" }}>{node.term}</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"5px", marginBottom:"8px" }}>
            {(node.tags||[]).map(tag => (
              <span key={tag} style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", background:`${tagColor(tag)}22`, color:tagColor(tag), border:`1px solid ${tagColor(tag)}55`, padding:"2px 7px", borderRadius:"20px", letterSpacing:"0.1em", textTransform:"uppercase" }}>{tag}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:"6px", alignItems:"center", marginBottom:"4px" }}>
            <span style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.3)" }}>{SOURCE_ICONS[node.source||"manual"]} {node.source||"manual"}</span>
            <span style={{ fontSize:"9px", color:"rgba(255,255,255,0.15)" }}>—</span>
            <select value={node.status||"consolidated"} onChange={e=>onStatusChange(node.id,e.target.value)}
              style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.5)", borderRadius:"4px", padding:"2px 6px", cursor:"pointer" }}>
              {["consolidated","provisional","contested","proposed"].map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <DeleteButton onDelete={onDelete} />
      </div>
      {node.thinkers?.length > 0 && (
        <div style={{ marginBottom:"14px" }}>
          <div style={secLabel}>THINKERS</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
            {node.thinkers.map(t => <span key={t} style={{ fontSize:"12px", fontFamily:"'Space Mono',monospace", background:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.55)", border:"1px solid rgba(255,255,255,0.1)", padding:"3px 10px", borderRadius:"4px" }}>{t}</span>)}
          </div>
        </div>
      )}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", margin:"12px 0" }} />
      <p style={{ fontSize:"15px", lineHeight:1.8, color:"rgba(255,255,255,0.75)", marginBottom:"18px" }}>{node.definition}</p>
      {node.sourceQuote && <div style={{ fontSize:"13px", fontStyle:"italic", color:"rgba(255,255,255,0.35)", borderLeft:"2px solid rgba(255,255,255,0.1)", paddingLeft:"12px", marginBottom:"16px" }}>"{node.sourceQuote}"</div>}
      {node.nuances?.length > 0 && (
        <div style={{ marginBottom:"18px" }}>
          <div style={secLabel}>BY THINKER</div>
          {node.nuances.map((n,i) => (
            <div key={i} style={{ marginBottom:"12px", paddingLeft:"12px", borderLeft:"2px solid rgba(255,255,255,0.12)" }}>
              <div style={{ fontSize:"11px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.4)", marginBottom:"3px" }}>{n.thinker}</div>
              <p style={{ fontSize:"14px", color:"rgba(255,255,255,0.58)", lineHeight:1.65, margin:0, fontStyle:"italic" }}>{n.note}</p>
            </div>
          ))}
        </div>
      )}
      {node.connections?.length > 0 && (
        <div>
          <div style={secLabel}>CONNECTIONS</div>
          {node.connections.map(conn => {
            const target = nodes.find(n=>n.id===conn.to);
            return (
              <div key={conn.to} onClick={() => target && onSelectRelated(target)}
                style={{ display:"flex", alignItems:"center", gap:"10px", padding:"8px 10px", borderRadius:"6px", marginBottom:"5px", cursor:target?"pointer":"default", background:"rgba(255,255,255,0.03)", transition:"background 0.15s" }}
                onMouseEnter={e=>{if(target)e.currentTarget.style.background="rgba(255,255,255,0.07)"}}
                onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}>
                {target && <div style={{ width:8, height:8, borderRadius:"50%", background:target.color||"#c084fc", flexShrink:0 }} />}
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"14px", color:target?"#f1f5f9":"rgba(255,255,255,0.3)" }}>
                    {target?.term||conn.to}
                    {!target && <span style={{ fontSize:"10px", fontFamily:"monospace", marginLeft:6, color:"rgba(255,100,100,0.4)" }}>(not yet defined)</span>}
                  </div>
                  {conn.label && <div style={{ fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.28)", marginTop:"1px" }}>{conn.label}</div>}
                </div>
                {target && <span style={{ color:"rgba(255,255,255,0.2)", fontSize:"14px" }}>→</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---EMPTY STATE ---

function EmptyState({ nodes, onSelect, accent, onReset }) {
  const byStatus = { consolidated:[], provisional:[], contested:[], proposed:[] };
  nodes.forEach(n => (byStatus[n.status||"consolidated"]||byStatus.consolidated).push(n));
  return (
    <div style={{ overflowY:"auto", height:"100%" }}>
      <div style={secLabel}>ALL TERMS</div>
      <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.28)", lineHeight:1.7, fontStyle:"italic", marginBottom:"12px" }}>Click any node in the graph to explore it. Use Input Stream to add new material.</p>
      <button onClick={onReset} style={{ marginBottom:"18px", padding:"6px 12px", borderRadius:"6px", cursor:"pointer", fontSize:"10px", fontFamily:"'Space Mono',monospace", background:"rgba(255,100,100,0.08)", border:"1px solid rgba(255,100,100,0.2)", color:"rgba(255,100,100,0.5)" }}>Reset to defaults</button>
      {Object.entries(byStatus).map(([status, ns]) => ns.length > 0 && (
        <div key={status} style={{ marginBottom:"16px" }}>
          <div style={{ fontSize:"9px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.2)", letterSpacing:"0.12em", marginBottom:"7px", textTransform:"uppercase" }}>{status}</div>
          {ns.map(n => (
            <div key={n.id} onClick={() => onSelect(n)}
              style={{ display:"flex", alignItems:"center", gap:"10px", padding:"7px 10px", borderRadius:"6px", cursor:"pointer", marginBottom:"3px", background:"rgba(255,255,255,0.03)", transition:"background 0.15s" }}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.07)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.03)"}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:n.color||accent, flexShrink:0 }} />
              <span style={{ fontSize:"14px", flex:1 }}>{n.term}</span>
              <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.2)" }}>{SOURCE_ICONS[n.source||"manual"]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ---NETWORK VIEW ---

function NetworkView({ networkId, accent }) {
  const net = NETWORKS[networkId];
  const [nodes, setNodes] = useState(net.initialNodes);
  const [selected, setSelected] = useState(null);
  const [rightPanel, setRightPanel] = useState("detail");
  const [proposed, setProposed] = useState([]);
  const [networkNote, setNetworkNote] = useState("");
  const [saveStatus, setSaveStatus] = useState("");
  const [dragging, setDragging] = useState(null);
  const svgRef = useRef();
  const dragOffset = useRef({x:0,y:0});

  useEffect(() => {
    async function load() {
      try {
        const result = await window.storage.get(net.storageKey, false);
        if (result?.value) {
          const saved = JSON.parse(result.value);
          if (Array.isArray(saved) && saved.length > 0) {
            const savedIds = new Set(saved.map(n=>n.id));
            const newInitial = net.initialNodes.filter(n=>!savedIds.has(n.id));
            setNodes([...saved, ...newInitial]);
            return;
          }
        }
      } catch {}
      setNodes(net.initialNodes);
    }
    load();
  }, [net.storageKey]);

  const save = useCallback(async (newNodes) => {
    setSaveStatus("saving…");
    try {
      await window.storage.set(net.storageKey, JSON.stringify(newNodes), false);
      setSaveStatus("saved ✓");
      setTimeout(()=>setSaveStatus(""),2000);
    } catch { setSaveStatus("error"); }
  }, [net.storageKey]);

  const updateNodes = n => { setNodes(n); save(n); };
  const handleSelect = node => { setSelected(s=>s?.id===node.id?null:node); setRightPanel("detail"); };

  const handleMouseDown = e => {
    const rect = svgRef.current.getBoundingClientRect();
    const wx = (e.clientX-rect.left)*(1000/rect.width);
    const wy = (e.clientY-rect.top)*(600/rect.height);
    const hit = nodes.find(n=>Math.hypot(n.x-wx,n.y-wy)<38);
    if (hit) { setDragging(hit.id); dragOffset.current={x:wx-hit.x,y:wy-hit.y}; e.preventDefault(); }
  };
  const handleMouseMove = e => {
    if (!dragging) return;
    const rect = svgRef.current.getBoundingClientRect();
    const wx = (e.clientX-rect.left)*(1000/rect.width)-dragOffset.current.x;
    const wy = (e.clientY-rect.top)*(600/rect.height)-dragOffset.current.y;
    setNodes(prev=>prev.map(n=>n.id===dragging?{...n,x:wx,y:wy}:n));
  };
  const handleMouseUp = () => { if(dragging){save(nodes);setDragging(null);} };

  const handlePropose = (proposedNodes, note, sourceType) => {
    const withMeta = proposedNodes.map(n => ({
      ...n,
      id: n.term.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),
      source: sourceType, status: n.status||"proposed",
      x: 150+Math.random()*700, y: 100+Math.random()*400,
    }));
    setProposed(withMeta); setNetworkNote(note); setRightPanel("review");
  };

  const handleAccept = (node, idx) => {
    const newNodes = [...nodes, node]; updateNodes(newNodes);
    const remaining = proposed.filter((_,i)=>i!==idx); setProposed(remaining);
    if (remaining.length===0) setRightPanel("detail");
  };
  const handleAcceptAll = () => { updateNodes([...nodes, ...proposed]); setProposed([]); setRightPanel("detail"); };
  const handleReject = idx => {
    const remaining = proposed.filter((_,i)=>i!==idx); setProposed(remaining);
    if (remaining.length===0) setRightPanel("detail");
  };
  const handleStatusChange = (id, status) => {
    const newNodes = nodes.map(n=>n.id===id?{...n,status}:n); updateNodes(newNodes);
    setSelected(s=>s?.id===id?{...s,status}:s);
  };
  const deleteNode = id => {
    updateNodes(nodes.filter(n=>n.id!==id).map(n=>({...n,connections:(n.connections||[]).filter(c=>c.to!==id)})));
    setSelected(null);
  };
  const handleReset = async () => {
    try { await window.storage.delete(net.storageKey, false); } catch {}
    setNodes(net.initialNodes); setSelected(null);
  };

  const selectedNode = nodes.find(n=>n.id===selected?.id)||null;
  const edges = [];
  nodes.forEach(node => (node.connections||[]).forEach(conn => {
    const t = nodes.find(n=>n.id===conn.to);
    if(t) edges.push({from:node,to:t,label:conn.label,key:`${node.id}-${conn.to}`});
  }));

  return (
    <div style={{ display:"flex", flex:1, overflow:"hidden", height:"100%" }}>
      <div style={{ flex:1, position:"relative" }}>
        <svg ref={svgRef} viewBox="0 0 1000 600" style={{ width:"100%", height:"100%", display:"block" }}
          onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
          <defs>
            <radialGradient id="bgr" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="#1a1a2e"/><stop offset="100%" stopColor="#0d0d14"/>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="1000" height="600" fill="url(#bgr)"/>
          {Array.from({length:20}).map((_,i)=><line key={`v${i}`} x1={i*55} y1={0} x2={i*55} y2={600} stroke="rgba(255,255,255,0.016)" strokeWidth="1"/>)}
          {Array.from({length:12}).map((_,i)=><line key={`h${i}`} x1={0} y1={i*55} x2={1000} y2={i*55} stroke="rgba(255,255,255,0.016)" strokeWidth="1"/>)}
          {edges.map(e=><EdgeLine key={e.key} from={e.from} to={e.to} label={e.label}/>)}
          {nodes.map(node=><NodeCircle key={node.id} node={node} selected={selectedNode?.id===node.id} onSelect={handleSelect}/>)}
        </svg>
        <div style={{ position:"absolute", bottom:14, left:18, fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.18)", lineHeight:2 }}>
          drag to reposition · click to explore
          <div style={{ display:"flex", gap:"12px", marginTop:"4px" }}>
            {["consolidated","provisional","contested","proposed"].map(s=>(
              <span key={s} style={{ color: s==="contested"?"#f472b6":s==="proposed"?"rgba(255,255,255,0.3)":"rgba(255,255,255,0.18)" }}>○ {s}</span>
            ))}
          </div>
        </div>
        {saveStatus && <div style={{ position:"absolute", bottom:14, right:18, fontFamily:"'Space Mono',monospace", fontSize:"10px", color:"#4ade80", opacity:0.7 }}>{saveStatus}</div>}
      </div>
      <div style={{ width:"360px", borderLeft:"1px solid rgba(255,255,255,0.07)", display:"flex", flexDirection:"column", background:"rgba(255,255,255,0.015)", flexShrink:0 }}>
        <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.07)", flexShrink:0 }}>
          {[
            { id:"detail", label:"Explore" },
            { id:"input", label:"Input Stream" },
            ...(proposed.length>0 ? [{ id:"review", label:`Review (${proposed.length})` }] : []),
          ].map(tab=>(
            <button key={tab.id} onClick={()=>setRightPanel(tab.id)}
              style={{ flex:1, padding:"11px 8px", border:"none", cursor:"pointer", background: rightPanel===tab.id ? "rgba(255,255,255,0.05)" : "transparent", color: rightPanel===tab.id ? "#f1f5f9" : "rgba(255,255,255,0.3)", fontFamily:"'Space Mono',monospace", fontSize:"10px", letterSpacing:"0.05em", borderBottom: rightPanel===tab.id ? `2px solid ${accent}` : "2px solid transparent", transition:"all 0.2s" }}>
              {tab.label}
            </button>
          ))}
        </div>
        <div style={{ flex:1, overflow:"hidden", padding:"20px 20px 16px" }}>
          {rightPanel==="input" && <InputPanel onPropose={handlePropose} networkContext={net.label+" — "+net.subtitle} existingNodes={nodes} />}
          {rightPanel==="review" && <ReviewPanel proposed={proposed} networkNote={networkNote} onAccept={handleAccept} onReject={handleReject} onAcceptAll={handleAcceptAll} existingNodes={nodes} />}
          {rightPanel==="detail" && !selectedNode && <EmptyState nodes={nodes} onSelect={n=>{setSelected(n);setRightPanel("detail");}} accent={accent} onReset={handleReset} />}
          {rightPanel==="detail" && selectedNode && <NodeDetail node={selectedNode} nodes={nodes} onSelectRelated={n=>setSelected(n)} onDelete={()=>deleteNode(selectedNode.id)} onStatusChange={handleStatusChange} />}
        </div>
      </div>
    </div>
  );
}


// ---LANDING PAGE ---

function LandingPage({ onSelect }) {
  return (
    <div style={{ minHeight:"100vh", background:"#0d0d14", color:"#e2e8f0", fontFamily:"'Crimson Pro',Georgia,serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>

      {/* Header */}
      <div style={{ padding:"2.5rem 3rem 2rem", borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.25)", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"0.5rem" }}>
          Re-Rooting Research
        </div>
        <div style={{ fontSize:"32px", fontWeight:300, color:"#f1f5f9", letterSpacing:"-0.02em", marginBottom:"0.75rem" }}>
          Living Vocabularies
        </div>
        <div style={{ fontSize:"16px", fontStyle:"italic", color:"rgba(255,255,255,0.35)", fontWeight:300, maxWidth:"520px", lineHeight:1.75 }}>
          A growing collection of semantic networks — shared languages for inquiry, practice, and world-making.
        </div>
      </div>

      {/* Groups */}
      <div style={{ padding:"2rem 3rem 4rem" }}>
        {GROUPS.map(group => {
          const nets = group.networkIds.map(id => NETWORKS[id]).filter(Boolean);
          if (nets.length === 0) return null;
          return (
            <div key={group.id} style={{ marginBottom:"3rem" }}>
              {/* Group header */}
              <div style={{ marginBottom:"1.2rem" }}>
                <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", letterSpacing:"0.16em", color:"rgba(255,255,255,0.25)", textTransform:"uppercase", marginBottom:"0.3rem" }}>
                  {group.label}
                </div>
                <div style={{ fontSize:"13px", color:"rgba(255,255,255,0.2)", fontStyle:"italic" }}>
                  {group.description}
                </div>
              </div>

              {/* Vocabulary cards */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:"12px" }}>
                {nets.map(net => (
                  <button
                    key={net.id}
                    onClick={() => onSelect(net.id)}
                    style={{
                      textAlign:"left",
                      background:"rgba(255,255,255,0.02)",
                      border:`1px solid ${net.accent}33`,
                      borderRadius:"10px",
                      padding:"1.5rem",
                      cursor:"pointer",
                      transition:"all 0.2s",
                      display:"flex",
                      flexDirection:"column",
                      gap:"0.5rem",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${net.accent}0d`;
                      e.currentTarget.style.borderColor = `${net.accent}66`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = `${net.accent}33`;
                    }}
                  >
                    {/* Accent dot */}
                    <div style={{ width:8, height:8, borderRadius:"50%", background:net.accent, marginBottom:"0.25rem" }} />

                    {/* Label */}
                    <div style={{ fontSize:"18px", fontWeight:300, color:"#f1f5f9", letterSpacing:"-0.01em", lineHeight:1.2 }}>
                      {net.label}
                    </div>

                    {/* Subtitle */}
                    <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.25)", letterSpacing:"0.08em", lineHeight:1.6 }}>
                      {net.subtitle}
                    </div>

                    {/* Node count */}
                    <div style={{ marginTop:"0.5rem", fontFamily:"'Space Mono',monospace", fontSize:"9px", color:net.accent, opacity:0.6, letterSpacing:"0.06em" }}>
                      {net.initialNodes.length} terms
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ padding:"1.5rem 3rem", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.12)", letterSpacing:"0.1em" }}>
          {Object.keys(NETWORKS).length} vocabularies · {Object.values(NETWORKS).reduce((sum, n) => sum + n.initialNodes.length, 0)} terms
        </div>
      </div>
    </div>
  );
}

// ---ROOT APP ---

export default function App() {
  const [activeNet, setActiveNet] = useState(null);
  const net = activeNet ? NETWORKS[activeNet] : null;

  // If no network selected, show landing page
  if (!activeNet || !net) {
    return <LandingPage onSelect={setActiveNet} />;
  }

  return (
    <div style={{ fontFamily:"'Crimson Pro',Georgia,serif", background:"#0d0d14", minHeight:"100vh", display:"flex", flexDirection:"column", color:"#e2e8f0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>

      {/* Header */}
      <div style={{ padding:"13px 24px", borderBottom:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(255,255,255,0.02)", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"20px" }}>
          {/* Home link */}
          <button
            onClick={() => setActiveNet(null)}
            style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.3)", letterSpacing:"0.1em", background:"none", border:"none", cursor:"pointer", padding:0, transition:"color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
          >
            ← all vocabularies
          </button>
          <div style={{ width:1, height:16, background:"rgba(255,255,255,0.1)" }} />
          <div>
            <div style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.25)", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"2px" }}>
              Semantic Network
            </div>
            <div style={{ fontSize:"18px", fontWeight:300, color:"#f1f5f9", letterSpacing:"-0.01em" }}>
              {net.label}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding:"7px 24px", borderBottom:"1px solid rgba(255,255,255,0.05)", background:"rgba(255,255,255,0.01)", flexShrink:0 }}>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:"9px", color:"rgba(255,255,255,0.22)", letterSpacing:"0.1em" }}>
          {net.subtitle} · {net.initialNodes.length} seed terms
        </span>
      </div>

      <div style={{ flex:1, display:"flex", overflow:"hidden" }}>
        <NetworkView key={activeNet} networkId={activeNet} accent={net.accent} networks={NETWORKS}/>
      </div>
    </div>
  );
}

const secLabel = { fontSize:"10px", fontFamily:"'Space Mono',monospace", color:"rgba(255,255,255,0.27)", letterSpacing:"0.12em", marginBottom:"9px", marginTop:"4px" };
const inputSt = { width:"100%", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"7px", padding:"10px 12px", color:"#e2e8f0", fontSize:"14px", fontFamily:"'Crimson Pro',Georgia,serif", outline:"none", boxSizing:"border-box", display:"block" };
