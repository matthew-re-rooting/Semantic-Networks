export const delugeNetwork = {
  id: "deluge-phenomenology",
  label: "Deluge Phenomenology",
  subtitle: "Overwhelm, Sensemaking Crisis & the Flood of the Present",
  accent: "#6366f1",
  storageKey: "semantic-network-deluge-phenomenology",
  initialNodes: [

    // ── Center ────────────────────────────────────────────────────────────────

    {
      id: "the-deluge",
      term: "The Deluge",
      definition: "The phenomenological condition of the present moment: not merely information overload (too clinical, too manageable-sounding) but submersion — the experience of being under a flood that does not recede, that keeps producing more content, more crisis, more noise, more demand than can possibly be processed. The Biblical resonance is deliberate: the deluge is not a storm that passes but the dissolution of the world's familiar landmarks, the washing away of the ground by which one navigated. To be in the deluge is to be treading water in a reality that keeps generating more of itself, faster than any sensemaking can follow. The deluge is not simply external — it is also internal: the flood gets inside, colonises attention, disrupts the capacity to think, to rest, to want. What makes the contemporary deluge distinctive is that it is structural rather than exceptional: it is the normal condition, the baseline, the water in which everyone swims. There is no higher ground to retreat to, no season after which the waters recede. The deluge is the present.",
      thinkers: ["Hartmut Rosa", "Byung-Chul Han", "Paul Virilio", "Bernard Stiegler"],
      tags: ["overwhelm", "information", "modernity", "phenomenology", "acceleration"],
      connections: [
        { to: "sensemaking-crisis", label: "produces" },
        { to: "dynamic-stabilisation", label: "is sustained by" },
        { to: "overwhelm", label: "is experienced as" },
        { to: "noise", label: "is constituted by" },
        { to: "groundlessness", label: "results in" },
        { to: "drowning-suffocation", label: "is felt bodily as" },
        { to: "permanent-emergency", label: "is characterised by" },
        { to: "the-shitstorm", label: "erupts periodically as" },
      ],
      x: 400, y: 300, color: "#6366f1", status: "consolidated",
    },

    // ── Structural ────────────────────────────────────────────────────────────

    {
      id: "dynamic-stabilisation",
      term: "Dynamic Stabilisation",
      definition: "Hartmut Rosa's concept for the structural logic of modern acceleration-based societies: systems that require constant growth, innovation, and speed not to progress but simply to maintain their current position. The treadmill that must run faster just to stay still. Dynamic stabilisation is not a failure of modernity but its normal operating condition: the economy must grow or it contracts; the institution must innovate or it loses relevance; the individual must keep acquiring skills, updating profiles, producing content, or they fall behind. This produces a specific temporal experience — the sense that one is always already behind, always catching up with something that has already moved on, always accelerating into a present that keeps receding. The cruelty of dynamic stabilisation is that there is no resting point, no moment of achieved sufficiency, no plateau from which one can survey what has been accomplished. The motion itself is the goal, which means there is no goal — only the motion.",
      thinkers: ["Hartmut Rosa", "Judy Wajcman", "Paul Virilio"],
      tags: ["acceleration", "modernity", "time", "sociology", "treadmill"],
      connections: [
        { to: "the-deluge", label: "sustains" },
        { to: "chronic-urgency", label: "produces" },
        { to: "burnout", label: "drives toward" },
        { to: "sensemaking-crisis", label: "prevents resolution of" },
        { to: "eventlessness", label: "paradoxically generates" },
        { to: "overwhelm", label: "is the subjective experience of" },
      ],
      nuances: [
        { thinker: "Rosa — Social Acceleration", note: "Rosa identifies three interlocking dimensions of social acceleration: technological acceleration (the speeding up of processes), the acceleration of social change (institutions, values, and practices changing faster than they can be assimilated), and the acceleration of the pace of life (the subjective sense of never having enough time). These three dimensions reinforce each other: technological acceleration produces social change which produces time pressure which produces demand for more technological acceleration. The system is self-reinforcing and there is no obvious external brake." },
        { thinker: "Virilio — the accident of speed", note: "Paul Virilio argues that every technology produces its own specific accident: the invention of the ship is the invention of the shipwreck; the invention of the plane is the invention of the plane crash. The acceleration of information technology has produced its own accident: the information bomb, the collapse of the distinction between signal and noise, the overloading of the human perceptual system by a speed of information transmission that exceeds its evolutionary capacity." },
        { thinker: "Wajcman — timeless time", note: "Judy Wajcman's sociology of time shows that despite — or because of — all the time-saving technologies of modernity, people consistently report having less time than before. The time saved by technology is immediately colonised by additional demands and activities. Dynamic stabilisation explains this paradox: time-saving technologies increase the speed of the treadmill rather than slowing it down, producing not leisure but acceleration." },
      ],
      x: 200, y: 160, color: "#6366f1", status: "consolidated",
    },

    {
      id: "sensemaking-crisis",
      term: "Sensemaking Crisis",
      definition: "The condition in which the flow of events exceeds the capacity to narrativise, categorise, or orient oneself within it — the breakdown of the basic human practice of making retrospective sense of experience. Karl Weick's sensemaking theory describes how organisations and individuals construct meaning from the ongoing stream of events: sensemaking is retrospective, plausible rather than accurate, and always conducted from within an ongoing situation. In normal conditions, sensemaking produces a working model of the world adequate to the demands of action. In the sensemaking crisis, the flow exceeds this capacity: events arrive faster than they can be processed, contradictory information accumulates without resolution, the plausible stories available don't account for what is actually happening. The result is not stupidity or ignorance but a genuine cognitive-affective condition: the person who cannot make sense of their situation cannot properly act within it, cannot rest, cannot know what matters.",
      thinkers: ["Karl Weick", "Nassim Nicholas Taleb", "David Snowden"],
      tags: ["meaning", "cognition", "crisis", "narrative", "overwhelm"],
      connections: [
        { to: "the-deluge", label: "is produced by" },
        { to: "noise", label: "is intensified by" },
        { to: "groundlessness", label: "deepens into" },
        { to: "kafkaesque", label: "is the institutional form of" },
        { to: "dynamic-stabilisation", label: "prevents resolution of" },
        { to: "eventlessness", label: "is compounded by" },
        { to: "affliction", label: "sustained long enough becomes" },
      ],
      nuances: [
        { thinker: "Weick — sensemaking in organisations", note: "Weick's foundational insight is that sensemaking is not about finding the truth but about constructing a plausible account that is good enough to act on. In stable conditions, this is sufficient: the plausible story orients action, and action produces feedback that allows the story to be refined. In crisis conditions — his paradigm case is the Mann Gulch fire disaster — the stream of events overtakes the capacity to construct plausible accounts, and the result is organisational collapse. The sensemaking crisis is not unusual; it is the normal condition of the deluge." },
        { thinker: "Taleb — black swans", note: "Taleb's black swan concept names a specific form of sensemaking crisis: the event that lies outside the range of normal expectation, that cannot be predicted from prior experience, but that retrospectively seems obvious. The problem is not that black swans are rare — in the contemporary world they are common — but that our sensemaking systems are systematically designed to exclude them: we build models that work for the events we have seen, and are blindsided by the events we haven't." },
        { thinker: "Snowden — the Cynefin framework", note: "David Snowden's Cynefin framework identifies different domains of complexity and the different sensemaking approaches appropriate to each: simple, complicated, complex, and chaotic. The deluge is characterised by the collapse of the distinction between complex and chaotic: the system is so fast-moving and multi-determined that even the most sophisticated analytical approaches cannot stay ahead of it. The appropriate response to chaos is not analysis but action — probe, sense, respond — which is also, paradoxically, the approach that produces the most noise." },
      ],
      x: 580, y: 160, color: "#6366f1", status: "consolidated",
    },

    {
      id: "noise",
      term: "Noise",
      definition: "The collapse of the signal-to-noise ratio — not silence but its opposite, the condition in which everything is equally loud and therefore nothing can be heard. Noise in the deluge is not random: it is produced by systems designed to maximise engagement, which means systems designed to trigger response regardless of the quality or truth of the content triggering it. The outrage is noise. The counter-outrage is noise. The fact-check is noise. The fact-check of the fact-check is noise. The accumulation of noise does not cancel out but amplifies: each addition to the information environment makes it harder rather than easier to attend to what matters. Crucially, noise is not merely an external condition but an internal one: sustained exposure to noise produces noise inside the person — the constant background chatter of half-processed information, unresolved concerns, and competing urgent demands that makes genuine thinking, genuine rest, and genuine attention progressively harder to access.",
      thinkers: ["Jacques Attali", "John Cage", "Shannon and Weaver", "Douglas Rushkoff"],
      tags: ["information", "attention", "signal", "overwhelm", "media"],
      connections: [
        { to: "the-deluge", label: "constitutes" },
        { to: "sensemaking-crisis", label: "intensifies" },
        { to: "ad-nauseam", label: "is amplified by" },
        { to: "the-swarm", label: "is generated by" },
        { to: "drowning-suffocation", label: "contributes to" },
        { to: "groundlessness", label: "erodes orientation into" },
      ],
      nuances: [
        { thinker: "Attali — noise and music", note: "Jacques Attali's political economy of music identifies noise as the precursor of new forms of social organisation: noise disrupts existing codes of meaning and clears the ground for new ones. But in the contemporary context, Attali's productive noise has been captured: the noise of the information environment does not clear the ground for new meaning but fills it with competing signals so dense that nothing new can emerge. The deluge is noise without the promise of music." },
        { thinker: "Cage — 4'33\" revisited", note: "John Cage's great lesson — that silence is full, that what we call noise is always also information — is both validated and reversed by the deluge. Cage showed that silence contains the world; the deluge shows that noise can drown the world. The difference is attention: Cage's silence required and rewarded attention; the deluge is specifically designed to prevent the quality of attention that would allow the noise to become meaningful." },
        { thinker: "Rushkoff — present shock", note: "Douglas Rushkoff's concept of present shock — the collapse of narrative into a perpetual, overwhelming now — describes the temporal dimension of noise: when everything is equally present and equally urgent, the narrative structures that make individual events meaningful cannot be sustained. The news cycle is the paradigm: events arrive and are immediately superseded, never achieving the narrative completeness that would allow them to be properly processed or properly forgotten." },
      ],
      x: 200, y: 420, color: "#818cf8", status: "consolidated",
    },

    {
      id: "chronic-urgency",
      term: "Chronic Urgency",
      definition: "The temporal condition of the deluge: the sense that everything is always already urgent, that there is never time to think, that the next thing arrives before the last has been properly processed. Chronic urgency is dynamic stabilisation felt from the inside: the structural demand to keep accelerating is experienced as a constant pressure at the back of the chest, a perpetual mild panic that nothing can discharge. It is chronic rather than acute: it is not the urgency of a specific emergency but the urgency of a system that has made urgency its baseline. The person in chronic urgency does not know what they are rushing toward or why — only that they must keep moving, keep responding, keep producing, or something terrible will happen. What terrible thing is never specified; the urgency is the point, not any particular outcome. This produces a specific form of temporal impoverishment: the past cannot be properly metabolised because the present is already demanding attention; the future cannot be properly anticipated because the present is always already overflowing.",
      thinkers: ["Hartmut Rosa", "Byung-Chul Han", "Jenny Odell"],
      tags: ["time", "urgency", "acceleration", "anxiety", "temporality"],
      connections: [
        { to: "dynamic-stabilisation", label: "is the inner experience of" },
        { to: "burnout", label: "leads toward" },
        { to: "overwhelm", label: "produces" },
        { to: "the-deluge", label: "is the temporal texture of" },
        { to: "drowning-suffocation", label: "produces the sensation of" },
        { to: "permanent-emergency", label: "is the collective form of" },
      ],
      nuances: [
        { thinker: "Rosa — the time of modernity", note: "Rosa's analysis of social acceleration identifies a paradox at the heart of modern temporality: despite the proliferation of time-saving technologies and the constant promise of greater efficiency, people consistently experience time as scarcer and more pressured than before. Chronic urgency is the subjective form of this paradox: the acceleration does not produce more time but less, not freedom from urgency but urgency as a permanent condition." },
        { thinker: "Odell — how to do nothing", note: "Jenny Odell's essay on doing nothing identifies chronic urgency as the primary mechanism of attention capture: the sense that one cannot afford to stop, to rest, to attend to things that have no immediate productive value, is not a natural condition but a produced one — produced by platforms, by work cultures, and by the internalisation of the attention economy's logic. Resisting chronic urgency is therefore a political as well as a personal act." },
        { thinker: "The discharging that never happens", note: "The physiological dimension of chronic urgency is crucial: the body's stress response is designed for acute emergencies — a predator, a physical threat — that can be addressed and resolved. In chronic urgency, the arousal system is permanently activated without any resolution: there is no predator to flee, no threat to overcome, just the continuous low-grade activation that has nowhere to go. The result is the specific exhaustion of the person who is always ready and never done." },
      ],
      x: 580, y: 420, color: "#818cf8", status: "consolidated",
    },

    // ── Phenomenological ──────────────────────────────────────────────────────

    {
      id: "overwhelm",
      term: "Overwhelm",
      definition: "The experience of having more coming in than can be processed — the specific condition in which the volume, speed, or complexity of input exceeds the available capacity to receive, organise, and respond to it. Overwhelm is not merely psychological: it is bodily. Drew Leder's phenomenology of the absent body shows that the healthy body is normally transparent — it functions without demanding attention. In overwhelm, the body becomes suddenly and unbearably present: the chest tightens, the breath shortens, the stomach contracts, the eyes cannot focus. The body is making its own bid for attention in a situation where attention is already overextended. Overwhelm is the deluge felt at the level of the organism: the system that was designed for a certain range of input encountering input far beyond that range, and doing what flooded systems do — backing up, slowing down, shutting off. The specific quality of contemporary overwhelm is that it is relentless: it does not peak and subside but maintains a high baseline that occasional acute peaks push above.",
      thinkers: ["Drew Leder", "Maurice Merleau-Ponty", "Bessel van der Kolk"],
      tags: ["body", "phenomenology", "capacity", "sensation", "threshold"],
      connections: [
        { to: "the-deluge", label: "is the bodily form of" },
        { to: "dynamic-stabilisation", label: "is the subjective experience of" },
        { to: "drowning-suffocation", label: "becomes" },
        { to: "chronic-urgency", label: "is produced by" },
        { to: "affliction", label: "sustained over time becomes" },
        { to: "burnout", label: "accumulated becomes" },
        { to: "groundlessness", label: "opens into" },
      ],
      nuances: [
        { thinker: "Leder — the dys-appearing body", note: "Leder's concept of the 'dys-appearing' body — the body that becomes negatively present through pain, dysfunction, or overextension — captures the somatic dimension of overwhelm: the body that was functioning invisibly in the background suddenly demands foreground attention, but at precisely the moment when the person is least able to attend to it. Overwhelm is the body dys-appearing in the context of a system that has no tolerance for the body's claims." },
        { thinker: "Van der Kolk — the body keeps the score", note: "Bessel van der Kolk's research on trauma and the body shows that overwhelming experiences are stored in the body rather than processed narratively: the overwhelmed nervous system cannot complete the normal cycle of arousal and resolution, and the incomplete experience lodges in the body as a chronic state of activation. Contemporary overwhelm, sustained long enough, begins to look less like a temporary condition and more like a low-grade traumatic state." },
      ],
      x: 400, y: 160, color: "#6366f1", status: "consolidated",
    },

    {
      id: "groundlessness",
      term: "Groundlessness",
      definition: "The disappearance of the stable ground from which sensemaking, orientation, and action were possible — the condition beneath all the others in the deluge. Groundlessness is not merely confusion or uncertainty but the loss of the pre-given, taken-for-granted background that made confusion and uncertainty possible as temporary deviations from a norm. When the ground dissolves, there is no stable platform from which to be confused — only the vertiginous experience of having nothing to stand on. Heidegger's anxiety is the individual form of groundlessness: the moment when the familiar world withdraws and existence appears in its naked contingency. The deluge produces a collective, chronic form of this: the shared ground of common meaning, shared reference, and trusted institutions that once provided a stable (if constructed) platform for public life has been progressively undermined, leaving a condition that is not quite Heidegger's individualising anxiety but a dispersed, ambient vertiginousness that no individual can resolve alone.",
      thinkers: ["Martin Heidegger", "Hannah Arendt", "Zygmunt Bauman"],
      tags: ["meaning", "stability", "anxiety", "modernity", "phenomenology"],
      connections: [
        { to: "the-deluge", label: "is the result of" },
        { to: "sensemaking-crisis", label: "deepens" },
        { to: "overwhelm", label: "opens into" },
        { to: "noise", label: "is eroded by" },
        { to: "drowning-suffocation", label: "is felt as" },
        { to: "kafkaesque", label: "is given institutional form by" },
        { to: "affliction", label: "in its extreme form is" },
      ],
      nuances: [
        { thinker: "Arendt — the loss of the common world", note: "Arendt's analysis of totalitarianism identifies the destruction of the common world — the shared reality that holds diverse perspectives together — as its precondition and its aim. The deluge, without being totalitarian in the political sense, achieves something analogous: by filling the shared space with noise, contradiction, and competing realities, it makes the construction of a common world progressively harder. The groundlessness of the deluge is not imposed by a single power but produced structurally, which makes it harder to identify and resist." },
        { thinker: "Bauman — liquid modernity", note: "Bauman's diagnosis of liquid modernity — a condition in which all solid forms of social life (stable employment, fixed communities, durable institutions, long-term commitments) have been dissolved into fluid, temporary, and contingent arrangements — describes the sociological form of groundlessness. In liquid modernity, the ground is always shifting: identity, relationship, work, and belief are all provisional, all subject to revision, all potentially obsolete. The deluge is liquid modernity at its most acute." },
      ],
      x: 400, y: 460, color: "#818cf8", status: "consolidated",
    },

    {
      id: "drowning-suffocation",
      term: "Drowning & Suffocation",
      definition: "The bodily metaphors that the deluge imposes — and that are more than metaphors. The person in the deluge cannot breathe anywhere: the information environment colonises every available space, every moment of potential respite is filled with notification, stimulation, demand. To be drowning is to be in a medium that does not support life — water rather than air — and to be expending all available energy on staying at the surface, with nothing left for swimming toward anything. Suffocation is the related but distinct experience of having the available air progressively exhausted — not a sudden submersion but a slow diminishment of the breathable space, so that one is always slightly oxygen-deprived, never quite getting enough. Both figures capture something that milder vocabulary misses: the deluge is not merely uncomfortable or stressful but genuinely life-threatening in a phenomenological sense — it threatens the integrity of the self, the coherence of experience, the possibility of genuine presence. The person who cannot breathe cannot think, cannot care, cannot attend. The deluge produces asphyxiated subjects.",
      thinkers: ["Simone Weil", "Drew Leder", "Paul Celan"],
      tags: ["body", "metaphor", "suffocation", "presence", "phenomenology"],
      connections: [
        { to: "the-deluge", label: "is the bodily experience of" },
        { to: "overwhelm", label: "is the extreme of" },
        { to: "chronic-urgency", label: "produces" },
        { to: "noise", label: "contributes to" },
        { to: "affliction", label: "in Weil's sense is related to" },
        { to: "groundlessness", label: "is felt as" },
        { to: "burnout", label: "precedes" },
      ],
      nuances: [
        { thinker: "Weil — the void", note: "Weil's account of the void — the experience of being utterly empty, of having nothing left to give or receive — is the spiritual form of suffocation: not the absence of God but the absence of the capacity to want God, to want anything. In the deluge, this void is not achieved through ascetic discipline but imposed by overwhelm: the person who has been saturated long enough finds themselves in a condition that resembles Weil's void but lacks its contemplative quality. It is the void of exhaustion rather than the void of attention." },
        { thinker: "Celan — breath turn", note: "Paul Celan's poetry returns obsessively to breath — the Atemwende (breath turn), the moment when breath reverses, when what was inhaled must be exhaled, when the poem finds its turning point in the body's own rhythm. In the deluge, the breath turn never comes: there is no moment of exhalation, no release, no space between the in-breath and the next demand. Celan's poetic attention to the breath as the unit of experience stands as an implicit critique of the deluge's breathlessness." },
      ],
      x: 580, y: 300, color: "#f87171", status: "consolidated",
    },

    {
      id: "permanent-emergency",
      term: "Permanent Emergency",
      definition: "The condition in which the apocalyptic register has become the normal register — in which every week produces a new existential crisis that must be responded to immediately, so that the state of emergency is no longer exceptional but the baseline. The permanent emergency is exhausting precisely because it keeps the body and the attention in a state of arousal that has nowhere to discharge: there is always another crisis, another catastrophe, another thing that everything depends on, before the last one has been properly processed. Mark Fisher's observation that it is easier to imagine the end of the world than the end of capitalism finds its complement here: the end of the world is no longer hard to imagine — it is the daily content of the news feed. And yet the world continues, and the emergency continues, and the sense that something must be done immediately coexists with the paralysis of someone who has been told that something must be done immediately for so long that they have lost the capacity to act. The permanent emergency is both true — the crises it names are real — and weaponised: the apocalyptic frame is used to produce compliance, consumption, and paralysis simultaneously.",
      thinkers: ["Mark Fisher", "Walter Benjamin", "Giorgio Agamben", "Naomi Klein"],
      tags: ["crisis", "apocalypse", "politics", "temporality", "paralysis"],
      connections: [
        { to: "the-deluge", label: "is characterised by" },
        { to: "chronic-urgency", label: "is the collective form of" },
        { to: "sensemaking-crisis", label: "intensifies" },
        { to: "burnout", label: "produces" },
        { to: "eventlessness", label: "paradoxically coexists with" },
        { to: "the-shitstorm", label: "is punctuated by" },
        { to: "affliction", label: "sustained exposure to produces" },
      ],
      nuances: [
        { thinker: "Benjamin — the state of exception as norm", note: "Walter Benjamin's eighth thesis on the philosophy of history states that 'the tradition of the oppressed teaches us that the state of emergency in which we live is not the exception but the rule.' Benjamin wrote this in 1940, watching fascism consolidate its hold on Europe; but the insight generalises: the permanent emergency is the condition of those who are always already in crisis, for whom the exceptional has become ordinary. The deluge universalises this condition — makes the state of exception the experience of everyone, not only the oppressed." },
        { thinker: "Fisher — capitalist realism", note: "Fisher's capitalist realism — the sense that capitalism is easier to imagine ending than surviving — is the ideological form of the permanent emergency: the system produces crises that it then presents as reasons why the system cannot be changed. The climate emergency is real, but it is also deployed to produce a specific kind of subject: one who is perpetually anxious, perpetually consuming emergency content, and perpetually convinced that the solution lies in individual choices rather than structural change." },
        { thinker: "Klein — the shock doctrine", note: "Naomi Klein's analysis of disaster capitalism shows how genuine crises are systematically exploited to advance agendas that would be impossible under normal conditions. The permanent emergency is the shock doctrine's ideal operating environment: when the crisis is continuous, the population is in a perpetual state of shock, perpetually available for manipulation, perpetually too overwhelmed to organise resistance. The permanent emergency is not only a phenomenological condition but a political technology." },
      ],
      x: 200, y: 560, color: "#f87171", status: "consolidated",
    },

    {
      id: "eventlessness",
      term: "Eventlessness",
      definition: "The paradox at the heart of the deluge: the constant production of content, news, and sensation generates a pervasive sense that nothing is actually happening — that the same event keeps happening over and over, that there is no genuine novelty despite the surface of constant change, that the news cycle is a single event repeating without ever being the first time. Baudrillard's simulacrum is the theoretical formulation: events that are copies without originals, representations without referents, content that refers to prior content rather than to anything actually occurring. The eventless event is the primary unit of the deluge's production: something that produces the sensation of significance without the substance of it, that triggers engagement without producing meaning, that fills the day without leaving any trace. The person in the deluge has been present for an enormous number of events and yet feels, at the end of the day, that nothing happened — because nothing did, in the sense that nothing was genuinely new, nothing genuinely changed, nothing was properly received.",
      thinkers: ["Jean Baudrillard", "Douglas Rushkoff", "Guy Debord"],
      tags: ["simulacrum", "media", "time", "meaning", "repetition"],
      connections: [
        { to: "sensemaking-crisis", label: "compounds" },
        { to: "dynamic-stabilisation", label: "is generated by" },
        { to: "permanent-emergency", label: "paradoxically coexists with" },
        { to: "noise", label: "is the experience of sustained" },
        { to: "ad-nauseam", label: "is produced by the logic of" },
        { to: "groundlessness", label: "deepens" },
      ],
      nuances: [
        { thinker: "Baudrillard — simulation and simulacra", note: "Baudrillard's analysis of the simulacrum — the copy that has no original, the representation that refers to other representations rather than to any real — describes the ontological structure of eventlessness: in the contemporary media environment, events are produced as content rather than experienced as occurrences. The Gulf War Did Not Take Place is Baudrillard's most provocative formulation: not that nothing happened, but that what happened was immediately absorbed into a representation that replaced it. The deluge is the total dominance of the simulacrum." },
        { thinker: "Debord — the spectacle", note: "Guy Debord's Society of the Spectacle (1967) anticipates the contemporary deluge with unusual precision: 'All that was once directly lived has become mere representation.' The spectacle is not a collection of images but a social relation among people mediated by images — and eventlessness is the spectacle's primary product. The spectacle produces the appearance of happening without the substance of it, keeping subjects engaged and passive simultaneously." },
        { thinker: "Rushkoff — present shock", note: "Rushkoff identifies the collapse of narrative — the inability to construct coherent stories with beginnings, middles, and ends — as the signature of present shock. Without narrative, events cannot be properly sequenced, weighted, or remembered: they exist only as the moment of their occurrence, immediately superseded by the next moment. Eventlessness is the experience of a consciousness that has lost the narrative capacity to make events matter." },
      ],
      x: 580, y: 540, color: "#818cf8", status: "consolidated",
    },

    // ── Figures & Characters ──────────────────────────────────────────────────

    {
      id: "affliction",
      term: "Affliction",
      definition: "Simone Weil's *malheur* — not ordinary suffering but the condition in which something penetrates so deeply that it uproots the very capacity for meaning, for wanting, for self-respect. The afflicted person cannot even properly suffer because suffering requires a self that is still intact enough to feel: affliction destroys the interiority from which genuine experience is possible. Weil developed the concept in the context of extreme social degradation and physical suffering; in the context of the deluge, affliction names what happens when overwhelm is sustained long enough — the condition beyond burnout, beyond exhaustion, in which the person has been submerged so long that they have stopped struggling. The specific quality of deluge-affliction is that it is not dramatic: the afflicted person is not visibly broken but merely absent — going through the motions without genuine presence, responding to inputs without genuine reception, present in body but not in the sense that matters. Weil insisted that the afflicted person cannot cry out for help in any form that will be heard — their very affliction destroys the capacity for the kind of appeal that would communicate their condition.",
      thinkers: ["Simone Weil", "Iris Murdoch", "Judith Butler"],
      tags: ["suffering", "weil", "meaning", "self", "exhaustion"],
      connections: [
        { to: "overwhelm", label: "sustained over time becomes" },
        { to: "drowning-suffocation", label: "is related to" },
        { to: "groundlessness", label: "in its extreme form is" },
        { to: "sensemaking-crisis", label: "sustained long enough becomes" },
        { to: "burnout", label: "goes deeper than" },
        { to: "permanent-emergency", label: "is produced by sustained exposure to" },
      ],
      nuances: [
        { thinker: "Weil — Waiting on God", note: "Weil distinguishes affliction from ordinary unhappiness: affliction involves the simultaneous destruction of the soul, the body, and the social self — it is a 'nail' whose point is at the centre of the soul. The afflicted person cannot attract genuine attention or compassion because their condition makes them repulsive rather than pitiable: they have lost the capacity to present themselves as sufferers in ways that others can receive. This is why Weil insists that attention to the afflicted is the supreme moral act — it requires overcoming a fundamental resistance." },
        { thinker: "Murdoch — the fat relentless ego", note: "Iris Murdoch's account of the ego as a 'fat relentless machine' that processes experience in terms of its own needs and defences is the counterpoint to Weil's affliction: the normal condition of the self is a kind of armoured self-absorption that Murdoch calls fantasy — the substitution of a comfortable self-serving narrative for genuine attention to reality. Affliction is what happens when this armour is destroyed — not through spiritual discipline but through sustained overwhelming experience." },
        { thinker: "Butler — precarity and grievability", note: "Judith Butler's concept of precarity — the unequal distribution of vulnerability to harm — and grievability — the unequal recognition of whose suffering counts as loss — extends Weil's affliction into a political register: the afflicted person is, characteristically, the person whose suffering does not register within the dominant systems of recognition. The deluge's production of affliction is not evenly distributed: those already at the margins bear the heaviest burden of the overwhelm." },
      ],
      x: 200, y: 280, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "kafkaesque",
      term: "Kafkaesque",
      definition: "The experience of being subject to a system that is simultaneously omnipresent, opaque, and immune to appeal — one that processes you without your being able to understand its logic, address its authority, or opt out of its operations. In Kafka's novels, the protagonist faces a trial without being told the charge, seeks access to a castle that recedes as it is approached, waits for a verdict that never comes from an authority that cannot be located. In the deluge, the Kafkaesque quality is the sense that the algorithm, the platform, the news cycle, and the bureaucracy are all operating on you through processes you cannot see or address: your feed is curated by systems whose logic is proprietary; your attention is harvested by mechanisms that cannot be negotiated with; your data is processed by entities that have no face and no address. You are being managed by something, but you cannot find the manager. The charge is being processed but you cannot locate the court. The Kafkaesque is the institutional and systemic face of the deluge — the experience of the overwhelm as something that has a logic but a logic one is not permitted to know.",
      thinkers: ["Franz Kafka", "David Graeber", "Shoshana Zuboff"],
      tags: ["bureaucracy", "opacity", "system", "kafka", "power"],
      connections: [
        { to: "sensemaking-crisis", label: "is the institutional form of" },
        { to: "groundlessness", label: "gives institutional form to" },
        { to: "the-deluge", label: "is the systemic face of" },
        { to: "homo-economicus", label: "is the subject produced by" },
        { to: "ad-nauseam", label: "is the commercial form of" },
        { to: "permanent-emergency", label: "is maintained by" },
      ],
      nuances: [
        { thinker: "Kafka — The Trial and The Castle", note: "In The Trial, Josef K. is arrested one morning without being told his crime, prosecuted by a court whose location and procedures he cannot discover, and eventually executed without ever understanding what he was guilty of. In The Castle, K. seeks access to an authority that is always in the next room, always about to be available, always receding. Both novels describe the phenomenology of the modern bureaucratic-systemic condition: the subject is always already being processed by something they cannot locate or appeal to. The deluge is Kafka's world at scale." },
        { thinker: "Graeber — bureaucratic violence", note: "David Graeber's anthropology of bureaucracy shows that bureaucratic systems produce a specific form of violence through paperwork, procedure, and the infinite deferral of resolution: the subject is kept in a state of permanent incompleteness, always waiting for the form that will resolve their situation, always discovering that there is another form to fill out. This is the Kafkaesque as a contemporary lived reality rather than a literary conceit — and it is, as Graeber notes, disproportionately experienced by those with least power." },
        { thinker: "Zuboff — surveillance capitalism", note: "Shoshana Zuboff's analysis of surveillance capitalism describes the Kafkaesque operation of the digital platforms: they harvest behavioural data, process it through proprietary algorithms, and use the results to predict and modify behaviour — all without the knowledge or meaningful consent of those whose data is being processed. The subject is simultaneously the raw material and the product of a system they cannot see, understand, or opt out of. This is the Kafkaesque at the scale of the total information environment." },
      ],
      x: 580, y: 460, color: "#a78bfa", status: "consolidated",
    },

    {
      id: "the-shitstorm",
      term: "The Shitstorm",
      definition: "The sudden, overwhelming eruption of contradictory, hostile, and incoherent information that sweeps over a person, an institution, or a topic in the digital public sphere — leaving nothing coherent in its wake. The shitstorm is the deluge in its most acute and targeted form: the moment when the background noise of the information environment suddenly focuses its full force on a single point, producing an experience that is simultaneously total exposure and total incomprehensibility. Byung-Chul Han describes the digital swarm's capacity for this kind of focused devastation: the swarm has no face, no accountability, no internal deliberation — it is an aggregate of isolated individuals who momentarily converge around a target and then disperse, leaving only wreckage. The shitstorm does not persuade, does not argue, does not distinguish — it simply overwhelms. It is the epistemological equivalent of a flood: it doesn't care what is true or false, important or trivial; it carries everything with equal force and leaves everything equally saturated and equally meaningless.",
      thinkers: ["Byung-Chul Han", "Jürgen Habermas", "danah boyd"],
      tags: ["media", "digital", "overwhelm", "swarm", "hostility"],
      connections: [
        { to: "the-deluge", label: "is the acute form of" },
        { to: "the-swarm", label: "is generated by" },
        { to: "noise", label: "is the concentrated form of" },
        { to: "permanent-emergency", label: "punctuates" },
        { to: "sensemaking-crisis", label: "produces acute" },
        { to: "kafkaesque", label: "shares the quality of the unaddressable with" },
      ],
      nuances: [
        { thinker: "Han — In the Swarm", note: "Han's analysis in 'In the Swarm' distinguishes the digital public from the classical public sphere: where the latter required face-to-face accountability, shared reference to common standards, and the possibility of genuine deliberation, the digital swarm has none of these features. The swarm is a crowd without solidarity, an aggregate without community, a force without a face. The shitstorm is its most visible expression: a sudden concentration of force that devastates without argument and disperses without consequence." },
        { thinker: "Habermas — the colonisation of the public sphere", note: "Habermas's account of the structural transformation of the public sphere — from a space of rational-critical debate to a space of consumption and spectacle — anticipates the shitstorm without naming it: the public sphere that has been colonised by economic and media interests is no longer capable of genuine deliberation, and the shitstorm is the result. Not the corruption of public reason but its replacement by something that looks like public discourse but operates by entirely different logic." },
        { thinker: "boyd — context collapse", note: "danah boyd's concept of context collapse — the condition in which a message produced for one audience is simultaneously available to all possible audiences — is one of the structural conditions of the shitstorm: because digital communication collapses the boundaries between contexts, anything said in any context can be stripped of its context and deployed in any other. The shitstorm is context collapse weaponised: the targeted devastation of a meaning that could only have been produced in a specific context, now exposed to audiences for whom it is illegible or threatening." },
      ],
      x: 580, y: 300, color: "#f87171", status: "consolidated",
    },

    {
      id: "the-swarm",
      term: "The Swarm",
      definition: "Byung-Chul Han's term for the digital crowd — not a public (which requires shared attention, deliberation, and accountability) but an aggregate of isolated individuals who momentarily converge around a topic and then disperse, leaving only wreckage. The swarm is structurally incapable of genuine deliberation: its members do not address each other, do not modify their positions in response to argument, do not feel accountable to any shared standard of reason or evidence. They move together not through solidarity but through the momentary alignment of individual impulses. The swarm is the social form of the deluge: it is what the flood of information produces when it flows through a population of isolated, attention-competed individuals who have no shared public space in which to encounter each other as responsible speakers. What looks like collective action is actually the simultaneous performance of individual reactions, amplified and coordinated by the platform's engagement-maximising logic.",
      thinkers: ["Byung-Chul Han", "Gustave Le Bon", "Eli Pariser"],
      tags: ["digital", "collective", "media", "isolation", "han"],
      connections: [
        { to: "the-shitstorm", label: "generates" },
        { to: "noise", label: "produces" },
        { to: "the-deluge", label: "is the social form of" },
        { to: "ad-nauseam", label: "is the target of" },
        { to: "sensemaking-crisis", label: "deepens" },
        { to: "eventlessness", label: "is the agent of" },
      ],
      nuances: [
        { thinker: "Han — the swarm has no soul", note: "Han's most pointed formulation: the swarm has no soul, and therefore cannot act in the sense of genuinely political action. It can produce effects — devastation, cancellation, viral spread — but it cannot produce meaning, cannot build anything, cannot take responsibility. The swarm is the deluge's social subject: powerful without agency, present without presence, active without acting." },
        { thinker: "Le Bon — crowd psychology", note: "Gustave Le Bon's early crowd psychology, despite its many limitations, identified something real: that aggregated individuals can behave in ways that none of them would individually, driven by suggestion, contagion, and the dissolution of individual responsibility into collective anonymity. The digital swarm is Le Bon's crowd without the physical co-presence that originally defined it: the anonymity and the dissolution of individual responsibility remain, amplified by the platform's architecture of frictionless engagement." },
        { thinker: "Pariser — the filter bubble", note: "Eli Pariser's filter bubble analysis shows how platform algorithms systematically reduce the diversity of information each individual encounters, creating information environments that reinforce existing beliefs and increase emotional intensity. The swarm is partly an effect of filter bubbles: individuals whose information environments have been personalised to maximise engagement become simultaneously more reactive and less capable of genuine encounter with different perspectives. The swarm is what filter bubbles produce when they intersect." },
      ],
      x: 400, y: 560, color: "#818cf8", status: "consolidated",
    },

    // ── Commercial ────────────────────────────────────────────────────────────

    {
      id: "ad-nauseam",
      term: "Ad Nauseam",
      definition: "The specific phenomenology of contemporary advertising — not merely the quantity of ads but the way advertising has colonised the registers in which genuine meaning used to be made: the language of intimacy, care, beauty, community, and transformation are all now available for purchase and deployment in service of commodity exchange. The result is a systemic contamination of the registers of value: when you encounter what looks like care or beauty or connection, you cannot immediately tell if it is or if it is a commodity wearing their clothing. Ad nauseam names the nausea — the specific bodily revulsion — that accumulates from this contamination: not the disgust at any particular ad but the exhaustion of living in a world where everything might be selling something, where every expression of value might be a transaction in disguise, where the advertising has gotten into the aesthetic and the emotional and the ethical registers and cannot be cleanly removed. The Latin phrase is precise: to the point of nausea, beyond the threshold of what can be received.",
      thinkers: ["Guy Debord", "Naomi Klein", "Wolfgang Haug"],
      tags: ["advertising", "capitalism", "nausea", "consumer", "contamination"],
      connections: [
        { to: "homo-economicus", label: "produces and is produced by" },
        { to: "the-deluge", label: "is a primary component of" },
        { to: "noise", label: "amplifies" },
        { to: "the-swarm", label: "is the target of" },
        { to: "eventlessness", label: "is produced by the logic of" },
        { to: "kafkaesque", label: "is the commercial form of" },
        { to: "sensemaking-crisis", label: "contributes to" },
      ],
      nuances: [
        { thinker: "Debord — spectacular commodity", note: "Debord's spectacular commodity is the form that advertising takes when it has fully colonised social life: the commodity no longer merely claims to satisfy a need but to provide an experience, an identity, a relationship, a form of being. The spectacular commodity sells not a thing but a life — and in doing so, it colonises the very categories (love, adventure, community, authenticity) that might provide an outside from which it could be critiqued. Ad nauseam is the experience of living inside the spectacle without being able to find an exit." },
        { thinker: "Klein — the branded world", note: "Naomi Klein's 'No Logo' documents the extension of branding from products to identities, from commodities to experiences, from commercial to public space. The branded world is one in which the advertising has gotten into everything: schools, public spaces, cultural events, human relationships. Ad nauseam is what you feel when you realise that the brand has colonised the register in which you were trying to find something genuine." },
        { thinker: "Haug — commodity aesthetics", note: "Wolfgang Haug's analysis of commodity aesthetics shows how capitalism develops an entire apparatus for producing the appearance of use-value — the promise of the commodity — that is systematically disconnected from its actual use-value. The commodity promises more than it can deliver, not by accident but by design: the promise must exceed the delivery to generate the next purchase. Ad nauseam is the phenomenological accumulation of promises that don't deliver, of experiences that were always already products." },
      ],
      x: 160, y: 480, color: "#f87171", status: "consolidated",
    },

    {
      id: "homo-economicus",
      term: "Homo Economicus",
      definition: "The reduction of the human being to a unit of rational self-interest — a consumer-maximiser, a bundle of preferences, an optimiser of utility. Homo economicus is not merely an economic theory but an ontological claim that has become self-fulfilling: when institutions, platforms, algorithms, and social norms are all designed around the assumption that people are primarily consumers seeking to maximise satisfaction, people increasingly become that — or at least behave as if they are, which is functionally equivalent. The deluge both produces and is produced by the homo economicus framework: if people are consumers, then more content, more choice, more stimulation is always better — the logic of consumer sovereignty requires an endless expansion of the information environment. And the person who has been treated as a consumer long enough begins to experience themselves as one: relating to culture, to politics, to relationships, to the self, as things to be consumed rather than inhabited, created, or endured.",
      thinkers: ["Philip Mirowski", "Michel Foucault", "Karl Polanyi"],
      tags: ["economics", "consumer", "identity", "capitalism", "subjectivity"],
      connections: [
        { to: "ad-nauseam", label: "is produced and produces" },
        { to: "kafkaesque", label: "is the subject produced by" },
        { to: "the-deluge", label: "is the condition of" },
        { to: "affliction", label: "is what awaits when" },
        { to: "burnout", label: "is the endpoint of" },
        { to: "dynamic-stabilisation", label: "is the economic engine of" },
      ],
      nuances: [
        { thinker: "Mirowski — never let a serious crisis go to waste", note: "Philip Mirowski's analysis of neoliberalism shows how the homo economicus framework has been deliberately extended from economic behaviour to all domains of life: education, healthcare, personal relationships, and the self are all reconceived as markets in which rational self-interested individuals make optimising choices. The neoliberal subject is homo economicus as a total ontology — and the deluge is its information environment: an endless market of attention, engagement, and preference-expression." },
        { thinker: "Foucault — the entrepreneurial self", note: "Foucault's late lectures on neoliberal governmentality identify the homo economicus of neoliberalism as a specific form of subject-production: not the exchange-seeking subject of classical liberalism but the entrepreneurial subject who treats themselves as human capital to be invested in and developed. The entrepreneurial self is homo economicus turned inward: the self as a project to be optimised, a portfolio to be managed, a brand to be developed. The deluge is this subject's information environment." },
        { thinker: "Polanyi — the fictitious commodities", note: "Karl Polanyi's analysis of the market society identifies three 'fictitious commodities' — land, labour, and money — that market society treats as if they were commodities produced for sale, though they are not. The deluge adds a fourth: attention. When attention is treated as a commodity, the consequences are as destructive as the commodification of land or labour: it destroys the very thing it commodifies, producing a population that has lost the capacity for the kind of sustained, voluntary attention that would make it possible to resist the commodification." },
      ],
      x: 160, y: 360, color: "#f87171", status: "consolidated",
    },

    // ── Human Cost ────────────────────────────────────────────────────────────

    {
      id: "burnout",
      term: "Burnout",
      definition: "The specific exhaustion of the person who has operated at the limits of their capacity for long enough that something has given way — not merely tiredness or stress but a fundamental depletion of the resources from which recovery is normally possible. Byung-Chul Han's analysis identifies burnout as the signature pathology of the achievement society: not the exhaustion of oppression (imposed from outside) but the exhaustion of self-exploitation (imposed from the inside by an ego that has internalised the demand for constant productivity). This is what makes deluge-burnout so difficult to address: there is no external oppressor to resist, no master to be liberated from — only the self, which continues to demand more of itself even as it depletes. Han's insight is that the achievement society's positivity — its endless emphasis on can-do, on possibility, on the elimination of all limits — is paradoxically more exhausting than a disciplinary society's negativity: at least prohibition gives the subject something to rest against. The achievement society has no rest, no limit, no outside.",
      thinkers: ["Byung-Chul Han", "Herbert Freudenberger", "Christina Maslach"],
      tags: ["exhaustion", "achievement", "han", "self", "pathology"],
      connections: [
        { to: "dynamic-stabilisation", label: "is the human cost of" },
        { to: "chronic-urgency", label: "is the outcome of" },
        { to: "overwhelm", label: "accumulated over time becomes" },
        { to: "affliction", label: "deepens into" },
        { to: "homo-economicus", label: "is the endpoint of" },
        { to: "drowning-suffocation", label: "is preceded by" },
        { to: "permanent-emergency", label: "is produced by" },
      ],
      nuances: [
        { thinker: "Han — the burnout society", note: "Han argues that burnout is not an individual failing but a structural product: the achievement society generates burnout as reliably as the factory generated industrial injury. The difference is that industrial injury was visible and attributable; burnout is invisible and self-attributed. The burned-out person typically blames themselves — was not resilient enough, did not manage their energy correctly, failed to maintain the required positivity. This self-attribution is part of the achievement society's operation: it individualises a structural condition." },
        { thinker: "Maslach — the dimensions of burnout", note: "Christina Maslach's clinical analysis identifies three dimensions of burnout: exhaustion (the depletion of emotional and physical resources), cynicism (the distancing from and devaluation of one's work and its recipients), and reduced efficacy (the diminished sense of competence and achievement). Together these describe a person who has been used up by a system that has no interest in their replenishment. The deluge accelerates all three: exhaustion through overwhelm, cynicism through noise, reduced efficacy through the sensemaking crisis." },
      ],
      x: 400, y: 380, color: "#6366f1", status: "consolidated",
    },

    {
      id: "the-saturated-world",
      term: "The Saturated World",
      definition: "W.G. Sebald's particular mode of experience — moving through a world so dense with unprocessed history, unacknowledged catastrophe, and layered meaning that every surface becomes a potential depth, every ordinary thing a potential archive of loss. Sebald's narrators cannot look at anything without it opening onto something else: a seaside town discloses the ruins of a bombed city; a country house carries the traces of exile and dispossession; an old photograph becomes the occasion for a meditation on time, memory, and the systematic destruction of ways of life. The saturated world is the opposite of eventlessness — it has too much happening rather than too little — but it produces a similar paralysis: the person who finds everything significant cannot act because to act requires selecting, prioritising, moving forward, which means leaving behind the accumulated weight of what has been found. The saturated world is the deluge experienced as depth rather than as surface: not the flood of the new but the overwhelming presence of what has not been properly mourned.",
      thinkers: ["W.G. Sebald", "Walter Benjamin", "Paul Celan"],
      tags: ["memory", "melancholy", "history", "loss", "sebald"],
      connections: [
        { to: "the-deluge", label: "is a specific form of" },
        { to: "overwhelm", label: "is produced by" },
        { to: "sensemaking-crisis", label: "deepens" },
        { to: "groundlessness", label: "is suffused with" },
        { to: "affliction", label: "is the chronic form of" },
        { to: "permanent-emergency", label: "carries the weight of" },
      ],
      nuances: [
        { thinker: "Sebald — The Rings of Saturn", note: "In The Rings of Saturn, Sebald's narrator walks through the Suffolk coast and finds everywhere the traces of vanished civilisations, destroyed ecologies, and historical catastrophes that nobody is attending to. The walk becomes increasingly heavy with what the landscape carries — the herring industry's collapse, the destruction of the silkworm trade, the remnants of colonial wealth — until the narrator collapses, paralysed by the weight of what he has found. The saturated world is Sebald's image for a modernity that cannot mourn what it has destroyed and therefore cannot stop accumulating the weight of the unprocessed." },
        { thinker: "Benjamin — the angel of history", note: "Benjamin's angel of history — who faces backward, watching the wreckage accumulate, while being blown forward into a future it cannot see by the storm called progress — is the mythic form of the saturated world. The angel sees what progress does not: that each moment of advancement produces ruins that pile up behind it. The deluge, for Benjamin, is not metaphor but the structure of historical time: the storm of progress, from which there is no shelter and to which the only response is the act of 'blasting' a fragment of the past out of the continuum — the dialectical image." },
      ],
      x: 200, y: 420, color: "#a78bfa", status: "consolidated",
    },

  ],
};
