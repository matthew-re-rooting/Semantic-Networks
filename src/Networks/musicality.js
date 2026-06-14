export const musicalityNetwork = {
  id: "musicality",
  label: "Musicality",
  subtitle: "Rhythm, Resonance & the Cosmological Dimensions of Sound",
  accent: "#a78bfa",
  storageKey: "semantic-network-musicality",
  initialNodes: [

    // ── Core ─────────────────────────────────────────────────────────────────

    {
      id: "musicality-node",
      term: "Musicality",
      definition: "The inherent quality of patterned, resonant movement that pervades the world — not merely sound organised in time, but the underlying tendency of phenomena to fall into perceptible rhythmic and relational structures. Musicality in this sense is ontological: it is not something projected onto things by a listening subject, but a feature of how things are constituted. A storm, a conversation, a life can each be more or less musical. The term names the degree to which a phenomenon participates in the ordering principles of tension, release, duration, recurrence, and variation.",
      thinkers: ["Victor Zuckerkandl", "Maurice Merleau-Ponty", "Alfred North Whitehead", "Gillian Rose"],
      tags: ["cosmology", "phenomenology", "ontology", "aesthetics", "attunement"],
      connections: [
        { to: "rhythm", label: "expressed through" },
        { to: "groove", label: "settled into as" },
        { to: "cadence", label: "resolved through" },
        { to: "vibration", label: "felt quality of" },
        { to: "composition-node", label: "made through" },
      ],
      nuances: [
        { thinker: "Victor Zuckerkandl — Sound and Symbol", note: "Zuckerkandl argued that musical tones are not events 'in' the mind of the listener but dynamic qualities belonging to the world — each tone carries a charge of directed motion toward the next. On this view, musicality is not our sensitivity to something subjective but our participation in a real directedness in sound itself." },
        { thinker: "Whitehead — Process and Reality", note: "Whitehead's account of 'creative advance' bears structural resemblance to musicality: reality is constituted by occasions that feel their predecessors, achieve a novel synthesis, and perish into the prehension of their successors — a rhythmic pulse at the root of existence. The cosmos is, in a sense, always composing." },
        { thinker: "Merleau-Ponty — motor intentionality", note: "The body as motor subject moves in ways that are not reducible to mechanical sequence — there is a style, a timing, a felt coherence that is genuinely musical. Merleau-Ponty's phenomenology opens a path to understanding musicality not as cognition but as bodily attunement to the rhythms of the world." },
      ],
      x: 400, y: 300, color: "#a78bfa", status: "consolidated",
    },

    // ── Temporal ─────────────────────────────────────────────────────────────

    {
      id: "rhythm",
      term: "Rhythm",
      definition: "The way things move — not merely the beat or temporal pattern of a piece of music, but the broader quality of motion that any phenomenon can exhibit: the rhythm of seasons, of breath, of argument, of institutional change. Rhythm is neither pure regularity (which becomes mechanical) nor pure irregularity (which collapses into noise); it lives in the tension between recurrence and variation, giving a sense of inevitability to what is nonetheless always slightly new. To speak of rhythm cosmologically is to notice that differentiation and return — departure and homecoming — are structural features of how things unfold.",
      thinkers: ["Henri Lefebvre", "Victor Zuckerkandl", "Henri Bergson", "Gaston Bachelard"],
      tags: ["cosmology", "phenomenology", "temporality", "movement", "pattern"],
      connections: [
        { to: "musicality-node", label: "is an expression of" },
        { to: "cadence", label: "resolves into" },
        { to: "groove", label: "becomes habituated as" },
        { to: "vibration", label: "at a physical scale is" },
        { to: "improvisation", label: "plays with and against" },
      ],
      nuances: [
        { thinker: "Lefebvre — Rhythmanalysis", note: "Lefebvre's late project was an attempt to read the city, the body, and social life through their rhythms — polyrhythmic spaces where different cycles interpenetrate, interfere, and occasionally synchronise. His 'rhythmanalysis' is less a method than a mode of attentiveness: to stand at a window and let the different durations of urban life wash over you, distinguishing the isorhythmic, the polyrhythmic, and the arrhythmic." },
        { thinker: "Bachelard — The Dialectic of Duration", note: "Bachelard resisted Bergsonian continuous flow: for him, time is constituted by rhythmic discontinuities, rests between beats as much as the beats themselves. A poem, he thought, should be understood through its rhythmic silences as much as its sounds — duration is punctuated, not smooth." },
        { thinker: "Cosmological extension", note: "Rhythm as cosmological concept refuses confinement to art or biology. Planetary cycles, ecological successions, civilisational rises and declines — all exhibit rhythm in the sense of patterned recurrence-with-variation. The philosophical move is to see this not as metaphor borrowed from music but as music revealing something that was always already there." },
      ],
      x: 220, y: 180, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "groove",
      term: "Groove",
      definition: "A settled, lived rhythm — the particular texture of regularity that emerges when a way of doing something becomes one's own. Groove names the difference between following a routine and being in one: in the groove, the pattern carries the person rather than the person laboriously producing the pattern. It is a more embodied, warmer word than 'habit' or 'routine', carrying the sense of something that has been worn into place by use, like a well-played instrument or a familiar path. Phenomenologically, groove is the lived experience of temporal flow that has become comfortable and sustaining without becoming unconscious or deadening.",
      thinkers: ["Michael Polanyi", "Maurice Merleau-Ponty", "Charles Taylor"],
      tags: ["habit", "embodiment", "practice", "temporality", "routine", "phenomenology"],
      connections: [
        { to: "musicality-node", label: "inhabits" },
        { to: "rhythm", label: "is rhythm become embodied" },
        { to: "cadence", label: "is punctuated by" },
        { to: "timbre", label: "has its own distinctive" },
        { to: "improvisation", label: "is the ground from which departs" },
      ],
      nuances: [
        { thinker: "Polanyi — tacit knowing", note: "Getting into a groove is a Polanyian achievement: something that began as explicit, rule-following practice has been interiorised to the point where it can be relied upon without attention. The groove is not thoughtlessness — it is the condition for higher-level attention to be freed from the mechanics of doing." },
        { thinker: "Taylor — social imaginaries and background", note: "Taylor's concept of background practices captures something close to groove at a social scale: the pre-reflective know-how that holds a form of life together. A community can be in a groove — shared timing, shared anticipation, the mutual ease of people who have learned each other's rhythms." },
        { thinker: "Distinction from routine", note: "Routine is descriptive and external: one does X at Y time. Groove is phenomenological and evaluative: one inhabits the doing of X with a particular quality of ease and rightness. You can follow a routine without being in a groove; you cannot be in a groove without the routine already being yours. Groove is also sensed relationally — you know when you lose it." },
      ],
      x: 200, y: 380, color: "#34d399", status: "consolidated",
    },

    {
      id: "cadence",
      term: "Cadence",
      definition: "The quality of conclusion — the felt sense of arrival that marks the end of a phrase, a movement, a cycle of effort. In music, a cadence is the harmonic gesture that brings a phrase to rest; phenomenologically, cadence names the broader experience of things finding their natural resolution. It is not mere stopping but the kind of ending that, by virtue of its form, retrospectively illuminates what preceded it. Cadence is therefore not only a temporal but an aesthetic-ontological concept: it concerns the wholeness of experience, the difference between a life (or a conversation, or a project) that achieves closure and one that merely ceases.",
      thinkers: ["Leonard Meyer", "Hans-Georg Gadamer", "T.S. Eliot", "Paul Ricoeur"],
      tags: ["temporality", "aesthetics", "closure", "narrative", "phenomenology"],
      connections: [
        { to: "musicality-node", label: "resolves" },
        { to: "rhythm", label: "brings to rest" },
        { to: "groove", label: "punctuates the continuity of" },
        { to: "silence", label: "dissolves into" },
        { to: "dissonance", label: "resolves the tension of" },
      ],
      nuances: [
        { thinker: "Leonard Meyer — Emotion and Meaning in Music", note: "For Meyer, musical meaning arises precisely from the interplay of expectation and its satisfaction or denial — cadence is the moment when tension accumulated over a phrase finds its resolution. The phenomenology of cadence is not peace but the particular quality of expectation fulfilled. A deceptive cadence — where resolution is withheld or redirected — is therefore not a failure but an intensification." },
        { thinker: "Gadamer — fusion of horizons", note: "Gadamer's account of understanding as event rather than method implies a cadential structure: genuine understanding is not continuous information processing but a sequence of incomplete prehensions that find their completion in a moment of integration. The 'hermeneutic circle' is better understood as a spiral that includes cadential moments of arrival." },
        { thinker: "Ricoeur — narrative identity", note: "Ricoeur's argument that selfhood is constituted through narrative depends on cadence: the configuration of a life into a story requires endings that make sense of what preceded them. A life without cadence is not meaningless but unconfigured — it has events but no shape." },
      ],
      x: 580, y: 200, color: "#f59e0b", status: "consolidated",
    },

    // ── Receptive ─────────────────────────────────────────────────────────────

    {
      id: "attunement",
      term: "Attunement",
      definition: "The cultivated sensitivity to the musicality of a situation — the capacity to hear and feel the rhythms, tensions, resonances, and silences at work in a place, a conversation, a field of practice. Attunement is not passive reception but an active orientation of the whole person toward what is sounding. In its poetic register, attunement shades into a kind of lyric openness: the poet or phenomenologist who, rather than analysing from outside, allows the world to speak through them, becoming a tuned instrument through which a deeper order becomes perceptible.",
      thinkers: ["Martin Heidegger", "Rainer Maria Rilke", "Hans-Georg Gadamer", "David Abram"],
      tags: ["phenomenology", "poetics", "perception", "practice", "ecology"],
      connections: [
        { to: "musicality-node", label: "is the practice of opening to" },
        { to: "resonance-link", label: "enables" },
        { to: "silence", label: "requires cultivation of" },
        { to: "timbre", label: "is sensitive to the qualitative texture of" },
        { to: "chorus", label: "is necessary to hear" },
      ],
      nuances: [
        { thinker: "Heidegger — Stimmung", note: "Heidegger's concept of Stimmung (usually translated 'mood' or 'attunement') names the way in which a fundamental disposition colours and discloses the world before any explicit cognition. We do not first perceive the world neutrally and then feel something about it — we find ourselves always already attuned, and this attunement is constitutive of what shows up for us." },
        { thinker: "Rilke — the Open", note: "Rilke's Duino Elegies enact poetic attunement as the attempt to remain open to the full range of existence — including death, angels, and the in-between — without shrinking back into the merely human. The elegist is attuned not to the pleasant but to the real; poetic attunement requires a certain bravery of receptivity." },
        { thinker: "Abram — the more-than-human", note: "David Abram's phenomenology of perception argues that literacy has progressively detuned Western humans from the animate, communicative world of wind, birdsong, and landscape — a world that oral cultures remain in active attunement with. Re-attunement is therefore both a philosophical and an ecological project." },
      ],
      x: 580, y: 420, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "resonance-link",
      term: "Resonance",
      definition: "The phenomenon in which something vibrates in response to — and at the frequency of — another thing, amplifying and being transformed by the encounter. As a philosophical and social concept, resonance names a mode of relation that is neither mere contact nor fusion: two things remain distinct while something passes between them that changes both. Hartmut Rosa has developed resonance as a sociological category opposed to alienation: a resonant world is one in which things speak to us and we can respond; the problem of modernity is not merely disenchantment but the muting of resonant relations through acceleration and instrumentalisation.",
      thinkers: ["Hartmut Rosa", "Victor Zuckerkandl", "David Bohm"],
      tags: ["relation", "sociology", "phenomenology", "cosmology", "vibration"],
      connections: [
        { to: "attunement", label: "becomes possible through" },
        { to: "vibration", label: "arises from shared" },
        { to: "coherence", label: "at scale becomes" },
        { to: "chorus", label: "of many voices produces" },
      ],
      nuances: [
        { thinker: "Rosa — Resonance: A Sociology of Our Relationship to the World", note: "Rosa distinguishes resonance from mere echo (which gives back only what was sent) and from merger (which erases difference). A resonant relationship is responsive and transformative: both poles are genuinely affected. His sociological programme is to ask what structural conditions support or destroy resonant relations in contemporary life." },
        { thinker: "Bohm — implicate order", note: "Bohm's physical and philosophical concept of the implicate order suggests that what we perceive as separate things are enfolded expressions of a deeper undivided wholeness — resonance, on this reading, is the perceptual trace of that deeper unity momentarily becoming explicit." },
      ],
      x: 600, y: 320, color: "#a78bfa", status: "consolidated",
    },

    // ── Structural ────────────────────────────────────────────────────────────

    {
      id: "coherence",
      term: "Coherence",
      definition: "The quality of holding together — the condition in which the parts of a whole relate in ways that reinforce and clarify each other rather than cancelling or confusing. In music, coherence is the felt intelligibility of a piece: motifs that return, harmonies that resolve, a logic of development that makes each moment both unexpected and, in retrospect, inevitable. As a broader philosophical concept, coherence names a relational achievement rather than a structural given: things become coherent through the work of composition, interpretation, and shared understanding.",
      thinkers: ["Paul Ricoeur", "Donald Davidson", "Gregory Bateson"],
      tags: ["structure", "wholeness", "narrative", "epistemology", "systems"],
      connections: [
        { to: "resonance-link", label: "emerges from sustained" },
        { to: "composition-node", label: "is an aim of" },
        { to: "dissonance", label: "is disrupted and renewed by" },
        { to: "chorus", label: "at its best achieves" },
      ],
      nuances: [
        { thinker: "Bateson — pattern which connects", note: "Bateson's great question — 'what is the pattern which connects the crab to the lobster and the orchid to the primrose?' — is a question about coherence at a biological and epistemological level. The pattern that connects is not a visible structure but a formal relationship: a grammar of forms that makes things intelligible as belonging to the same story." },
        { thinker: "Ricoeur — emplotment", note: "Ricoeur's concept of emplotment — the configuration of events into a plot — is the narrative form of coherence. Events become a story not by juxtaposition but by being gathered into a meaningful arc; coherence is the work of this gathering, which is never complete and always contestable." },
      ],
      x: 400, y: 140, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "composition-node",
      term: "Composition",
      definition: "The act and result of bringing heterogeneous elements into a working whole — arranging, weighting, and relating parts so that something is made that could not be predicted from the parts alone. Philosophically, composition connects to Latour's concept of the 'compositionist' stance: rather than critique (which deconstructs) or construction (which builds from scratch), composition works carefully and provisionally with existing materials, attending to what holds together and what does not. The concept of assemblage, as developed by Deleuze and Guattari, gives it its ontological grounding: things in the world are not given unities but composed arrangements, always in process.",
      thinkers: ["Bruno Latour", "Gilles Deleuze", "Félix Guattari", "John Cage", "Donna Haraway"],
      tags: ["assemblage", "practice", "aesthetics", "ontology", "making"],
      connections: [
        { to: "musicality-node", label: "is the practice of making" },
        { to: "coherence", label: "aims at" },
        { to: "chorus", label: "at scale becomes" },
        { to: "attunement", label: "requires prior" },
        { to: "silence", label: "is shaped by" },
        { to: "improvisation", label: "opens into" },
      ],
      nuances: [
        { thinker: "Latour — compositionism", note: "In 'An Attempt at a Compositionist Manifesto', Latour proposes composition as an alternative to critique: instead of standing outside and dismantling, the compositionist asks what it takes to hold something together, what allies are needed, what has been unjustly excluded. The world is not given as a unified whole but composed, provisionally and partially, from heterogeneous elements." },
        { thinker: "Deleuze & Guattari — assemblage (agencement)", note: "The assemblage concept names the way heterogeneous elements — bodies, tools, signs, affects — can enter into functional compositions without losing their singularity. An assemblage is not a totality but a consistency: elements that hang together by virtue of the connections between them. Composition, on this view, is always in process, never complete." },
        { thinker: "Cage — composition as ecology", note: "John Cage's compositional practice — including the infamous 4'33\" — challenged the assumption that composition means the imposition of order on sound. For Cage, composition could be the creation of conditions under which sounds compose themselves; the composer's task is to open a space of attentiveness rather than to fill it." },
      ],
      x: 240, y: 480, color: "#34d399", status: "consolidated",
    },

    // ── Textural ──────────────────────────────────────────────────────────────

    {
      id: "chorus",
      term: "Chorus",
      definition: "The collective sounding of a territory or place — the sum of voices, presences, rhythms, and silences that constitute the acoustic and affective atmosphere of a particular world. Chorus is not mere multiplicity but the way multiple elements, each with their own pitch and duration, come into a shared resonance that is more than the aggregate of its parts. As a cosmological concept, chorus names the way a place has a voice — a particular quality of aliveness, a texture of relation — that can be heard when one is sufficiently attuned.",
      thinkers: ["R. Murray Schafer", "David Abram", "Tim Ingold", "Robin Wall Kimmerer"],
      tags: ["place", "ecology", "cosmology", "soundscape", "territory", "atmosphere"],
      connections: [
        { to: "resonance-link", label: "is the collective form of" },
        { to: "composition-node", label: "is an emergent form of" },
        { to: "attunement", label: "requires to be heard" },
        { to: "timbre", label: "has its own distinctive" },
        { to: "coherence", label: "at its best achieves" },
      ],
      nuances: [
        { thinker: "Schafer — soundscape ecology", note: "R. Murray Schafer coined 'soundscape' to describe the acoustic environment as a field of aesthetic and ecological meaning — a composition that can be read, compared, and degraded. The chorus of a place is its soundscape understood as something actively produced by all its inhabitants." },
        { thinker: "Ingold — dwelling and meshwork", note: "Ingold's concept of the meshwork — a tangle of lines of life and movement rather than a network of connected nodes — suggests that place is constituted by the interwoven activity of all its inhabitants. The chorus is the audible trace of all the lines of life crossing and recrossing." },
        { thinker: "Kimmerer — grammar of animacy", note: "Robin Wall Kimmerer's Potawatomi-inflected botany proposes treating plants, rivers, and animals as animate grammatical subjects. Heard through this grammar, the chorus of a place is a conversation between persons — each species adding its voice to a collective address that includes the human listener." },
      ],
      x: 560, y: 500, color: "#34d399", status: "consolidated",
    },

    {
      id: "timbre",
      term: "Timbre",
      definition: "The qualitative colour or texture of a sound — what distinguishes a note played on a violin from the same note on an oboe, even when pitch, volume, and duration are identical. As a broader philosophical concept, timbre names the irreducible particularity of things: the quality that makes this situation, this person, this place recognisably itself rather than an instance of a type. Timbre resists reduction to measurable parameters; it is what escapes the score and inheres in the performance. To attend to the timbre of a situation is to be interested in its singular texture rather than its categorisable features.",
      thinkers: ["Jean-Luc Nancy", "Roland Barthes", "Maurice Merleau-Ponty"],
      tags: ["quality", "singularity", "phenomenology", "aesthetics", "texture"],
      connections: [
        { to: "attunement", label: "is what attunement is sensitive to" },
        { to: "chorus", label: "is the qualitative character of" },
        { to: "groove", label: "every groove has its own" },
        { to: "resonance-link", label: "inflects the quality of" },
      ],
      nuances: [
        { thinker: "Barthes — the grain of the voice", note: "Barthes' essay 'The Grain of the Voice' distinguishes the pheno-song (the communicative, interpretive performance that is fully legible) from the geno-song (the bodily, material encounter of voice with language that escapes semantic capture). The grain is essentially timbral, irreducibly singular, resistant to cultural coding." },
        { thinker: "Nancy — listening", note: "Nancy's philosophical essay on listening argues that sound, unlike sight, is not objectifiable: to hear is to be inside what one hears, resounded by it. The timbre of a voice or instrument is not a property one perceives from outside but a quality one is inhabited by." },
        { thinker: "Particularity and ethics", note: "Attending to timbre is an ethical practice in the sense that it resists the substitution of one voice for another, one situation for another. The abstraction required by systems, categories, and policies always involves a loss of timbre. Timbre is what care, as opposed to management, tries to preserve." },
      ],
      x: 680, y: 420, color: "#f59e0b", status: "consolidated",
    },

    // ── Dynamic ───────────────────────────────────────────────────────────────

    {
      id: "vibration",
      term: "Vibration",
      definition: "Oscillatory movement between poles — the physical and metaphysical condition of things that are alive, energised, or in process. In physics, vibration is periodic motion around an equilibrium; philosophically, it names the dynamic quality of existence that complexity theory and process philosophy both invoke: things are not static entities but oscillating events, sustained by the tension between opposing tendencies. To speak of the vibration of a situation is to attend to its internal dynamism — the energy held in tension, the movement between states, the hum of potential that precedes resolution.",
      thinkers: ["Alfred North Whitehead", "Leibniz", "Ilya Prigogine", "Karen Barad"],
      tags: ["complexity", "process", "ontology", "energy", "dynamism"],
      connections: [
        { to: "resonance-link", label: "is the basis of" },
        { to: "rhythm", label: "at a physical scale is" },
        { to: "dissonance", label: "when out of phase produces" },
        { to: "musicality-node", label: "is the felt quality of" },
      ],
      nuances: [
        { thinker: "Whitehead — actual occasions", note: "For Whitehead, each actual occasion is constituted by a process of 'concrescence' — a gathering of feelings from the past into a new unity — that has something irreducibly vibratory about it: a pulse of experience that achieves its moment of subjective intensity and then perishes into objectivity, to be felt by its successors." },
        { thinker: "Prigogine — dissipative structures", note: "Prigogine showed that complex systems far from equilibrium can maintain themselves through sustained oscillation — the vibration is not a deviation from a preferred stable state but the very mechanism of life and coherence. Dissipative structures are, in this sense, organised vibration: they persist by keeping the oscillation going." },
        { thinker: "Barad — intra-action", note: "Barad's agential realism proposes that phenomena arise not from the interaction of pre-given entities but from 'intra-action' — the mutual constitution of things through their entanglement. Vibration here is not the property of a thing but the name for the dynamic process by which distinctions are temporarily drawn." },
      ],
      x: 140, y: 280, color: "#60a5fa", status: "consolidated",
    },

    {
      id: "dissonance",
      term: "Dissonance",
      definition: "The state of tension between elements that do not yet resolve — sounds, forces, meanings, or values that rub against each other, generating productive friction rather than harmony. Dissonance is not the absence of musicality but an essential element of it: music without dissonance has no direction, no desire, no movement toward resolution. As a philosophical and social concept, dissonance names the experience of incommensurability — of being in a situation where things do not cohere, where different logics or rhythms pull against each other.",
      thinkers: ["Theodor W. Adorno", "Paul Ricoeur", "Chantal Mouffe"],
      tags: ["tension", "conflict", "aesthetics", "complexity", "dialectics"],
      connections: [
        { to: "coherence", label: "disrupts and can renew" },
        { to: "vibration", label: "arises from unresolved" },
        { to: "cadence", label: "seeks resolution through" },
        { to: "silence", label: "can be broken open into" },
        { to: "improvisation", label: "calls forth" },
      ],
      nuances: [
        { thinker: "Adorno — negative dialectics and modern music", note: "For Adorno, the dissonance of modern music (Schoenberg above all) was not aesthetic failure but historical truth: the smooth consonances of tonal resolution had become ideologically suspect, complicit with a reconciliation that society had not actually achieved. The refusal of false resolution is itself an ethical act." },
        { thinker: "Ricoeur — narrative conflict", note: "Ricoeur's hermeneutics of the self acknowledges that identity is constituted through the attempt to configure not only harmony but conflict — experiences of rupture, otherness, and betrayal that cannot simply be assimilated. The most honest autobiographies preserve their dissonances." },
        { thinker: "Complexity — edge of chaos", note: "Complexity theory's concept of the 'edge of chaos' — the zone between rigid order and pure randomness where complex adaptive systems thrive — is the systemic equivalent of productive dissonance. The life of complex systems is maintained in the productive tension between too much order and too much disorder." },
      ],
      x: 480, y: 460, color: "#f87171", status: "consolidated",
    },

    {
      id: "silence",
      term: "Silence",
      definition: "The condition of non-sounding that makes sound intelligible — not mere absence but the active ground against which rhythm, melody, and meaning become perceptible. In music, silence is compositional: rests are not voids but events with duration and weight, the negative space that gives the phrase its shape. Phenomenologically, silence is never total: to attend to silence is to become aware of all the sounds that remain, and beneath these, the hum of existence itself. As a practice, silence is the condition of attunement: one cannot hear the timbre of a situation without some quieting of the habitual noise.",
      thinkers: ["John Cage", "Max Picard", "Maurice Merleau-Ponty", "Simone Weil"],
      tags: ["phenomenology", "practice", "aesthetics", "attention", "ground"],
      connections: [
        { to: "attunement", label: "is the ground of" },
        { to: "composition-node", label: "shapes through its placing" },
        { to: "cadence", label: "follows resolution into" },
        { to: "dissonance", label: "holds space around" },
      ],
      nuances: [
        { thinker: "Cage — 4'33\"", note: "Cage's famous silent piece is not a provocation but a phenomenological demonstration: in the absence of composed sound, the audience discovers that silence is full — of ambient noise, bodily sounds, the hum of attention itself. The piece repositions listening as the primary musical act." },
        { thinker: "Picard — The World of Silence", note: "Max Picard treats silence not as a privation but as the original substance from which speech emerges and to which it returns. Words are events within silence rather than silence being the gap between words. The degradation of silence in modern life is a symptom of spiritual and relational impoverishment." },
        { thinker: "Weil — attention and waiting", note: "Simone Weil's concept of attention — a receptive, non-grasping orientation toward the other — is essentially a practice of cultivated silence. To truly attend is to silence the ego's desire to project, categorise, and consume; it is to wait in a kind of creative emptiness from which a genuine response can arise." },
      ],
      x: 340, y: 480, color: "#94a3b8", status: "consolidated",
    },

    // ── Practice ──────────────────────────────────────────────────────────────

    {
      id: "improvisation",
      term: "Improvisation",
      definition: "The practice of making in real time — composing and performing simultaneously, navigating the unexpected without the security of a fixed score. Improvisation is not the absence of structure but the internalisation of structure deeply enough that it can be departed from fluidly: one must know the groove well enough to leave it and return. As a philosophical concept, improvisation names the mode of agency appropriate to complex, open situations — situations that do not permit the luxury of prior composition.",
      thinkers: ["Derek Bailey", "Charles Mingus", "Hannah Arendt", "Francisco Varela"],
      tags: ["practice", "complexity", "freedom", "emergence", "embodiment", "creativity"],
      connections: [
        { to: "groove", label: "departs from and returns to" },
        { to: "composition-node", label: "is the live edge of" },
        { to: "attunement", label: "depends on deep" },
        { to: "dissonance", label: "responds in real time to" },
        { to: "rhythm", label: "plays with and against" },
      ],
      nuances: [
        { thinker: "Bailey — Improvisation: Its Nature and Practice in Music", note: "Derek Bailey's study of free improvisation across traditions insists on its irreducible heterogeneity: there is no single thing called improvisation, but a family of practices united by the refusal of a fixed script and the demand of real-time response. The highest improvisers are not free of structure but free within it." },
        { thinker: "Arendt — action and natality", note: "Arendt's concept of action — the capacity to begin something genuinely new in the public realm — bears a deep structural resemblance to improvisation. To act is to insert oneself into an ongoing web of relations without knowing what consequences will follow; it is irreversible and unpredictable, like the gesture of an improviser in a room full of listeners." },
        { thinker: "Varela — embodied cognition and readiness-for-action", note: "Varela's work on embodied cognition emphasises that skilful coping in complex situations does not proceed by first forming a plan and then executing it, but by a continuous loop of micro-perception and micro-adjustment. Expert improvisation is the most visible form of this — a proof that cognition and action are not sequential but simultaneous." },
      ],
      x: 120, y: 460, color: "#f59e0b", status: "consolidated",
    },

  ],
};
