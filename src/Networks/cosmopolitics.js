export const cosmopoliticsNetwork = {
  id: "cosmopolitics",
  label: "Cosmopolitics",
  subtitle: "Stengers — Diplomacy, Divergence & the Politics of the Unknown",
  accent: "#38bdf8",
  storageKey: "semantic-network-cosmopolitics",
  initialNodes: [

    // ── Center ───────────────────────────────────────────────────────────────

    {
      id: "cosmopolitics-node",
      term: "Cosmopolitics",
      definition: "A term deliberately built from a false etymology: not 'politics for the cosmos' in the sense of a world government or a shared rational order to be arrived at, but a politics haunted by the 'cosmos' of an old Greek sense — the unknown that composes a world together with those who inhabit it, without any of them being able to claim to speak for the whole. Stengers' cosmopolitics is a political proposal that refuses the standard move whereby disagreement is resolved by appeal to a supposedly neutral, universal ground (science, reason, the market). It asks instead: what if the very terms of a common world are still to be negotiated, and no one — least of all the ones invoking 'reason' or 'progress' — is authorized to impose them in advance?",
      thinkers: ["Isabelle Stengers", "Alfred North Whitehead", "Bruno Latour"],
      tags: ["politics", "epistemology", "diplomacy", "ontology", "STS"],
      connections: [
        { to: "cosmopolitical-proposal", label: "specified through" },
        { to: "diplomacy", label: "practiced as" },
        { to: "common-world", label: "aims toward" },
        { to: "gaia", label: "confronted by" },
        { to: "pluriverse", label: "resonates with" },
      ],
      nuances: [
        { thinker: "Stengers — Cosmopolitics I & II", note: "Stengers borrows 'cosmos' not to name an already-existing harmonious totality but to mark the presence of what resists any single practice's claim to speak in the name of the whole. The cosmos is what forces the political question to stay open rather than close on a pre-given consensus." },
        { thinker: "Whitehead — the lure", note: "Behind Stengers' cosmopolitics stands Whitehead's refusal to separate 'facts' from 'values': for Whitehead, every actual occasion is already a taking-account of its world, so no description of what is can claim to be free of stakes. Cosmopolitics inherits this refusal of a value-free 'reality' to which politics would simply have to submit." },
        { thinker: "Against Kant's cosmopolitanism", note: "Stengers pointedly distances her term from the Kantian tradition of cosmopolitanism, which imagines a rational world-citizenship achievable by extending a single moral-political framework everywhere. Her cosmos does the opposite work: it names the impossibility of any single framework being sufficient." },
      ],
      x: 400, y: 300, color: "#38bdf8", status: "consolidated",
    },

    // ── Practice & method ────────────────────────────────────────────────────

    {
      id: "cosmopolitical-proposal",
      term: "The Cosmopolitical Proposal",
      definition: "Stengers' name for her own intervention, offered explicitly as a proposal rather than a thesis: something put forward to see what it can make possible, not something to be proven true or false. The cosmopolitical proposal asks political thought to slow down in the presence of situations where the identity of the relevant parties, and even what counts as a legitimate party, is not yet settled. It is a call to invent procedures — always local, always provisional — that can hold open a space where non-human and marginalized forms of knowing are not pre-emptively excluded from having a stake in what gets decided.",
      thinkers: ["Isabelle Stengers", "William James"],
      tags: ["politics", "method", "pragmatism", "proposal"],
      connections: [
        { to: "requirement", label: "grounded in" },
        { to: "slowing-down", label: "enacts" },
        { to: "the-idiot", label: "voiced by" },
      ],
      nuances: [
        { thinker: "Stengers on 'proposals'", note: "Stengers insists a proposal is not a program: it does not tell you what to do, it changes what you can pay attention to. The cosmopolitical proposal succeeds not by being adopted wholesale but by making certain forms of premature closure harder to perform in good conscience." },
        { thinker: "William James — radical empiricism", note: "James's insistence that experience always outruns any conceptual system that tries to totalize it is a direct ancestor of the proposal's refusal to let any single vocabulary (scientific, economic, or otherwise) claim final authority over what a situation is." },
      ],
      x: 250, y: 180, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "diplomacy",
      term: "Diplomacy",
      definition: "Stengers' figure for the practice cosmopolitics demands: a mode of negotiation between parties who do not share a common measure and who cannot be made to share one by fiat. Unlike arbitration, which appeals to a rule that stands above the parties, diplomacy in Stengers' sense has no guarantee of success and no higher court to appeal to — it must invent, case by case, ways of allowing divergent practices to exist alongside one another without either merging them or letting the strongest simply prevail. The diplomat represents no one but is answerable to the possibility that a peace achieved too quickly is a peace bought at someone's — or something's — expense.",
      thinkers: ["Isabelle Stengers", "Bruno Latour"],
      tags: ["politics", "negotiation", "divergence", "method"],
      connections: [
        { to: "divergence", label: "negotiates" },
        { to: "requirement", label: "bound by" },
        { to: "neutralization", label: "resists" },
      ],
      nuances: [
        { thinker: "Stengers on the figure of the diplomat", note: "The diplomat is explicitly not a moral hero or a judge. Diplomacy is a technical, exhausting, often failure-prone craft — closer to the patient work of a negotiator between hostile states than to a philosopher pronouncing on justice." },
        { thinker: "Latour — Parliament of Things", note: "Latour's proposal for a 'parliament of things' that would give nonhumans political standing is a companion image to Stengers' diplomacy: both try to design procedures, however imperfect, for according respect to parties who cannot simply be assumed to already fit within existing political categories." },
      ],
      x: 250, y: 420, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "requirement",
      term: "Requirement",
      definition: "What a practice, a proposal, or a form of knowledge answers to from within — the exigence, in Stengers' vocabulary, that gives a practice its integrity and prevents it from being reduced to whatever is convenient for an outside interest. To respect a requirement is to refuse both the fantasy of judging a practice by a universal external standard and the opposite fantasy that anything a practice does is automatically legitimate because it is 'its own.' Requirements are demanding precisely because they can be betrayed, corrupted, or quietly abandoned — which is why cosmopolitics treats their protection as a political matter, not a merely technical one.",
      thinkers: ["Isabelle Stengers"],
      tags: ["ethics", "practice", "obligation", "integrity"],
      connections: [
        { to: "the-idiot", label: "protected by" },
        { to: "techno-science", label: "interrogates" },
      ],
      nuances: [
        { thinker: "Stengers — 'exigence' as untranslatable demand", note: "The French 'exigence' carries a force the English 'requirement' only partly captures: it is something a practice is held to, not something it merely follows — closer to a vow than a rule." },
      ],
      x: 460, y: 460, color: "#38bdf8", status: "provisional",
    },

    // ── The idiot & slowing down ─────────────────────────────────────────────

    {
      id: "slowing-down",
      term: "Slowing Down (ralentir)",
      definition: "A deliberately unglamorous political virtue: the refusal to let urgency dictate the terms of a decision before the situation and its stakeholders — including non-human and not-yet-recognized ones — have had a chance to be adequately taken into account. Slowing down is not indecision or delay for its own sake; it is a discipline against the many forms of premature consensus that pass themselves off as realism, efficiency, or common sense, and that in practice tend to silence whoever cannot speak in the dominant idiom quickly enough.",
      thinkers: ["Isabelle Stengers"],
      tags: ["politics", "temporality", "ethics", "method"],
      connections: [
        { to: "the-idiot", label: "embodied in" },
        { to: "neutralization", label: "counters" },
      ],
      nuances: [
        { thinker: "Stengers — against the 'we have no choice' reflex", note: "Stengers repeatedly targets the rhetorical move whereby urgency ('there is no time to think, we must act now') forecloses precisely the deliberation that a genuinely difficult situation requires. Slowing down is the practical antidote to this reflex, not a luxury available only in calm times." },
      ],
      x: 550, y: 200, color: "#0ea5e9", status: "consolidated",
    },

    {
      id: "the-idiot",
      term: "The Idiot",
      definition: "A figure Stengers borrows from Deleuze (who borrows it from Dostoevsky), redeployed as a cosmopolitical protagonist: not someone who lacks intelligence, but someone who refuses to accept the terms in which a problem has been framed by those in a hurry to solve it, and who thereby forces everyone else to slow down. The idiot's stubborn 'but wait' is not an obstacle to good politics — for Stengers it is one of its conditions of possibility, since it keeps open the question of whether the given formulation of a problem has already smuggled in an answer.",
      thinkers: ["Isabelle Stengers", "Gilles Deleuze"],
      tags: ["politics", "figure", "resistance", "epistemology"],
      connections: [
        { to: "slowing-down", label: "practices" },
        { to: "requirement", label: "protects" },
      ],
      nuances: [
        { thinker: "Deleuze — the idiot as anti-Cartesian figure", note: "Deleuze's idiot inverts the Cartesian cogito's confident 'I think': rather than a subject certain of a shared rational starting point, the idiot is the one who doubts that the terms of the shared starting point were ever adequately agreed upon in the first place." },
        { thinker: "Stengers on collective intelligence", note: "For Stengers, the idiot's role is not individual heroism but a function any collective needs — a standing invitation for someone, anyone, to interrupt when a decision is moving too fast for its consequences to be thought through." },
      ],
      x: 600, y: 340, color: "#0ea5e9", status: "consolidated",
    },

    // ── Gaia ─────────────────────────────────────────────────────────────────

    {
      id: "gaia",
      term: "Gaia",
      definition: "Not the benevolent, self-regulating whole of popular Gaia hypothesis readings, but what Stengers calls the 'intrusion of Gaia': the reassertion, in the register of climate change and ecological collapse, of a planetary agency that no longer offers a stable, indifferent backdrop against which human history can unfold. Gaia in this sense is not a new god to be worshipped or a system to be managed — it is a name for the end of the assumption that 'nature' will simply absorb whatever is done to it, and for the demand that this be reckoned with politically rather than merely technically.",
      thinkers: ["Isabelle Stengers", "James Lovelock", "Bruno Latour"],
      tags: ["ecology", "planetary", "politics", "ontology"],
      connections: [
        { to: "intrusion", label: "enacted as" },
        { to: "common-world", label: "unsettles" },
        { to: "techno-science", label: "exceeds" },
      ],
      nuances: [
        { thinker: "Stengers — In Catastrophic Times", note: "Stengers reads the intrusion of Gaia as a demand that we abandon the fantasy of a rational, technical mastery capable of 'solving' the ecological crisis from outside, since Gaia is precisely what shows that there is no outside position left to occupy." },
        { thinker: "Latour — Facing Gaia", note: "Latour's later work develops a parallel argument: Gaia forces a shift from the modern idea of Nature as passive backdrop to a recognition of a much more reactive, entangled, and demanding set of geo-forces that must now be politically composed with." },
      ],
      x: 400, y: 130, color: "#0284c7", status: "consolidated",
    },

    {
      id: "intrusion",
      term: "Intrusion",
      definition: "The mode in which Gaia makes itself felt: not a gradual, negotiable adjustment but an interruption that was not invited and cannot simply be assimilated to existing categories of crisis management. To speak of intrusion rather than, say, 'environmental change' is to insist on the shock, the lack of consent, and the refusal of the intruding force to wait for humans to be ready — an insistence that runs against the more managerial vocabularies of adaptation and resilience.",
      thinkers: ["Isabelle Stengers"],
      tags: ["ecology", "planetary", "event", "shock"],
      connections: [
        { to: "gaia", label: "source" },
        { to: "common-world", label: "fractures" },
      ],
      nuances: [
        { thinker: "Stengers on the refusal of 'resilience' talk", note: "Stengers is wary of resilience rhetoric precisely because it can too easily convert an intrusion demanding genuine political transformation back into a technical problem of adjustment, managed by the same actors and assumptions that produced the crisis." },
      ],
      x: 400, y: 40, color: "#0284c7", status: "provisional",
    },

    // ── Common world & divergence ────────────────────────────────────────────

    {
      id: "common-world",
      term: "Common World",
      definition: "Not a world already shared and simply waiting to be recognized, but a possible achievement — something that would have to be composed, laboriously and without guarantee, out of the actually divergent worlds that different practices, peoples, and beings inhabit. Stengers refuses the idea that a common world is a starting point (the 'one nature' onto which different 'cultures' project their views); it is, if it exists at all, an outcome, and one that cosmopolitics treats as radically uncertain.",
      thinkers: ["Isabelle Stengers", "Bruno Latour", "Eduardo Viveiros de Castro"],
      tags: ["ontology", "politics", "composition", "pluralism"],
      connections: [
        { to: "divergence", label: "composed of" },
        { to: "pluriverse", label: "resonant with" },
        { to: "cosmopolitical-proposal", label: "horizon of" },
      ],
      nuances: [
        { thinker: "Latour — 'composition' over 'critique'", note: "Latour's call to replace the critical unmasking of false beliefs with the slower, more constructive labor of composing a common world in the plural closely parallels Stengers' insistence that cosmopolitics builds rather than adjudicates from on high." },
        { thinker: "Against multiculturalism's 'one nature, many cultures'", note: "Both Stengers and Latour target the common liberal assumption that there is a single physical nature about which different cultures merely hold different beliefs — a picture that quietly reserves the authority to say what is really the case for Western science alone." },
      ],
      x: 400, y: 460, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "divergence",
      term: "Divergence",
      definition: "The condition cosmopolitics starts from rather than tries to overcome: practices, peoples, and forms of knowledge that do not converge on a shared measure and cannot be ranked on a single scale of more-or-less rational, more-or-less developed, more-or-less real. To take divergence seriously is to resist the reflex — common to both colonial anthropology and much of technoscience — of treating non-Western or non-scientific practices as earlier, mistaken, or merely symbolic versions of what 'we' already properly understand.",
      thinkers: ["Isabelle Stengers", "Eduardo Viveiros de Castro"],
      tags: ["pluralism", "epistemology", "politics", "difference"],
      connections: [
        { to: "common-world", label: "constitutive of" },
        { to: "diplomacy", label: "subject of" },
      ],
      nuances: [
        { thinker: "Viveiros de Castro — perspectivism", note: "Amazonian perspectivism, in which different beings are held to inhabit genuinely different worlds rather than different views of one world, gives divergence an ontological rather than merely epistemic weight — a resource Stengers draws on to unsettle the assumption of one shared reality underneath cultural variation." },
      ],
      x: 300, y: 540, color: "#38bdf8", status: "provisional",
    },

    // ── Science, capture & method ────────────────────────────────────────────

    {
      id: "neutralization",
      term: "Neutralization",
      definition: "The operation by which a genuinely political and contested stake — who gets to decide, whose interests count, what counts as evidence — is converted into a technical question with a single correct answer, to be settled by experts rather than argued out politically. Stengers treats neutralization as one of technoscience's most consequential effects: it does not lie about the world, but it quietly forecloses the question of who has standing to speak about it.",
      thinkers: ["Isabelle Stengers"],
      tags: ["technoscience", "politics", "critique", "expertise"],
      connections: [
        { to: "techno-science", label: "performed by" },
        { to: "diplomacy", label: "opposed by" },
      ],
      nuances: [
        { thinker: "Stengers on 'black-boxing' stakes", note: "Neutralization works by black-boxing: once a controversy is redescribed as a settled technical matter, reopening it looks irrational rather than politically necessary — which is precisely the trick cosmopolitics tries to expose and resist." },
      ],
      x: 550, y: 480, color: "#0284c7", status: "provisional",
    },

    {
      id: "speculative-pragmatism",
      term: "Speculative Pragmatism",
      definition: "The methodological inheritance, from Whitehead and William James, that underwrites Stengers' whole approach: philosophy not as the pursuit of final, certain foundations but as speculative construction, tested by what it makes possible rather than by correspondence to a pre-given truth. Speculative pragmatism treats concepts as tools that reshape what can be thought and felt, which is why Stengers so often frames her own contributions, cosmopolitics included, as proposals rather than doctrines.",
      thinkers: ["Isabelle Stengers", "Alfred North Whitehead", "William James"],
      tags: ["method", "pragmatism", "philosophy", "speculation"],
      connections: [
        { to: "cosmopolitics-node", label: "methodological root of" },
        { to: "the-idiot", label: "kindred figure to" },
      ],
      nuances: [
        { thinker: "Whitehead — philosophy as imaginative generalization", note: "Whitehead described philosophical construction as a matter of imaginative generalization tested against experience, never closed off by claims to certainty — a stance Stengers imports wholesale into her political thought." },
      ],
      x: 180, y: 300, color: "#38bdf8", status: "consolidated",
    },

    {
      id: "reciprocal-capture",
      term: "Reciprocal Capture (Capitalist Sorcery)",
      definition: "A concept developed with Philippe Pignarre to describe how capitalism and modern techno-science have become mutually entangled without either simply controlling the other: each captures and is captured by the other's logics and requirements, producing a system that behaves, in Stengers and Pignarre's deliberately provocative vocabulary, like a form of sorcery — a captivation that disarms critical thought rather than merely deceiving it. Breaking this capture, on their account, cannot be done by argument alone; it requires something more like counter-sorcery, practices that re-enchant the possibility of thinking and acting otherwise.",
      thinkers: ["Isabelle Stengers", "Philippe Pignarre"],
      tags: ["capitalism", "technoscience", "critique", "sorcery"],
      connections: [
        { to: "techno-science", label: "names dynamic within" },
        { to: "neutralization", label: "intensifies" },
      ],
      nuances: [
        { thinker: "Stengers & Pignarre — Capitalist Sorcery", note: "The 'sorcery' vocabulary is chosen deliberately against rationalist critique: capitalism's hold, they argue, works less through convincing arguments than through capturing attention and desire, which is why it needs to be countered by practices that work on the same affective register, not only by better facts." },
      ],
      x: 620, y: 200, color: "#0284c7", status: "provisional",
    },

    {
      id: "techno-science",
      term: "Techno-science vs. Science",
      definition: "Stengers' distinction between science as a demanding practice with its own internal requirements — one capable of being surprised by its object — and techno-science as the fusion of scientific authority with industrial, military, and economic power, in which the requirement of being answerable to the phenomena is increasingly subordinated to the requirement of producing usable, profitable results. The distinction matters politically because critiques of 'science' that fail to make it often end up either naively defending techno-science's authority or cynically dismissing science's genuine achievements.",
      thinkers: ["Isabelle Stengers"],
      tags: ["technoscience", "epistemology", "critique", "capitalism"],
      connections: [
        { to: "neutralization", label: "produces" },
        { to: "reciprocal-capture", label: "caught in" },
        { to: "requirement", label: "evades" },
      ],
      nuances: [
        { thinker: "Stengers — Cosmopolitics volumes on the 'hard' and 'soft' sciences", note: "Much of Stengers' multi-volume Cosmopolitics project examines how different sciences have historically related to their own requirements — physics' relative insulation, psychology's constant contestation — as a way of showing that 'science' is never one thing with one relation to power." },
      ],
      x: 500, y: 60, color: "#0284c7", status: "consolidated",
    },

    // ── Pluriverse ───────────────────────────────────────────────────────────

    {
      id: "pluriverse",
      term: "Pluriverse",
      definition: "A term that travels alongside cosmopolitics from decolonial and Indigenous-oriented thought — a world understood not as a single universe awaiting fuller description but as a plurality of worlds, each with its own practices, ontologies, and requirements, none of which is simply a partial or mistaken version of the others. Where cosmopolitics supplies the diplomatic method for negotiating between divergent worlds, the pluriverse names the ontological claim that makes such diplomacy necessary rather than optional: there really are, and should be room for, more worlds than one.",
      thinkers: ["Arturo Escobar", "Marisol de la Cadena", "Isabelle Stengers"],
      tags: ["decolonial", "ontology", "pluralism", "worlding"],
      connections: [
        { to: "common-world", label: "kindred concept to" },
        { to: "divergence", label: "presupposes" },
      ],
      nuances: [
        { thinker: "Escobar — Designs for the Pluriverse", note: "Escobar extends the pluriverse into a design and development critique: the Zapatista phrase 'a world where many worlds fit' becomes, for him, a concrete alternative to development models that assume a single trajectory of progress every place must eventually follow." },
        { thinker: "de la Cadena — earth-beings", note: "De la Cadena's ethnography of Andean earth-beings (like mountains that are also political actors) gives the pluriverse empirical weight: these are not beliefs about a shared physical mountain but entities that inhabit and partly constitute a genuinely different world, requiring exactly the kind of diplomacy Stengers calls for." },
      ],
      x: 200, y: 460, color: "#0ea5e9", status: "provisional",
    },

  ],
};
